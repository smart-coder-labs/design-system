# AssetPriceTicker

> **v1.0.28** · stable

A financial asset price display component showing symbol, price, and percentage change with trend indicators. Supports horizontal and vertical layouts, compact mode, and multiple asset types.

## Installation

```bash
import { AssetPriceTicker } from '@/components/ui/AssetPriceTicker';
```

## Basic Usage

```tsx
import { AssetPriceTicker } from '@/components/ui/AssetPriceTicker';

const assets = [
  { id: '1', symbol: 'BTC', name: 'Bitcoin', price: 67450.32, change: 2.45, type: 'crypto' as const },
  { id: '2', symbol: 'ETH', name: 'Ethereum', price: 3456.78, change: -1.23, type: 'crypto' as const },
  { id: '3', symbol: 'AAPL', name: 'Apple Inc.', price: 198.45, change: 0.87, type: 'stock' as const },
  { id: '4', symbol: 'GOOGL', name: 'Alphabet Inc.', price: 175.20, change: -0.32, type: 'stock' as const },
];

<AssetPriceTicker assets={assets} />
```

## Vertical Layout

```tsx
<AssetPriceTicker assets={assets} layout="vertical" />
```

## Compact Mode

```tsx
// Compact horizontal
<AssetPriceTicker assets={assets} compact layout="horizontal" />

// Compact vertical
<AssetPriceTicker assets={assets} compact layout="vertical" />
```

## Crypto Only

```tsx
<AssetPriceTicker 
  assets={assets.filter(a => a.type === 'crypto')} 
  layout="horizontal" 
/>
```

## With Selection Handler

```tsx
<AssetPriceTicker 
  assets={assets}
  onSelect={(asset) => {
    console.log('Selected:', asset.symbol);
    // Navigate to asset detail page
  }}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | `AssetPrice[]` | - | Array of asset price objects |
| `currency` | `string` | `'USD'` | Currency code |
| `locale` | `string` | `'en-US'` | Locale for number formatting |
| `layout` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout orientation |
| `compact` | `boolean` | `false` | Compact spacing and smaller text |
| `onSelect` | `(asset: AssetPrice) => void` | - | Click handler |
| `className` | `string` | - | Additional classes |

### AssetPrice

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `symbol` | `string` | Ticker symbol (e.g., 'BTC', 'AAPL') |
| `name` | `string` | Full asset name |
| `price` | `number` | Current price |
| `change` | `number` | Percentage change (positive or negative) |
| `type` | `'crypto' \| 'stock' \| 'forex'` | Asset type |
| `icon` | `string` | Custom icon (emoji or text) |

## Asset Types

- **crypto**: Displays '₿' icon by default
- **stock**: Displays '📈' icon by default
- **forex**: Displays '💱' icon by default

## Price Formatting

- Prices under $1 show 4-6 decimal places
- Prices $1 and above show 2 decimal places
- Automatically formatted based on locale

## Accessibility

- Buttons are focusable with keyboard
- Screen readers announce price changes
- Trend direction indicated by icon + color
- Color is not the only indicator (icons provide context)

## Notes

- Uses Framer Motion for entrance animations
- Scrollable horizontal container with hidden scrollbar
- Supports dark mode via CSS custom properties
- Change badge colors: green (up), red (down), gray (neutral)