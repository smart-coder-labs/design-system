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
    // Write tokens.ts to the parent directory of componentsDir (e.g., components/tokens.ts)
    // This is because components import it as "../tokens"
    const tokensPath = path_1.default.resolve(resolvedComponentsDir, "..", "tokens.ts");
    await fs_extra_1.default.writeFile(tokensPath, TOKENS_CONTENT);
    console.log(chalk_1.default.green(`Created ${path_1.default.relative(process.cwd(), tokensPath)}`));
    // Also create a lib/utils.ts for cn helper if it doesn't exist
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
const TOKENS_CONTENT = `export const tokens = {
    // 🎨 PALETA DE COLORES
    colors: {
        // Neutrales (Light Mode)
        light: {
            background: {
                primary: '#FFFFFF',
                secondary: '#F5F5F7',
                tertiary: '#FFFFFF',
            },
            text: {
                primary: '#1D1D1F',
                secondary: '#6E6E73',
                tertiary: '#86868B',
            },
            border: {
                default: 'rgba(0, 0, 0, 0.1)',
                divider: 'rgba(0, 0, 0, 0.05)',
            },
        },
        // Neutrales (Dark Mode)
        dark: {
            background: {
                primary: '#000000',
                secondary: '#1C1C1E',
                tertiary: '#2C2C2E',
            },
            text: {
                primary: '#F5F5F7',
                secondary: '#98989D',
                tertiary: '#6E6E73',
            },
            border: {
                default: 'rgba(255, 255, 255, 0.12)',
                divider: 'rgba(255, 255, 255, 0.08)',
            },
        },
        // Accents
        accent: {
            light: {
                blue: '#007AFF',
                purple: '#AF52DE',
                pink: '#FF2D55',
                red: '#FF3B30',
                orange: '#FF9500',
                yellow: '#FFCC00',
                green: '#34C759',
                teal: '#5AC8FA',
                indigo: '#5856D6',
            },
            dark: {
                blue: '#0A84FF',
                purple: '#BF5AF2',
                pink: '#FF375F',
                red: '#FF453A',
                orange: '#FF9F0A',
                yellow: '#FFD60A',
                green: '#30D158',
                teal: '#64D2FF',
                indigo: '#5E5CE6',
            },
        },
    },
    // 🔲 RADIUS
    radius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        full: '9999px',
    },
    // 🌫️ SOMBRAS
    shadows: {
        light: {
            sm: '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
            md: '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
            lg: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)',
        },
        dark: {
            sm: '0 2px 8px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
            md: '0 4px 16px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
            lg: '0 8px 32px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)',
        },
    },
    // ⚡ ANIMACIONES
    animation: {
        duration: {
            fast: '0.15s',
            normal: '0.2s',
            slow: '0.3s',
        },
        easing: {
            default: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
            spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        },
    },
} as const;

export type Tokens = typeof tokens;
`;
//# sourceMappingURL=init.js.map