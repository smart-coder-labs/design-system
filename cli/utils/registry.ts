// Fetches from a remote JSON registry on GitHub Raw.
const REGISTRY_URL = "https://raw.githubusercontent.com/smart-coder-labs/design-system/refs/heads/main/registry.json";
const CSS_URL = "https://raw.githubusercontent.com/smart-coder-labs/design-system/refs/heads/main/globals.css";

interface RegistryFile {
  name: string;
  url: string;
}

interface RegistryItem {
  name: string;
  dependencies: string[];
  type: string;
  files: RegistryFile[];
}

interface Registry {
  _version?: string;
  [key: string]: RegistryItem | string | undefined;
}

let cachedRegistry: Registry | null = null;

async function fetchRegistry(): Promise<Registry> {
  if (cachedRegistry) return cachedRegistry;

  try {
    const res = await fetch(REGISTRY_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch registry: ${res.statusText}`);
    }
    cachedRegistry = (await res.json()) as Registry;
    return cachedRegistry;
  } catch (error) {
    console.error("Error fetching registry:", error);
    return {};
  }
}

export async function getRegistryVersion(): Promise<string> {
  const registry = await fetchRegistry();
  return (registry._version as string) ?? "unknown";
}

export async function getAvailableComponents(): Promise<string[]> {
  const registry = await fetchRegistry();
  return Object.keys(registry).filter((k) => k !== "_version");
}

export async function getComponentFiles(
  componentName: string
): Promise<Array<{ name: string; content: string }> | null> {
  const registry = await fetchRegistry();
  const component = registry[componentName] as RegistryItem | undefined;

  if (!component || !component.files || component.files.length === 0) {
    return null;
  }

  try {
    const results = await Promise.all(
      component.files.map(async (file) => {
        const res = await fetch(file.url);
        if (!res.ok) {
          throw new Error(`Failed to fetch ${file.name}: ${res.statusText}`);
        }
        return { name: file.name, content: await res.text() };
      })
    );
    return results;
  } catch (error) {
    console.error(`Error fetching component ${componentName}:`, error);
    return null;
  }
}

export async function getComponentDependencies(componentName: string): Promise<string[]> {
  const registry = await fetchRegistry();
  const component = registry[componentName] as RegistryItem | undefined;
  return component?.dependencies ?? [];
}

export async function getGlobalCss(): Promise<string | null> {
  try {
    const res = await fetch(CSS_URL);
    if (!res.ok) {
      throw new Error(`Failed to fetch global css: ${res.statusText}`);
    }
    return await res.text();
  } catch (error) {
    console.error("Error fetching global css:", error);
    return null;
  }
}
