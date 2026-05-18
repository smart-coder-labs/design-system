import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";

export type PackageManager = "npm" | "yarn" | "pnpm" | "bun";

export function detectPackageManager(cwd: string = process.cwd()): PackageManager {
  if (fs.existsSync(path.join(cwd, "bun.lockb"))) return "bun";
  if (fs.existsSync(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(cwd, "yarn.lock"))) return "yarn";
  return "npm";
}

export function isPackageInstalled(pkg: string, cwd: string = process.cwd()): boolean {
  // Strip version specifier (e.g. "react@^18.0.0" -> "react")
  const name = pkg.split("@")[0] || pkg;

  // Check node_modules
  if (fs.existsSync(path.join(cwd, "node_modules", name))) return true;

  // Check package.json dependencies / devDependencies
  const pkgPath = path.join(cwd, "package.json");
  if (!fs.existsSync(pkgPath)) return false;

  try {
    const { dependencies = {}, devDependencies = {}, peerDependencies = {} } = fs.readJSONSync(pkgPath);
    return name in dependencies || name in devDependencies || name in peerDependencies;
  } catch {
    return false;
  }
}

export function installPackages(packages: string[], pm: PackageManager, cwd: string = process.cwd()): void {
  const cmd: Record<PackageManager, string> = {
    npm: `npm install ${packages.join(" ")}`,
    yarn: `yarn add ${packages.join(" ")}`,
    pnpm: `pnpm add ${packages.join(" ")}`,
    bun: `bun add ${packages.join(" ")}`,
  };

  execSync(cmd[pm], { stdio: "inherit", cwd });
}

export function getMissingPackages(dependencies: string[], cwd: string = process.cwd()): string[] {
  return dependencies.filter((dep) => !isPackageInstalled(dep, cwd));
}
