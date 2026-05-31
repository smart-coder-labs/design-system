# DataGrid Changelog

## [1.0.5] - 2026-05-31

- **Glassmorphism Styling**: Added `variant?: 'default' | 'glasphormism'` prop. When active, applies Apple-style translucent glass backgrounds, backdrop blur, and fine borders to the toolbar, grouping dropdown, export button, visibility menu, and column filter menus.
- **Nested Table Adaptation**: Leverages the table's `nested` prop to present a single unified card-style glass wrapper without nesting glass boxes inside each other.
- **Storybook Story**: Added a dedicated `Glasphormism` story demonstrating the glassmorphic state on a flat neutral background wrapper.

## [1.0.4] - 2026-05-31

- **Responsive Mobile Layout**: Implemented an elegant, Apple-style card-based layout for mobile viewports, resolving overflow issues in narrow containers.
- **`responsiveLayout` Prop**: Added programmatic layout controls (`table` | `cards` | `responsive`) to force mobile cards layout inside desktop-width containers like Storybook Docs.
- **Compound Components Pattern**: Refactored component to expose inner parts (`DataGrid.Row`, `DataGrid.Pagination`, `DataGrid.Filter`, `DataGrid.ColumnMenu`, `DataGrid.ResizeHandle`) using `React.forwardRef` and `displayName`.
- **Framer Motion Type Fixes**: Resolved type collisions on `onDrag` and `onToggle` attributes by removing conflicting HTMLAttributes inheritance on internal row properties.
- **Storybook Fixes**: Configured default arguments at the `meta` level to prevent crashes on stories without explicit arguments.

## [1.0.0] - Initial release

- Initial component implementation
- Apple-inspired design with Framer Motion animations
- Full dark mode support
- Accessible via Radix UI primitives (if applicable)
