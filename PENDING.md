# Pending — issue #74 ([Navigation] Mobile menu panel has no background)

## Done
- Investigated the repo. **The landing page source is NOT in this repository.** `smart-coder-labs/design-system`
  ships only the component library + CLI registry; the landing site lives in the separate
  `smart-coder-labs/landing-ds` repo (README documents the two deployments). No `landing/`, `apps/`, or
  `site/` directory, no `aria-label="Toggle menu"` header, no "Features/Showcase/Components/Docs" nav.
- Confirmed root cause class: `components/ui/NavBar` exposes **no mobile menu sub-component**, so every
  consumer hand-rolls the mobile panel — which is exactly how a panel with no `background-color` ships.
- Confirmed the token utilities that a fix must use (Tailwind v4 CSS-first, `globals.css` `@theme`):
  opaque backgrounds are `bg-surface-primary` / `bg-background-primary` (NOT `bg-surface` / `bg-background`),
  borders are `border-border-primary` (NOT `border-border`). `.glass` is only 72% opaque, so it alone
  still bleeds hero text.

## Left to do
- [ ] Add `NavBarMobileMenu` (opaque panel + backdrop + z-index) to `components/ui/NavBar/`, export it,
      add a story, update `registry.json`.
- [ ] Follow-up outside this repo: apply the opaque-panel fix to the header in `smart-coder-labs/landing-ds`.
      That is where the live bug on https://smart-coder-labs.github.io/landing-ds/ is rendered from;
      this PR cannot fix it directly.
