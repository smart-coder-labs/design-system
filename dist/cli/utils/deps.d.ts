export type PackageManager = "npm" | "yarn" | "pnpm" | "bun";
export declare function detectPackageManager(cwd?: string): PackageManager;
export declare function isPackageInstalled(pkg: string, cwd?: string): boolean;
export declare function installPackages(packages: string[], pm: PackageManager, cwd?: string): void;
export declare function getMissingPackages(dependencies: string[], cwd?: string): string[];
//# sourceMappingURL=deps.d.ts.map