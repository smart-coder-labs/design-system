# VirtualCardPreview

> **v1.0.17** · stable

A realistic virtual debit/credit card component with 3D flip animation, tilt effect, and interactive CVV reveal. Supports multiple card brands and gradient themes.

## Installation

```bash
# The component is copied to your project with the add cli command
import { VirtualCardPreview, type CardBrand } from '@/components/ui/VirtualCardPreview';
```

## Basic Usage

```tsx
import { VirtualCardPreview } from '@/components/ui/VirtualCardPreview';

<VirtualCardPreview
  cardholderName="John Doe"
  cardNumber="4242 4242 4242 4242"
  expiryDate="12/28"
  cvv="123"
  brand="visa"
/>
```

## Compact Variant

```tsx
<VirtualCardPreview
  cardNumber="4242 4242 4242 4242"
  brand="visa"
  variant="compact"
/>
```

The compact variant shows a small card preview suitable for lists or selection grids.

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cardholderName` | `string` | `'John Doe'` | Name on the card |
| `cardNumber` | `string` | `'4242 4242 4242 4242'` | Card number |
| `expiryDate` | `string` | `'12/28'` | Expiration date |
| `cvv` | `string` | `'123'` | CVV code |
| `brand` | `CardBrand` | `'visa'` | Card brand |
| `gradient` | `string` | `'dark'` | Background gradient theme |
| `balance` | `number` | - | Available balance to display |
| `currency` | `string` | `'USD'` | Currency code for balance |
| `frozen` | `boolean` | `false` | Card frozen state |
| `variant` | `'full' \| 'compact'` | `'full'` | Card size variant |
| `className` | `string` | - | Additional CSS classes |

### CardBrand

```typescript
type CardBrand = 'visa' | 'mastercard' | 'amex';
```

### Gradient Themes

Available gradient values: `'dark'`, `'blue'`, `'purple'`, `'gold'`, `'emerald'`, `'glass'`, `'mesh'`

## Examples

### Mastercard

```tsx
<VirtualCardPreview
  cardholderName="Jane Smith"
  cardNumber="5425 2334 3010 9903"
  expiryDate="09/27"
  cvv="456"
  brand="mastercard"
  gradient="blue"
/>
```

### Frozen Card

```tsx
<VirtualCardPreview
  cardNumber="4532 7891 2345 6789"
  brand="visa"
  frozen
/>
```

When a card is frozen, it shows a grayscale overlay with a "CARD FROZEN" badge.

### With Balance

```tsx
<VirtualCardPreview
  cardholderName="John Doe"
  cardNumber="4242 4242 4242 4242"
  brand="visa"
  gradient="purple"
  balance={12450.50}
  currency="USD"
/>
```

### Gold Theme

```tsx
<VirtualCardPreview
  cardholderName="Premium User"
  cardNumber="3782 822463 10005"
  brand="amex"
  gradient="gold"
/>
```

## Interactions

- **Click to flip** - Click the card to see the back side with CVV
- **Hover effect** - Subtle 3D tilt on mouse move (full variant only)
- **CVV reveal** - Click the CVV area on the back to show/hide the code

## Notes

- Uses Framer Motion for flip and tilt animations
- Card number is automatically masked (shows last 4 digits)
- Supports dark mode via CSS tokens
- Accessible with proper ARIA labels
- The compact variant doesn't support tilt effect