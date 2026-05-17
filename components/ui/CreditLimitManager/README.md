# CreditLimitManager

> **v1.0.33** · stable

An interactive credit limit adjustment component with a visual slider, real-time formatting, and protective messaging. Allows users to temporarily lower their credit limit for security.

## Installation

```bash
import { CreditLimitManager } from '@/components/ui/CreditLimitManager';
```

## Basic Usage

```tsx
<CreditLimitManager
  maxLimit={10000}
  initialLimit={5000}
  currentBalance={1500}
/>
```

## Full Limit

```tsx
<CreditLimitManager
  maxLimit={10000}
  initialLimit={10000}
  currentBalance={3200}
/>
```

## Near Balance

When current balance is close to the credit limit.

```tsx
<CreditLimitManager
  maxLimit={5000}
  initialLimit={1800}
  currentBalance={1750}
/>
```

## High Limit

```tsx
<CreditLimitManager
  maxLimit={50000}
  initialLimit={25000}
  currentBalance={8500}
/>
```

## Euro Currency

```tsx
<CreditLimitManager
  maxLimit={15000}
  initialLimit={10000}
  currentBalance={3200}
  currency="EUR"
/>
```

## Zero Balance

```tsx
<CreditLimitManager
  maxLimit={2000}
  initialLimit={2000}
  currentBalance={0}
/>
```

## With Save Callback

```tsx
<CreditLimitManager
  maxLimit={10000}
  initialLimit={5000}
  currentBalance={1500}
  onSave={(newLimit) => {
    console.log('New limit set:', newLimit);
    // API call to update limit
  }}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `maxLimit` | `number` | `10000` | Maximum available credit limit |
| `initialLimit` | `number` | `10000` | Starting credit limit value |
| `currentBalance` | `number` | `1500` | Current outstanding balance |
| `currency` | `string` | `'USD'` | Currency code for formatting |
| `className` | `string` | - | Additional CSS classes |
| `onSave` | `(newLimit: number) => void` | - | Callback when limit is changed |

## Visual Feedback

The progress bar changes color based on the limit percentage:
- **Green** (emerald): Below 50% of max limit
- **Purple** (violet): Between 50% and 80% of max limit
- **Amber**: Above 80% of max limit

## Button States

- **Default**: Dark background, active when limit changed
- **Disabled**: Gray, shown when no changes made
- **Loading**: Spinner animation during save
- **Saved**: Green checkmark with success message

## Notes

- Minimum limit is constrained to the current balance
- Slider steps in $100 increments
- Includes security explanation about lowering limits
- Saves with simulated 800ms delay for UX
- Dark mode support via design tokens
- Fully accessible with keyboard navigation