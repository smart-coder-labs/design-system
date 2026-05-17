"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollback = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const registry_1 = require("../utils/registry");
const config_1 = require("../utils/config");
const rollback = async (component, version) => {
    const config = await (0, config_1.loadConfig)();
    const spinner = (0, ora_1.default)(`Fetching component ${component}@${version}...`).start();
    const files = await (0, registry_1.getComponentFilesAtVersion)(component, version);
    if (!files) {
        spinner.fail(`Version ${version} of ${component} not found. Make sure that version exists as a git tag (v${version}).`);
        return;
    }
    const componentDir = path_1.default.resolve(process.cwd(), config.componentsDir, component);
    await fs_extra_1.default.ensureDir(componentDir);
    for (const file of files) {
        const content = config.rsc ? file.content : (0, config_1.stripUseClient)(file.content);
        await fs_extra_1.default.writeFile(path_1.default.join(componentDir, file.name), content);
    }
    await (0, config_1.recordInstall)(config, component, version, "folder", "rollback");
    await (0, config_1.saveConfig)(config);
    spinner.succeed(chalk_1.default.green(`Rolled back ${component} to v${version}`));
};
exports.rollback = rollback;
//# sourceMappingURL=rollback.js.map