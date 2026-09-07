# Switch Changelog

## [Unreleased]

### Added

- Optional `id`, `aria-label` and `aria-labelledby` props, forwarded to the underlying
  `role="switch"` button so a label-less switch can still have an accessible name (issue #52).

### Fixed

- `Switch.types.ts` now re-exports `SwitchProps` from the component instead of duplicating an
  outdated copy of the interface, so the barrel export matches the real prop surface.

## [1.0.0] - Initial release

- Initial component implementation
- Apple-inspired design with Framer Motion animations
- Full dark mode support
- Accessible via Radix UI primitives (if applicable)
