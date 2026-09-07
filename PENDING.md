# Pending — issue #41: No story exists for the base Button component

## Done
- Investigated: base `Button` lives at `components/ui/Button/` (Button.tsx, Button.types.ts, index.ts).
  API: variants `primary | secondary | ghost | subtle | outline | destructive`, sizes `sm | md | lg`,
  plus `loading`, `leftIcon`, `rightIcon`, `fullWidth`, `aria-label`.
- Confirmed `.storybook/main.ts` globs `../components/**/*.stories.@(js|jsx|mjs|ts|tsx)`, so a co-located
  story file is the only thing needed for the sidebar entry. `components/ui/Button/Button.stories.tsx` was missing.
- Confirmed no other registration is needed (registry.json already has Button; root index.ts exports a
  different subset and is unrelated).

## Left
- [ ] Create `components/ui/Button/Button.stories.tsx` (CSF3, `title: 'Buttons/Button'`, `tags: ['autodocs']`)
      covering all 6 variants, 3 sizes, loading/disabled/fullWidth, icon usage and grids.
- [ ] Type-check the new story file.
