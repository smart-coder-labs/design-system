"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
const prompts_1 = __importDefault(require("prompts"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const registry_1 = require("../utils/registry");
const config_1 = require("../utils/config");
const add = async (components) => {
    const available = await (0, registry_1.getAvailableComponents)();
    if (!components || components.length === 0) {
        const modeResponse = await (0, prompts_1.default)({
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
            console.log(chalk_1.default.green(`\n✓ Selected all ${available.length} components`));
        }
        else {
            const response = await (0, prompts_1.default)({
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
        console.log(chalk_1.default.yellow("No components selected."));
        return;
    }
    const config = await (0, config_1.loadConfig)();
    const dsVersion = await (0, registry_1.getRegistryVersion)();
    const spinner = (0, ora_1.default)("Installing components...").start();
    const queue = [...components];
    const processed = new Set();
    while (queue.length > 0) {
        const component = queue.shift();
        if (!component || processed.has(component))
            continue;
        processed.add(component);
        spinner.text = `Installing ${component}...`;
        const files = await (0, registry_1.getComponentFiles)(component);
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
        const componentDir = path_1.default.resolve(process.cwd(), config.componentsDir, component);
        await fs_extra_1.default.ensureDir(componentDir);
        for (const file of files) {
            await fs_extra_1.default.writeFile(path_1.default.join(componentDir, file.name), file.content);
        }
        await (0, config_1.recordInstall)(config, component, dsVersion, "folder");
        spinner.succeed(`Installed ${component}`);
    }
    await (0, config_1.saveConfig)(config);
    spinner.stop();
    console.log(chalk_1.default.bold.green("\nDone!"));
};
exports.add = add;
//# sourceMappingURL=add.js.map