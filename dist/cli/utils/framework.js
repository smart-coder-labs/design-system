"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectFramework = detectFramework;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const CONFIG_FILES = [
    { file: ["next.config.js", "next.config.ts", "next.config.mjs", "next.config.cjs"], framework: "next" },
    { file: ["astro.config.mjs", "astro.config.ts", "astro.config.js"], framework: "astro" },
    { file: ["react-router.config.ts", "react-router.config.js", "remix.config.js"], framework: "remix" },
    { file: ["vite.config.ts", "vite.config.js", "vite.config.mts", "vite.config.mjs"], framework: "vite" },
];
const FRAMEWORK_LABELS = {
    next: "Next.js",
    vite: "Vite",
    astro: "Astro",
    remix: "Remix / React Router",
    unknown: "Unknown",
};
function hasAppRouter(cwd) {
    return (fs_extra_1.default.existsSync(path_1.default.join(cwd, "app")) ||
        fs_extra_1.default.existsSync(path_1.default.join(cwd, "src", "app")));
}
function detectFromConfigFiles(cwd) {
    for (const { file, framework } of CONFIG_FILES) {
        const files = Array.isArray(file) ? file : [file];
        if (files.some((f) => fs_extra_1.default.existsSync(path_1.default.join(cwd, f)))) {
            return framework;
        }
    }
    return null;
}
function detectFromPackageJson(cwd) {
    const pkgPath = path_1.default.join(cwd, "package.json");
    if (!fs_extra_1.default.existsSync(pkgPath))
        return null;
    try {
        const pkg = fs_extra_1.default.readJSONSync(pkgPath);
        const deps = {
            ...pkg.dependencies,
            ...pkg.devDependencies,
        };
        if (deps["next"])
            return "next";
        if (deps["astro"])
            return "astro";
        if (deps["@remix-run/react"] || deps["react-router"])
            return "remix";
        if (deps["vite"])
            return "vite";
    }
    catch {
        // ignore
    }
    return null;
}
function detectFramework(cwd = process.cwd()) {
    const framework = detectFromConfigFiles(cwd) ?? detectFromPackageJson(cwd) ?? "unknown";
    const rsc = framework === "next" && hasAppRouter(cwd);
    return {
        framework,
        rsc,
        label: FRAMEWORK_LABELS[framework],
    };
}
//# sourceMappingURL=framework.js.map