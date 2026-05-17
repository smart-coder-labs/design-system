/**
 * add-version-to-readmes.ts
 *
 * One-time script: reads version + status from registry.json and inserts
 * a version line into every component README that doesn't have one yet.
 *
 * Format inserted after the `# ComponentName` heading:
 *   > **v1.0.0** · stable
 *
 * Run:
 *   tsx scripts/add-version-to-readmes.ts
 */

import fs from "fs-extra";
import path from "path";

const REGISTRY_FILE = path.join(process.cwd(), "registry.json");
const COMPONENTS_UI_DIR = path.join(process.cwd(), "components", "ui");

// Matches the version line we insert, so re-runs are idempotent
const VERSION_LINE_RE = /^> \*\*v[\d.]+\*\* · \w+\n/m;

function versionLine(version: string, status: string): string {
  return `> **v${version}** · ${status}\n`;
}

async function main() {
  const registry: Record<string, any> = await fs.readJSON(REGISTRY_FILE);

  const entries = await fs.readdir(COMPONENTS_UI_DIR, { withFileTypes: true });
  const componentFolders = entries
    .filter((e) => e.isDirectory() && !e.name.startsWith("_") && !e.name.startsWith("."))
    .map((e) => e.name);

  let updated = 0;
  let skipped = 0;

  for (const name of componentFolders) {
    const readmePath = path.join(COMPONENTS_UI_DIR, name, "README.md");
    if (!fs.existsSync(readmePath)) continue;

    const entry = registry[name];
    const version: string = entry?.version ?? "1.0.0";
    const status: string = entry?.status ?? "stable";

    let content = await fs.readFile(readmePath, "utf-8");

    // Already has a version line — update it in case version changed
    if (VERSION_LINE_RE.test(content)) {
      const newContent = content.replace(VERSION_LINE_RE, versionLine(version, status));
      if (newContent !== content) {
        await fs.writeFile(readmePath, newContent);
        updated++;
      } else {
        skipped++;
      }
      continue;
    }

    // Insert version line after the first `# Heading` line
    const headingMatch = content.match(/^# .+\n/m);
    if (!headingMatch) {
      console.warn(`  Skipping ${name}: no heading found`);
      continue;
    }

    const insertAt = (headingMatch.index ?? 0) + headingMatch[0].length;
    content = content.slice(0, insertAt) + "\n" + versionLine(version, status) + content.slice(insertAt);

    await fs.writeFile(readmePath, content);
    updated++;
  }

  console.log(`Done — ${updated} READMEs updated, ${skipped} already up to date.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
