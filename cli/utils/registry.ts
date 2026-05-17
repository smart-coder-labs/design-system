// Fetches from a remote JSON registry on GitHub Raw.
const REGISTRY_URL = "https://raw.githubusercontent.com/smart-coder-labs/design-system/refs/heads/main/registry.json";
const CSS_URL = "https://raw.githubusercontent.com/smart-coder-labs/design-system/refs/heads/main/globals.css";

interface RegistryFile {
  name: string;
  url: string;
}

interface RegistryHistoryEntry {
  version: string;
  sha: string;
  files?: string[]; // file names present at this version
}

interface RegistryItem {
  name: string;
  dependencies: string[];
  type: string;
  files: RegistryFile[];
  version: string;
  status: "stable" | "beta" | "experimental";
  added: string;
  breakingChanges: string[];
  history?: RegistryHistoryEntry[];
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

const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/smart-coder-labs/design-system";

async function fetchFileAtSha(sha: string, filePath: string): Promise<string | null> {
  const url = `${GITHUB_RAW_BASE}/${sha}/${filePath}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
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

/**
 * Fetches a component's files at a specific historical version using the SHA
 * stored in the component's registry history.
 *
 * Falls back to candidate file names if the history entry has no `files` list
 * (for entries created before the files field was added to history).
 */
export async function getComponentFilesAtVersion(
  componentName: string,
  version: string
): Promise<Array<{ name: string; content: string }> | null> {
  const registry = await fetchRegistry();
  const component = registry[componentName] as RegistryItem | undefined;

  if (!component) return null;

  const historyEntry = (component.history ?? []).find((h) => h.version === version);
  if (!historyEntry?.sha) {
    console.error(
      `No SHA found for ${componentName}@${version}. ` +
      `Available versions: ${(component.history ?? []).map((h) => h.version).join(", ") || "none"}`
    );
    return null;
  }

  const { sha } = historyEntry;

  // Use stored file names if available, otherwise fall back to known candidates
  const fileNames: string[] =
    historyEntry.files && historyEntry.files.length > 0
      ? historyEntry.files
      : [`${componentName}.tsx`, `${componentName}.types.ts`, `${componentName}.styles.ts`, "index.ts"];

  const results: Array<{ name: string; content: string }> = [];

  await Promise.all(
    fileNames.map(async (fileName) => {
      const content = await fetchFileAtSha(sha, `components/ui/${componentName}/${fileName}`);
      if (content !== null) {
        results.push({ name: fileName, content });
      }
    })
  );

  return results.length > 0 ? results : null;
}

export async function getComponentMeta(
  componentName: string
): Promise<{ version: string; status: string; added: string; breakingChanges: string[] } | null> {
  const registry = await fetchRegistry();
  const component = registry[componentName] as RegistryItem | undefined;

  if (!component) return null;

  return {
    version: component.version ?? "unknown",
    status: component.status ?? "stable",
    added: component.added ?? "unknown",
    breakingChanges: component.breakingChanges ?? [],
  };
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
