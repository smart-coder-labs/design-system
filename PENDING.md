# Pending — issue #41: No story exists for the base Button component

## Done
- Investigated: base `Button` lives at `components/ui/Button/Button.tsx` with variants
  `primary | secondary | ghost | subtle | outline | destructive` and sizes `sm | md | lg`.
- Confirmed no `Button.stories.*` exists anywhere; only the 6 sibling button-family stories.
- Confirmed `.storybook/main.ts` already globs `../components/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
  so no Storybook config change is needed.

## Left
- Add `components/ui/Button/Button.stories.tsx` with `title: 'Buttons/Button'`,
  `tags: ['autodocs']`, covering all 6 variants, 3 sizes, icons, loading, disabled,
  fullWidth, and a Playground.
- Run `npm run type-check` and `npm run lint`.
