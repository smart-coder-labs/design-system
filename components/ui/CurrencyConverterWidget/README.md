# CurrencyConverterWidget

> **v1.0.29** · stable

A comprehensive currency conversion widget for international money transfers. Displays amount input, fee breakdown, exchange rate, and estimated delivery with interactive swap functionality.

## Installation

```bash
import { CurrencyConverterWidget } from '@/components/ui/CurrencyConverterWidget';
```

## Basic Usage

```tsx
<CurrencyConverterWidget
  currencies={[
    { code: 'USD', flag: '🇺🇸', name: 'US Dollar' },
    { code: 'EUR', flag: '🇪🇺', name: 'Euro' },
  ]}
  exchangeRate={0.92}
  feePercentage={0.5}
  estimatedDelivery="In seconds"
/>
```

## EUR to GBP

```tsx
<CurrencyConverterWidget
  currencies={currencies}
  exchangeRate={0.86}
  feePercentage={0.3}
  estimatedDelivery="1-2 business days"
/>
```

## USD to MXN

```tsx
<CurrencyConverterWidget
  currencies={currencies}
  exchangeRate={17.25}
  feePercentage={1.0}
  estimatedDelivery="In seconds"
/>
```

## High Fee Scenario

```tsx
<CurrencyConverterWidget
  currencies={currencies}
  exchangeRate={1.35}
  feePercentage={3.5}
  estimatedDelivery="2-3 business days"
/>
```

## Zero Fee

```tsx
<CurrencyConverterWidget
  currencies={currencies}
  exchangeRate={1.12}
  feePercentage={0}
  estimatedDelivery="In seconds"
/>
```

## With Conversion Callback

```tsx
<CurrencyConverterWidget
  currencies={currencies}
  exchangeRate={0.92}
  feePercentage={0.5}
  estimatedDelivery="In seconds"
  onConvert={(from, to, amount) => {
    console.log(`Converting ${amount} ${from} to ${to}`);
    // Navigate to confirmation or process payment
  }}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currencies` | `CurrencyOption[]` | - | Available currency options |
| `exchangeRate` | `number` | `0.92` | Exchange rate between currencies |
| `feePercentage` | `number` | `0.5` | Transaction fee percentage |
| `estimatedDelivery` | `string` | `'In seconds'` | Delivery time estimate |
| `className` | `string` | - | Additional CSS classes |
| `onConvert` | `(from, to, amount) => void` | - | Callback when convert is clicked |

### CurrencyOption

| Prop | Type | Description |
|------|------|-------------|
| `code` | `string` | Currency code (e.g., 'USD', 'EUR') |
| `flag` | `string` | Flag emoji for the currency |
| `name` | `string` | Full name of the currency |

## Features

- **Amount Input**: Large numeric input for entering transfer amount
- **Currency Swap**: Animated swap button to reverse from/to currencies
- **Fee Breakdown**: Shows fee amount and amount after fee
- **Exchange Rate**: Displays guaranteed exchange rate
- **Delivery Estimate**: Shows when the recipient will receive funds
- **Continue Button**: Primary action to proceed with conversion

## Calculations

The widget automatically calculates:
- **Fee Amount**: `amount × feePercentage / 100`
- **Amount After Fee**: `amount - feeAmount`
- **Converted Amount**: `amountAfterFee × exchangeRate`

## Notes

- Uses Framer Motion for swap animation (180° rotation)
- Number input uses `[appearance:textfield]` for proper styling
- Supports dark mode via design tokens
- Fully accessible with keyboard navigation and ARIA attributes
- Designed for fintech international payment flows