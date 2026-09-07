# Pending — issue #76 (SplitButton dropdown trigger a11y)

## Done
- Investigated `components/ui/SplitButton/SplitButton.tsx`: chevron trigger is an icon-only
  `motion.button` with no accessible name, no `aria-haspopup`/`aria-expanded`, and the popup is a
  plain `div` of `button`s (no `role="menu"`/`role="menuitem"`).
- Identified the repo convention to mirror: `components/ui/ButtonWithDropdown/ButtonWithDropdown.tsx`
  (typed trigger with `aria-haspopup="menu"`, `aria-expanded`, `aria-controls`, `role="menu"` popup,
  arrow-key roving focus, Escape closes and returns focus).

## Left
- Implement the a11y fix in `SplitButton.tsx` (accessible name, ARIA menu semantics, keyboard nav).
- Add `SplitButton.test.tsx` covering the accessible name, ARIA state, menu roles, keyboard, axe.
- Run `npx vitest run` for SplitButton and `npm run type-check`.
