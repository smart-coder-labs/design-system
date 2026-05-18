/**
 * reset-registry-versions.ts
 *
 * One-time script: resets all component versions to 1.0.1 with a single
 * clean history entry pointing to the current HEAD SHA.
 *
 * Run:
 *   tsx scripts/reset-registry-versions.ts --sha <git-sha>
 */

import fs from "fs-extra";
import path from "path";

const REGISTRY_FILE = path.join(process.cwd(), "registry.json");

const sha = process.argv[process.argv.indexOf("--sha") + 1];
if (!sha) {
  console.error("Usage: tsx scripts/reset-registry-versions.ts --sha <git-sha>");
  process.exit(1);
}

async function main() {
  const registry: Record<string, any> = await fs.readJSON(REGISTRY_FILE);

  let count = 0;
  for (const [key, value] of Object.entries(registry)) {
    if (key === "_version" || typeof value !== "object") continue;

    const files: string[] = (value.files ?? []).map((f: { name: string }) => f.name);

    registry[key] = {
      ...value,
      version: "1.0.1",
      added: "1.0.0",
      breakingChanges: [],
      history: [{ version: "1.0.1", sha, files }],
    };
    count++;
  }

  await fs.writeJSON(REGISTRY_FILE, registry, { spaces: 2 });
  console.log(`Reset ${count} components to v1.0.1 (sha: ${sha.slice(0, 7)})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
