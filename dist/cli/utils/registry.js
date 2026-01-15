import path from "path";
import fs from "fs-extra";
// Helper to resolve the package root (where package.json is)
export function getPackageRoot() {
    // In development (ts-node), we might be in cli/utils
    // In production (dist/cli/utils), we need to go up to package root
    // Try to find package.json starting from __dirname and going up
    let currentDir = __dirname;
    while (currentDir !== "/") {
        if (fs.existsSync(path.join(currentDir, "package.json"))) {
            return currentDir;
        }
        currentDir = path.dirname(currentDir);
    }
    throw new Error("Could not find package root");
}
export function getComponentsDirectory() {
    const root = getPackageRoot();
    // We assume 'components' exists at root (source) or copied there
    const candidates = [
        path.join(root, "components"), // source in running context
        path.join(root, "../components") // potentially if inside dist
    ];
    for (const candidate of candidates) {
        if (fs.existsSync(candidate))
            return candidate;
    }
    return path.join(root, "components");
}
export async function getAvailableComponents() {
    const componentsDir = getComponentsDirectory();
    if (!fs.existsSync(componentsDir)) {
        return [];
    }
    const files = await fs.readdir(componentsDir);
    return files
        .filter((file) => file.endsWith(".tsx") && !file.endsWith(".stories.tsx"))
        .map((file) => file.replace(/\.tsx$/, ""));
}
export async function getComponentSource(componentName) {
    const componentsDir = getComponentsDirectory();
    const filePath = path.join(componentsDir, `${componentName}.tsx`);
    if (fs.existsSync(filePath)) {
        return fs.readFile(filePath, "utf-8");
    }
    return null;
}
//# sourceMappingURL=registry.js.map