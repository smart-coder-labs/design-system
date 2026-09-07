# ThemeToggle Changelog

## [Unreleased]

### Fixed

- The switch now exposes an accessible name derived from the current theme
  (`"Cambiar a modo claro"` / `"Cambiar a modo oscuro"`), so it no longer contradicts the
  rendered state (issue #52).
- On mount, when no valid preference is stored, the theme already applied to `<html>`
  (`data-theme` or the `dark` class) is adopted instead of being overwritten by `defaultMode`.
  A stored preference still wins, and the DOM is only rewritten when it does not already match.

### Added

- `'use client'` directive for Next.js App Router compatibility.
- `aria-pressed` on the `Auto` button while following the system preference.

## [1.0.0] - Initial release

- Initial component implementation
- Apple-inspired design with Framer Motion animations
- Full dark mode support
- Accessible via Radix UI primitives (if applicable)
