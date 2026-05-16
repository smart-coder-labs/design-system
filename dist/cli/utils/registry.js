"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegistryVersion = getRegistryVersion;
exports.getAvailableComponents = getAvailableComponents;
exports.getComponentFiles = getComponentFiles;
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