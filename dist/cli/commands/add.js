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
const add = async (components) => {
    if (!components || components.length === 0) {
        // If no components specified, list available ones
        const available = await (0, registry_1.getAvailableComponents)();
        const response = await (0, prompts_1.default)({
            type: "multiselect",
            name: "items",
            message: "Which components would you like to add?",
            choices: available.map(c => ({ title: c, value: c })),
            min: 1
        });
        components = response.items;
    }
    if (!components || components.length === 0) {
        console.log(chalk_1.default.yellow("No components selected."));
        return;
    }
    // Load config
    let config = { componentsDir: "./components/ui" };
    if (fs_extra_1.default.existsSync("design-system.json")) {
        try {
            config = await fs_extra_1.default.readJSON("design-system.json");
        }
        catch (e) {
            console.warn("Could not read design-system.json, using defaults.");
        }
    }
    else {
        console.warn("design-system.json not found. Using default ./components/ui");
    }
    const spinner = (0, ora_1.default)("Installing components...").start();
    const queue = [...components];
    const processed = new Set();
    while (queue.length > 0) {
        const component = queue.shift();
        if (!component || processed.has(component))
            continue;
        processed.add(component);
        spinner.text = `Installing ${component}...`;
        const source = await (0, registry_1.getComponentSource)(component);
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
        const destPath = path_1.default.resolve(process.cwd(), config.componentsDir, `${component}.tsx`);
        await fs_extra_1.default.ensureDir(path_1.default.dirname(destPath));
        await fs_extra_1.default.writeFile(destPath, source);
        spinner.succeed(`Installed ${component}`);
    }
    spinner.stop();
    console.log(chalk_1.default.bold.green("\nDone!"));
};
exports.add = add;
//# sourceMappingURL=add.js.map