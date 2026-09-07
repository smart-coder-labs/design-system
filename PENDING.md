# Pending — issue #41 ([Storybook] No story exists for the base Button component)

## Done
- Investigated: confirmed no `Button.stories.*` existed anywhere in the repo, which is why no
  "Button" node appears under the "Buttons" sidebar group.
- Confirmed `.storybook/main.ts` glob `../components/**/*.stories.@(js|jsx|mjs|ts|tsx)`, so the
  story must be co-located at `components/ui/Button/Button.stories.tsx` (siblings do the same).
- Created `components/ui/Button/Button.stories.tsx` with `title: 'Buttons/Button'`, matching the
  sibling CSF3 `satisfies Meta<typeof X>` convention, `tags: ['autodocs']`,
  `parameters: { layout: 'centered' }`, and `argTypes` select controls for `variant` / `size`.
- 15 stories covering the documented API: `Default`, the 6 variants
  (`Primary`/`Secondary`/`Ghost`/`Subtle`/`Outline`/`Destructive`), `AllVariants`, `Sizes`
  (sm/md/lg), `WithLeftIcon`, `WithRightIcon`, `IconOnly` (with `aria-label`), `Loading`,
  `Disabled`, `FullWidth`.

## Left / notes for the maintainer
- Not machine-verified: `npx tsc` / `npm run type-check` could not be run in this sandbox
  (command approval denied). Note also that `tsconfig.json` has `"exclude": [..., "components"]`,
  so `npm run type-check` would not cover this file (or any sibling story) anyway. Please confirm
  via `npm run storybook` / `npm run build-storybook`.
- Out of scope (not changed): the root `index.ts` barrel does not export `Button`. That is a
  separate packaging gap from this Storybook issue — worth a follow-up issue if intentional.
