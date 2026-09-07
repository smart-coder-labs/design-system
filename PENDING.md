# PENDING — issue #41: No story exists for the base Button component

## Done
- Investigated: confirmed `components/ui/Button/` has `Button.tsx`, `Button.types.ts`,
  `Button.styles.ts`, `index.ts` but **no** `Button.stories.tsx`, which is why no
  "Button" node renders in the Storybook explorer under the `Buttons/` group.
- Confirmed Storybook globs (`.storybook/main.ts`) pick up
  `../components/**/*.stories.@(js|jsx|mjs|ts|tsx)`, so a co-located story file is
  auto-discovered — no config change needed.
- Captured sibling-story conventions (`title: 'Buttons/<Name>'`, `tags: ['autodocs']`,
  `export default meta` + `type Story = StoryObj<typeof meta>`).

## Left to do
- [ ] Add `components/ui/Button/Button.stories.tsx` covering all 6 variants
      (primary, secondary, ghost, subtle, outline, destructive) and 3 sizes (sm, md, lg),
      plus loading / disabled / icons / fullWidth states.
- [ ] Verify the story file compiles (tsc on the single file) and that Storybook builds.
