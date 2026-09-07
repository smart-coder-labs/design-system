# ButtonWithDropdown Changelog

## [Unreleased]

### Fixed

- Completed a half-applied accessibility refactor that referenced undeclared identifiers
  (`activeIndex`, `itemRefs`, `triggerRef`, `setTriggerRef`, `triggerId`, `menuId`) and shipped
  duplicated `aria-haspopup` / `aria-expanded` props on the trigger.

### Added

- Full WAI-ARIA menu button semantics: `aria-haspopup="menu"`, `aria-expanded`, `aria-controls`
  and `id` on the trigger; `role="menu"` + `aria-labelledby` on the dropdown; `role="menuitem"`
  and `aria-disabled` on items.
- Single coherent keyboard implementation via React handlers (replaces the document-level
  keydown listener): ArrowDown/ArrowUp/Enter/Space to open, roving ArrowDown/ArrowUp that wraps
  and skips disabled items, Home/End, Escape (closes + restores focus to the trigger) and Tab.

## [1.0.0] - Initial release

- Initial component implementation
- Apple-inspired design with Framer Motion animations
- Full dark mode support
- Accessible via Radix UI primitives (if applicable)
