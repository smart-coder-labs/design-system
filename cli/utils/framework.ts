import fs from "fs-extra";
import path from "path";

export type Framework = "next" | "vite" | "astro" | "remix" | "unknown";

export interface FrameworkInfo {
  framework: Framework;
  /** True when the project uses React Server Components (Next.js App Router). */
  rsc: boolean;
  label: string;
}

const CONFIG_FILES: Array<{ file: string | string[]; framework: Framework }> = [
  { file: ["next.config.js", "next.config.ts", "next.config.mjs", "next.config.cjs"], framework: "next" },
  { file: ["astro.config.mjs", "astro.config.ts", "astro.config.js"], framework: "astro" },
  { file: ["react-router.config.ts", "react-router.config.js", "remix.config.js"], framework: "remix" },
  { file: ["vite.config.ts", "vite.config.js", "vite.config.mts", "vite.config.mjs"], framework: "vite" },
];

const FRAMEWORK_LABELS: Record<Framework, string> = {
  next: "Next.js",
  vite: "Vite",
  astro: "Astro",
  remix: "Remix / React Router",
  unknown: "Unknown",
};

function hasAppRouter(cwd: string): boolean {
  return (
    fs.existsSync(path.join(cwd, "app")) ||
    fs.existsSync(path.join(cwd, "src", "app"))
  );
}

function detectFromConfigFiles(cwd: string): Framework | null {
  for (const { file, framework } of CONFIG_FILES) {
    const files = Array.isArray(file) ? file : [file];
    if (files.some((f) => fs.existsSync(path.join(cwd, f)))) {
      return framework;
    }
  }
  return null;
}

function detectFromPackageJson(cwd: string): Framework | null {
  const pkgPath = path.join(cwd, "package.json");
  if (!fs.existsSync(pkgPath)) return null;

  try {
    const pkg = fs.readJSONSync(pkgPath);
    const deps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    };

    if (deps["next"]) return "next";
    if (deps["astro"]) return "astro";
    if (deps["@remix-run/react"] || deps["react-router"]) return "remix";
    if (deps["vite"]) return "vite";
  } catch {
    // ignore
  }

  return null;
}

export function detectFramework(cwd: string = process.cwd()): FrameworkInfo {
  const framework =
    detectFromConfigFiles(cwd) ?? detectFromPackageJson(cwd) ?? "unknown";

  const rsc = framework === "next" && hasAppRouter(cwd);

  return {
    framework,
    rsc,
    label: FRAMEWORK_LABELS[framework],
  };
}
