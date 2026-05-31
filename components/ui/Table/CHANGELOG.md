# Table Changelog

## [1.0.1] - 2026-05-31

- **Glassmorphism Support**: Added `variant?: 'default' | 'glasphormism'` prop to support Apple's design system glass rendering (translucent backgrounds, blur, fine borders) in header, body rows, and pagination.
- **Nested Composition**: Added `nested?: boolean` prop to allow nesting inside parent layouts (like `DataGrid`) without duplicating borders and shadow wrappers.

## [1.0.0] - Initial release

- Initial component implementation
- Apple-inspired design with Framer Motion animations
- Full dark mode support
- Accessible via Radix UI primitives (if applicable)
