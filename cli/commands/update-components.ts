import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import prompts from "prompts";
import { getAvailableComponents, getComponentFiles } from "../utils/registry";

export const updateComponents = async () => {
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

  // 2. Check if components directory exists
  if (!fs.existsSync(resolvedComponentsDir)) {
    console.log(chalk.yellow(`Components directory not found at ${config.componentsDir}`));
    return;
  }

  // 3. Get installed components
  const spinner = ora("Scanning for installed components...").start();
  const entries = await fs.readdir(resolvedComponentsDir, { withFileTypes: true });
  const availableComponents = await getAvailableComponents();

  const installedComponents = entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((name) => availableComponents.includes(name))
    .sort();

  spinner.stop();

  if (installedComponents.length === 0) {
    console.log(chalk.yellow("No installed components found."));
    return;
  }

  console.log(
    chalk.blue(`\nFound ${installedComponents.length} installed components:\n`)
  );

  // 4. Present selection options
  const response = await prompts([
    {
      type: "select",
      name: "updateMode",
      message: "What would you like to do?",
      choices: [
        { title: "Update all components", value: "all" },
        { title: "Select specific components", value: "select" },
      ],
    },
  ]);

  let componentsToUpdate: string[] = [];

  if (response.updateMode === "all") {
    componentsToUpdate = installedComponents;
    console.log(
      chalk.green(`\n✓ Selected all ${installedComponents.length} components`)
    );
  } else {
    // Let user select specific components
    const selectResponse = await prompts({
      type: "multiselect",
      name: "items",
      message: "Which components would you like to update?",
      choices: installedComponents.map((c) => ({ title: c, value: c })),
      min: 1,
    });

    componentsToUpdate = selectResponse.items;

    if (!componentsToUpdate || componentsToUpdate.length === 0) {
      console.log(chalk.yellow("No components selected."));
      return;
    }

    console.log(chalk.green(`\n✓ Selected ${componentsToUpdate.length} components`));
  }

  // 5. Fetch and update components
  const updateSpinner = ora("Updating components...").start();
  let successCount = 0;
  let failCount = 0;

  for (const component of componentsToUpdate) {
    updateSpinner.text = `Updating ${component}...`;

    try {
      const files = await getComponentFiles(component);

      if (!files) {
        updateSpinner.warn(`Component '${component}' not found in registry.`);
        failCount++;
        continue;
      }

      const componentDir = path.resolve(resolvedComponentsDir, component);
      await fs.ensureDir(componentDir);

      for (const file of files) {
        await fs.writeFile(path.join(componentDir, file.name), file.content);
      }
      updateSpinner.succeed(`Updated ${component}`);
      successCount++;
    } catch (error) {
      updateSpinner.warn(`Failed to update ${component}: ${error}`);
      failCount++;
    }
  }

  updateSpinner.stop();

  // 6. Summary
  console.log(chalk.bold("\n=== Update Summary ==="));
  console.log(chalk.green(`✓ Successfully updated: ${successCount} components`));
  if (failCount > 0) {
    console.log(chalk.red(`✗ Failed to update: ${failCount} components`));
  }
  console.log(chalk.bold.green("\nDone!"));
};
