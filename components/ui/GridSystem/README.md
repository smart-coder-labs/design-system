# GridSystem

> **v1.0.13** · stable

A responsive grid layout system with three components: GridContainer, Row, Col, and GridSystem. Provides flexible 12-column layouts with responsive breakpoints and customizable gutters.

## Installation

```bash
# The component is copied to your project with the add cli command
import { GridContainer, Row, Col, GridSystem } from '@/components/ui/GridSystem';
```

## Components

### GridContainer

A responsive container with max-width and optional fluid mode.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fluid` | `boolean` | `false` | Remove max-width for full width |
| `as` | `ElementType` | `'div'` | Custom element type |
| `className` | `string` | - | Additional classes |
| `...props` | `HTMLAttributes` | - | Standard HTML props |

### Row

A flex container for columns with gutter support.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `ElementType` | `'div'` | Custom element type |
| `gutterX` | `number` | `4` | Horizontal gap (0-12, where 4 = 1rem) |
| `gutterY` | `number` | `4` | Vertical gap (0-12) |
| `className` | `string` | - | Additional classes |
| `style` | `CSSProperties` | - | Inline styles |

### Col

A column that spans a portion of the 12-column grid.

| Prop | Type | Description |
|------|------|-------------|
| `as` | `ElementType` | Custom element type |
| `xs` | `ColSpan` | Column span on extra small (default) |
| `sm` | `ColSpan` | Column span on small (640px+) |
| `md` | `ColSpan` | Column span on medium (768px+) |
| `lg` | `ColSpan` | Column span on large (1024px+) |
| `xl` | `ColSpan` | Column span on extra large (1280px+) |
| `xxl` | `ColSpan` | Column span on 2xl (1536px+) |
| `gutterX` | `number` | Override horizontal gutter |
| `gutterY` | `number` | Override vertical gutter |
| `className` | `string` | Additional classes |

**ColSpan type**: `number | 'auto' | boolean`
- `number` (1-12): Span that many columns
- `'auto'`: Auto width based on content
- `true`: Flex fill remaining space

### GridSystem

A simple CSS grid wrapper for quick layouts.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cols` | `1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 12` | `3` | Number of columns |
| `gap` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Gap size |
| `className` | `string` | - | Additional classes |

## Examples

### Using Row/Col (Bootstrap-style)

```tsx
<GridContainer>
  <Row>
    <Col xs={12} md={6}>
      <div>Half width on desktop</div>
    </Col>
    <Col xs={12} md={6}>
      <div>Half width on desktop</div>
    </Col>
  </Row>
</GridContainer>
```

### Responsive Columns

```tsx
<Row>
  <Col xs={12} md={4} lg={3}>
    <div>Full → 1/3 → 1/4</div>
  </Col>
  <Col xs={12} md={4} lg={3}>
    <div>Full → 1/3 → 1/4</div>
  </Col>
  <Col xs={12} md={4} lg={3}>
    <div>Full → 1/3 → 1/4</div>
  </Col>
  <Col xs={12} md={12} lg={3}>
    <div>Full → full → 1/4</div>
  </Col>
</Row>
```

### Custom Gutters

```tsx
<Row gutterX={6} gutterY={8}>
  <Col xs={6}>
    <div>Item 1</div>
  </Col>
  <Col xs={6}>
    <div>Item 2</div>
  </Col>
</Row>
```

### Using GridSystem (Simple)

```tsx
<GridSystem cols={3} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</GridSystem>
```

### GridSystem Gap Variants

```tsx
// Small gap
<GridSystem cols={4} gap="sm">
  <div>...</div>
</GridSystem>

// Large gap
<GridSystem cols={2} gap="lg">
  <div>...</div>
</GridSystem>
```

### Dashboard Layout

```tsx
<GridSystem cols={3} gap="md">
  <div className="col-span-2">
    <p>Balance Card</p>
  </div>
  <div>
    <p>Income Card</p>
  </div>
  <div>
    <p>Expenses Card</p>
  </div>
  <div className="col-span-2">
    <p>Transactions</p>
  </div>
</GridSystem>
```

### Single Item (Full Width)

```tsx
<GridSystem cols={1}>
  <div className="h-48 bg-gradient-to-br">
    Full Width Banner
  </div>
</GridSystem>
```

## Notes

- Row uses negative margins with Col padding for gutters (classic Bootstrap approach)
- Default gutter is 4 (1rem) for both X and Y
- Col defaults to full width if no breakpoint props provided
- GridContainer has responsive padding: 1rem (sm), 1.5rem (md), 2rem (lg)
- Max container width is 80rem (1280px) by default
- Supports dark mode via CSS variables