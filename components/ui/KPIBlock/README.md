# KPIBlock

> **v1.0.24** · stable

A key performance indicator (KPI) display component with value, trend indicators, icons, and optional loading states. Designed for dashboards with support for multiple sizes and visual variants.

## Installation

```bash
import { KPIBlock, KPIGroup } from '@/components/ui/KPIBlock';
```

## Basic Usage

```tsx
import { KPIBlock } from '@/components/ui/KPIBlock';

<KPIBlock
  label="Total Revenue"
  value="$124,500"
/>
```

## With Trend

```tsx
<KPIBlock
  label="Monthly Sales"
  value="$45,280"
  trend="up"
  change="+12.5%"
/>
```

## API

### KPIBlock Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `ReactNode` | - | Label text for the metric |
| `value` | `ReactNode` | - | The metric value to display |
| `change` | `string` | - | Change percentage or value |
| `trend` | `'up' \| 'down' \| 'neutral'` | - | Trend direction indicator |
| `icon` | `ReactNode` | - | Optional icon to display |
| `variant` | `'default' \| 'bordered' \| 'elevated' \| 'minimal'` | `'default'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the block |
| `description` | `ReactNode` | - | Optional description text |
| `loading` | `boolean` | `false` | Shows loading skeleton |
| `className` | `string` | - | Additional CSS classes |

### KPIGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | KPIBlock children |
| `columns` | `1 \| 2 \| 3 \| 4` | `3` | Number of grid columns |
| `gap` | `'sm' \| 'md' \| 'lg'` | `'md'` | Gap between items |
| `className` | `string` | - | Additional CSS classes |

## Examples

### With Icon

```tsx
<KPIBlock
  label="Active Users"
  value="2,543"
  icon={<Users className="w-5 h-5" />}
  trend="up"
  change="+5.2%"
/>
```

### Sizes

```tsx
// Small - for compact displays
<KPIBlock label="Page Views" value="15,234" size="sm" />

// Medium - default
<KPIBlock label="Total Orders" value="1,249" size="md" />

// Large - for hero metrics
<KPIBlock label="Revenue" value="$324,500" size="lg" />
```

### Variants

```tsx
// Default
<KPIBlock label="Conversion Rate" value="3.8%" variant="default" />

// Elevated with shadow
<KPIBlock label="Daily Active Users" value="8,234" variant="elevated" />

// Bordered
<KPIBlock label="Total Sales" value="$67,890" variant="bordered" />

// Minimal - no background
<KPIBlock label="Quick Stats" value="42" variant="minimal" />
```

### Negative Trend

```tsx
<KPIBlock
  label="Bounce Rate"
  value="32.4%"
  trend="down"
  change="-8.2%"
/>
```

### Loading State

```tsx
<KPIBlock
  label="Revenue"
  value="$0"
  icon={<DollarSign className="w-5 h-5" />}
  loading
/>
```

### KPIGroup Layout

```tsx
<KPIGroup columns={3}>
  <KPIBlock label="Revenue" value="$124,500" trend="up" change="+15.7%" variant="elevated" />
  <KPIBlock label="Orders" value="1,249" trend="up" change="+18.3%" variant="elevated" />
  <KPIBlock label="Users" value="2,543" trend="up" change="+5.2%" variant="elevated" />
</KPIGroup>
```

### Four Column Dashboard

```tsx
<KPIGroup columns={4}>
  <KPIBlock label="Revenue" value="$324,500" icon={<DollarSign />} trend="up" change="+15.7%" variant="elevated" />
  <KPIBlock label="Orders" value="1,249" icon={<ShoppingCart />} trend="up" change="+18.3%" variant="elevated" />
  <KPIBlock label="Users" value="8,234" icon={<Users />} trend="up" change="+12.5%" variant="elevated" />
  <KPIBlock label="Views" value="15,234" icon={<Eye />} trend="up" change="+23.1%" variant="elevated" />
</KPIGroup>
```

## Notes

- Uses Framer Motion for entrance animations (fade + slide)
- Trend indicators with color coding (green=up, red=down, gray=neutral)
- Loading skeleton with pulse animation
- Responsive grid with `md:` and `xl:` breakpoints
- Dark mode support
- Exported types: `KPITrend`, `KPIVariant`, `KPISize`, `KPIBlockProps`, `KPIGroupProps`