# TransferForm

> **v1.0.5** · stable

A fintech-style money transfer form with amount input, currency selector, recipient dropdown, and optional concept field. Includes real-time balance validation and insufficient fund warnings.

## Installation

```bash
# The component is copied to your project with the add cli command
import { TransferForm } from '@/components/ui/TransferForm';
```

## Basic Usage

```tsx
import { TransferForm } from '@/components/ui/TransferForm';

<TransferForm
  recipients={[
    { id: '1', name: 'Alice Johnson', bank: 'Chase Bank' },
    { id: '2', name: 'Bob Smith', bank: 'Bank of America' },
  ]}
  availableBalance={5000}
  onSubmit={(data) => console.log(data)}
/>
```

## With Custom Currency

```tsx
<TransferForm
  recipients={recipients}
  currencies={[
    { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
    { code: 'MXN', symbol: 'MX$', name: 'Mexican Peso', flag: '🇲🇽' },
  ]}
  defaultCurrency="EUR"
  availableBalance={12500}
  onSubmit={handleTransfer}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `recipients` | `TransferRecipient[]` | `[]` | List of available recipients |
| `currencies` | `CurrencyOption[]` | `[USD, MXN, EUR]` | Available currency options |
| `availableBalance` | `number` | `0` | User's available balance |
| `defaultCurrency` | `string` | `'USD'` | Default selected currency |
| `onSubmit` | `(data) => void` | - | Callback when form is submitted |
| `className` | `string` | - | Additional CSS classes |

### Types

```typescript
interface TransferRecipient {
  id: string;
  name: string;
  accountNumber?: string;
  bank?: string;
  avatarUrl?: string;
}

interface CurrencyOption {
  code: string;
  symbol: string;
  name: string;
  flag?: string;
}
```

## Examples

### With Low Balance Warning

```tsx
<TransferForm
  recipients={recipients}
  availableBalance={350}
  onSubmit={handleTransfer}
/>
```

When the user enters an amount exceeding the available balance, an "Insufficient funds" warning appears.

### International Transfers

```tsx
<TransferForm
  recipients={[
    { id: '1', name: 'María García', bank: 'Banco Santander' },
    { id: '2', name: 'Pierre Dubois', bank: 'BNP Paribas' },
  ]}
  currencies={currencies}
  defaultCurrency="EUR"
  availableBalance={25000}
  onSubmit={handleInternationalTransfer}
/>
```

## Notes

- Uses Framer Motion for smooth entry animations
- Supports dark mode via CSS tokens
- Input validation prevents submission when amount exceeds balance
- Currency dropdown shows flags for visual identification
- Accessible with proper ARIA labels on form elements