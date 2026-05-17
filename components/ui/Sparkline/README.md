# Sparkline

> **v1.0.18** · stable

A lightweight SVG line chart component for displaying small-scale data trends without axis labels or gridlines.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Sparkline } from '@/components/ui/Sparkline';
```

## Basic Usage

```tsx
import { Sparkline } from '@/components/ui/Sparkline';

function Example() {
  const data = [10, 20, 35, 30, 45, 55, 60, 75, 80, 95, 100, 120];
  
  return (
    <Sparkline 
      data={data} 
      width={200} 
      height={40} 
    />
  );
}
```

## With Area Fill

```tsx
<Sparkline
  data={[10, 20, 35, 30, 45, 55, 60]}
  width={200}
  height={40}
  showArea={true}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `number[]` | - | Array of numeric values |
| `width` | `number` | `100` | SVG width in pixels |
| `height` | `number` | `30` | SVG height in pixels |
| `color` | `string` | auto | Custom stroke color |
| `fillColor` | `string` | auto | Custom area fill color |
| `strokeWidth` | `number` | `2` | Line stroke width |
| `showArea` | `boolean` | `false` | Show filled area under line |
| `showDots` | `boolean` | `false` | Show dots at each data point |
| `showLastDot` | `boolean` | `true` | Highlight final data point |
| `trend` | `'up' \| 'down' \| 'neutral'` | auto | Override trend color detection |
| `className` | `string` | - | Additional classes |

## Examples

### Up Trend (Green)

```tsx
<Sparkline 
  data={[10, 20, 35, 45, 55, 75, 100]} 
  width={200} 
  height={40}
  showArea={true}
/>
```

### Down Trend (Red)

```tsx
<Sparkline 
  data={[120, 110, 105, 95, 85, 75, 65]} 
  width={200} 
  height={40}
  showArea={true}
/>
```

### Custom Colors

```tsx
<Sparkline 
  data={stockPrices}
  width={300}
  height={60}
  color="#22C55E"
  showArea={true}
/>
```

### Stock Price Display

```tsx
<Sparkline
  data={[187.50, 189.20, 188.10, 190.50, 192.30, 195.00]}
  width={300}
  height={60}
  color="#22C55E"
  showArea={true}
  showLastDot={true}
/>
```

### Small Inline

```tsx
<Sparkline 
  data={[15, 22, 18, 25, 30, 28, 35, 40]} 
  width={80} 
  height={24} 
  strokeWidth={1.5}
/>
```

## Notes

- Auto-detects trend from first vs last data point
- Default colors: green (up), red (down), blue (neutral)
- Area fill uses semi-transparent version of line color
- Last dot rendered with white fill and colored stroke
- No external dependencies (pure SVG)
- Responsive via width/height props
- Supports dark mode when colors are set