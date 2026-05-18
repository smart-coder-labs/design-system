# PortfolioDistribution

> **v1.0.3** · experimental

A donut chart component for displaying portfolio asset allocation. Shows percentage breakdown with hover interactions that highlight individual assets and display their values in the center.

## Installation

```bash
import { PortfolioDistribution } from '@/components/ui/PortfolioDistribution';
```

## Basic Usage

```tsx
import { PortfolioDistribution } from '@/components/ui/PortfolioDistribution';

function Example() {
  return (
    <PortfolioDistribution
      assets={[
        { id: 'btc', name: 'Bitcoin', value: 45000, color: '#F7931A' },
        { id: 'eth', name: 'Ethereum', value: 28000, color: '#627EEA' },
        { id: 'sol', name: 'Solana', value: 12000, color: '#00FFA3' },
        { id: 'usdc', name: 'USD Coin', value: 8000, color: '#2775CA' },
      ]}
    />
  );
}
```

## With Change Indicators

```tsx
<PortfolioDistribution
  assets={[
    { id: 'btc', name: 'Bitcoin', value: 45000, color: '#F7931A', change: 3.2 },
    { id: 'eth', name: 'Ethereum', value: 28000, color: '#627EEA', change: -1.5 },
    { id: 'sol', name: 'Solana', value: 12000, color: '#00FFA3', change: 8.7 },
    { id: 'usdc', name: 'USD Coin', value: 8000, color: '#2775CA', change: 0.0 },
    { id: 'link', name: 'Chainlink', value: 5000, color: '#375BD2', change: -2.1 },
  ]}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | `PortfolioAsset[]` | required | Array of portfolio assets |
| `totalLabel` | `string` | `'Total Portfolio'` | Label shown in center when not hovering |
| `currency` | `string` | `'USD'` | Currency code for formatting |
| `locale` | `string` | `'en-US'` | Locale for number formatting |
| `size` | `number` | `200` | Size of the donut chart in pixels |
| `className` | `string` | - | Additional classes |

### PortfolioAsset

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `name` | `string` | Display name |
| `value` | `number` | Asset value (numeric) |
| `color` | `string` | Hex color for the segment |
| `percentage?` | `number` | Optional override for percentage |
| `change?` | `number` | Optional change indicator (positive/negative) |

## Examples

### Compact Portfolio

```tsx
<PortfolioDistribution
  assets={[
    { id: 'btc', name: 'Bitcoin', value: 50000, color: '#F7931A' },
    { id: 'eth', name: 'Ethereum', value: 35000, color: '#627EEA' },
    { id: 'others', name: 'Other', value: 15000, color: '#888888' },
  ]}
  size={160}
/>
```

### Single Asset

```tsx
<PortfolioDistribution
  assets={[
    { id: 'btc', name: 'Bitcoin', value: 100000, color: '#F7931A', change: 5.0 },
  ]}
/>
```

### Two Assets (50/50)

```tsx
<PortfolioDistribution
  assets={[
    { id: 'btc', name: 'Bitcoin', value: 50000, color: '#F7931A', change: 1.2 },
    { id: 'eth', name: 'Ethereum', value: 50000, color: '#627EEA', change: -0.8 },
  ]}
/>
```

### Custom Currency (EUR)

```tsx
<PortfolioDistribution
  assets={[
    { id: 'btc', name: 'Bitcoin', value: 45000, color: '#F7931A' },
    { id: 'eth', name: 'Ethereum', value: 28000, color: '#627EEA' },
    { id: 'sol', name: 'Solana', value: 12000, color: '#00FFA3' },
  ]}
  currency="EUR"
  locale="de-DE"
  totalLabel="Gesamtvermögen"
/>
```

### Dark Mode

```tsx
<div className="dark p-6 bg-gray-950 rounded-2xl">
  <PortfolioDistribution
    assets={assets}
  />
</div>
```

## Interaction

- **Hover**: Hovering over a segment or legend item highlights that asset, dims others, and shows its value in the center
- **Animation**: Segments animate in on mount with staggered timing
- **Legend**: Each asset has a corresponding legend item with color dot, name, percentage, and value

## Notes

- Uses SVG-based donut chart (no external charting library)
- Automatically calculates percentages from values
- Uses Framer Motion for entrance animations
- Center label updates dynamically on hover
- Change indicators show as colored badges (green for positive, red for negative)
- Supports dark mode via design tokens