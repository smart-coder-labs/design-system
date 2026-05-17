import fs from "fs-extra";
import path from "path";

export interface ComponentRecord {
  version: string;
  status: "stable" | "beta" | "experimental";
  type: "folder" | "flat";
  installedAt: string;
  updatedAt: string;
  history: Array<{
    version: string;
    action: "install" | "update" | "rollback";
    date: string;
  }>;
}

import type { Framework } from "./framework";

export interface DesignSystemConfig {
  componentsDir: string;
  globalCss?: string;
  framework: Framework;
  /** True when using React Server Components (Next.js App Router). */
  rsc: boolean;
  components: Record<string, ComponentRecord>;
}

const CONFIG_FILE = "design-system.json";
const DEFAULT_CONFIG: DesignSystemConfig = {
  componentsDir: "./components/ui",
  framework: "unknown",
  rsc: false,
  components: {},
};

export async function loadConfig(): Promise<DesignSystemConfig> {
  if (!fs.existsSync(CONFIG_FILE)) {
    console.warn("design-system.json not found. Using defaults.");
    return { ...DEFAULT_CONFIG };
  }
  try {
    const raw = await fs.readJSON(CONFIG_FILE);
    return { ...DEFAULT_CONFIG, ...raw, components: raw.components ?? {} };
  } catch {
    console.warn("Could not read design-system.json. Using defaults.");
    return { ...DEFAULT_CONFIG };
  }
}

export async function saveConfig(config: DesignSystemConfig): Promise<void> {
  await fs.writeJSON(CONFIG_FILE, config, { spaces: 2 });
}

/**
 * Strips the `'use client'` directive from a file's content.
 * Used for non-RSC projects (Vite, Astro, Remix, Next.js Pages Router).
 */
export function stripUseClient(content: string): string {
  return content
    .replace(/^['"]use client['"];?\s*\n?/m, "")
    .trimStart();
}

export async function recordInstall(
  config: DesignSystemConfig,
  componentName: string,
  version: string,
  type: "folder" | "flat",
  action?: "install" | "update" | "rollback",
  status?: "stable" | "beta" | "experimental"
): Promise<DesignSystemConfig> {
  const now = new Date().toISOString();
  const existing = config.components[componentName];

  // Auto-detect action if not provided
  const resolvedAction = action ?? (existing ? "update" : "install");
  const resolvedStatus = status ?? existing?.status ?? "stable";

  // Preserve existing history array or initialize it
  const existingHistory = existing?.history ?? [];

  config.components[componentName] = {
    version,
    status: resolvedStatus,
    type,
    installedAt: existing?.installedAt ?? now,
    updatedAt: now,
    history: [
      ...existingHistory,
      { version, action: resolvedAction, date: now },
    ],
  };

  return config;
}

/**
 * Detect installed components from disk.
 * Supports both folder structure (ComponentName/) and flat files (ComponentName.tsx).
 * Also merges components tracked in design-system.json.
 */
export async function detectInstalledComponents(
  resolvedComponentsDir: string,
  availableComponents: string[],
  config: DesignSystemConfig
): Promise<string[]> {
  const found = new Set<string>();

  // 1. From disk
  if (fs.existsSync(resolvedComponentsDir)) {
    const entries = await fs.readdir(resolvedComponentsDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory() && availableComponents.includes(entry.name)) {
        found.add(entry.name);
      } else if (entry.isFile()) {
        const name = path.basename(entry.name, path.extname(entry.name));
        if (
          (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) &&
          availableComponents.includes(name)
        ) {
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
