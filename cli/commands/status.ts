import chalk from "chalk";
import { loadConfig } from "../utils/config";
import { getComponentMeta, getRegistryVersion } from "../utils/registry";

export const status = async (component?: string) => {
  const config = await loadConfig();
  const tracked = config.components;

  if (Object.keys(tracked).length === 0) {
    console.log(chalk.yellow("No components tracked in design-system.json."));
    return;
  }

  if (component) {
    // Single component detail view
    const record = tracked[component];
    if (!record) {
      console.log(chalk.red(`Component '${component}' is not tracked in design-system.json.`));
      return;
    }

    const meta = await getComponentMeta(component);

    console.log();
    console.log(chalk.bold(`${component}`));
    console.log(`  Installed version : ${chalk.cyan(record.version)}`);
    console.log(`  Registry version  : ${meta ? chalk.cyan(meta.version) : chalk.gray("unknown")}`);
    console.log(`  Status            : ${formatStatus(record.status)}`);
    console.log(`  Type              : ${record.type}`);
    console.log(`  Installed at      : ${record.installedAt}`);
    console.log(`  Last updated      : ${record.updatedAt}`);

    if (meta?.breakingChanges && meta.breakingChanges.length > 0) {
      console.log(`  Breaking changes  :`);
      for (const bc of meta.breakingChanges) {
        console.log(`    - ${chalk.yellow(bc)}`);
      }
    }

    if (record.history && record.history.length > 0) {
      console.log(`  History:`);
      for (const entry of record.history) {
        const actionColor =
          entry.action === "rollback"
            ? chalk.yellow
            : entry.action === "install"
            ? chalk.green
            : chalk.blue;
        console.log(`    ${actionColor(entry.action.padEnd(8))}  v${entry.version}  ${chalk.gray(entry.date)}`);
      }
    }
    console.log();
  } else {
    // Table view for all tracked components
    const registryVersion = await getRegistryVersion();

    // Fetch registry meta for all components at once
    const metaMap = new Map<string, Awaited<ReturnType<typeof getComponentMeta>>>();
    await Promise.all(
      Object.keys(tracked).map(async (name) => {
        const meta = await getComponentMeta(name);
        metaMap.set(name, meta);
      })
    );

    console.log();
    console.log(chalk.bold(`Registry version: ${chalk.cyan(registryVersion)}`));
    console.log();

    // Header
    const nameW = 36;
    const verW = 12;
    const latestW = 12;
    const statusW = 14;

    const header =
      chalk.bold("Component".padEnd(nameW)) +
      chalk.bold("Installed".padEnd(verW)) +
      chalk.bold("Latest".padEnd(latestW)) +
      chalk.bold("Status".padEnd(statusW)) +
      chalk.bold("Outdated");

    console.log(header);
    console.log("─".repeat(nameW + verW + latestW + statusW + 8));

    for (const [name, record] of Object.entries(tracked)) {
      const meta = metaMap.get(name);
      const registryVer = meta?.version ?? "unknown";
      const isOutdated = registryVer !== "unknown" && record.version !== registryVer;

      const outdatedLabel = isOutdated ? chalk.yellow("yes") : chalk.green("no");
      const nameLabel = isOutdated ? chalk.yellow(name.padEnd(nameW)) : name.padEnd(nameW);

      const row =
        nameLabel +
        chalk.cyan(record.version.padEnd(verW)) +
        chalk.cyan(registryVer.padEnd(latestW)) +
        formatStatus(record.status).padEnd(statusW + 10) + // +10 for chalk escape codes
        outdatedLabel;

      console.log(row);
    }

    console.log();
  }
};

function formatStatus(status: string): string {
  switch (status) {
    case "stable":
      return chalk.green(status);
    case "beta":
      return chalk.yellow(status);
    case "experimental":
      return chalk.red(status);
    default:
      return chalk.gray(status ?? "unknown");
  }
}
