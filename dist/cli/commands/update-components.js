"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComponents = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const prompts_1 = __importDefault(require("prompts"));
const registry_1 = require("../utils/registry");
const config_1 = require("../utils/config");
const updateComponents = async () => {
    const config = await (0, config_1.loadConfig)();
    const resolvedComponentsDir = path_1.default.resolve(process.cwd(), config.componentsDir);
    // 1. Scan installed components (folders + flat files + config tracking)
    const spinner = (0, ora_1.default)("Scanning for installed components...").start();
    const availableComponents = await (0, registry_1.getAvailableComponents)();
    const installedComponents = await (0, config_1.detectInstalledComponents)(resolvedComponentsDir, availableComponents, config);
    spinner.stop();
    if (installedComponents.length === 0) {
        console.log(chalk_1.default.yellow("No installed components found."));
        return;
    }
    console.log(chalk_1.default.blue(`\nFound ${installedComponents.length} installed components:\n`));
    // 2. Selection
    const response = await (0, prompts_1.default)({
        type: "select",
        name: "updateMode",
        message: "What would you like to do?",
        choices: [
            { title: "Update all components", value: "all" },
            { title: "Select specific components", value: "select" },
        ],
    });
    let componentsToUpdate = [];
    if (response.updateMode === "all") {
        componentsToUpdate = installedComponents;
        console.log(chalk_1.default.green(`\n✓ Selected all ${installedComponents.length} components`));
    }
    else {
        const selectResponse = await (0, prompts_1.default)({
            type: "multiselect",
            name: "items",
            message: "Which components would you like to update?",
            choices: installedComponents.map((c) => ({
                title: `${c}${config.components[c] ? chalk_1.default.gray(` (v${config.components[c].version})`) : ""}`,
                value: c,
            })),
            min: 1,
        });
        componentsToUpdate = selectResponse.items;
        if (!componentsToUpdate || componentsToUpdate.length === 0) {
            console.log(chalk_1.default.yellow("No components selected."));
            return;
        }
        console.log(chalk_1.default.green(`\n✓ Selected ${componentsToUpdate.length} components`));
    }
    // 3. Fetch and update
    const updateSpinner = (0, ora_1.default)("Updating components...").start();
    let successCount = 0;
    let failCount = 0;
    for (const component of componentsToUpdate) {
        updateSpinner.text = `Updating ${component}...`;
        try {
            const files = await (0, registry_1.getComponentFiles)(component);
            if (!files) {
                updateSpinner.warn(`Component '${component}' not found in registry.`);
                failCount++;
                continue;
            }
            const componentDir = path_1.default.resolve(resolvedComponentsDir, component);
            await fs_extra_1.default.ensureDir(componentDir);
            for (const file of files) {
                const content = config.rsc ? file.content : (0, config_1.stripUseClient)(file.content);
                await fs_extra_1.default.writeFile(path_1.default.join(componentDir, file.name), content);
            }
            const meta = await (0, registry_1.getComponentMeta)(component);
            await (0, config_1.recordInstall)(config, component, meta?.version ?? "unknown", "folder", "update", meta?.status);
            updateSpinner.succeed(`Updated ${component}`);
            successCount++;
        }
        catch (error) {
            updateSpinner.warn(`Failed to update ${component}: ${error}`);
            failCount++;
        }
    }
    updateSpinner.stop();
    await (0, config_1.saveConfig)(config);
    // 4. Summary
    console.log(chalk_1.default.bold("\n=== Update Summary ==="));
    console.log(chalk_1.default.green(`✓ Successfully updated: ${successCount} components`));
    if (failCount > 0) {
        console.log(chalk_1.default.red(`✗ Failed to update: ${failCount} components`));
    }
    console.log(chalk_1.default.bold.green("\nDone!"));
};
exports.updateComponents = updateComponents;
//# sourceMappingURL=update-components.js.map