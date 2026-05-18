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

## Publishing a CLI release

The CLI is published to npm independently from the component registry. Components are never published to npm — they live on GitHub and are fetched directly by the CLI at install time.

### Steps

```bash
# 1. Bump the CLI version
npm version patch   # 1.4.0 → 1.4.1
npm version minor   # 1.4.0 → 1.5.0
npm version major   # 1.4.0 → 2.0.0

# 2. Push with the tag
git push origin main --follow-tags

# 3. Create a GitHub Release for the CLI tag (e.g. v1.5.0)
#    This triggers the publish workflow automatically
gh release create v1.5.0 --title "CLI v1.5.0" --notes "..."
```

The `publish.yml` workflow triggers **only on `v*` tags** (e.g. `v1.5.0`). Tags like `registry-v1.0.2` do not trigger it.

### Creating a component registry release

Component releases are GitHub Releases only — no npm involved.

```bash
gh release create registry-v1.0.2 --title "Components v1.0.2" --notes "..."
```

---

## Scripts

| Script | Description |
|--------|-------------|
| `npm run build:registry` | Rebuilds `registry.json` from the component folders. Merges with existing registry to preserve version history. |
| `npm run add-versions-to-readmes` | Inserts or updates the version line in all component READMEs. Safe to re-run. |
| `npm run bump-versions` | Low-level bump engine called by the workflow. Accepts `--sha`, `--message`, and `--components` flags. |
| `npm run reset-registry-versions` | One-time utility: resets all components to a given version with a single history entry. Accepts `--sha`. |

---

## Workflow internals

### `update-registry.yml` — component versioning

**Triggers:**
- Push to `main` containing `[release]` in the commit message
- Manual dispatch with explicit bump type selector

**What it does:**
1. Finds components changed since the last registry-update bot commit
2. Bumps their versions using the resolved bump type
3. Records the current `HEAD` SHA in each component's `history[]`
4. Updates each affected `README.md` with the new version line
5. Commits `registry.json` + changed READMEs back to `main`

**Feedback loop prevention:** the bot commit appends `[skip ci]` — GitHub Actions respects this natively, so the commit never retriggers the workflow.

**Authentication:** uses `REGISTRY_BOT_TOKEN` (fine-grained PAT, `Contents: Read and write`) to bypass the branch protection rule on `main`. Set it under **repo → Settings → Secrets and variables → Actions**.

### `publish.yml` — CLI npm publish

**Triggers:** push of a tag matching `v*` (e.g. `v1.5.0`). Registry tags (`registry-v*`) are explicitly excluded.

**What it does:** runs `npm run build` then `npm publish` to the npm registry using `NPM_TOKEN`.
