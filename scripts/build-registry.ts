import fs from "fs-extra";
import path from "path";

const COMPONENTS_UI_DIR = path.join(process.cwd(), "components", "ui");
const OUTPUT_FILE = path.join(process.cwd(), "registry.json");
const PACKAGE_JSON = path.join(process.cwd(), "package.json");

const GITHUB_RAW_BASE =
  "https://raw.githubusercontent.com/smart-coder-labs/design-system/refs/heads/main/components/ui";

// Files that are source (not documentation) — README.md is excluded
const SOURCE_FILE_CANDIDATES = ["${Name}.tsx", "${Name}.types.ts", "${Name}.styles.ts", "index.ts"];

function getSourceFileCandidates(name: string): string[] {
  return [
    `${name}.tsx`,
    `${name}.types.ts`,
    `${name}.styles.ts`,
    "index.ts",
  ];
}

function detectDependencies(content: string): string[] {
  const dependencies: string[] = [];

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
    const candidates = getSourceFileCandidates(name);

    // Discover which source files actually exist
    const presentFiles: string[] = [];
    for (const candidate of candidates) {
      if (fs.existsSync(path.join(folderPath, candidate))) {
        presentFiles.push(candidate);
      }
    }

    if (presentFiles.length === 0) {
      console.warn(`  Skipping ${name}: no source files found`);
      continue;
    }

    // Detect dependencies from the main .tsx file
    const mainFile = path.join(folderPath, `${name}.tsx`);
    let dependencies: string[] = [];
    if (fs.existsSync(mainFile)) {
      const content = await fs.readFile(mainFile, "utf-8");
      dependencies = detectDependencies(content);
    }

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
