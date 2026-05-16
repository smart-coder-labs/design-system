import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import prompts from "prompts";
import { getAvailableComponents, getComponentFiles, getRegistryVersion } from "../utils/registry";
import { loadConfig, saveConfig, recordInstall, detectInstalledComponents, stripUseClient } from "../utils/config";

export const updateComponents = async () => {
  const config = await loadConfig();
  const resolvedComponentsDir = path.resolve(process.cwd(), config.componentsDir);

  // 1. Scan installed components (folders + flat files + config tracking)
  const spinner = ora("Scanning for installed components...").start();
  const availableComponents = await getAvailableComponents();
  const installedComponents = await detectInstalledComponents(
    resolvedComponentsDir,
    availableComponents,
    config
  );
  spinner.stop();

  if (installedComponents.length === 0) {
    console.log(chalk.yellow("No installed components found."));
    return;
  }

  console.log(chalk.blue(`\nFound ${installedComponents.length} installed components:\n`));

  // 2. Selection
  const response = await prompts({
    type: "select",
    name: "updateMode",
    message: "What would you like to do?",
    choices: [
      { title: "Update all components", value: "all" },
      { title: "Select specific components", value: "select" },
    ],
  });

  let componentsToUpdate: string[] = [];

  if (response.updateMode === "all") {
    componentsToUpdate = installedComponents;
    console.log(chalk.green(`\n✓ Selected all ${installedComponents.length} components`));
  } else {
    const selectResponse = await prompts({
      type: "multiselect",
      name: "items",
      message: "Which components would you like to update?",
      choices: installedComponents.map((c) => ({
        title: `${c}${config.components[c] ? chalk.gray(` (v${config.components[c].version})`) : ""}`,
        value: c,
      })),
      min: 1,
    });

    componentsToUpdate = selectResponse.items;

    if (!componentsToUpdate || componentsToUpdate.length === 0) {
      console.log(chalk.yellow("No components selected."));
      return;
    }

    console.log(chalk.green(`\n✓ Selected ${componentsToUpdate.length} components`));
  }

  // 3. Fetch and update
  const dsVersion = await getRegistryVersion();
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
        const content = config.rsc ? file.content : stripUseClient(file.content);
        await fs.writeFile(path.join(componentDir, file.name), content);
      }

      await recordInstall(config, component, dsVersion, "folder");
      updateSpinner.succeed(`Updated ${component}`);
      successCount++;
    } catch (error) {
      updateSpinner.warn(`Failed to update ${component}: ${error}`);
      failCount++;
    }
  }

  updateSpinner.stop();
  await saveConfig(config);

  // 4. Summary
  console.log(chalk.bold("\n=== Update Summary ==="));
  console.log(chalk.green(`✓ Successfully updated: ${successCount} components`));
  if (failCount > 0) {
    console.log(chalk.red(`✗ Failed to update: ${failCount} components`));
  }
  console.log(chalk.bold.green("\nDone!"));
};
