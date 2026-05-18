# PriceDisplay

> **v1.0.2** · experimental

A component for displaying prices with proper currency formatting. Supports multiple currencies, locales, and visual variants. Parts (currency symbol, integer, decimal) are individually styled for better visual hierarchy.

## Installation

```bash
import { PriceDisplay } from '@/components/ui/PriceDisplay';
```

## Basic Usage

```tsx
import { PriceDisplay } from '@/components/ui/PriceDisplay';

<PriceDisplay amount={1234.56} currency="USD" />
// Output: $1,234.56
```

## Different Currencies

```tsx
// Euro
<PriceDisplay amount={199.99} currency="EUR" locale="de-DE" />
// Output: 199,99 €

// British Pound
<PriceDisplay amount={849.00} currency="GBP" locale="en-GB" />
// Output: £849.00

// Japanese Yen (no decimals)
<PriceDisplay amount={12500} currency="JPY" locale="ja-JP" showCents={false} />
// Output: ¥12,500
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `amount` | `number` | required | Value in smallest currency unit |
| `currency` | `string` | `'USD'` | Currency code (ISO 4217) |
| `locale` | `string` | `'en-US'` | Locale for formatting |
| `showCents` | `boolean` | `true` | Show decimal places |
| `compact` | `boolean` | `false` | Use compact sizing |
| `original` | `number \| null` | `null` | Original price (shows strikethrough) |
| `variant` | `'default' \| 'muted' \| 'accent'` | `'default'` | Visual style |
| `currencyDisplay` | `'symbol' \| 'code' \| 'narrowSymbol'` | `'symbol'` | How to display currency |
| `className` | `string` | - | Additional classes |

## Examples

### Without Cents

```tsx
<PriceDisplay amount={199} currency="USD" showCents={false} />
// Output: $199
```

### Compact Mode

```tsx
// For large values or small spaces
<PriceDisplay amount={1250000} currency="USD" compact />
// Output: $1.25M (styled smaller)
```

### Sale Price (Original Price)

```tsx
<PriceDisplay 
  amount={79.99} 
  original={129.99} 
  currency="USD" 
/>
// Shows: $79.99 with $129.99 struck through
```

### Muted Variant

```tsx
// For secondary prices or discounts
<PriceDisplay amount={49.99} currency="USD" variant="muted" />
```

### Accent Variant

```tsx
// For highlighted prices (e.g., call-to-action)
<PriceDisplay amount={199} currency="USD" variant="accent" />
```

### Currency Display Options

```tsx
// Symbol (default): $100
<PriceDisplay amount={100} currency="USD" currencyDisplay="symbol" />

// Narrow Symbol: €100
<PriceDisplay amount={100} currency="EUR" currencyDisplay="narrowSymbol" />

// Code: 100 USD
<PriceDisplay amount={100} currency="USD" currencyDisplay="code" />
```

## Notes

- Uses `Intl.NumberFormat` for proper locale-aware formatting
- Each part (currency, integer, decimal) is wrapped in a separate `<span>` for individual styling
- The integer part is larger than the decimal/cents portion
- Original price is shown with strikethrough styling
- Supports dark mode via design tokens
- `tabular-nums` class used for proper number alignment
- ARIA label provides accessibility: `Price {currency} {amount}`