/**
 * bump-component-versions.ts
 *
 * Called by the GitHub Actions workflow on every push to main.
 * Receives the list of changed component names via args, bumps their
 * versions in registry.json using semver, and records the current SHA.
 *
 * Usage:
 *   tsx scripts/bump-component-versions.ts \
 *     --sha <git-sha> \
 *     --message <commit-message> \
 *     --components Button,Card,Accordion
 */

import fs from "fs-extra";
import path from "path";

const REGISTRY_FILE = path.join(process.cwd(), "registry.json");

// ---------------------------------------------------------------------------
// Args
// ---------------------------------------------------------------------------

function parseArgs(): { sha: string; message: string; components: string[] } {
  const args = process.argv.slice(2);
  let sha = "";
  let message = "";
  let components: string[] = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--sha") sha = args[++i] ?? "";
    else if (args[i] === "--message") message = args[++i] ?? "";
    else if (args[i] === "--components") components = (args[++i] ?? "").split(",").filter(Boolean);
  }

  if (!sha) {
    console.error("Error: --sha is required");
    process.exit(1);
  }
  if (components.length === 0) {
    console.log("No components to bump.");
    process.exit(0);
  }

  return { sha, message, components };
}

// ---------------------------------------------------------------------------
// Semver bump based on conventional commit message
//
// major: message contains "BREAKING CHANGE" or type ends with "!"
//         e.g. "feat!: ..." or body contains "BREAKING CHANGE:"
// minor: type is "feat"
// patch: everything else (fix, chore, refactor, style, docs, test, build, ci)
// ---------------------------------------------------------------------------

type BumpType = "major" | "minor" | "patch";

function detectBumpType(message: string): BumpType {
  const firstLine = message.split("\n")[0] ?? "";

  // BREAKING CHANGE in body
  if (message.includes("BREAKING CHANGE")) return "major";

  // feat! or fix! etc (breaking bang)
  if (/^[a-z]+!(\(.+\))?:/.test(firstLine)) return "major";

  // feat: → minor
  if (/^feat(\(.+\))?:/.test(firstLine)) return "minor";

  return "patch";
}

function bumpVersion(current: string, bump: BumpType): string {
  const parts = current.split(".").map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) return current;

  const [major, minor, patch] = parts as [number, number, number];

  switch (bump) {
    case "major": return `${major + 1}.0.0`;
    case "minor": return `${major}.${minor + 1}.0`;
    case "patch": return `${major}.${minor}.${patch + 1}`;
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const { sha, message, components } = parseArgs();

  if (!fs.existsSync(REGISTRY_FILE)) {
    console.error(`registry.json not found at ${REGISTRY_FILE}`);
    process.exit(1);
  }

  const registry: Record<string, any> = await fs.readJSON(REGISTRY_FILE);
  const bump = detectBumpType(message);

  console.log(`Bump type: ${bump} (from commit message)`);
  console.log(`SHA: ${sha}`);
  console.log(`Components: ${components.join(", ")}`);
  console.log();

  let changed = 0;

  for (const name of components) {
    const entry = registry[name];

    if (!entry || typeof entry !== "object") {
      console.warn(`  Skipping ${name}: not found in registry`);
      continue;
    }

    const oldVersion: string = entry.version ?? "1.0.0";
    const newVersion = bumpVersion(oldVersion, bump);

    const existingHistory: Array<{ version: string; sha: string; files?: string[] }> = entry.history ?? [];

    // Capture the current file names so rollback knows what to fetch at this SHA
    const currentFiles: string[] = (entry.files ?? []).map((f: { name: string }) => f.name);

    registry[name] = {
      ...entry,
      version: newVersion,
      history: [
        ...existingHistory,
        { version: newVersion, sha, files: currentFiles },
      ],
    };

    console.log(`  ${name}: ${oldVersion} → ${newVersion}`);
    changed++;
  }

  if (changed === 0) {
    console.log("Nothing to update.");
    process.exit(0);
  }

  await fs.writeJSON(REGISTRY_FILE, registry, { spaces: 2 });
  console.log(`\nUpdated ${changed} component(s) in registry.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
