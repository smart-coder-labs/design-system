import { Command } from "commander";
import prompts from "prompts";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import ora from "ora";
import { getAvailableComponents, getComponentSource } from "../utils/registry";

export const add = async (components: string[]) => {
  if (!components || components.length === 0) {
    // If no components specified, list available ones
    const available = await getAvailableComponents();
    const response = await prompts({
      type: "multiselect",
      name: "items",
      message: "Which components would you like to add?",
      choices: available.map(c => ({ title: c, value: c })),
      min: 1
    });
    components = response.items;
  }

  if (!components || components.length === 0) {
    console.log(chalk.yellow("No components selected."));
    return;
  }

  // Load config
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

  const spinner = ora("Installing components...").start();

  const queue = [...components];
  const processed = new Set<string>();

  while (queue.length > 0) {
    const component = queue.shift();
    if (!component || processed.has(component)) continue;
    
    processed.add(component);
    spinner.text = `Installing ${component}...`;

    const source = await getComponentSource(component);
    
    if (!source) {
      spinner.warn(`Component '${component}' not found.`);
      continue;
    }

    // Parse for local dependencies (e.g., import { Button } from "./Button")
    // Regex looks for imports starting with ./ followed by a capitalized word (Component)
    const localImportRegex = /from\s+['"]\.\/([A-Z][a-zA-Z0-9]*)['"]/g;
    let match;
    while ((match = localImportRegex.exec(source)) !== null) {
        const dependentComponent = match[1];
        if (!processed.has(dependentComponent) && !queue.includes(dependentComponent)) {
            queue.push(dependentComponent);
            spinner.info(`Detected dependency: ${dependentComponent}`);
        }
    }

    const destPath = path.resolve(process.cwd(), config.componentsDir, `${component}.tsx`);
    await fs.ensureDir(path.dirname(destPath));
    
    await fs.writeFile(destPath, source);
    spinner.succeed(`Installed ${component}`);
  }

  spinner.stop();
  console.log(chalk.bold.green("\nDone!"));
};
