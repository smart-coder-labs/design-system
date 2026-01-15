
// This registry.ts now fetches from a remote JSON file on GitHub Raw.
// It replaces local file system calls with fetch.

// TODO: Make this configurable? For now hardcoded to main branch.
const REGISTRY_URL = "https://raw.githubusercontent.com/smart-coder-labs/design-system/refs/heads/main/registry.json";

interface RegistryItem {
  name: string;
  dependencies: string[];
  type: string;
  files: Array<{
    name: string;
    url: string;
  }>;
}

type Registry = Record<string, RegistryItem>;

let cachedRegistry: Registry | null = null;

async function fetchRegistry(): Promise<Registry> {
  if (cachedRegistry) return cachedRegistry;
  
  try {
    const res = await fetch(REGISTRY_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch registry from ${REGISTRY_URL}: ${res.statusText}`);
    }
    const data = await res.json();
    cachedRegistry = data as Registry;
    return cachedRegistry;
  } catch (error) {
    console.error("Error fetching registry:", error);
    return {};
  }
}

export async function getAvailableComponents(): Promise<string[]> {
  const registry = await fetchRegistry();
  return Object.keys(registry);
}

export async function getComponentSource(componentName: string): Promise<string | null> {
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
  } catch (error) {
    console.error(`Error fetching component ${componentName}:`, error);
    return null;
  }
}

export async function getComponentDependencies(componentName: string): Promise<string[]> {
    const registry = await fetchRegistry();
    const component = registry[componentName];
    return component?.dependencies || [];
}
