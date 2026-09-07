import fs from "fs-extra";
import path from "path";

const COMPONENTS_UI_DIR = path.join(process.cwd(), "components", "ui");
const OUTPUT_FILE = path.join(process.cwd(), "registry.json");
const PACKAGE_JSON = path.join(process.cwd(), "package.json");

const GITHUB_RAW_BASE =
  "https://raw.githubusercontent.com/smart-coder-labs/design-system/refs/heads/main/components/ui";

// Files that are source (not documentation): every `${Name}.ts(x)` /
// `${Name}.*.ts(x)` file in the component folder plus `index.ts`.
// README.md / CHANGELOG.md, stories, tests and spec files are excluded.
const EXCLUDED_FILE_PATTERNS = [
  /\.stories\.[jt]sx?$/,
  /\.test\./,
  /\.spec\./,
  /\.d\.ts$/,
];

// Emitted first, in this order, when present — keeps the historical ordering.
function sourceFileRank(name: string, fileName: string): number {
  const preferred = [`${name}.tsx`, `${name}.ts`, `${name}.types.ts`, `${name}.styles.ts`];
  const index = preferred.indexOf(fileName);
  if (index !== -1) return index;
  if (fileName === "index.ts") return preferred.length + 1; // always last
  return preferred.length; // other `${Name}.*.ts(x)` files, alphabetical
}

function getSourceFiles(folderPath: string, name: string): string[] {
  const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const componentFilePattern = new RegExp(`^${escapedName}(\\..+)?\\.tsx?$`);

  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => {
      if (EXCLUDED_FILE_PATTERNS.some((pattern) => pattern.test(fileName))) return false;
      return fileName === "index.ts" || componentFilePattern.test(fileName);
    })
    .sort((a, b) => {
      const rankDiff = sourceFileRank(name, a) - sourceFileRank(name, b);
      return rankDiff !== 0 ? rankDiff : a.localeCompare(b);
    });
}

function detectDependencies(contents: string[]): string[] {
  const dependencies: string[] = [];
  const content = contents.join("\n");

  if (content.includes("framer-motion")) dependencies.push("framer-motion");
  if (content.includes("lucide-react")) dependencies.push("lucide-react");
  if (content.includes("clsx")) dependencies.push("clsx");
  if (content.includes("tailwind-merge")) dependencies.push("tailwind-merge");
  if (content.includes("class-variance-authority")) dependencies.push("class-variance-authority");

  const radixMatch = content.match(/@radix-ui\/react-[a-z-]+/g);
  if (radixMatch) {
    for (const dep of radixMatch) {
      if (!dependencies.includes(dep)) dependencies.push(dep);
    }
  }

  return dependencies;
}

async function buildRegistry() {
  console.log("Building registry...");

  if (!fs.existsSync(COMPONENTS_UI_DIR)) {
    console.error(`Components directory not found: ${COMPONENTS_UI_DIR}`);
    process.exit(1);
  }

  // Read package version
  const pkg = await fs.readJSON(PACKAGE_JSON);
  const packageVersion: string = pkg.version ?? "1.0.0";

  // Read existing registry for merging
  let existingRegistry: Record<string, any> = {};
  if (fs.existsSync(OUTPUT_FILE)) {
    try {
      existingRegistry = await fs.readJSON(OUTPUT_FILE);
    } catch {
      console.warn("Could not read existing registry.json — will build from scratch.");
    }
  }

  const entries = await fs.readdir(COMPONENTS_UI_DIR, { withFileTypes: true });
  const EXCLUDED_DIRS = new Set(["__tests__", "__mocks__", "__fixtures__"]);
  const componentFolders = entries
    .filter((e) => e.isDirectory() && !EXCLUDED_DIRS.has(e.name) && !e.name.startsWith("_") && !e.name.startsWith("."))
    .map((e) => e.name);

  const registry: Record<string, any> = {
    _version: packageVersion,
  };

  for (const name of componentFolders) {
    const folderPath = path.join(COMPONENTS_UI_DIR, name);

    // Discover every source file that actually exists in the component folder
    const presentFiles = getSourceFiles(folderPath, name);

    if (presentFiles.length === 0) {
      console.warn(`  Skipping ${name}: no source files found`);
      continue;
    }

    // Detect dependencies across every source file of the component
    const contents = await Promise.all(
      presentFiles.map((fileName) => fs.readFile(path.join(folderPath, fileName), "utf-8"))
    );
    const dependencies: string[] = detectDependencies(contents);

    // Merge with existing entry — preserve versioning fields if they exist
    const existing = existingRegistry[name] as Record<string, any> | undefined;

    registry[name] = {
      name,
      dependencies,
      type: "components:ui",
      files: presentFiles.map((fileName) => ({
        name: fileName,
        url: `${GITHUB_RAW_BASE}/${name}/${fileName}`,
      })),
      version: existing?.version ?? "1.0.0",
      status: existing?.status ?? "stable",
      added: existing?.added ?? "1.0.0",
      breakingChanges: existing?.breakingChanges ?? [],
    };
  }

  await fs.writeJSON(OUTPUT_FILE, registry, { spaces: 2 });
  console.log(
    `Registry built with ${componentFolders.length} components — version ${packageVersion} — at ${OUTPUT_FILE}`
  );
}

buildRegistry().catch(console.error);
