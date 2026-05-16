import prompts from "prompts";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import ora from "ora";
import { getGlobalCss } from "../utils/registry";
import { detectFramework, type Framework } from "../utils/framework";

const FRAMEWORK_CHOICES = [
  { title: "Next.js (App Router)", value: "next-app" },
  { title: "Next.js (Pages Router)", value: "next-pages" },
  { title: "Vite", value: "vite" },
  { title: "Astro", value: "astro" },
  { title: "Remix / React Router", value: "remix" },
  { title: "Other", value: "unknown" },
];

function resolveRsc(value: string): { framework: Framework; rsc: boolean } {
  if (value === "next-app") return { framework: "next", rsc: true };
  if (value === "next-pages") return { framework: "next", rsc: false };
  return { framework: value as Framework, rsc: false };
}

export const init = async () => {
  console.log(chalk.bold.green("\n🍏 Apple Design System — Initialization\n"));

  // ── 1. Auto-detect framework ──────────────────────────────────────────────
  const detected = detectFramework(process.cwd());

  if (detected.framework !== "unknown") {
    const rscNote = detected.rsc ? chalk.gray(" (App Router — RSC enabled)") : "";
    console.log(
      chalk.cyan(`Detected framework: `) +
        chalk.bold(detected.label) +
        rscNote
    );
  } else {
    console.log(chalk.yellow("Could not auto-detect framework."));
  }

  // ── 2. Confirm or override ────────────────────────────────────────────────
  let framework = detected.framework;
  let rsc = detected.rsc;

  if (detected.framework !== "unknown") {
    const { confirm } = await prompts({
      type: "confirm",
      name: "confirm",
      message: `Is this correct?`,
      initial: true,
    });

    if (!confirm) {
      const { choice } = await prompts({
        type: "select",
        name: "choice",
        message: "Select your framework:",
        choices: FRAMEWORK_CHOICES,
      });
      const resolved = resolveRsc(choice);
      framework = resolved.framework;
      rsc = resolved.rsc;
    }
  } else {
    const { choice } = await prompts({
      type: "select",
      name: "choice",
      message: "Select your framework:",
      choices: FRAMEWORK_CHOICES,
    });
    const resolved = resolveRsc(choice);
    framework = resolved.framework;
    rsc = resolved.rsc;
  }

  // ── 3. Rest of project config ─────────────────────────────────────────────
  const response = await prompts([
    {
      type: "text",
      name: "projectRoot",
      message: "Project root directory?",
      initial: "./src",
    },
    {
      type: "text",
      name: "componentsDir",
      message: "Where to install components?",
      initial: (prev: string) => `${prev}/components/ui`,
    },
    {
      type: "text",
      name: "globalCss",
      message: "Global CSS file path?",
      initial: (_prev: string, values: { projectRoot: string }) =>
        `${values.projectRoot}/index.css`,
    },
    {
      type: "confirm",
      name: "installDeps",
      message: "Install required dependencies now?",
      initial: true,
    },
  ]);

  const spin = ora("Configuring project...").start();

  // ── 4. Write design-system.json ───────────────────────────────────────────
  const config = {
    framework,
    rsc,
    componentsDir: response.componentsDir,
    globalCss: response.globalCss,
    components: {},
  };

  await fs.writeJSON("design-system.json", config, { spaces: 2 });
  spin.succeed("Created design-system.json");

  // ── 5. Ensure directories ─────────────────────────────────────────────────
  const resolvedComponentsDir = path.resolve(process.cwd(), response.componentsDir);
  await fs.ensureDir(resolvedComponentsDir);

  const utilsDir = path.resolve(process.cwd(), response.projectRoot, "lib");
  const utilsPath = path.resolve(utilsDir, "utils.ts");

  if (!fs.existsSync(utilsPath)) {
    await fs.ensureDir(utilsDir);
    await fs.writeFile(
      utilsPath,
      `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`
    );
    console.log(chalk.green(`Created ${path.relative(process.cwd(), utilsPath)}`));
  }

  // ── 6. Fetch and write global CSS ─────────────────────────────────────────
  spin.text = "Fetching global styles...";
  const cssContent = await getGlobalCss();

  if (cssContent) {
    const stylesDir = path.resolve(process.cwd(), "styles");
    await fs.ensureDir(stylesDir);
    const cssPath = path.resolve(stylesDir, "apple-ds.css");
    await fs.writeFile(cssPath, cssContent);
    console.log(chalk.green(`Created ${path.relative(process.cwd(), cssPath)}`));

    if (response.globalCss) {
      const globalCssPath = path.resolve(process.cwd(), response.globalCss);
      if (fs.existsSync(globalCssPath)) {
        let existingCss = await fs.readFile(globalCssPath, "utf-8");
        const globalCssDir = path.dirname(globalCssPath);
        const relativePath = path.relative(globalCssDir, cssPath);
        const importPath = relativePath.startsWith(".") ? relativePath : `./${relativePath}`;
        const importStatement = `@import '${importPath}';`;

        if (!existingCss.includes("apple-ds.css")) {
          await fs.writeFile(globalCssPath, `${importStatement}\n${existingCss}`);
          console.log(chalk.green(`Updated ${response.globalCss} with design system styles.`));
        }
      } else {
        console.log(chalk.yellow(`CSS file not found at ${response.globalCss}. Skipping import.`));
      }
    }
  } else {
    spin.warn("Failed to fetch global styles. Install styles manually.");
  }

  // ── 7. Install deps ───────────────────────────────────────────────────────
  if (response.installDeps) {
    spin.start("Installing dependencies...");
    try {
      const { execSync } = require("child_process");
      execSync("npm install clsx tailwind-merge cva framer-motion lucide-react", {
        stdio: "inherit",
      });
      spin.succeed("Dependencies installed.");
    } catch {
      spin.fail("Failed to install dependencies. Run manually:");
      console.log(chalk.cyan("npm install clsx tailwind-merge cva framer-motion lucide-react"));
    }
  }

  // ── 8. Framework-specific hints ───────────────────────────────────────────
  if (framework === "astro") {
    console.log(
      chalk.yellow(
        "\n⚠ Astro: Components use React — make sure to add the React integration\n" +
          "  and use client:* directives when mounting them in .astro files."
      )
    );
  }

  if (!rsc && framework !== "astro") {
    console.log(
      chalk.gray(
        "\nℹ 'use client' directives are stripped from components (not needed outside Next.js App Router)."
      )
    );
  }

  console.log(chalk.bold.green("\n✓ Project initialized."));
  console.log(
    `Run ${chalk.cyan("npx apple-design-system add")} to install components.`
  );
};
