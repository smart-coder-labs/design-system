# Pending — Issue #30: ButtonWithDropdown menu clipped by Storybook Docs canvas

## Done
- Investigated root cause: `ButtonWithDropdown` renders its menu as an inline
  `absolute`-positioned `motion.div` inside a `relative` wrapper, so the Storybook
  Docs preview box (`.docs-story` / `.sbdocs-preview`) clips it. It also uses a
  non-existent `z-dropdown` utility (Tailwind v4 `@theme` in `globals.css` defines
  no z-index tokens), so the menu gets no stacking context at all.
- Confirmed repo convention: `Select`, `Popover`, `ContextMenu`, `Modal`, `Sheet`,
  `Toast` all render overlays via `createPortal(..., document.body)`.

## Left to do
- [ ] Port `ButtonWithDropdown` menu to `createPortal(..., document.body)` with
      fixed positioning derived from the trigger's `getBoundingClientRect()`,
      mirroring `components/ui/Popover/Popover.tsx`.
- [ ] Replace the dead `z-dropdown` class with a real z-index value.
- [ ] Keep click-outside / Escape / keyboard behaviour working with the portal node.
- [ ] Verify with `npm run type-check` (and `npm run lint` if it passes on main).

## Out of scope (noted for follow-up)
- `SplitButton.tsx`, `Combobox.tsx`, `Tooltip.tsx`, `DataGrid.tsx` share the same
  inline-absolute pattern; `Tooltip` also uses the dead `z-tooltip` utility.
