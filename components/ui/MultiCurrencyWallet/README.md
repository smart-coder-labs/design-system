# MultiCurrencyWallet

> **v1.0.9** · stable

A multi-currency wallet component with carousel-style navigation between different currency accounts. Displays wallet balance with gradient backgrounds and provides action buttons for adding funds and sending money.

## Basic Usage

```tsx
import { MultiCurrencyWallet } from '@/components/ui/MultiCurrencyWallet';

const wallets = [
  { id: '1', currencyCode: 'USD', currencyName: 'US Dollar', flag: '🇺🇸', balance: 12430.50, color: 'from-blue-600 to-blue-800' },
  { id: '2', currencyCode: 'EUR', currencyName: 'Euro', flag: '🇪🇺', balance: 3200.00, color: 'from-indigo-500 to-purple-600' },
  { id: '3', currencyCode: 'GBP', currencyName: 'British Pound', flag: '🇬🇧', balance: 8900.00, color: 'from-rose-500 to-pink-600' },
];

<MultiCurrencyWallet
  wallets={wallets}
  onAddFunds={(id) => console.log('Add funds:', id)}
  onSend={(id) => console.log('Send:', id)}
/>
```

## With Custom Colors

```tsx
<MultiCurrencyWallet
  wallets={[
    { id: 'btc', currencyCode: 'BTC', currencyName: 'Bitcoin', flag: '₿', balance: 0.5482, color: 'from-orange-500 to-amber-600' },
    { id: 'eth', currencyCode: 'ETH', currencyName: 'Ethereum', flag: 'Ξ', balance: 3.42, color: 'from-violet-500 to-purple-600' },
  ]}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `wallets` | `WalletBalance[]` | Required | Array of wallet objects with currency info |
| `onAddFunds` | `(id: string) => void` | - | Callback when Add Funds button is clicked |
| `onSend` | `(id: string) => void` | - | Callback when Send button is clicked |
| `className` | `string` | - | Additional CSS classes |

### WalletBalance

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier for the wallet |
| `currencyCode` | `string` | ISO currency code (e.g., 'USD', 'EUR') |
| `currencyName` | `string` | Full name of the currency |
| `flag` | `string` | Emoji flag or currency symbol |
| `balance` | `number` | Current balance amount |
| `isLocal` | `boolean` | Whether this is the local account |
| `color` | `string` | Gradient CSS class (e.g., 'from-blue-600 to-blue-800') |

## Notes

- Uses Framer Motion for smooth slide transitions between wallets
- Automatically formats currency based on the currency code
- Shows pagination dots at the bottom to indicate position
- Returns null if wallets array is empty
- Dark mode support via design tokens