# CashbackWidget

> **v1.0.9** · stable

A visual widget displaying cashback earnings with an animated circular progress indicator. Designed for fintech and loyalty applications to showcase user rewards in an engaging, animated format.

## Installation

```bash
# The component is copied to your project with the add cli command
import { CashbackWidget } from '@/components/ui/CashbackWidget';
```

## Basic Usage

```tsx
import { CashbackWidget } from '@/components/ui/CashbackWidget';

<CashbackWidget
  earned={45.50}
  total={100}
  percentage={2.5}
  period="This month"
/>
```

## Variants

The widget adapts based on the props provided:

- **With goal** - Shows progress toward a target amount
- **Without goal** - Displays earned amount without progress ring
- **Near goal** - Visual emphasis when approaching target
- **Completed goal** - Full progress indication

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `earned` | `number` | Required | Amount of cashback earned |
| `total` | `number` | - | Target goal amount (enables progress ring) |
| `currency` | `string` | `'USD'` | Currency code for formatting |
| `locale` | `string` | `'en-US'` | Locale for number formatting |
| `percentage` | `number` | `2.5` | Cashback percentage rate |
| `label` | `string` | `'Cashback Earned'` | Label displayed above amount |
| `period` | `string` | `'This month'` | Time period description |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Default with Goal

```tsx
<CashbackWidget
  earned={45.50}
  total={100}
  currency="USD"
  percentage={2.5}
  period="This month"
/>
```

### Without Goal (No Progress Ring)

```tsx
<CashbackWidget
  earned={32.80}
  currency="USD"
  percentage={1.5}
  period="This week"
/>
```

### Completed Goal

```tsx
<CashbackWidget
  earned={100}
  total={100}
  percentage={3.0}
  period="This month"
/>
```

### Euro Currency (German Locale)

```tsx
<CashbackWidget
  earned={78.50}
  total={200}
  currency="EUR"
  locale="de-DE"
  percentage={2.0}
  period="This quarter"
/>
```

### High Percentage Bonus

```tsx
<CashbackWidget
  earned={150.00}
  total={200}
  percentage={5.0}
  label="Bonus Cashback"
  period="Promotional period"
/>
```

## Notes

- Uses Framer Motion for smooth entrance animation and hover effects
- Animated circular progress using SVG stroke-dashoffset
- Gradient from amber to orange for the progress ring
- Intl.NumberFormat for proper currency formatting per locale
- Hover effect with subtle lift animation
- Sparkle icon indicates percentage rate
- Trend indicator shows percentage increase
- Full dark mode support via CSS tokens
- Uses CSS custom properties for theming