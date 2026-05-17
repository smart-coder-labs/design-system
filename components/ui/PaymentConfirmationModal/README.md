# PaymentConfirmationModal

> **v1.0.5** · stable

A modal component for confirming payment details before processing a transaction. Designed for fintech applications with support for various payment types including crypto and bank transfers.

## Installation

```bash
import { PaymentConfirmationModal } from '@/components/ui/PaymentConfirmationModal';
```

## Basic Usage

```tsx
import { useState } from 'react';
import { PaymentConfirmationModal } from '@/components/ui/PaymentConfirmationModal';

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <PaymentConfirmationModal
      open={open}
      data={{
        recipientName: 'Alice Johnson',
        amount: 250.00,
        currency: 'USD',
        concept: 'Payment for invoice #1234',
      }}
      onConfirm={() => console.log('Confirmed')}
      onCancel={() => setOpen(false)}
    />
  );
}
```

## With Bank Transfer

```tsx
<PaymentConfirmationModal
  open={true}
  data={{
    recipientName: 'Acme Corporation',
    recipientBank: 'Chase Bank',
    recipientAccount: '****4823',
    amount: 3500.00,
    currency: 'USD',
    concept: 'Invoice INV-2025-4421',
    fee: 15.00,
    estimatedArrival: '3-5 business days',
  }}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

## Crypto Payment

```tsx
<PaymentConfirmationModal
  open={true}
  data={{
    recipientName: '0x1234...5678',
    amount: 0.025,
    currency: 'BTC',
    concept: 'Bitcoin transfer',
    fee: 0.0001,
  }}
  locale="en-US"
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `true` | Controls modal visibility |
| `data` | `PaymentConfirmationData` | required | Payment details object |
| `locale` | `string` | `'en-US'` | Locale for currency formatting |
| `onConfirm` | `() => void` | - | Callback when user confirms |
| `onCancel` | `() => void` | - | Callback when user cancels |
| `loading` | `boolean` | `false` | Shows loading state on confirm button |
| `className` | `string` | - | Additional classes |

### PaymentConfirmationData

| Prop | Type | Description |
|------|------|-------------|
| `recipientName` | `string` | Name of the payment recipient |
| `recipientBank?` | `string` | Bank name (for bank transfers) |
| `recipientAccount?` | `string` | Account number (masked) |
| `amount` | `number` | Payment amount |
| `currency` | `string` | Currency code (USD, EUR, BTC, etc.) |
| `concept?` | `string` | Payment description |
| `fee?` | `number` | Transaction fee |
| `estimatedArrival?` | `string` | Expected delivery time |

## Examples

### International Wire

```tsx
<PaymentConfirmationModal
  open={true}
  data={{
    recipientName: 'Global Bank GmbH',
    recipientBank: 'Deutsche Bank',
    recipientAccount: '****7712',
    amount: 12500.00,
    currency: 'EUR',
    concept: 'SWIFT transfer for Q3 services',
    fee: 35.00,
    estimatedArrival: '3-5 business days',
  }}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

### Large Amount with Fee

```tsx
<PaymentConfirmationModal
  open={true}
  data={{
    recipientName: 'company@business.com',
    amount: 15000.00,
    currency: 'USD',
    concept: 'Quarterly service payment',
    fee: 45.00,
  }}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

### Loading State

```tsx
<PaymentConfirmationModal
  open={true}
  data={{
    recipientName: '0xDeFi...Wallet',
    amount: 100.00,
    currency: 'USDC',
    concept: 'Swap confirmation',
  }}
  loading={true}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

## Notes

- Uses Framer Motion for smooth open/close animations (spring physics)
- Displays shield icon in header indicating secure transaction
- Automatically calculates and displays total (amount + fee)
- Clicking overlay or pressing Escape cancels the payment
- Uses `Intl.NumberFormat` for proper currency formatting per locale
- Fully accessible with ARIA labels and keyboard support
- Supports dark mode via design tokens
- Glass morphism backdrop with blur effect