# InstallmentSimulator

> **v1.0.1** · stable

A Buy Now Pay Later (BNPL) installment calculator component. Displays monthly payment options, calculates interest, and visualizes principal vs. interest breakdown.

## Installation

```bash
# The component is copied to your project with the add cli command
import { InstallmentSimulator } from '@/components/ui/InstallmentSimulator';
```

## Basic Usage

```tsx
import { InstallmentSimulator } from '@/components/ui/InstallmentSimulator';

<InstallmentSimulator
  purchaseAmount={1200}
  onConfirm={(months, monthlyPayment) => console.log(months, monthlyPayment)}
/>
```

## With Custom Options

```tsx
<InstallmentSimulator
  purchaseAmount={25000}
  maxMonths={24}
  interestRate={12}
  onConfirm={handleConfirm}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `purchaseAmount` | `number` | `1200` | Total purchase amount |
| `currency` | `string` | `'USD'` | Currency code for formatting |
| `maxMonths` | `number` | `12` | Maximum installment months available |
| `interestRate` | `number` | `18` | Annual interest rate (APR) as percentage |
| `onConfirm` | `(months: number, monthlyPayment: number) => void` | - | Called when user confirms plan |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Large Purchase

```tsx
<InstallmentSimulator
  purchaseAmount={25000}
  maxMonths={24}
  interestRate={12}
  onConfirm={(months, payment) => console.log(`${months} months at $${payment}/mo`)}
/>
```

### Small Purchase

```tsx
<InstallmentSimulator
  purchaseAmount={200}
  maxMonths={6}
  interestRate={24}
/>
```

### Zero Interest (Promotional)

```tsx
<InstallmentSimulator
  purchaseAmount={1500}
  maxMonths={12}
  interestRate={0}
/>
```

### Mexican Pesos

```tsx
<InstallmentSimulator
  purchaseAmount={25000}
  currency="MXN"
  maxMonths={12}
  interestRate={36}
/>
```

### With Custom Handler

```tsx
function PaymentFlow() {
  const handleConfirm = (months, monthlyPayment) => {
    // Navigate to payment or save selection
    console.log(`Selected ${months}x${monthlyPayment}`);
  };

  return (
    <InstallmentSimulator
      purchaseAmount={1200}
      onConfirm={handleConfirm}
    />
  );
}
```

## Notes

- Uses standard amortization formula for payment calculation
- Available month options: 1, 3, 6, 9, 12 (filtered by maxMonths)
- Visual bar chart shows principal vs. interest ratio
- Animated number transitions when changing months
- Dark mode support via design tokens
- Fully formatted currency display using Intl.NumberFormat
- Touch-friendly button sizes for mobile