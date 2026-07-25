# Apple Creative Design System

<div align="center">

**A comprehensive design system inspired by macOS, iOS, and VisionOS**

*Built with Framer Motion + Radix UI + Tailwind CSS*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19+-61dafb)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12+-ff69b4)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-38bdf8)](https://tailwindcss.com/)
[![npm](https://img.shields.io/npm/v/@smart-coder-labs/apple-design-system)](https://www.npmjs.com/package/@smart-coder-labs/apple-design-system)

[Installation](#installation) •
[CLI](#cli) •
[Components](#components) •
[Versioning](#component-versioning) •
[Storybook](https://smart-coder-labs.github.io/design-system/) •
[Landing Page](https://smart-coder-labs.github.io/landing-ds)
</div>

---

## Installation

```bash
npm install -D @smart-coder-labs/apple-design-system
```

---

## CLI

The design system ships with a CLI inspired by shadcn/ui — it copies component source code directly into your project instead of importing a black-box package. You own the code.

### `init`

Detects your framework automatically and sets up `design-system.json`.

```bash
npx @smart-coder-labs/apple-design-system init
```

```
Apple Design System — Initialization

Detected framework: Next.js (App Router — RSC enabled)
Is this correct? › Yes

Where to install components? › ./src/components/ui
Global CSS file path? › ./src/index.css
Install required dependencies now? › Yes
```

**Supported frameworks:** Next.js (App Router and Pages Router), Vite, Astro, Remix / React Router.

Configuration is saved to `design-system.json`:

```json
{
  "framework": "next",
  "rsc": true,
  "componentsDir": "./src/components/ui",
  "globalCss": "./src/index.css",
  "components": {}
}
```

> **`rsc: true`** — Next.js App Router. Components keep `'use client'`.
> **`rsc: false`** — Vite, Astro, Remix, Pages Router. `'use client'` is stripped automatically.

---

### `add`

Adds one or more components. Resolves inter-component dependencies automatically.

```bash
npx @smart-coder-labs/apple-design-system add Button Card
```

Running without arguments opens an interactive selector (install all or pick specific ones).

After install, `design-system.json` tracks each component with its version and full history:

```json
{
  "components": {
    "Button": {
      "version": "1.1.0",
      "status": "stable",
      "type": "folder",
      "installedAt": "2025-05-10T12:00:00.000Z",
      "updatedAt": "2025-05-17T09:30:00.000Z",
      "history": [
        { "version": "1.0.0", "action": "install", "date": "2025-05-10T12:00:00.000Z" },
        { "version": "1.1.0", "action": "update",  "date": "2025-05-17T09:30:00.000Z" }
      ]
    }
  }
}
```

---

### `update`

Updates installed components to the latest version from the registry.

```bash
npx @smart-coder-labs/apple-design-system update
npx @smart-coder-labs/apple-design-system update Button Card
```

---

### `rollback`

Rolls back a component to any previously published version. Uses the exact git SHA recorded in the registry — no manual tagging required.

```bash
npx @smart-coder-labs/apple-design-system rollback Button 1.0.0
```

The CLI reads the version history from the registry, finds the git SHA for that version, and fetches the component files from that specific commit.

---

### `status`

Shows installed components, their versions, and whether they are outdated.

```bash
# Overview table for all tracked components
npx @smart-coder-labs/apple-design-system status

# Full detail for one component
npx @smart-coder-labs/apple-design-system status Button
```

**Table output:**
```
Registry version: 1.3.1

Component                            Installed    Latest       Status        Outdated
────────────────────────────────────────────────────────────────────────────────────
Button                               1.0.0        1.1.0        stable        yes
Card                                 1.1.0        1.1.0        stable        no
AnimatedCounter                      1.0.0        1.0.0        beta          no
```

**Detail output:**
```
Button
  Installed version : 1.0.0
  Registry version  : 1.1.0
  Status            : stable
  Installed at      : 2025-05-10T12:00:00.000Z
  Last updated      : 2025-05-10T12:00:00.000Z
  History:
    install   v1.0.0  2025-05-10T12:00:00.000Z
```

---

## Component Architecture

Each component lives in its own folder under `components/ui/`:

```
components/ui/
└── Button/
    ├── Button.tsx          # Component implementation
    ├── Button.types.ts     # TypeScript interfaces and types
    ├── Button.styles.ts    # Tailwind variant definitions
    ├── index.ts            # Barrel export
    └── CHANGELOG.md        # Per-component changelog
```

This structure means:
- You import from `@/components/ui/Button` — clean, no deep paths
- Each file has a single responsibility
- Types are co-located and always up to date
- You can edit any piece without touching the others

---

## Component Versioning

Each component in the registry is versioned independently from the CLI package. A change to `Button` only bumps `Button`'s version — untouched components stay at their current version.

### Registry schema

```json
{
  "Button": {
    "version": "1.1.0",
    "status": "stable",
    "added": "1.0.0",
    "breakingChanges": [],
    "history": [
      { "version": "1.0.0", "sha": "abc123f", "files": ["Button.tsx", "Button.types.ts", "Button.styles.ts", "index.ts"] },
      { "version": "1.1.0", "sha": "d9f3a12", "files": ["Button.tsx", "Button.types.ts", "Button.styles.ts", "index.ts"] }
    ],
    "dependencies": ["framer-motion"],
    "files": [...]
  }
}
```

### Stability tags

| Status | Meaning |
|--------|---------|
| `stable` | Production-ready. Breaking changes are documented. |
| `beta` | Functional but API may have minor changes. |
| `experimental` | New feature under active development. |

### Automatic version bumps

The registry is updated automatically on every push to `main` via GitHub Actions. The bump type is derived from the commit message using [Conventional Commits](https://www.conventionalcommits.org/):

| Commit type | Bump |
|-------------|------|
| `fix:`, `chore:`, `refactor:` | patch — `1.0.0 → 1.0.1` |
| `feat:` | minor — `1.0.0 → 1.1.0` |
| `feat!:` or `BREAKING CHANGE` in body | major — `1.0.0 → 2.0.0` |

Only components whose files changed in that commit are bumped.

---

## Quick Start

```bash
# 1. Initialize your project
npx @smart-coder-labs/apple-design-system init

# 2. Add components
npx @smart-coder-labs/apple-design-system add Button Card Modal

# 3. Use them
```

```tsx
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";

function App() {
  return (
    <Card variant="glass" hoverable>
      <CardHeader>Getting started</CardHeader>
      <CardContent>
        <Button variant="primary">Click me</Button>
      </CardContent>
    </Card>
  );
}
```

---

## Components

214 components across all UI categories. A few highlights:

| Component | Description | Notes |
|-----------|-------------|-------|
| **Button** | Animated buttons | 4 variants, loading state |
| **Card** | Glass and elevated cards | Compound component |
| **Modal** | VisionOS-style dialogs | Backdrop blur, spring animation |
| **DataGrid** | Advanced table with filters | TanStack Table |
| **Command** | CMD+K command palette | CMDK |
| **Kanban** | Drag-and-drop board | Dnd Kit |
| **Calendar** | Full calendar | React Day Picker |
| **SearchInput** | Search with dropdown | Compound component |
| **Tabs** | iOS segmented control | Framer Motion |
| **Switch** | iOS toggle with spring | Framer Motion |

All 214 components are documented in Storybook with interactive examples.

**[View all components in Storybook →](https://smart-coder-labs.github.io/design-system/)**

---

## Tailwind Setup

The package exports a Tailwind preset that must be included in consuming projects:

```js
// tailwind.config.js
import preset from '@smart-coder-labs/apple-design-system/tailwind.preset';

export default {
  presets: [preset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@smart-coder-labs/apple-design-system/dist/**/*.js',
  ],
};
```

---

## Dark Mode

```tsx
const [dark, setDark] = useState(false);

useEffect(() => {
  document.documentElement.classList.toggle('dark', dark);
}, [dark]);

<Switch checked={dark} onCheckedChange={setDark} label="Dark Mode" />
```

All components adapt automatically via Tailwind's `dark:` classes and design tokens.

---

## Accessibility

- WCAG 2.1 AA
- Full keyboard navigation
- Visible focus indicators
- ARIA labels throughout
- Touch targets 40×40px minimum
- Built on Radix UI primitives

---

## Migration

### From v1.0.2 or earlier

From **v1.0.3**, the Tailwind preset is required. Update your config as shown in [Tailwind Setup](#tailwind-setup) and reinstall:

```bash
npm install -D @smart-coder-labs/apple-design-system@latest
```

**[Full migration guide →](./MIGRATION.md)**

---

## License

MIT © 2025
