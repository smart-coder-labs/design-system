"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const registry_1 = require("../utils/registry");
const add_1 = require("./add");
const update = async (components) => {
    // 1. Load config
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
    const resolvedComponentsDir = path_1.default.resolve(process.cwd(), config.componentsDir);
    // 2. Identify installed components if none provided
    if (!components || components.length === 0) {
        const spinner = (0, ora_1.default)("Scanning for installed components...").start();
        if (!fs_extra_1.default.existsSync(resolvedComponentsDir)) {
            spinner.fail(`Components directory not found at ${config.componentsDir}`);
            return;
        }
        const files = await fs_extra_1.default.readdir(resolvedComponentsDir);
        const availableComponents = await (0, registry_1.getAvailableComponents)();
        // Filter files that match registry components
        const installedComponents = files
            .filter(file => file.endsWith(".tsx") || file.endsWith(".ts"))
            .map(file => path_1.default.basename(file, path_1.default.extname(file)))
            .filter(name => availableComponents.includes(name));
        spinner.stop();
        if (installedComponents.length === 0) {
            console.log(chalk_1.default.yellow("No installed components found to update."));
            return;
        }
        console.log(chalk_1.default.blue(`Found ${installedComponents.length} components to update: ${installedComponents.join(", ")}`));
        components = installedComponents;
    }
    // 3. Use add command to re-install/update them
    // The add command handles fetching, dependency resolution, and overwriting files.
    await (0, add_1.add)(components);
};
exports.update = update;
//# sourceMappingURL=update.js.map