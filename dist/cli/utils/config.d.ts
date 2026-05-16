export interface ComponentRecord {
    version: string;
    type: "folder" | "flat";
    installedAt: string;
    updatedAt: string;
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
export declare function loadConfig(): Promise<DesignSystemConfig>;
export declare function saveConfig(config: DesignSystemConfig): Promise<void>;
/**
 * Strips the `'use client'` directive from a file's content.
 * Used for non-RSC projects (Vite, Astro, Remix, Next.js Pages Router).
 */
export declare function stripUseClient(content: string): string;
export declare function recordInstall(config: DesignSystemConfig, componentName: string, version: string, type: "folder" | "flat"): Promise<DesignSystemConfig>;
/**
 * Detect installed components from disk.
 * Supports both folder structure (ComponentName/) and flat files (ComponentName.tsx).
 * Also merges components tracked in design-system.json.
 */
export declare function detectInstalledComponents(resolvedComponentsDir: string, availableComponents: string[], config: DesignSystemConfig): Promise<string[]>;
//# sourceMappingURL=config.d.ts.map