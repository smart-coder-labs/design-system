# Pending — issue #41 ([Storybook] No story exists for the base Button component)

## Done
- Investigated: base `Button` lives at `components/ui/Button/` (6 variants, 3 sizes, `loading`, `leftIcon`/`rightIcon`, `fullWidth`).
- Confirmed no `Button.stories.*` exists anywhere; `.storybook/main.ts` globs `../components/**/*.stories.tsx`, so a co-located story is auto-discovered.
- Confirmed story convention: `components/ui/<Name>/<Name>.stories.tsx`, title `Buttons/<Name>`.

## Left
- Add `components/ui/Button/Button.stories.tsx` with title `Buttons/Button` covering all variants, sizes, loading/disabled, icons, fullWidth, and a playground.
- Verify story compiles (type-check / storybook build).
