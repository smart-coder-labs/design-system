export declare function getRegistryVersion(): Promise<string>;
export declare function getAvailableComponents(): Promise<string[]>;
export declare function getComponentFiles(componentName: string): Promise<Array<{
    name: string;
    content: string;
}> | null>;
/**
 * Fetches a component's files at a specific historical version using the SHA
 * stored in the component's registry history.
 *
 * Falls back to candidate file names if the history entry has no `files` list
 * (for entries created before the files field was added to history).
 */
export declare function getComponentFilesAtVersion(componentName: string, version: string): Promise<Array<{
    name: string;
    content: string;
}> | null>;
export declare function getComponentMeta(componentName: string): Promise<{
    version: string;
    status: string;
    added: string;
    breakingChanges: string[];
} | null>;
export declare function getComponentDependencies(componentName: string): Promise<string[]>;
export declare function getGlobalCss(): Promise<string | null>;
//# sourceMappingURL=registry.d.ts.map