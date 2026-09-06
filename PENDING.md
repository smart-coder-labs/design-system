# Pending — issue #25: Header search results cannot be operated with the keyboard

## Done
- Investigated. The landing page (`/landing-ds/`) lives in a **separate repo**
  (`smart-coder-labs/landing-ds`); this repo ships the library component behind it.
- Identified `components/ui/SearchInput/SearchInput.tsx` as the root cause: it has
  only an Enter→`onSearch` handler, no Arrow/Home/End/Escape handling, and no
  combobox/listbox/option ARIA at all.

## Left
- Implement the ARIA combobox + roving `activeIndex` keyboard pattern in
  `components/ui/SearchInput/` (Input, Dropdown, Item) and its types.
- Type-check the change.
- Follow-up (out of scope for this repo): bump the dependency in
  `smart-coder-labs/landing-ds` so the header search picks up the fix.
