"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = loadConfig;
exports.saveConfig = saveConfig;
exports.stripUseClient = stripUseClient;
exports.recordInstall = recordInstall;
exports.detectInstalledComponents = detectInstalledComponents;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const CONFIG_FILE = "design-system.json";
const DEFAULT_CONFIG = {
    componentsDir: "./components/ui",
    framework: "unknown",
    rsc: false,
    components: {},
};
async function loadConfig() {
    if (!fs_extra_1.default.existsSync(CONFIG_FILE)) {
        console.warn("design-system.json not found. Using defaults.");
        return { ...DEFAULT_CONFIG };
    }
    try {
        const raw = await fs_extra_1.default.readJSON(CONFIG_FILE);
        return { ...DEFAULT_CONFIG, ...raw, components: raw.components ?? {} };
    }
    catch {
        console.warn("Could not read design-system.json. Using defaults.");
        return { ...DEFAULT_CONFIG };
    }
}
async function saveConfig(config) {
    await fs_extra_1.default.writeJSON(CONFIG_FILE, config, { spaces: 2 });
}
/**
 * Strips the `'use client'` directive from a file's content.
 * Used for non-RSC projects (Vite, Astro, Remix, Next.js Pages Router).
 */
function stripUseClient(content) {
    return content
        .replace(/^['"]use client['"];?\s*\n?/m, "")
        .trimStart();
}
async function recordInstall(config, componentName, version, type) {
    const now = new Date().toISOString();
    const existing = config.components[componentName];
    config.components[componentName] = {
        version,
        type,
        installedAt: existing?.installedAt ?? now,
        updatedAt: now,
    };
    return config;
}
/**
 * Detect installed components from disk.
 * Supports both folder structure (ComponentName/) and flat files (ComponentName.tsx).
 * Also merges components tracked in design-system.json.
 */
async function detectInstalledComponents(resolvedComponentsDir, availableComponents, config) {
    const found = new Set();
    // 1. From disk
    if (fs_extra_1.default.existsSync(resolvedComponentsDir)) {
        const entries = await fs_extra_1.default.readdir(resolvedComponentsDir, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.isDirectory() && availableComponents.includes(entry.name)) {
                found.add(entry.name);
            }
            else if (entry.isFile()) {
                const name = path_1.default.basename(entry.name, path_1.default.extname(entry.name));
                if ((entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) &&
                    availableComponents.includes(name)) {
                    found.add(name);
                }
            }
        }
    }
    // 2. From config tracking (catches components installed elsewhere)
    for (const name of Object.keys(config.components)) {
        if (availableComponents.includes(name)) {
            found.add(name);
        }
    }
    return Array.from(found).sort();
}
//# sourceMappingURL=config.js.map