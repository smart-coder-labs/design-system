# Pending — issue #24: No stories for the base Button component

## Done
- Investigated: base Button lives at `components/ui/Button/` (`Button.tsx`, `Button.types.ts`, `Button.styles.ts`, `index.ts`).
  Props: `variant` (primary | secondary | ghost | subtle | outline | destructive), `size` (sm | md | lg),
  `loading`, `leftIcon`, `rightIcon`, `fullWidth`, plus native/motion button props. Defaults: primary / md.
- Confirmed no `Button.stories.*` exists anywhere and no `title: 'Buttons/Button'` entry.
- Confirmed Storybook glob is `../components/**/*.stories.@(js|jsx|mjs|ts|tsx)` (co-located stories),
  sibling titles use the `Buttons/<Name>` prefix, `tags: ['autodocs']`, CSF3.
- No `storySort` configured — alphabetical ordering inside the `Buttons` group is enough.

## Left to do
- (nothing — change implemented)

## Out of scope (noted for maintainers)
- The root `index.ts` barrel does not re-export `Button` / `ButtonProps`; it currently only exports `cn` and
  the scroll/cyberpunk components. That is a separate packaging gap and was intentionally left untouched.
