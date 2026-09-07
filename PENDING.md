# Pending — issue #41: No story exists for the base Button component

## Done
- Investigated Storybook conventions: stories are co-located at `components/ui/<Name>/<Name>.stories.tsx`, titled `Buttons/<Name>`, `tags: ['autodocs']`, `parameters: { layout: 'centered' }`. Dark mode is global via `.storybook/preview.tsx` (no decorator needed).
- Confirmed `components/ui/Button/Button.stories.tsx` does not exist (only Button.tsx / .styles.ts / .types.ts / index.ts / README.md).
- Captured Button public API: `variant` (primary | secondary | ghost | subtle | outline | destructive, default primary), `size` (sm | md | lg, default md), `loading`, `leftIcon`, `rightIcon`, `fullWidth`, `disabled`, `aria-label`.

## Left
- (nothing — story file written and type-checked)
