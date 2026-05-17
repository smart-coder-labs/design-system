import path from "path";
import fs from "fs-extra";
import chalk from "chalk";
import ora from "ora";
import { getComponentFilesAtVersion } from "../utils/registry";
import { loadConfig, saveConfig, recordInstall, stripUseClient } from "../utils/config";

export const rollback = async (component: string, version: string) => {
  const config = await loadConfig();
  const spinner = ora(`Fetching component ${component}@${version}...`).start();

  const files = await getComponentFilesAtVersion(component, version);

  if (!files) {
    spinner.fail(
      `Version ${version} of ${component} not found. Make sure that version exists as a git tag (v${version}).`
    );
    return;
  }

  const componentDir = path.resolve(process.cwd(), config.componentsDir, component);
  await fs.ensureDir(componentDir);

  for (const file of files) {
    const content = config.rsc ? file.content : stripUseClient(file.content);
    await fs.writeFile(path.join(componentDir, file.name), content);
  }

  await recordInstall(config, component, version, "folder", "rollback");
  await saveConfig(config);

  spinner.succeed(
    chalk.green(`Rolled back ${component} to v${version}`)
  );
};
