"use strict";
// This registry.ts now fetches from a remote JSON file on GitHub Raw.
// It replaces local file system calls with fetch.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvailableComponents = getAvailableComponents;
exports.getComponentSource = getComponentSource;
exports.getComponentDependencies = getComponentDependencies;
exports.getGlobalCss = getGlobalCss;
// TODO: Make this configurable? For now hardcoded to main branch.
const REGISTRY_URL = "https://raw.githubusercontent.com/smart-coder-labs/design-system/refs/heads/main/registry.json";
const CSS_URL = "https://raw.githubusercontent.com/smart-coder-labs/design-system/refs/heads/main/globals.css";
let cachedRegistry = null;
async function fetchRegistry() {
    if (cachedRegistry)
        return cachedRegistry;
    try {
        const res = await fetch(REGISTRY_URL);
        if (!res.ok) {
            throw new Error(`Failed to fetch registry from ${REGISTRY_URL}: ${res.statusText}`);
        }
        const data = await res.json();
        cachedRegistry = data;
        return cachedRegistry;
    }
    catch (error) {
        console.error("Error fetching registry:", error);
        return {};
    }
}
async function getAvailableComponents() {
    const registry = await fetchRegistry();
    return Object.keys(registry);
}
async function getComponentSource(componentName) {
    const registry = await fetchRegistry();
    const component = registry[componentName];
    if (!component || !component.files || component.files.length === 0) {
        return null;
    }
    // We currently only handle single-file components for simplicity
    const fileUrl = component.files[0].url;
    try {
        const res = await fetch(fileUrl);
        if (!res.ok) {
            throw new Error(`Failed to fetch component source from ${fileUrl}: ${res.statusText}`);
        }
        return await res.text();
    }
    catch (error) {
        console.error(`Error fetching component ${componentName}:`, error);
        return null;
    }
}
async function getComponentDependencies(componentName) {
    const registry = await fetchRegistry();
    const component = registry[componentName];
    return component?.dependencies || [];
}
async function getGlobalCss() {
    try {
        const res = await fetch(CSS_URL);
        if (!res.ok) {
            throw new Error(`Failed to fetch global css from ${CSS_URL}: ${res.statusText}`);
        }
        return await res.text();
    }
    catch (error) {
        console.error("Error fetching global css:", error);
        return null;
    }
}
//# sourceMappingURL=registry.js.map