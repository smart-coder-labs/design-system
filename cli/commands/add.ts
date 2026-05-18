import prompts from "prompts";
import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import ora from "ora";
import { getAvailableComponents, getComponentFiles, getComponentMeta, getComponentDependencies } from "../utils/registry";
import { loadConfig, saveConfig, recordInstall, stripUseClient } from "../utils/config";
import { detectPackageManager, getMissingPackages, installPackages } from "../utils/deps";

export const add = async (components: string[]) => {
  const available = await getAvailableComponents();

  if (!components || components.length === 0) {
    const modeResponse = await prompts({
      type: "select",
      name: "mode",
      message: "What would you like to do?",
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
  const pm = detectPackageManager();

  // Collect all npm deps required by the selected components before installing
  const allNpmDeps = new Set<string>();
  for (const component of components) {
    const deps = await getComponentDependencies(component);
    for (const dep of deps) allNpmDeps.add(dep);
  }

  const missingDeps = getMissingPackages(Array.from(allNpmDeps));
  if (missingDeps.length > 0) {
    console.log(
      chalk.yellow(`\nThe following packages are required but not installed:\n`) +
      missingDeps.map((d) => chalk.cyan(`  • ${d}`)).join("\n")
    );
    const { install } = await prompts({
      type: "confirm",
      name: "install",
      message: `Install them now with ${chalk.bold(pm)}?`,
      initial: true,
    });

    if (install) {
      const depSpinner = ora(`Installing dependencies with ${pm}...`).start();
      try {
        installPackages(missingDeps, pm);
        depSpinner.succeed("Dependencies installed.");
      } catch {
        depSpinner.fail("Failed to install dependencies. Please install them manually and retry.");
        console.log(chalk.dim(`  ${pm} install ${missingDeps.join(" ")}`));
        return;
      }
    } else {
      console.log(chalk.yellow("\nSkipping dependency installation. Components may not work correctly."));
    }
  }

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
      const content = config.rsc ? file.content : stripUseClient(file.content);
      await fs.writeFile(path.join(componentDir, file.name), content);
    }

    const meta = await getComponentMeta(component);
    await recordInstall(config, component, meta?.version ?? "unknown", "folder", "install", meta?.status as any);
    spinner.succeed(`Installed ${component}`);
  }

  await saveConfig(config);
  spinner.stop();
  console.log(chalk.bold.green("\nDone!"));
};
