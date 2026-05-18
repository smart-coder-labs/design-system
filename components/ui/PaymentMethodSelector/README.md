# PaymentMethodSelector

> **v1.0.3** · experimental

A component for selecting payment methods in checkout flows. Supports credit cards, digital wallets (Apple Pay, PayPal), and bank accounts with a radio-button style selection interface.

## Installation

```bash
import { PaymentMethodSelector } from '@/components/ui/PaymentMethodSelector';
```

## Basic Usage

```tsx
import { useState } from 'react';
import { PaymentMethodSelector, type PaymentMethod } from '@/components/ui/PaymentMethodSelector';

function Example() {
  const [selectedId, setSelectedId] = useState('visa');

  const methods: PaymentMethod[] = [
    { id: 'visa', type: 'card', label: 'Visa •••• 4242', details: 'Expires 12/27' },
    { id: 'mastercard', type: 'card', label: 'Mastercard •••• 8888', details: 'Expires 09/26' },
    { id: 'bank', type: 'bank', label: 'Chase Checking •••• 5678', details: 'Free transfers' },
  ];

  return (
    <PaymentMethodSelector
      methods={methods}
      value={selectedId}
      onChange={setSelectedId}
    />
  );
}
```

## With Apple Pay

```tsx
<PaymentMethodSelector
  methods={[
    { id: 'apple', type: 'applepay', label: 'Apple Pay' },
    { id: 'card', type: 'card', label: 'Visa •••• 4242', details: 'Expires 12/27' },
  ]}
  value="apple"
  onChange={handleChange}
/>
```

## With PayPal

```tsx
<PaymentMethodSelector
  methods={[
    { id: 'paypal', type: 'paypal', label: 'PayPal', details: 'cesar@example.com' },
  ]}
  value="paypal"
  onChange={handleChange}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `methods` | `PaymentMethod[]` | required | Available payment methods |
| `value` | `string` | - | Controlled selected method ID |
| `defaultValue` | `string` | - | Initial selected method ID (uncontrolled) |
| `onChange` | `(id: string) => void` | - | Callback when selection changes |
| `onAdd` | `() => void` | - | Callback for "Add payment method" |
| `showAdd` | `boolean` | `true` | Show "Add payment method" button |
| `className` | `string` | - | Additional classes |

### PaymentMethod

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier for the method |
| `type` | `'card' \| 'applepay' \| 'paypal' \| 'bank'` | Payment method type |
| `label?` | `string` | Display text (defaults to type) |
| `details?` | `string` | Additional info (e.g., expiry, account) |
| `disabled?` | `boolean` | Disable selection for this method |

## Examples

### With Add Button

```tsx
<PaymentMethodSelector
  methods={methods}
  value={selectedId}
  onChange={setSelectedId}
  onAdd={() => navigateToAddPayment()}
  showAdd={true}
/>
```

### Without Add Button

```tsx
<PaymentMethodSelector
  methods={methods}
  value={selectedId}
  onChange={setSelectedId}
  showAdd={false}
/>
```

### With Disabled Method

```tsx
<PaymentMethodSelector
  methods={[
    { id: 'visa', type: 'card', label: 'Visa •••• 4242', details: 'Expires 12/27' },
    { id: 'amex', type: 'card', label: 'Amex •••• 3000', details: 'Expired 03/24', disabled: true },
  ]}
  value="visa"
  onChange={handleChange}
/>
```

### Uncontrolled

```tsx
<PaymentMethodSelector
  methods={methods}
  defaultValue="mastercard"
  onChange={handleChange}
/>
```

## Notes

- Uses `role="radiogroup"` and `role="radio"` for accessibility
- Supports both controlled and uncontrolled modes
- Visual icons for each payment type (card, Apple Pay, PayPal, bank)
- Checkmark indicator for selected method
- Hover state with border highlight
- Disabled methods show reduced opacity
- Supports dark mode via design tokens