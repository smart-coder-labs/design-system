# Pending — issue #77 (mobile theme toggle stale aria-label)

## Done
- Investigated. The landing page (`landing-ds`) source is **not** in this repo; the
  duplicated desktop/mobile header toggles live in `smart-coder-labs/landing-ds`.
- Found the design-system root cause that makes the reported class of bug possible:
  `components/ui/ThemeToggle/ThemeToggle.tsx` renders `<Switch>` with **no accessible
  name at all**, and `Switch` does not accept/forward `aria-label`. Consumers are
  therefore forced to hand-roll their own labels on wrapper elements, which is exactly
  how the landing header's mobile toggle went stale.

## In progress / Left
- [ ] Add `aria-label` / `aria-labelledby` passthrough to `Switch`.
- [ ] Derive the ThemeToggle accessible name from `theme` state so it can never go stale.
- [ ] Add an a11y test asserting the accessible name flips on toggle.
- [ ] Run `npm run type-check` / `npm run test`.

## Out of scope (needs a follow-up in another repo)
- The actual mobile header markup fix must land in `smart-coder-labs/landing-ds`
  (update **every** matching toggle node, not just the first / desktop one).
