# Pending — Issue #26: ButtonWithDropdown missing aria-expanded / aria-haspopup / menu roles

## Done
- Investigated the component: `components/ui/ButtonWithDropdown/ButtonWithDropdown.tsx` is a fully custom
  (non-Radix) dropdown using `useState` + outside-click `mousedown` listener. The trigger is a
  `motion.button` with no ARIA; menu items are plain `<button>`s with no menu roles.

## Left to do
- Add `useId()`-derived trigger/menu ids.
- Trigger: `type="button"`, `aria-haspopup="menu"`, `aria-expanded`, `aria-controls`; `aria-hidden` chevron.
- Menu container: `role="menu"`, `aria-labelledby`, `tabIndex={-1}`.
- Items: `role="menuitem"` + roving `tabIndex`.
- Keyboard support: ArrowDown/ArrowUp/Home/End/Escape/Tab, focus restore to trigger on close.
- Type-check / lint verification.
