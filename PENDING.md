# Pending — Issue #24: base Button has no Storybook stories

## Done
- Investigated: `components/ui/Button/Button.tsx` exists with full props API
  (`variant`: primary/secondary/ghost/subtle/outline/destructive, `size`: sm/md/lg,
  `loading`, `leftIcon`, `rightIcon`, `fullWidth`), but no `Button.stories.tsx`.
- Confirmed Storybook config globs `../components/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
  and sibling button stories use `title: 'Buttons/<Name>'` + `tags: ['autodocs']` (CSF3, Storybook 10.4).

## Left
- Add `components/ui/Button/Button.stories.tsx` covering all variants, sizes, states
  (loading, disabled, icons, fullWidth) and a playground.
- Type-check / lint the new file.
