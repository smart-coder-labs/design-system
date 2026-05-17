# BankAccountCard

> **v1.0.7** · stable

A visually rich bank account/credit card component with gradient backgrounds, balance display, visibility toggle, and CLABE/IBAN copy functionality. Perfect for financial dashboards and account overviews.

## Installation

```bash
import { BankAccountCard } from '@/components/ui/BankAccountCard';
```

## Basic Usage

```tsx
<BankAccountCard
  accountName="Personal Checking"
  accountType="checking"
  accountNumber="•••• •••• •••• 1234"
  balance={5432.10}
  currency="USD"
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `accountName` | `string` | `'Personal Account'` | Display name for the account |
| `accountType` | `'checking' \| 'savings' \| 'credit' \| 'investment'` | `'checking'` | Account type for styling |
| `accountNumber` | `string` | `'•••• •••• •••• 1234'` | Masked account number |
| `clabeOrIban` | `string` | - | Full account number for copy |
| `balance` | `number` | `0` | Current balance |
| `currency` | `string` | `'USD'` | Currency code |
| `locale` | `string` | `'en-US'` | Locale for formatting |
| `hiddenByDefault` | `boolean` | `false` | Start with balance hidden |
| `onCopy` | `(value: string) => void` | - | Callback after copy |
| `onClick` | `() => void` | - | Card click handler |
| `className` | `string` | `''` | Additional CSS classes |

## Account Types

- **checking** - Blue gradient
- **savings** - Emerald gradient  
- **credit** - Violet gradient
- **investment** - Amber gradient

## Examples

### Checking Account

```tsx
<BankAccountCard
  accountName="Primary Checking"
  accountType="checking"
  accountNumber="•••• •••• •••• 4521"
  clabeOrIban="012180004521234567"
  balance={12500.75}
  currency="USD"
/>
```

### Savings Account

```tsx
<BankAccountCard
  accountName="Emergency Fund"
  accountType="savings"
  accountNumber="•••• •••• •••• 8899"
  clabeOrIban="MEX0123456789012345678901"
  balance={25000.00}
  currency="USD"
/>
```

### Credit Card

```tsx
<BankAccountCard
  accountName="Rewards Visa"
  accountType="credit"
  accountNumber="•••• •••• •••• 2233"
  balance={-1250.00}
  currency="USD"
/>
```

### Investment Account

```tsx
<BankAccountCard
  accountName="Retirement 401k"
  accountType="investment"
  accountNumber="•••• •••• 9012"
  balance={150000.00}
  currency="USD"
  locale="en-US"
/>
```

### Hidden Balance

```tsx
<BankAccountCard
  accountName="Private Account"
  accountType="checking"
  accountNumber="•••• •••• •••• 7777"
  clabeOrIban="012180007777654321"
  balance={98765.43}
  currency="USD"
  hiddenByDefault={true}
  onClick={() => navigate('/account/7777')}
/>
```

## Features

- Gradient backgrounds per account type
- Balance visibility toggle (eye icon)
- One-click CLABE/IBAN copy with confirmation
- Hover animation (lift + scale)
- Click feedback (scale down)
- Decorative circles for visual depth
- Accessible with keyboard navigation

## Accessibility Notes

- Uses `role="button"` and `tabIndex={0}` for keyboard interaction
- `aria-label` provides context for screen readers
- Copy button has clear labeling
- Balance toggle has descriptive aria-label