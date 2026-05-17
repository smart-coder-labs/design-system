# CountersListWithChart

> **v1.0.3** · stable

A combined statistics and chart component that displays a list of values alongside a donut or pie chart. Ideal for portfolio allocation, expense breakdowns, and data distribution visualization.

## Installation

```bash
import { CountersListWithChart } from '@/components/ui/CountersListWithChart';
```

## Basic Usage

```tsx
<CountersListWithChart
  title="Asset Allocation"
  items={[
    { label: 'US Equities', value: 45000, percent: 45, color: '#007AFF' },
    { label: 'Bonds', value: 20000, percent: 20, color: '#34C759' },
    { label: 'Crypto', value: 15000, percent: 15, color: '#AF52DE' },
    { label: 'Real Estate', value: 12000, percent: 12, color: '#FF9500' },
    { label: 'Cash', value: 8000, percent: 8, color: '#5AC8FA' },
  ]}
/>
```

## Donut Chart

```tsx
<CountersListWithChart
  title="Asset Allocation"
  chartType="donut"
  items={[
    { label: 'US Equities', value: 45000, percent: 45, color: '#007AFF' },
    { label: 'Bonds', value: 20000, percent: 20, color: '#34C759' },
    { label: 'Crypto', value: 15000, percent: 15, color: '#AF52DE' },
  ]}
/>
```

## Pie Chart

```tsx
<CountersListWithChart
  title="Expense Breakdown"
  chartType="pie"
  items={[
    { label: 'Housing', value: 2200, percent: 35, color: '#007AFF' },
    { label: 'Food', value: 1200, percent: 19, color: '#34C759' },
    { label: 'Transport', value: 800, percent: 13, color: '#FF9500' },
    { label: 'Entertainment', value: 600, percent: 10, color: '#AF52DE' },
    { label: 'Savings', value: 1500, percent: 24, color: '#5AC8FA' },
  ]}
/>
```

## Without Title

```tsx
<CountersListWithChart
  items={[
    { label: 'Checking', value: 5500, percent: 28, color: '#007AFF' },
    { label: 'Savings', value: 12000, percent: 60, color: '#34C759' },
    { label: 'Investment', value: 2500, percent: 13, color: '#AF52DE' },
  ]}
/>
```

## Three Items (Portfolio Summary)

```tsx
<CountersListWithChart
  title="Portfolio Summary"
  items={[
    { label: 'Conservative', value: 60000, percent: 60, color: '#34C759' },
    { label: 'Moderate', value: 30000, percent: 30, color: '#007AFF' },
    { label: 'Aggressive', value: 10000, percent: 10, color: '#AF52DE' },
  ]}
/>
```

## Many Items (Diversified Portfolio)

```tsx
<CountersListWithChart
  title="Diversified Portfolio"
  items={[
    { label: 'US Large Cap', value: 35000, percent: 28, color: '#007AFF' },
    { label: 'International', value: 20000, percent: 16, color: '#34C759' },
    { label: 'Emerging Markets', value: 15000, percent: 12, color: '#FF9500' },
    { label: 'Real Estate', value: 18000, percent: 14, color: '#AF52DE' },
    { label: 'Bonds', value: 12000, percent: 10, color: '#5AC8FA' },
    { label: 'Commodities', value: 10000, percent: 8, color: '#FF6482' },
    { label: 'Crypto', value: 8000, percent: 6, color: '#FFD60A' },
    { label: 'Cash', value: 7500, percent: 6, color: '#30D158' },
  ]}
/>
```

## Single Item

```tsx
<CountersListWithChart
  title="Allocation"
  items={[
    { label: 'Total Portfolio', value: 100000, percent: 100, color: '#007AFF' },
  ]}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Optional title displayed above the list |
| `items` | `CountersListWithChartItem[]` | - | Array of items with label, value, percent, and color |
| `chartType` | `'donut' \| 'pie'` | `'donut'` | Chart visualization type |
| `className` | `string` | - | Additional CSS classes |

### CountersListWithChartItem

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Display label for the item |
| `value` | `number` | Numeric value (used for chart data) |
| `percent` | `number` | Percentage value (0-100) |
| `color` | `string` | Hex color code for the chart segment and percentage |

## Interactive Behavior

- Hovering over a list item highlights the corresponding chart segment
- List items are keyboard accessible with proper ARIA roles
- Active state shows highlighted background on the list item

## Notes

- Uses the internal Chart component for visualization
- Responsive layout: stacks vertically on mobile, side-by-side on larger screens
- Chart takes up 1/3 of width on desktop (md and up)
- Each item displays value, label, and percentage with its assigned color
- Dark mode support via design tokens