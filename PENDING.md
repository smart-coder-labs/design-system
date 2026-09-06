# Pending — issue #41: No story exists for the base Button component

## Done
- Investigated: base `Button` lives at `components/ui/Button/Button.tsx` (6 variants, 3 sizes, `loading`, `leftIcon`/`rightIcon`, `fullWidth`).
- Confirmed `.storybook/main.ts` globs `../components/**/*.stories.*` (stories are co-located), and no `Button.stories.*` / `title: 'Buttons/Button'` exists anywhere.

## Left
- [ ] Create `components/ui/Button/Button.stories.tsx` with `title: 'Buttons/Button'`, covering all 6 variants, 3 sizes, loading/disabled/icon/fullWidth states and composite examples.
- [ ] Type-check the new file.
