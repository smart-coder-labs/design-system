# Pending — Issue #42 ([Footer] placeholder `#` links)

## Done
- Investigated: the deployed page at `smart-coder-labs.github.io/landing-ds/` is **not** built from this
  repo. This repo's GitHub Pages deploy publishes Storybook (`.github/workflows/deploy-storybook.yml`).
- Located the equivalent in-repo artifact: `components/ui/LandingPage/LandingPage.stories.tsx`
  (`Pages/Landing Page`), whose footer carries the same dead links (About, Blog, Contact,
  Privacy Policy, Terms of Service, Product column, social icons) — all `href="#"`.
- Confirmed there is no existing external-link convention in JSX (`target="_blank"` used nowhere).

## Left
- [ ] Replace the placeholder hrefs in the LandingPage story footer with verifiable destinations
      (Storybook docs deep links, repo README/issues) and drop links with no real target.
- [ ] Add `target="_blank" rel="noopener noreferrer"` on off-site links.
- [ ] `npm run type-check`.

## Out of scope / handoff to maintainer
- The literal footer reported in the issue (Components column: Buttons/Cards/Tabs/Modals/Badges)
  lives in the separate `smart-coder-labs/landing-ds` repository. The same fix must be applied there;
  it cannot be made from this repo.
- `components/ui/Footer/Footer.stories.tsx` and `Footer/README.md` keep their generic `#` examples on
  purpose — they are API demos, not a shipped page.
