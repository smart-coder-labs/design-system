# AssetAllocationChart

> **v1.0.10** · stable

A financial portfolio visualization component that displays asset allocation as a treemap with hover interactions, risk indicators, and a detailed legend.

## Installation

```bash
import { AssetAllocationChart } from '@/components/ui/AssetAllocationChart';
```

## Basic Usage

```tsx
import { AssetAllocationChart } from '@/components/ui/AssetAllocationChart';

const assets = [
  { id: '1', name: 'US Tech Stocks', ticker: 'VGT', value: 45000, color: '#007AFF', riskLevel: 'high' },
  { id: '2', name: 'Government Bonds', ticker: 'BND', value: 25000, color: '#34C759', riskLevel: 'low' },
  { id: '3', name: 'Real Estate ETF', ticker: 'VNQ', value: 18000, color: '#FF9500', riskLevel: 'medium' },
  { id: '4', name: 'Crypto Index', ticker: 'CRYP', value: 12000, color: '#AF52DE', riskLevel: 'high' },
  { id: '5', name: 'International Equities', ticker: 'VXUS', value: 10000, color: '#5AC8FA', riskLevel: 'medium' },
];

<AssetAllocationChart assets={assets} currency="USD" />
```

## Conservative Portfolio

```tsx
<AssetAllocationChart
  assets={[
    { id: '1', name: 'Government Bonds', ticker: 'BND', value: 60000, color: '#34C759', riskLevel: 'low' },
    { id: '2', name: 'T-Bills', ticker: 'TBIL', value: 25000, color: '#5AC8FA', riskLevel: 'low' },
    { id: '3', name: 'Dividend Stocks', ticker: 'VYM', value: 15000, color: '#007AFF', riskLevel: 'medium' },
  ]}
  currency="USD"
/>
```

## With Euro Currency

```tsx
<AssetAllocationChart assets={assets} currency="EUR" />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | `AllocationAsset[]` | - | Array of asset objects |
| `currency` | `string` | `'USD'` | Currency code for formatting |
| `className` | `string` | - | Additional classes |

### AllocationAsset

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `name` | `string` | Asset name |
| `ticker` | `string` | Ticker symbol |
| `value` | `number` | Monetary value |
| `color` | `string` | Hex color or Tailwind class (e.g., 'bg-blue-500') |
| `riskLevel` | `'low' \| 'medium' \| 'high'` | Risk classification |

## Features

### Treemap Visualization
- Proportional block sizing based on asset value
- Hover interaction with scale effect
- Non-hovered items dim when one is hovered

### Risk Indicators
- Low, medium, and high risk levels
- Color-coded risk badges in legend
- Warning banner when high-risk allocation exceeds 40%

### Interactive Legend
- Sorted by percentage (largest first)
- Hover sync with treemap
- Shows name, ticker, value, and percentage

## Accessibility

- Keyboard accessible (focusable blocks)
- Sufficient color contrast for text
- Risk levels are also indicated by text, not just color

## Notes

- Uses Framer Motion for hover animations (200ms)
- Supports dark mode via CSS custom properties
- Minimum flex-basis of 10% for readability
- Automatically calculates and displays percentages