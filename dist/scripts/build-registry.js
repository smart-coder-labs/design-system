"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const COMPONENTS_DIR = path_1.default.join(process.cwd(), "components");
const OUTPUT_FILE = path_1.default.join(process.cwd(), "registry.json");
// Base URL for raw content
// Assuming 'main' branch and standard structure. 
// Adjust BRANCH or PATH if necessary.
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/smart-coder-labs/design-system/refs/heads/main/components";
async function buildRegistry() {
    console.log("Building registry...");
    if (!fs_extra_1.default.existsSync(COMPONENTS_DIR)) {
        console.error(`Components directory not found: ${COMPONENTS_DIR}`);
        process.exit(1);
    }
    const files = await fs_extra_1.default.readdir(COMPONENTS_DIR);
    const registry = {};
    for (const file of files) {
        if (!file.endsWith(".tsx") || file.endsWith(".stories.tsx"))
            continue;
        const name = file.replace(/\.tsx$/, "");
        const content = await fs_extra_1.default.readFile(path_1.default.join(COMPONENTS_DIR, file), "utf-8");
        // Simple analysis for dependencies
        const dependencies = [];
        if (content.includes("framer-motion"))
            dependencies.push("framer-motion");
        if (content.includes("lucide-react"))
            dependencies.push("lucide-react");
        if (content.includes("clsx"))
            dependencies.push("clsx");
        if (content.includes("tailwind-merge"))
            dependencies.push("tailwind-merge");
        if (content.includes("class-variance-authority"))
            dependencies.push("class-variance-authority");
        // Radix detection
        const radixMatch = content.match(/@radix-ui\/react-[a-z-]+/g);
        if (radixMatch) {
            radixMatch.forEach(dep => {
                if (!dependencies.includes(dep))
                    dependencies.push(dep);
            });
        }
        registry[name] = {
            name,
            dependencies,
            type: "components:ui",
            files: [
                {
                    name: `${name}.tsx`,
                    url: `${GITHUB_RAW_BASE}/${file}`,
                }
            ]
        };
    }
    await fs_extra_1.default.writeJSON(OUTPUT_FILE, registry, { spaces: 2 });
    console.log(`Registry built with ${Object.keys(registry).length} components at ${OUTPUT_FILE}`);
}
buildRegistry().catch(console.error);
//# sourceMappingURL=build-registry.js.map