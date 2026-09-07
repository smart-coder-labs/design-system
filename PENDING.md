# Pending — Issue #41: No story for base Button component

## Done
- Investigated: base `Button` lives at `components/ui/Button/Button.tsx` with types in
  `Button.types.ts` (variants: primary/secondary/ghost/subtle/outline/destructive; sizes: sm/md/lg;
  props: loading, leftIcon, rightIcon, fullWidth, disabled).
- Confirmed no `Button.stories.*` exists anywhere in the repo.
- Confirmed `.storybook/main.ts` glob `../components/**/*.stories.@(js|jsx|mjs|ts|tsx)` picks up a
  new file at `components/ui/Button/Button.stories.tsx`.
- Confirmed sibling convention: stories are colocated in the component folder and titled `Buttons/<Name>`.

## Left
- [ ] Add `components/ui/Button/Button.stories.tsx` covering all 6 variants, 3 sizes, loading,
      disabled, icons, fullWidth, and a playground.
- [ ] Verify type-check / lint passes.
