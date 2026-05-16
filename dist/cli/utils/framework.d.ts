export type Framework = "next" | "vite" | "astro" | "remix" | "unknown";
export interface FrameworkInfo {
    framework: Framework;
    /** True when the project uses React Server Components (Next.js App Router). */
    rsc: boolean;
    label: string;
}
export declare function detectFramework(cwd?: string): FrameworkInfo;
//# sourceMappingURL=framework.d.ts.map