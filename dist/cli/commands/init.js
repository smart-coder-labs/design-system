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
const registry_1 = require("../utils/registry");
const init = async () => {
    console.log(chalk_1.default.bold.green("🍏 Apple Design System Initialization"));
    console.log("This utility will help you configure your project.");
    const response = await (0, prompts_1.default)([
        {
            type: "text",
            name: "projectRoot",
            message: "What is your project root directory?",
            initial: "./src",
        },
        {
            type: "text",
            name: "componentsDir",
            message: "Where would you like to install components?",
            initial: (prev) => `${prev}/components/ui`,
        },
        {
            type: "text",
            name: "globalCss",
            message: "Where is your global CSS file?",
            initial: (prev, values) => `${values.projectRoot}/index.css`,
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
    // We try to infer lib location from componentsDir or projectRoot
    // If components are in src/components/ui, lib should be src/lib
    const utilsDir = path_1.default.resolve(process.cwd(), response.projectRoot, "lib");
    const utilsPath = path_1.default.resolve(utilsDir, "utils.ts");
    if (!fs_extra_1.default.existsSync(utilsPath)) {
        await fs_extra_1.default.ensureDir(utilsDir);
        await fs_extra_1.default.writeFile(utilsPath, `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`);
        console.log(chalk_1.default.green(`Created ${path_1.default.relative(process.cwd(), utilsPath)} for 'cn' utility.`));
    }
    // Fetch and create styles directory and write apple-ds.css
    spin.text = "Fetching global styles...";
    const cssContent = await (0, registry_1.getGlobalCss)();
    if (cssContent) {
        const stylesDir = path_1.default.resolve(process.cwd(), "styles");
        await fs_extra_1.default.ensureDir(stylesDir);
        const cssPath = path_1.default.resolve(stylesDir, "apple-ds.css");
        await fs_extra_1.default.writeFile(cssPath, cssContent);
        console.log(chalk_1.default.green(`Created ${path_1.default.relative(process.cwd(), cssPath)}`));
        // Inject CSS import into global CSS if provided
        if (response.globalCss) {
            const globalCssPath = path_1.default.resolve(process.cwd(), response.globalCss);
            if (fs_extra_1.default.existsSync(globalCssPath)) {
                let existingCss = await fs_extra_1.default.readFile(globalCssPath, "utf-8");
                // Calculate relative path from global CSS to apple-ds.css
                const globalCssDir = path_1.default.dirname(globalCssPath);
                const relativePath = path_1.default.relative(globalCssDir, cssPath);
                // Ensure it starts with ./ or ../
                const importPath = relativePath.startsWith(".") ? relativePath : `./${relativePath}`;
                const importStatement = `@import '${importPath}';`;
                if (!existingCss.includes("apple-ds.css")) {
                    // Prepend to file
                    await fs_extra_1.default.writeFile(globalCssPath, `${importStatement}\n${existingCss}`);
                    console.log(chalk_1.default.green(`Updated ${response.globalCss} with design system styles.`));
                }
            }
            else {
                console.log(chalk_1.default.yellow(`Global CSS file not found at ${response.globalCss}. Skipping style import.`));
            }
        }
    }
    else {
        spin.warn("Failed to fetch global styles. Please install styles manually.");
    }
    if (response.installDeps) {
        spin.start("Installing dependencies...");
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