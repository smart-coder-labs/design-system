"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = void 0;
const chalk_1 = __importDefault(require("chalk"));
const config_1 = require("../utils/config");
const registry_1 = require("../utils/registry");
const status = async (component) => {
    const config = await (0, config_1.loadConfig)();
    const tracked = config.components;
    if (Object.keys(tracked).length === 0) {
        console.log(chalk_1.default.yellow("No components tracked in design-system.json."));
        return;
    }
    if (component) {
        // Single component detail view
        const record = tracked[component];
        if (!record) {
            console.log(chalk_1.default.red(`Component '${component}' is not tracked in design-system.json.`));
            return;
        }
        const meta = await (0, registry_1.getComponentMeta)(component);
        console.log();
        console.log(chalk_1.default.bold(`${component}`));
        console.log(`  Installed version : ${chalk_1.default.cyan(record.version)}`);
        console.log(`  Registry version  : ${meta ? chalk_1.default.cyan(meta.version) : chalk_1.default.gray("unknown")}`);
        console.log(`  Status            : ${formatStatus(record.status)}`);
        console.log(`  Type              : ${record.type}`);
        console.log(`  Installed at      : ${record.installedAt}`);
        console.log(`  Last updated      : ${record.updatedAt}`);
        if (meta?.breakingChanges && meta.breakingChanges.length > 0) {
            console.log(`  Breaking changes  :`);
            for (const bc of meta.breakingChanges) {
                console.log(`    - ${chalk_1.default.yellow(bc)}`);
            }
        }
        if (record.history && record.history.length > 0) {
            console.log(`  History:`);
            for (const entry of record.history) {
                const actionColor = entry.action === "rollback"
                    ? chalk_1.default.yellow
                    : entry.action === "install"
                        ? chalk_1.default.green
                        : chalk_1.default.blue;
                console.log(`    ${actionColor(entry.action.padEnd(8))}  v${entry.version}  ${chalk_1.default.gray(entry.date)}`);
            }
        }
        console.log();
    }
    else {
        // Table view for all tracked components
        const registryVersion = await (0, registry_1.getRegistryVersion)();
        // Fetch registry meta for all components at once
        const metaMap = new Map();
        await Promise.all(Object.keys(tracked).map(async (name) => {
            const meta = await (0, registry_1.getComponentMeta)(name);
            metaMap.set(name, meta);
        }));
        console.log();
        console.log(chalk_1.default.bold(`Registry version: ${chalk_1.default.cyan(registryVersion)}`));
        console.log();
        // Header
        const nameW = 36;
        const verW = 12;
        const latestW = 12;
        const statusW = 14;
        const header = chalk_1.default.bold("Component".padEnd(nameW)) +
            chalk_1.default.bold("Installed".padEnd(verW)) +
            chalk_1.default.bold("Latest".padEnd(latestW)) +
            chalk_1.default.bold("Status".padEnd(statusW)) +
            chalk_1.default.bold("Outdated");
        console.log(header);
        console.log("─".repeat(nameW + verW + latestW + statusW + 8));
        for (const [name, record] of Object.entries(tracked)) {
            const meta = metaMap.get(name);
            const registryVer = meta?.version ?? "unknown";
            const isOutdated = registryVer !== "unknown" && record.version !== registryVer;
            const outdatedLabel = isOutdated ? chalk_1.default.yellow("yes") : chalk_1.default.green("no");
            const nameLabel = isOutdated ? chalk_1.default.yellow(name.padEnd(nameW)) : name.padEnd(nameW);
            const row = nameLabel +
                chalk_1.default.cyan(record.version.padEnd(verW)) +
                chalk_1.default.cyan(registryVer.padEnd(latestW)) +
                formatStatus(record.status).padEnd(statusW + 10) + // +10 for chalk escape codes
                outdatedLabel;
            console.log(row);
        }
        console.log();
    }
};
exports.status = status;
function formatStatus(status) {
    switch (status) {
        case "stable":
            return chalk_1.default.green(status);
        case "beta":
            return chalk_1.default.yellow(status);
        case "experimental":
            return chalk_1.default.red(status);
        default:
            return chalk_1.default.gray(status ?? "unknown");
    }
}
//# sourceMappingURL=status.js.map