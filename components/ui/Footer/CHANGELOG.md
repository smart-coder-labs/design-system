# Footer Changelog

## [1.0.1] - 2026-09-07

- **Inert Placeholder Links**: `FooterLink` now renders a non-navigating `<span aria-disabled="true">` instead of an anchor when `href` is missing, empty, or `"#"`, so placeholder links no longer jump to the top of the page.
- **`external` Prop**: Added `external?: boolean` to `FooterLink`, which renders the anchor with `target="_blank"` and `rel="noopener noreferrer"` for safe cross-origin navigation.
- **Storybook Story**: Added a `PlaceholderAndExternalLinks` story demonstrating both the placeholder degradation and external link behavior; demo stories now use real relative paths.

## [1.0.0] - Initial release

- Initial component implementation
- Apple-inspired design with Framer Motion animations
- Full dark mode support
- Accessible via Radix UI primitives (if applicable)
