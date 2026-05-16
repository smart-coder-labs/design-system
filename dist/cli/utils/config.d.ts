export interface ComponentRecord {
    version: string;
    type: "folder" | "flat";
    installedAt: string;
    updatedAt: string;
}
export interface DesignSystemConfig {
    componentsDir: string;
    globalCss?: string;
    components: Record<string, ComponentRecord>;
}
export declare function loadConfig(): Promise<DesignSystemConfig>;
export declare function saveConfig(config: DesignSystemConfig): Promise<void>;
export declare function recordInstall(config: DesignSystemConfig, componentName: string, version: string, type: "folder" | "flat"): Promise<DesignSystemConfig>;
/**
 * Detect installed components from disk.
 * Supports both folder structure (ComponentName/) and flat files (ComponentName.tsx).
 * Also merges components tracked in design-system.json.
 */
export declare function detectInstalledComponents(resolvedComponentsDir: string, availableComponents: string[], config: DesignSystemConfig): Promise<string[]>;
//# sourceMappingURL=config.d.ts.map