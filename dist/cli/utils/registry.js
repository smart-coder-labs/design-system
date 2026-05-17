"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistryVersion = getRegistryVersion;
exports.getAvailableComponents = getAvailableComponents;
exports.getComponentFiles = getComponentFiles;
exports.getComponentFilesAtVersion = getComponentFilesAtVersion;
exports.getComponentMeta = getComponentMeta;
exports.getComponentDependencies = getComponentDependencies;
exports.getGlobalCss = getGlobalCss;
// Fetches from a remote JSON registry on GitHub Raw.
const REGISTRY_URL = "https://raw.githubusercontent.com/smart-coder-labs/design-system/refs/heads/main/registry.json";
const CSS_URL = "https://raw.githubusercontent.com/smart-coder-labs/design-system/refs/heads/main/globals.css";
let cachedRegistry = null;
async function fetchRegistry() {
    if (cachedRegistry)
        return cachedRegistry;
    try {
        const res = await fetch(REGISTRY_URL);
        if (!res.ok) {
            throw new Error(`Failed to fetch registry: ${res.statusText}`);
        }
        cachedRegistry = (await res.json());
        return cachedRegistry;
    }
    catch (error) {
        console.error("Error fetching registry:", error);
        return {};
    }
}
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/smart-coder-labs/design-system";
async function fetchFileAtSha(sha, filePath) {
    const url = `${GITHUB_RAW_BASE}/${sha}/${filePath}`;
    try {
        const res = await fetch(url);
        if (!res.ok)
            return null;
        return await res.text();
    }
    catch {
        return null;
    }
}
async function getRegistryVersion() {
    const registry = await fetchRegistry();
    return registry._version ?? "unknown";
}
async function getAvailableComponents() {
    const registry = await fetchRegistry();
    return Object.keys(registry).filter((k) => k !== "_version");
}
async function getComponentFiles(componentName) {
    const registry = await fetchRegistry();
    const component = registry[componentName];
    if (!component || !component.files || component.files.length === 0) {
        return null;
    }
    try {
        const results = await Promise.all(component.files.map(async (file) => {
            const res = await fetch(file.url);
            if (!res.ok) {
                throw new Error(`Failed to fetch ${file.name}: ${res.statusText}`);
            }
            return { name: file.name, content: await res.text() };
        }));
        return results;
    }
    catch (error) {
        console.error(`Error fetching component ${componentName}:`, error);
        return null;
    }
}
/**
 * Fetches a component's files at a specific historical version using the SHA
 * stored in the component's registry history.
 *
 * Falls back to candidate file names if the history entry has no `files` list
 * (for entries created before the files field was added to history).
 */
async function getComponentFilesAtVersion(componentName, version) {
    const registry = await fetchRegistry();
    const component = registry[componentName];
    if (!component)
        return null;
    const historyEntry = (component.history ?? []).find((h) => h.version === version);
    if (!historyEntry?.sha) {
        console.error(`No SHA found for ${componentName}@${version}. ` +
            `Available versions: ${(component.history ?? []).map((h) => h.version).join(", ") || "none"}`);
        return null;
    }
    const { sha } = historyEntry;
    // Use stored file names if available, otherwise fall back to known candidates
    const fileNames = historyEntry.files && historyEntry.files.length > 0
        ? historyEntry.files
        : [`${componentName}.tsx`, `${componentName}.types.ts`, `${componentName}.styles.ts`, "index.ts"];
    const results = [];
    await Promise.all(fileNames.map(async (fileName) => {
        const content = await fetchFileAtSha(sha, `components/ui/${componentName}/${fileName}`);
        if (content !== null) {
            results.push({ name: fileName, content });
        }
    }));
    return results.length > 0 ? results : null;
}
async function getComponentMeta(componentName) {
    const registry = await fetchRegistry();
    const component = registry[componentName];
    if (!component)
        return null;
    return {
        version: component.version ?? "unknown",
        status: component.status ?? "stable",
        added: component.added ?? "unknown",
        breakingChanges: component.breakingChanges ?? [],
    };
}
async function getComponentDependencies(componentName) {
    const registry = await fetchRegistry();
    const component = registry[componentName];
    return component?.dependencies ?? [];
}
async function getGlobalCss() {
    try {
        const res = await fetch(CSS_URL);
        if (!res.ok) {
            throw new Error(`Failed to fetch global css: ${res.statusText}`);
        }
        return await res.text();
    }
    catch (error) {
        console.error("Error fetching global css:", error);
        return null;
    }
}
//# sourceMappingURL=registry.js.map