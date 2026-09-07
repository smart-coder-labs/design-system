# BalanceChart Changelog

## [1.0.4] - 2026-09-07

- **Default Props**: `currency` now defaults to `'USD'` and `locale` to `'en-US'`, matching the documented API. Rendering `<BalanceChart data={...} />` without a `currency` no longer throws `TypeError: Currency code is required with currency style`.
- **Empty Data Guard**: Renders a token-styled "No data available" placeholder instead of crashing when `data` is an empty array.
- **Single Data Point**: Fixed a divide-by-zero that produced `NaN` coordinates and an invalid SVG path when `data` contains exactly one point.

## [1.0.0] - Initial release

- Initial component implementation
- Apple-inspired design with Framer Motion animations
- Full dark mode support
- Accessible via Radix UI primitives (if applicable)
