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
const framework_1 = require("../utils/framework");
const FRAMEWORK_CHOICES = [
    { title: "Next.js (App Router)", value: "next-app" },
    { title: "Next.js (Pages Router)", value: "next-pages" },
    { title: "Vite", value: "vite" },
    { title: "Astro", value: "astro" },
    { title: "Remix / React Router", value: "remix" },
    { title: "Other", value: "unknown" },
];
function resolveRsc(value) {
    if (value === "next-app")
        return { framework: "next", rsc: true };
    if (value === "next-pages")
        return { framework: "next", rsc: false };
    return { framework: value, rsc: false };
}
const init = async () => {
    console.log(chalk_1.default.bold.green("\n🍏 Apple Design System — Initialization\n"));
    // ── 1. Auto-detect framework ──────────────────────────────────────────────
    const detected = (0, framework_1.detectFramework)(process.cwd());
    if (detected.framework !== "unknown") {
        const rscNote = detected.rsc ? chalk_1.default.gray(" (App Router — RSC enabled)") : "";
        console.log(chalk_1.default.cyan(`Detected framework: `) +
            chalk_1.default.bold(detected.label) +
            rscNote);
    }
    else {
        console.log(chalk_1.default.yellow("Could not auto-detect framework."));
    }
    // ── 2. Confirm or override ────────────────────────────────────────────────
    let framework = detected.framework;
    let rsc = detected.rsc;
    if (detected.framework !== "unknown") {
        const { confirm } = await (0, prompts_1.default)({
            type: "confirm",
            name: "confirm",
            message: `Is this correct?`,
            initial: true,
        });
        if (!confirm) {
            const { choice } = await (0, prompts_1.default)({
                type: "select",
                name: "choice",
                message: "Select your framework:",
                choices: FRAMEWORK_CHOICES,
            });
            const resolved = resolveRsc(choice);
            framework = resolved.framework;
            rsc = resolved.rsc;
        }
    }
    else {
        const { choice } = await (0, prompts_1.default)({
            type: "select",
            name: "choice",
            message: "Select your framework:",
            choices: FRAMEWORK_CHOICES,
        });
        const resolved = resolveRsc(choice);
        framework = resolved.framework;
        rsc = resolved.rsc;
    }
    // ── 3. Rest of project config ─────────────────────────────────────────────
    const response = await (0, prompts_1.default)([
        {
            type: "text",
            name: "projectRoot",
            message: "Project root directory?",
            initial: "./src",
        },
        {
            type: "text",
            name: "componentsDir",
            message: "Where to install components?",
            initial: (prev) => `${prev}/components/ui`,
        },
        {
            type: "text",
            name: "globalCss",
            message: "Global CSS file path?",
            initial: (_prev, values) => `${values.projectRoot}/index.css`,
        },
        {
            type: "confirm",
            name: "installDeps",
            message: "Install required dependencies now?",
            initial: true,
        },
    ]);
    const spin = (0, ora_1.default)("Configuring project...").start();
    // ── 4. Write design-system.json ───────────────────────────────────────────
    const config = {
        framework,
        rsc,
        componentsDir: response.componentsDir,
        globalCss: response.globalCss,
        components: {},
    };
    await fs_extra_1.default.writeJSON("design-system.json", config, { spaces: 2 });
    spin.succeed("Created design-system.json");
    // ── 5. Ensure directories ─────────────────────────────────────────────────
    const resolvedComponentsDir = path_1.default.resolve(process.cwd(), response.componentsDir);
    await fs_extra_1.default.ensureDir(resolvedComponentsDir);
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
        console.log(chalk_1.default.green(`Created ${path_1.default.relative(process.cwd(), utilsPath)}`));
    }
    // ── 6. Fetch and write global CSS ─────────────────────────────────────────
    spin.text = "Fetching global styles...";
    const cssContent = await (0, registry_1.getGlobalCss)();
    if (cssContent) {
        const stylesDir = path_1.default.resolve(process.cwd(), "styles");
        await fs_extra_1.default.ensureDir(stylesDir);
        const cssPath = path_1.default.resolve(stylesDir, "apple-ds.css");
        await fs_extra_1.default.writeFile(cssPath, cssContent);
        console.log(chalk_1.default.green(`Created ${path_1.default.relative(process.cwd(), cssPath)}`));
        if (response.globalCss) {
            const globalCssPath = path_1.default.resolve(process.cwd(), response.globalCss);
            if (fs_extra_1.default.existsSync(globalCssPath)) {
                let existingCss = await fs_extra_1.default.readFile(globalCssPath, "utf-8");
                const globalCssDir = path_1.default.dirname(globalCssPath);
                const relativePath = path_1.default.relative(globalCssDir, cssPath);
                const importPath = relativePath.startsWith(".") ? relativePath : `./${relativePath}`;
                const importStatement = `@import '${importPath}';`;
                if (!existingCss.includes("apple-ds.css")) {
                    await fs_extra_1.default.writeFile(globalCssPath, `${importStatement}\n${existingCss}`);
                    console.log(chalk_1.default.green(`Updated ${response.globalCss} with design system styles.`));
                }
            }
            else {
                console.log(chalk_1.default.yellow(`CSS file not found at ${response.globalCss}. Skipping import.`));
            }
        }
    }
    else {
        spin.warn("Failed to fetch global styles. Install styles manually.");
    }
    // ── 7. Install deps ───────────────────────────────────────────────────────
    if (response.installDeps) {
        spin.start("Installing dependencies...");
        try {
            const { execSync } = require("child_process");
            execSync("npm install clsx tailwind-merge cva framer-motion lucide-react", {
                stdio: "inherit",
            });
            spin.succeed("Dependencies installed.");
        }
        catch {
            spin.fail("Failed to install dependencies. Run manually:");
            console.log(chalk_1.default.cyan("npm install clsx tailwind-merge cva framer-motion lucide-react"));
        }
    }
    // ── 8. Framework-specific hints ───────────────────────────────────────────
    if (framework === "astro") {
        console.log(chalk_1.default.yellow("\n⚠ Astro: Components use React — make sure to add the React integration\n" +
            "  and use client:* directives when mounting them in .astro files."));
    }
    if (!rsc && framework !== "astro") {
        console.log(chalk_1.default.gray("\nℹ 'use client' directives are stripped from components (not needed outside Next.js App Router)."));
    }
    console.log(chalk_1.default.bold.green("\n✓ Project initialized."));
    console.log(`Run ${chalk_1.default.cyan("npx apple-design-system add")} to install components.`);
};
exports.init = init;
//# sourceMappingURL=init.js.map