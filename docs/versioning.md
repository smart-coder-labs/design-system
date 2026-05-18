# Component Versioning

Each component is versioned independently from the CLI package. A change to `Button` only bumps `Button` — untouched components stay at their current version.

---

## How to publish a new version

There are two ways to trigger a version bump:

### 1. Commit opt-in

Add `[release]` to your commit message. The bump type defaults to `patch`.

```bash
git commit -m "fix: correct Button padding [release]"
```

To specify the bump type explicitly:

```bash
git commit -m "feat: new Card variants [release:minor]"
git commit -m "feat!: redesign Token API [release:major]"
```

### 2. Manual dispatch

Go to **GitHub → Actions → Update Component Registry → Run workflow** and select the bump type (`patch`, `minor`, or `major`).

Use this when you want to version components without tying it to a specific commit message.

---

## What gets bumped

The workflow diffs `components/ui/` from the last registry-update commit to `HEAD`. Only components whose files changed in that range are bumped. Components not touched in that range keep their current version.

```
Last release commit ──────────────────── HEAD
        │                                  │
        └── changed: Button, Card ─────────┘
                                    ↓
                           only Button and Card get bumped
```

---

## Bump type rules

| Commit / input | Bump |
|----------------|------|
| `[release]` (no type) | patch — `1.0.0 → 1.0.1` |
| `[release:patch]` | patch — `1.0.0 → 1.0.1` |
| `[release:minor]` | minor — `1.0.0 → 1.1.0` |
| `[release:major]` | major — `1.0.0 → 2.0.0` |
| Manual dispatch → patch | patch |
| Manual dispatch → minor | minor |
| Manual dispatch → major | major |

When using manual dispatch, the bump type you select applies to all components that changed since the last release.

---

## What the workflow updates

For each bumped component:

1. **`registry.json`** — increments `version` and appends an entry to `history[]`:
   ```json
   { "version": "1.1.0", "sha": "d9f3a12...", "files": ["Button.tsx", "Button.types.ts", "Button.styles.ts", "index.ts"] }
   ```
2. **`components/ui/<Name>/README.md`** — updates the version line on the second line:
   ```md
   > **v1.1.0** · stable
   ```

The workflow then commits both with `[skip ci]` to prevent a feedback loop.

---

## Registry schema

```json
{
  "Button": {
    "version": "1.1.0",
    "status": "stable",
    "added": "1.0.0",
    "breakingChanges": [],
    "history": [
      {
        "version": "1.0.0",
        "sha": "abc123f...",
        "files": ["Button.tsx", "Button.types.ts", "Button.styles.ts", "index.ts"]
      },
      {
        "version": "1.1.0",
        "sha": "d9f3a12...",
        "files": ["Button.tsx", "Button.types.ts", "Button.styles.ts", "index.ts"]
      }
    ],
    "dependencies": ["framer-motion"],
    "files": [...]
  }
}
```

The `sha` is always `HEAD` at the moment the workflow runs — not the SHA of each individual commit that touched the component. This ensures rollback fetches the full, consistent state of the component at that version.

---

## Stability tags

Each component has a `status` field managed manually in `registry.json`:

| Status | Meaning |
|--------|---------|
| `stable` | Production-ready. Breaking changes are documented in `breakingChanges[]`. |
| `beta` | Functional but the API may have minor changes before stabilization. |
| `experimental` | New component under active development. May break without notice. |

To change a component's status, edit `registry.json` directly and commit.

---

## Rollback

Consumers can roll back any component to a previous version using the CLI:

```bash
apple-design-system rollback Button 1.0.0
```

The CLI reads `history[]` from the registry, finds the SHA for that version, and fetches the component files from that exact commit on GitHub Raw. No git tags required.

The rollback is recorded in the consumer's `design-system.json`:

```json
{
  "Button": {
    "version": "1.0.0",
    "history": [
      { "version": "1.1.0", "action": "install", "date": "..." },
      { "version": "1.0.0", "action": "rollback", "date": "..." }
    ]
  }
}
```

---

## Scripts

| Script | Description |
|--------|-------------|
| `npm run build:registry` | Rebuilds `registry.json` from the component folders. Merges with existing registry to preserve version history. |
| `npm run add-versions-to-readmes` | One-time backfill: inserts the version line into all component READMEs that don't have one yet. |
| `npm run bump-versions` | Low-level bump engine called by the workflow. Accepts `--sha`, `--message`, and `--components` flags. |

---

## Workflow internals

**File:** `.github/workflows/update-registry.yml`

**Triggers:**
- Push to `main` — only proceeds if the commit message contains `[release]`
- Manual dispatch — always proceeds with the selected bump type

**Feedback loop prevention:** the bot commit appends `[skip ci]` to its message, which GitHub Actions respects natively. Commits from the bot never retrigger the workflow.

**Authentication:** the workflow uses `REGISTRY_BOT_TOKEN` (a fine-grained PAT with `Contents: Read and write`) to bypass the branch protection rule on `main`. Set this secret under **repo → Settings → Secrets and variables → Actions**.
