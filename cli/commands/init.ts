import { Command } from "commander";
import prompts from "prompts";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import ora from "ora";
import { getPackageRoot } from "../utils/registry";

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
  // Many components rely on 'cn'. We should probably include a helper or ask where utils are.
  // For simplicity, we'll try to find or create a lib/utils.ts
  
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

  if (response.installDeps) {
      spin.start("Installing dependencies...");
      const savedPkgRoot = getPackageRoot();
      
      // We are just displaying instructions for now or running npm install
      // Actually running npm install might be risky if we don't know the package manager.
      // But we can try to detect or just default to npm.
      
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
  console.log(`You can now run ${chalk.cyan("npx design-system add [component]")} to add components.`);
};
