# EarlyPaymentDiscount

> **v1.0.35** · stable

A specialized fintech component for encouraging early loan repayment. Displays potential interest savings and allows users to simulate early payoff scenarios with an interactive slider.

## Installation

```bash
# The component is copied to your project with the add cli command
import { EarlyPaymentDiscount } from '@/components/ui/EarlyPaymentDiscount';
```

## Basic Usage

```tsx
<EarlyPaymentDiscount
  totalInterestRemaining={120.50}
  remainingMonths={6}
  monthlyPayment={200}
  onPayEarly={(amount, savings) => console.log(amount, savings)}
/>
```

## API

### Props

| Prop                  | Type                              | Default   | Description                         |
| --------------------- | --------------------------------- | --------- | ----------------------------------- |
| `totalInterestRemaining` | `number`                      | -         | Total interest remaining on loan   |
| `remainingMonths`    | `number`                          | -         | Months remaining on loan           |
| `monthlyPayment`     | `number`                          | -         | Monthly payment amount             |
| `currency`           | `string`                          | `'USD'`   | Currency code (USD, EUR, etc.)      |
| `onPayEarly`         | `(amountToPay: number, interestSaved: number) => void` | - | Callback when user clicks to pay early |
| `className`          | `string`                          | -         | Additional CSS classes              |

## Examples

### Standard (6 months remaining)

```tsx
<EarlyPaymentDiscount
  totalInterestRemaining={120.50}
  remainingMonths={6}
  monthlyPayment={200}
/>
```

### High Interest (24 months)

```tsx
<EarlyPaymentDiscount
  totalInterestRemaining={840.00}
  remainingMonths={24}
  monthlyPayment={350}
  currency="USD"
/>
```

### Short Term (2 months)

```tsx
<EarlyPaymentDiscount
  totalInterestRemaining={15.00}
  remainingMonths={2}
  monthlyPayment={500}
  currency="USD"
/>
```

### Long Term (36 months)

```tsx
<EarlyPaymentDiscount
  totalInterestRemaining={2400}
  remainingMonths={36}
  monthlyPayment={180}
  currency="USD"
/>
```

### EUR Currency

```tsx
<EarlyPaymentDiscount
  totalInterestRemaining={350}
  remainingMonths={12}
  monthlyPayment={150}
  currency="EUR"
/>
```

## How It Works

1. **Interest Calculation**: The component calculates monthly interest savings (`totalInterestRemaining / remainingMonths`)
2. **User Input**: Slider allows users to select 1 to `remainingMonths` extra months to pay
3. **Real-time Update**: Display updates immediately as user moves the slider
4. **Callback**: `onPayEarly` fires with the payment amount and calculated savings

## Interaction Flow

```
1. User sees potential savings displayed prominently
2. User adjusts slider to choose extra months to pay
3. Extra payment amount updates in real-time
4. User clicks "Capture Savings" button
5. onPayEarly callback fires with final values
```

## Visual Features

- Gradient background (emerald to teal)
- Animated number transitions for savings amount
- Glassmorphism effect on inner container
- Spring-based slider with custom styling
- Button with icon and hover animation
- Subtle background effects (blur circles)

## Notes

- Designed specifically for fintech/loan repayment use cases
- Currency formatting via `Intl.NumberFormat`
- Slider range: 1 to `remainingMonths` months
- Savings amount updates with AnimatePresence
- Visual design optimized for conversion (encourages action)
- Requires client-side rendering (`"use client"`)