# StickyContainer

> **v1.0.23** · stable

A sticky surface component with Apple-style glass effect that remains visible while scrolling.

## Installation

```bash
import { StickyContainer } from '@/components/ui/StickyContainer';
```

## Basic Usage

```tsx
<div style={{ height: 400 }}>
  <StickyContainer>
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold">Filter Controls</span>
      <span className="text-xs text-text-secondary">3 active filters</span>
    </div>
  </StickyContainer>
  {/* Scrollable content below */}
</div>
```

## Custom Offset

```tsx
<div style={{ height: 400 }}>
  <div style={{ height: 64, position: 'absolute', top: 0 }} className="bg-blue-600">
    App Navigation Bar
  </div>
  <StickyContainer top={72}>
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold">Section Filter</span>
      <div className="flex gap-1">
        {['All', 'Cards', 'Bank'].map(tab => (
          <button key={tab} className="px-3 py-1 text-xs rounded-lg">{tab}</button>
        ))}
      </div>
    </div>
  </StickyContainer>
</div>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to render inside |
| `top` | `number` | `0` | Top offset in pixels |
| `zIndex` | `number` | `20` | Z-index for layering |
| `className` | `string` | - | Additional classes |
| `style` | `CSSProperties` | - | Custom styles |

## Examples

### Transaction Filters

```tsx
<div style={{ height: 500 }}>
  <StickyContainer>
    <div className="flex items-center gap-3">
      <select className="flex-1 p-2 rounded-lg border bg-surface-primary text-sm">
        <option>All Categories</option>
        <option>Dining</option>
        <option>Transport</option>
      </select>
      <button className="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg">Apply</button>
    </div>
  </StickyContainer>
  {/* Transaction list */}
</div>
```

### Sticky Header

```tsx
<div style={{ height: 400 }}>
  <StickyContainer top={0} zIndex={30} className="px-6 py-3">
    <div className="flex items-center gap-3">
      <h2 className="text-base font-bold flex-1">Dashboard</h2>
      <span className="text-xs text-text-secondary bg-background px-2 py-1 rounded-full">
        Live
      </span>
    </div>
  </StickyContainer>
  {/* Dashboard content */}
</div>
```

### With Z-Index

```tsx
<StickyContainer zIndex={50}>
  {/* Stays above other content */}
</StickyContainer>
```

## Notes

- Uses CSS `position: sticky` internally
- Glass effect with `backdrop-blur-xl` and semi-transparent background
- Rounded corners (rounded-xl) and subtle border/shadow
- Configurable `top` offset to work with navigation bars
- Useful for filters, headers, and controls that should remain visible
- Works within scrollable containers
- Dark mode support via design tokens