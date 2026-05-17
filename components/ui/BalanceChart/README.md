# BalanceChart

> **v1.0.28** · stable

A financial balance chart component that displays account balance history with interactive hover states, trend indicators, and optional balance masking. Uses native SVG for lightweight rendering.

## Installation

```bash
import { BalanceChart } from '@/components/ui/BalanceChart';
```

## Basic Usage

```tsx
<BalanceChart
  data={[
    { label: 'Mon', value: 10000 },
    { label: 'Tue', value: 12000 },
    { label: 'Wed', value: 11500 },
    { label: 'Thu', value: 13000 },
    { label: 'Fri', value: 12500 },
    { label: 'Sat', value: 14000 },
    { label: 'Sun', value: 15000 },
  ]}
  currency="USD"
  title="Account Balance"
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `{ label: string; value: number }[]` | Required | Array of data points |
| `currency` | `string` | `'USD'` | Currency code for formatting |
| `locale` | `string` | `'en-US'` | Locale for number formatting |
| `title` | `string` | - | Chart title displayed above balance |
| `maskable` | `boolean` | `true` | Show toggle to mask/unmask balance |
| `height` | `number` | `160` | Chart height in pixels |
| `className` | `string` | `''` | Additional CSS classes |

## Examples

### Weekly Balance Trend

```tsx
<BalanceChart
  data={[
    { label: 'Mon', value: 8500 },
    { label: 'Tue', value: 9200 },
    { label: 'Wed', value: 8800 },
    { label: 'Thu', value: 9500 },
    { label: 'Fri', value: 10200 },
    { label: 'Sat', value: 9800 },
    { label: 'Sun', value: 11000 },
  ]}
  currency="USD"
  title="Weekly Balance"
/>
```

### Different Currency

```tsx
<BalanceChart
  data={balanceData}
  currency="EUR"
  locale="de-DE"
  title="Euro Account"
/>
```

### Fixed Height

```tsx
<BalanceChart
  data={data}
  height={200}
  title="Large Chart"
/>
```

### Without Mask Toggle

```tsx
<BalanceChart
  data={data}
  maskable={false}
  title="Visible Balance"
/>
```

## Notes

- Automatically detects trend (up/down) based on first vs last value
- Shows percentage change with color-coded badge
- Hover reveals exact value and date label
- Animated line draw on initial load using Framer Motion
- Green for positive trend, red for negative
- Click the eye icon to mask/unmask the balance