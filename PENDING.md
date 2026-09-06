# Pending — issue #41: No story exists for the base Button component

## Done
- Confirmed the base `Button` (`components/ui/Button/Button.tsx`) had no Storybook story anywhere; only the six sibling button-family stories existed (ButtonWithDropdown, FAB, FABGroup, HapticButton, IconButton, SplitButton).
- Added `components/ui/Button/Button.stories.tsx` with `title: 'Buttons/Button'`, matching sibling-story conventions (`satisfies Meta<typeof Button>`, `tags: ['autodocs']`, `parameters: { layout: 'centered' }`, relative component import, lucide-react icons at `w-4 h-4`).
- 17 stories: `Default`, all 6 variants (`Primary`, `Secondary`, `Ghost`, `Subtle`, `Outline`, `Destructive`), all 3 sizes (`Small`, `Medium`, `Large`), `Loading`, `Disabled`, `WithLeftIcon`, `WithRightIcon`, `FullWidth`, plus showcases `AllVariants` and `AllSizes`.
- Picked up automatically by the `.storybook/main.ts` glob (`../components/**/*.stories.@(js|jsx|mjs|ts|tsx)`) — no config change needed.

## Left to do
- Nothing required for this issue. Note for the maintainer: `node_modules/` is absent in this checkout, so `tsc`/`eslint`/`storybook` could not be run here; types were verified by hand against `Button.types.ts`. Also, `tsconfig.json` excludes `components/`, so `npm run type-check` does not cover this file (same as every existing story). A local `npm run storybook` is the final confirmation that the "Button" node now appears in the Buttons group.
