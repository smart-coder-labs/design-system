import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import { getAvailableComponents } from "../utils/registry";
import { add } from "./add";

export const update = async (components: string[]) => {
  // 1. Load config
  let config = { componentsDir: "./components/ui" };
  if (fs.existsSync("design-system.json")) {
      try {
          config = await fs.readJSON("design-system.json");
      } catch (e) {
          console.warn("Could not read design-system.json, using defaults.");
      }
  } else {
      console.warn("design-system.json not found. Using default ./components/ui");
  }

  const resolvedComponentsDir = path.resolve(process.cwd(), config.componentsDir);

  // 2. Identify installed components if none provided
  if (!components || components.length === 0) {
      const spinner = ora("Scanning for installed components...").start();
      
      if (!fs.existsSync(resolvedComponentsDir)) {
          spinner.fail(`Components directory not found at ${config.componentsDir}`);
          return;
      }

      const files = await fs.readdir(resolvedComponentsDir);
      const availableComponents = await getAvailableComponents();
      
      // Filter files that match registry components
      const installedComponents = files
          .filter(file => file.endsWith(".tsx") || file.endsWith(".ts"))
          .map(file => path.basename(file, path.extname(file)))
          .filter(name => availableComponents.includes(name));

      spinner.stop();

      if (installedComponents.length === 0) {
          console.log(chalk.yellow("No installed components found to update."));
          return;
      }

      console.log(chalk.blue(`Found ${installedComponents.length} components to update: ${installedComponents.join(", ")}`));
      components = installedComponents;
  }

  // 3. Use add command to re-install/update them
  // The add command handles fetching, dependency resolution, and overwriting files.
  await add(components);
};
