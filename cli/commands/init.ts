import { Command } from "commander";
import prompts from "prompts";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import ora from "ora";
import { getAvailableComponents, getComponentSource, getGlobalCss } from "../utils/registry";


export const init = async () => {
  console.log(chalk.bold.green("🍏 Apple Design System Initialization"));
  console.log("This utility will help you configure your project.");

  const response = await prompts([
    {
      type: "text",
      name: "componentsDir",
      message: "Where would you like to install components?",
      initial: "./components/ui",
    },
    {
      type: "text",
      name: "globalCss",
      message: "Where is your global CSS file?",
      initial: "./app/globals.css",
    },
    {
      type: "confirm",
      name: "installDeps",
      message: "Would you like to install required dependencies now?",
      initial: true,
    },
  ]);

  const spin = ora("Configuring project...").start();

  // Create config file
  const config = {
    componentsDir: response.componentsDir,
    globalCss: response.globalCss,
  };

  await fs.writeJSON("design-system.json", config, { spaces: 2 });
  spin.succeed("Configuration file design-system.json created.");

  // Check/Create components directory
  const resolvedComponentsDir = path.resolve(process.cwd(), response.componentsDir);
  await fs.ensureDir(resolvedComponentsDir);

  // Also create a lib/utils.ts for cn helper if it doesn't exist
  const utilsPath = path.resolve(process.cwd(), "lib/utils.ts");
  if (!fs.existsSync(utilsPath)) {
      await fs.ensureDir(path.resolve(process.cwd(), "lib"));
      await fs.writeFile(utilsPath, `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`);
      console.log(chalk.green("Created lib/utils.ts for 'cn' utility."));
  }

  // Fetch and create styles directory and write apple-ds.css
  spin.text = "Fetching global styles...";
  const cssContent = await getGlobalCss();
  
  if (cssContent) {
      const stylesDir = path.resolve(process.cwd(), "styles");
      await fs.ensureDir(stylesDir);
      const cssPath = path.resolve(stylesDir, "apple-ds.css");
      await fs.writeFile(cssPath, cssContent);
      console.log(chalk.green(`Created ${path.relative(process.cwd(), cssPath)}`));

      // Inject CSS import into global CSS if provided
      if (response.globalCss) {
          const globalCssPath = path.resolve(process.cwd(), response.globalCss);
          if (fs.existsSync(globalCssPath)) {
              let existingCss = await fs.readFile(globalCssPath, "utf-8");
              // Calculate relative path from global CSS to apple-ds.css
              const globalCssDir = path.dirname(globalCssPath);
              const relativePath = path.relative(globalCssDir, cssPath);
              // Ensure it starts with ./ or ../
              const importPath = relativePath.startsWith(".") ? relativePath : `./${relativePath}`;
              const importStatement = `@import '${importPath}';`;
              
              if (!existingCss.includes("apple-ds.css")) {
                  // Prepend to file
                  await fs.writeFile(globalCssPath, `${importStatement}\n${existingCss}`);
                  console.log(chalk.green(`Updated ${response.globalCss} with design system styles.`));
              }
          } else {
              console.log(chalk.yellow(`Global CSS file not found at ${response.globalCss}. Skipping style import.`));
          }
      }
  } else {
      spin.warn("Failed to fetch global styles. Please install styles manually.");
  }

  if (response.installDeps) {
      spin.start("Installing dependencies...");
      try {
        const { execSync } = require('child_process');
        execSync('npm install clsx tailwind-merge cva framer-motion lucide-react', { stdio: 'inherit' });
        spin.succeed("Dependencies installed.");
      } catch (e) {
        spin.fail("Failed to install dependencies. Please run manually:");
        console.log(chalk.cyan("npm install clsx tailwind-merge cva framer-motion lucide-react"));
      }
  }

  console.log(chalk.bold.green("\nSuccess! Project initialized."));
  console.log(`You can now run ${chalk.cyan("npx apple-design-system add [component]")} to add components.`);
};
