# MasonryLayout

> **v1.0.4** · stable

A responsive masonry grid layout that distributes items into columns. Items are distributed in a column-round-robin fashion to create an even layout regardless of item heights.

## Installation

```bash
# The component is copied to your project with the add cli command
import { MasonryLayout } from '@/components/ui/MasonryLayout';
```

## Basic Usage

```tsx
import { MasonryLayout } from '@/components/ui/MasonryLayout';

function Example() {
  const items = [
    <div key="1" className="bg-blue-100 p-4 h-48 rounded-xl">Item 1</div>,
    <div key="2" className="bg-green-100 p-4 h-64 rounded-xl">Item 2</div>,
    <div key="3" className="bg-purple-100 p-4 h-32 rounded-xl">Item 3</div>,
    <div key="4" className="bg-orange-100 p-4 h-56 rounded-xl">Item 4</div>,
    <div key="5" className="bg-pink-100 p-4 h-40 rounded-xl">Item 5</div>,
    <div key="6" className="bg-teal-100 p-4 h-52 rounded-xl">Item 6</div>,
  ];

  return <MasonryLayout columns={3} gap={16}>{items}</MasonryLayout>;
}
```

## Custom Columns

```tsx
<MasonryLayout columns={2} gap={24}>
  {items}
</MasonryLayout>
```

## Financial Dashboard Widgets

```tsx
<MasonryLayout columns={3} gap={16}>
  <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-6 rounded-xl h-48">
    <p className="text-sm opacity-80">Total Balance</p>
    <p className="text-3xl font-bold mt-2">$128,430</p>
  </div>
  <div className="bg-surface-secondary p-4 rounded-xl h-64">
    <p className="text-sm text-text-tertiary">Recent Transactions</p>
    {/* Transaction list */}
  </div>
  <div className="bg-emerald-500/10 p-4 rounded-xl h-36">
    <p className="text-emerald-600 text-sm font-semibold">Income</p>
    <p className="text-2xl font-bold text-emerald-600">$12,430</p>
  </div>
  {/* More widgets... */}
</MasonryLayout>
```

## API

### Props

| Prop        | Type               | Default | Description                                      |
|-------------|-------------------|---------|--------------------------------------------------|
| `children`  | `React.ReactNode[]` | -      | Array of items to display in the layout          |
| `columns`   | `number`          | `3`     | Number of columns                                |
| `gap`       | `number`          | `16`    | Gap between columns and items (in pixels)       |
| `className` | `string`          | -       | Additional CSS classes for the root container    |
| `style`     | `React.CSSProperties` | -   | Additional inline styles                        |

## Examples

### Two Columns

```tsx
<MasonryLayout columns={2} gap={24}>
  <Card title="Account Overview" />
  <Card title="Recent Activity" />
  <Card title="Budget Summary" />
  <Card title="Goals" />
</MasonryLayout>
```

### Four Columns (Photo Gallery)

```tsx
<MasonryLayout columns={4} gap={8}>
  {photos.map((photo) => (
    <img 
      key={photo.id} 
      src={photo.url} 
      alt={photo.alt}
      className="rounded-lg"
      style={{ height: 80 + Math.random() * 100 }}
    />
  ))}
</MasonryLayout>
```

### Custom Gap

```tsx
// Large gap
<MasonryLayout columns={3} gap={32}>
  {items}
</MasonryLayout>

// Small gap
<MasonryLayout columns={4} gap={8}>
  {items}
</MasonryLayout>
```

## Notes

- Uses column-round-robin distribution algorithm
- Items flow vertically within each column
- Supports dark mode via design tokens
- Uses `role="list"` and `role="listitem"` for accessibility
- Flexible width (`w-full`) to fill parent container
- Items maintain their original order within each column