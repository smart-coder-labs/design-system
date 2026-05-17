# StatisticDisplay

> **v1.0.8** · stable

A flexible component for displaying key metrics with optional sparklines, trend indicators, and goal progress tracking.

## Installation

```bash
import { StatisticDisplay, StatisticHighlight } from '@/components/ui/StatisticDisplay';
```

## Basic Usage

```tsx
<StatisticDisplay
  metrics={[
    { label: 'Total Balance', value: '$124,532.80', change: '+3.2%', trend: 'up' },
    { label: 'Monthly Spending', value: '$4,230.50', change: '+8.1%', trend: 'up' },
    { label: 'Savings Rate', value: '32.5%', change: '+5.2%', trend: 'up' },
  ]}
  columns={3}
/>
```

## With Sparklines

```tsx
<StatisticDisplay
  metrics={[
    { 
      label: 'AAPL', 
      value: '$178.50', 
      change: '+1.2%', 
      trend: 'up', 
      sparkline: [170, 172, 175, 174, 176, 178, 177, 178.5],
      sparklineAccent: 'green'
    },
    // ... more metrics
  ]}
  columns={4}
/>
```

## With Goals

```tsx
<StatisticDisplay
  metrics={[
    { 
      label: 'Emergency Fund', 
      value: '$8,500', 
      target: '$10,000',
      goal: { label: 'Progress', value: '85%', progress: 0.85 }
    },
  ]}
  columns={1}
/>
```

## API

### StatisticDisplay Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `metrics` | `StatisticMetric[]` | - | Array of metric objects |
| `variant` | `'card' \| 'soft' \| 'bordered' \| 'minimal' \| 'glass'` | `'card'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the metrics |
| `columns` | `1 \| 2 \| 3 \| 4` | `3` | Number of columns |
| `animate` | `boolean` | `true` | Enable entrance animations |
| `gap` | `'sm' \| 'md' \| 'lg'` | `'md'` | Gap between cards |
| `className` | `string` | - | Additional classes |

### StatisticMetric

| Prop | Type | Description |
|------|------|-------------|
| `label` | `ReactNode` | Metric label (appears above value) |
| `value` | `ReactNode` | Main metric value |
| `description` | `ReactNode` | Optional description text |
| `change` | `string` | Change indicator (e.g., "+3.2%") |
| `trend` | `'up' \| 'down' \| 'neutral'` | Trend direction |
| `icon` | `ReactNode` | Optional icon |
| `badge` | `ReactNode` | Optional badge |
| `sparkline` | `number[]` | Array of numbers for sparkline |
| `sparklineAccent` | `StatisticAccent` | Color for sparkline |
| `goal` | `StatisticGoal` | Goal progress object |
| `subtle` | `boolean` | Use subtle background |

### StatisticHighlight Props

A single large metric display with optional sparkline and progress.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | Metric label |
| `value` | `ReactNode` | Main value |
| `change` | `string` | Change indicator |
| `trend` | `'up' \| 'down' \| 'neutral'` | Trend direction |
| `description` | `ReactNode` | Optional description |
| `badge` | `ReactNode` | Optional badge |
| `sparkline` | `number[]` | Sparkline data |
| `sparklineAccent` | `StatisticAccent` | Sparkline color |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size |
| `progress` | `number` | Progress value (0-1) |

## Examples

### Card Variant (Default)

```tsx
<StatisticDisplay
  metrics={[
    { label: 'Portfolio', value: '$245,800', change: '+8.3%', trend: 'up' },
    { label: 'Cash', value: '$52,400', change: '-2.1%', trend: 'down' },
    { label: 'Crypto', value: '$18,920', change: '+15.4%', trend: 'up' },
  ]}
  variant="card"
  columns={3}
/>
```

### Soft Variant

```tsx
<StatisticDisplay
  metrics={[
    { label: 'Balance', value: '$12,450' },
    { label: 'Income', value: '$8,230', change: '+12%', trend: 'up' },
    { label: 'Expenses', value: '$3,780', change: '-5%', trend: 'down' },
  ]}
  variant="soft"
  columns={3}
/>
```

### Glass Variant (Dark Mode)

```tsx
<StatisticDisplay
  metrics={[
    { label: 'Net Worth', value: '$456,780', change: '+$12,340', trend: 'up' },
  ]}
  variant="glass"
  columns={1}
/>
```

### StatisticHighlight

```tsx
<StatisticHighlight
  label="Total Balance"
  value="$124,532.80"
  change="+3.2%"
  trend="up"
  description="Updated 5m ago"
  badge="Premium"
  sparkline={[100, 105, 110, 108, 115, 120, 118, 125]}
  sparklineAccent="blue"
/>
```

## Notes

- Uses Framer Motion for entrance animations (staggered by index)
- Sparklines use the Sparkline subcomponent
- Supports dark mode via design tokens
- Hover effects: subtle lift and scale (scale: 1.01, y: -4)
- Goal progress bar shows progress from 0 to 1
- Trend indicators: up (green), down (red), neutral (gray)
- Accent colors: blue, green, purple, orange, pink