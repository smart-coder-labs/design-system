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
    for (const component of components) {
        spinner.text = `Installing ${component}...`;
        const source = await (0, registry_1.getComponentSource)(component);
        if (!source) {
            spinner.warn(`Component '${component}' not found.`);
            continue;
        }
        const destPath = path_1.default.resolve(process.cwd(), config.componentsDir, `${component}.tsx`);
        await fs_extra_1.default.ensureDir(path_1.default.dirname(destPath));
        // Quick and dirty import fix:
        // Some components might import from "@/lib/utils" or similar.
        // The source code likely has: import { cn } from "@/lib/utils";
        // We should ensure that matches the user's setup or leave it to them to resolve aliases.
        // For now we assume standard Next.js-like alias @/lib/utils is configured or simple relative imports.
        // We can try to detect missing "cn" import or other common utils.
        await fs_extra_1.default.writeFile(destPath, source);
        spinner.succeed(`Installed ${component}`);
        // Auto-install dependencies found in the registry
        // We can now rely on the registry manifest rather than regex parsing if we want,
        // but regex parsing on the fetched content is still robust.
        // However, since we have the registry, let's try to use it if we can.
        // For now, let's stick to the content analysis as fallback or primary if registry.json dependency list is empty.
        const dependenciesToInstall = new Set();
        // Check for Radix UI
        const radixMatch = source.match(/@radix-ui\/react-[a-z-]+/g);
        if (radixMatch) {
            radixMatch.forEach(dep => dependenciesToInstall.add(dep));
        }
        // Check for other common libs
        if (source.includes('framer-motion'))
            dependenciesToInstall.add('framer-motion');
        if (source.includes('lucide-react'))
            dependenciesToInstall.add('lucide-react');
        if (source.includes('clsx'))
            dependenciesToInstall.add('clsx');
        if (source.includes('tailwind-merge'))
            dependenciesToInstall.add('tailwind-merge');
        if (source.includes('class-variance-authority'))
            dependenciesToInstall.add('class-variance-authority');
        // Also use explicit dependencies from registry if available
        try {
            const { getComponentDependencies } = require('../utils/registry');
            const regDeps = await getComponentDependencies(component);
            regDeps.forEach((dep) => dependenciesToInstall.add(dep));
        }
        catch {
            // failed to get registry deps, fallback to regex above
        }
        if (dependenciesToInstall.size > 0) {
            const deps = Array.from(dependenciesToInstall).join(" ");
            spinner.start(`Installing dependencies: ${deps}...`);
            try {
                const { execSync } = require('child_process');
                execSync(`npm install ${deps}`, { stdio: 'ignore' });
                spinner.succeed(`Dependencies installed: ${deps}`);
            }
            catch (e) {
                spinner.warn(`Failed to auto-install dependencies: ${deps}. Please install manually.`);
            }
        }
    }
    spinner.stop();
    console.log(chalk_1.default.bold.green("\nDone!"));
};
exports.add = add;
//# sourceMappingURL=add.js.map