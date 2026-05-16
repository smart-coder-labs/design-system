export declare function getRegistryVersion(): Promise<string>;
export declare function getAvailableComponents(): Promise<string[]>;
export declare function getComponentFiles(componentName: string): Promise<Array<{
    name: string;
    content: string;
}> | null>;
export declare function getComponentDependencies(componentName: string): Promise<string[]>;
export declare function getGlobalCss(): Promise<string | null>;
//# sourceMappingURL=registry.d.ts.map