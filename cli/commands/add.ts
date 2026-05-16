import prompts from "prompts";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import ora from "ora";
import { getAvailableComponents, getComponentFiles, getRegistryVersion } from "../utils/registry";
import { loadConfig, saveConfig, recordInstall } from "../utils/config";

export const add = async (components: string[]) => {
  const available = await getAvailableComponents();

  if (!components || components.length === 0) {
    const modeResponse = await prompts({
      type: "select",
      name: "mode",
      message: "What would you like to add?",
      choices: [
        { title: "Add all components", value: "all" },
        { title: "Select specific components", value: "select" },
      ],
    });

    if (modeResponse.mode === "all") {
      components = available;
      console.log(chalk.green(`\n✓ Selected all ${available.length} components`));
    } else {
      const response = await prompts({
        type: "multiselect",
        name: "items",
        message: "Which components would you like to add?",
        choices: available.map((c) => ({ title: c, value: c })),
        min: 1,
      });
      components = response.items;
    }
  }

  if (!components || components.length === 0) {
    console.log(chalk.yellow("No components selected."));
    return;
  }

  const config = await loadConfig();
  const dsVersion = await getRegistryVersion();
  const spinner = ora("Installing components...").start();

  const queue = [...components];
  const processed = new Set<string>();

  while (queue.length > 0) {
    const component = queue.shift();
    if (!component || processed.has(component)) continue;

    processed.add(component);
    spinner.text = `Installing ${component}...`;

    const files = await getComponentFiles(component);

    if (!files) {
      spinner.warn(`Component '${component}' not found.`);
      continue;
    }

    // Detect local dependencies from main file
    const mainFile = files.find((f) => f.name === `${component}.tsx`);
    if (mainFile) {
      const localImportRegex = /from\s+['"]\.\.\/([A-Z][a-zA-Z0-9]*)['"]/g;
      let match;
      while ((match = localImportRegex.exec(mainFile.content)) !== null) {
        const dep = match[1];
        if (!processed.has(dep) && !queue.includes(dep)) {
          queue.push(dep);
          spinner.info(`Detected dependency: ${dep}`);
        }
      }
    }

    const componentDir = path.resolve(process.cwd(), config.componentsDir, component);
    await fs.ensureDir(componentDir);

    for (const file of files) {
      await fs.writeFile(path.join(componentDir, file.name), file.content);
    }

    await recordInstall(config, component, dsVersion, "folder");
    spinner.succeed(`Installed ${component}`);
  }

  await saveConfig(config);
  spinner.stop();
  console.log(chalk.bold.green("\nDone!"));
};
