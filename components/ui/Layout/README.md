# Layout

> **v1.0.1** · stable

A collection of layout utility components: Stack, HStack, VStack, and Grid. These provide consistent spacing and alignment patterns for building UIs.

## Installation

```bash
import { Stack, HStack, VStack, Grid } from '@/components/ui/Layout';
```

## Components

### Stack

A flexible vertical stack container with configurable gap.

```tsx
<Stack gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

### HStack

A horizontal stack with items aligned center by default.

```tsx
<HStack gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</HStack>
```

### VStack

A vertical stack with items stacked vertically.

```tsx
<VStack gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</VStack>
```

### Grid

A responsive grid container with configurable columns and gap.

```tsx
<Grid columns={3} gap={4}>
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
  <div>Column 5</div>
  <div>Column 6</div>
</Grid>
```

## API

### Stack / HStack / VStack Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `ReactElementType` | `'div'` | HTML element to render |
| `gap` | `number \| string` | `4` | Gap between items (number = rem units × 0.25) |
| `className` | `string` | - | Additional CSS classes |
| `style` | `React.CSSProperties` | - | Additional inline styles |

### Grid Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `ReactElementType` | `'div'` | HTML element to render |
| `columns` | `number` | `1` | Number of grid columns |
| `gap` | `number \| string` | `4` | Gap between items |
| `className` | `string` | - | Additional CSS classes |
| `style` | `React.CSSProperties` | - | Additional inline styles |

## Examples

### Vertical Stack

```tsx
<VStack gap={6}>
  <div className="bg-surface-primary p-4 rounded-xl">Item 1</div>
  <div className="bg-surface-primary p-4 rounded-xl">Item 2</div>
  <div className="bg-surface-primary p-4 rounded-xl">Item 3</div>
</VStack>
```

### Horizontal Stack with Center Alignment

```tsx
<HStack gap={4}>
  <div className="bg-surface-primary p-4 rounded-xl">Item 1</div>
  <div className="bg-surface-primary p-4 rounded-xl">Item 2</div>
  <div className="bg-surface-primary p-4 rounded-xl">Item 3</div>
</HStack>
```

### 3-Column Grid

```tsx
<Grid columns={3} gap={4}>
  <div className="bg-surface-primary p-4 rounded-xl">Col 1</div>
  <div className="bg-surface-primary p-4 rounded-xl">Col 2</div>
  <div className="bg-surface-primary p-4 rounded-xl">Col 3</div>
  <div className="bg-surface-primary p-4 rounded-xl">Col 4</div>
  <div className="bg-surface-primary p-4 rounded-xl">Col 5</div>
  <div className="bg-surface-primary p-4 rounded-xl">Col 6</div>
</Grid>
```

### Custom Gap Values

```tsx
// Using numeric (rem units)
<Stack gap={8}> {/* 8 * 0.25 = 2rem */}</Stack>

// Using string
<Grid columns={2} gap="24px">
```

### Using Different HTML Elements

```tsx
// Render as section instead of div
<Stack as="section" gap={4}>

// Render as ul/li for lists
<Stack as="ul" gap={2}>
  <Stack as="li">Item 1</Stack>
</Stack>
```

## Notes

- All components use flexbox internally for stacking
- Gap values are multiplied by 0.25rem (so `gap={4}` = `1rem`)
- Grid uses CSS Grid with `repeat(columns, minmax(0, 1fr))`
- Forward refs for integration with animation libraries
- Lightweight with minimal overhead