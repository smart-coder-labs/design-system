"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const prompts_1 = __importDefault(require("prompts"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const chalk_1 = __importDefault(require("chalk"));
const ora_1 = __importDefault(require("ora"));
const init = async () => {
    console.log(chalk_1.default.bold.green("🍏 Apple Design System Initialization"));
    console.log("This utility will help you configure your project.");
    const response = await (0, prompts_1.default)([
        {
            type: "text",
            name: "componentsDir",
            message: "Where would you like to install components?",
            initial: "./components/ui",
        },
        {
            type: "text",
            name: "globalCss",
            message: "Where is your global CSS file?",
            initial: "./app/globals.css",
        },
        {
            type: "confirm",
            name: "installDeps",
            message: "Would you like to install required dependencies now?",
            initial: true,
        },
    ]);
    const spin = (0, ora_1.default)("Configuring project...").start();
    // Create config file
    const config = {
        componentsDir: response.componentsDir,
        globalCss: response.globalCss,
    };
    await fs_extra_1.default.writeJSON("design-system.json", config, { spaces: 2 });
    spin.succeed("Configuration file design-system.json created.");
    // Check/Create components directory
    const resolvedComponentsDir = path_1.default.resolve(process.cwd(), response.componentsDir);
    await fs_extra_1.default.ensureDir(resolvedComponentsDir);
    // Also create a lib/utils.ts for cn helper if it doesn't exist
    // Many components rely on 'cn'. We should probably include a helper or ask where utils are.
    // For simplicity, we'll try to find or create a lib/utils.ts
    const utilsPath = path_1.default.resolve(process.cwd(), "lib/utils.ts");
    if (!fs_extra_1.default.existsSync(utilsPath)) {
        await fs_extra_1.default.ensureDir(path_1.default.resolve(process.cwd(), "lib"));
        await fs_extra_1.default.writeFile(utilsPath, `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`);
        console.log(chalk_1.default.green("Created lib/utils.ts for 'cn' utility."));
    }
    if (response.installDeps) {
        spin.start("Installing dependencies...");
        // We are just displaying instructions for now or running npm install
        // Actually running npm install might be risky if we don't know the package manager.
        // But we can try to detect or just default to npm.
        try {
            const { execSync } = require('child_process');
            execSync('npm install clsx tailwind-merge cva framer-motion lucide-react', { stdio: 'inherit' });
            spin.succeed("Dependencies installed.");
        }
        catch (e) {
            spin.fail("Failed to install dependencies. Please run manually:");
            console.log(chalk_1.default.cyan("npm install clsx tailwind-merge cva framer-motion lucide-react"));
        }
    }
    console.log(chalk_1.default.bold.green("\nSuccess! Project initialized."));
    console.log(`You can now run ${chalk_1.default.cyan("npx apple-design-system add [component]")} to add components.`);
};
exports.init = init;
//# sourceMappingURL=init.js.map