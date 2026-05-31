"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectPackageManager = detectPackageManager;
exports.isPackageInstalled = isPackageInstalled;
exports.installPackages = installPackages;
exports.getMissingPackages = getMissingPackages;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
function detectPackageManager(cwd = process.cwd()) {
    if (fs_extra_1.default.existsSync(path_1.default.join(cwd, "bun.lockb")))
        return "bun";
    if (fs_extra_1.default.existsSync(path_1.default.join(cwd, "pnpm-lock.yaml")))
        return "pnpm";
    if (fs_extra_1.default.existsSync(path_1.default.join(cwd, "yarn.lock")))
        return "yarn";
    return "npm";
}
function isPackageInstalled(pkg, cwd = process.cwd()) {
    // Strip version specifier (e.g. "react@^18.0.0" -> "react")
    const name = pkg.split("@")[0] || pkg;
    // Check node_modules
    if (fs_extra_1.default.existsSync(path_1.default.join(cwd, "node_modules", name)))
        return true;
    // Check package.json dependencies / devDependencies
    const pkgPath = path_1.default.join(cwd, "package.json");
    if (!fs_extra_1.default.existsSync(pkgPath))
        return false;
    try {
        const { dependencies = {}, devDependencies = {}, peerDependencies = {} } = fs_extra_1.default.readJSONSync(pkgPath);
        return name in dependencies || name in devDependencies || name in peerDependencies;
    }
    catch {
        return false;
    }
}
function installPackages(packages, pm, cwd = process.cwd()) {
    const cmd = {
        npm: `npm install ${packages.join(" ")}`,
        yarn: `yarn add ${packages.join(" ")}`,
        pnpm: `pnpm add ${packages.join(" ")}`,
        bun: `bun add ${packages.join(" ")}`,
    };
    (0, child_process_1.execSync)(cmd[pm], { stdio: "inherit", cwd });
}
function getMissingPackages(dependencies, cwd = process.cwd()) {
    return dependencies.filter((dep) => !isPackageInstalled(dep, cwd));
}
//# sourceMappingURL=deps.js.map