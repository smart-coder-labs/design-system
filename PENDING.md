# Pending — issue #41 ([Storybook] No story exists for the base Button component)

## Done
- Investigated: base `Button` lives at `components/ui/Button/Button.tsx`; 6 variants
  (`primary | secondary | ghost | subtle | outline | destructive`), 3 sizes (`sm | md | lg`),
  plus `loading`, `leftIcon`, `rightIcon`, `fullWidth`.
- Confirmed no `Button.stories.*` exists anywhere; the `Buttons/` sidebar group is built from
  co-located `components/ui/*/*.stories.tsx` files matched by the
  `../components/**/*.stories.@(js|jsx|mjs|ts|tsx)` glob in `.storybook/main.ts`.

## In progress
- Adding `components/ui/Button/Button.stories.tsx` with `title: 'Buttons/Button'`, following the
  existing IconButton story conventions (CSF3, `tags: ['autodocs']`, `layout: 'centered'`).

## Left to do
- Type-check the new story file.

## Out of scope (flagged for maintainers)
- `Button` is not re-exported from the root `index.ts`, so consumers of the published package
  cannot import it. Tracked separately — not changed here.
