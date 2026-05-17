# Chart

> **v1.0.24** · stable

A simple yet elegant chart component supporting pie, donut, line, bar, and radial chart types. Uses native SVG for lightweight rendering with interactive hover states and accessibility features.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Chart } from '@/components/ui/Chart';
```

## Basic Usage

```tsx
import { Chart } from '@/components/ui/Chart';

<Chart
  type="pie"
  data={{
    labels: ['Stocks', 'Bonds', 'Crypto'],
    datasets: [{
      data: [45, 30, 25],
      backgroundColor: ['#007AFF', '#34C759', '#FF9500'],
    }],
  }}
/>
```

## Chart Types

```tsx
// Pie chart
<Chart type="pie" data={...} />

// Donut chart (with hollow center)
<Chart type="donut" data={...} />

// Line chart (placeholder)
<Chart type="line" data={...} />

// Bar chart (placeholder)
<Chart type="bar" data={...} />

// Radial chart (single value)
<Chart type="radial" data={...} />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'pie' \| 'donut' \| 'line' \| 'bar' \| 'radial'` | Required | Chart type |
| `data` | `ChartData` | Required | Data object with labels and datasets |
| `options` | `any` | - | Additional chart options (future use) |
| `className` | `string` | - | Additional CSS classes |
| `size` | `number` | `220` | Width/height of the chart in pixels |
| `activeIndex` | `number \| null` | - | Currently highlighted slice index |
| `onSliceHover` | `(index: number \| null) => void` | - | Callback when slice is hovered |

### ChartData

| Prop | Type | Description |
|------|------|-------------|
| `labels` | `string[]` | Array of labels for each slice/point |
| `datasets` | `Dataset[]` | Array of datasets (use first one) |

### Dataset

| Prop | Type | Description |
|------|------|-------------|
| `data` | `number[]` | Array of values |
| `backgroundColor` | `string[]` | Array of colors for each value |

## Examples

### Pie Chart

```tsx
<Chart
  type="pie"
  data={{
    labels: ['Stocks', 'Bonds', 'Crypto', 'Real Estate', 'Cash'],
    datasets: [{
      data: [45, 20, 15, 12, 8],
      backgroundColor: ['#007AFF', '#34C759', '#AF52DE', '#FF9500', '#5AC8FA'],
    }],
  }}
  size={220}
/>
```

### Donut Chart

```tsx
<Chart
  type="donut"
  data={{
    labels: ['US Stocks', 'International', 'Bonds', 'Alternatives'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ['#007AFF', '#34C759', '#FF9500', '#AF52DE'],
    }],
  }}
  size={220}
/>
```

### Interactive with Hover Callback

```tsx
const [activeIndex, setActiveIndex] = useState<number | null>(null);

<Chart
  type="pie"
  data={data}
  activeIndex={activeIndex}
  onSliceHover={setActiveIndex}
/>
```

### Different Sizes

```tsx
// Small
<Chart type="pie" data={data} size={150} />

// Large
<Chart type="donut" data={data} size={280} />
```

### Radial Progress

```tsx
<Chart
  type="radial"
  data={{
    labels: ['Progress'],
    datasets: [{ data: [75] }],
  }}
  size={200}
/>
```

## Notes

- Native SVG rendering - no external chart library required
- Uses Framer Motion not required (CSS transitions)
- Full keyboard accessibility (tabIndex, onFocus, onBlur)
- ARIA labels for screen readers
- Interactive hover states with scale and opacity transitions
- Placeholder for line/bar types (extendable)
- Donut chart uses hollow center with configurable inner radius
- Auto-calculated colors fallback using HSL if not provided
- Dark mode aware with CSS custom properties