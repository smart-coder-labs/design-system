import fs from "fs-extra";
import path from "path";

const COMPONENTS_UI_DIR = path.join(process.cwd(), "components", "ui");

function buildChangelogContent(componentName: string): string {
  return `# ${componentName} Changelog

## [1.0.0] - Initial release

- Initial component implementation
- Apple-inspired design with Framer Motion animations
- Full dark mode support
- Accessible via Radix UI primitives (if applicable)
`;
}

async function generateChangelogs() {
  if (!fs.existsSync(COMPONENTS_UI_DIR)) {
    console.error(`Components directory not found: ${COMPONENTS_UI_DIR}`);
    process.exit(1);
  }

  const entries = await fs.readdir(COMPONENTS_UI_DIR, { withFileTypes: true });
  const componentFolders = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  let created = 0;
  let skipped = 0;

  for (const name of componentFolders) {
    const changelogPath = path.join(COMPONENTS_UI_DIR, name, "CHANGELOG.md");

    if (fs.existsSync(changelogPath)) {
      skipped++;
      continue;
    }

    await fs.writeFile(changelogPath, buildChangelogContent(name), "utf-8");
    created++;
  }

  console.log(`Created CHANGELOG for ${created} components, skipped ${skipped} (already exist)`);
}

generateChangelogs().catch(console.error);
