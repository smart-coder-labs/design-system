# Pending — issue #41 ([Storybook] No story exists for the base Button component)

## Done
- Investigated: base `Button` lives at `components/ui/Button/` (Button.tsx, Button.types.ts, Button.styles.ts, index.ts) — confirmed **no** `Button.stories.tsx` exists.
- Confirmed conventions: stories are co-located at `components/ui/<Name>/<Name>.stories.tsx`, CSF3, `title: 'Buttons/<Name>'`, `tags: ['autodocs']`, relative imports, `lucide-react` icons, actions from `storybook/actions`.
- Confirmed `.storybook/main.ts` glob `../components/**/*.stories.@(js|jsx|mjs|ts|tsx)` already picks up the new file — no config change needed.

## Left
- Add `components/ui/Button/Button.stories.tsx` covering all 6 variants and 3 sizes, plus loading / icons / fullWidth / disabled states.
- Verify with `npm run type-check` and `npm run lint`.

## Out of scope (flagged for maintainer)
- `Button` is not re-exported from the root `index.ts` (only `cn` + ~11 scroll/cyberpunk components are). Stories import relatively so this does not block the fix, but consumers of the package cannot import `Button` from the package root. Worth a separate issue.
