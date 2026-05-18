# TransactionList

> **v1.0.3** · experimental

A transaction list component for displaying financial transactions with support for categories, amounts, statuses, and masking.

## Installation

```bash
import { TransactionList, TransactionRow } from '@/components/ui/TransactionList';
```

## Basic Usage

```tsx
const transactions = [
  {
    id: '1',
    title: 'Coffee Shop',
    description: 'Morning latte',
    amount: 4.50,
    type: 'expense',
    category: 'food',
    status: 'completed',
    date: 'Today',
  },
  {
    id: '2',
    title: 'Salary Deposit',
    amount: 3500,
    type: 'income',
    category: 'work',
    status: 'completed',
    date: 'Yesterday',
  },
];

<TransactionList
  transactions={transactions}
  title="Recent Transactions"
  onTransactionClick={(tx) => console.log(tx.id)}
/>
```

## API

### TransactionList

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| transactions | Transaction[] | - | Array of transactions (required) |
| currency | string | 'USD' | Currency code for formatting |
| locale | string | 'en-US' | Locale for formatting |
| title | string | 'Recent Transactions' | List header title |
| maskable | boolean | true | Show toggle to mask amounts |
| onTransactionClick | (transaction: Transaction) => void | - | Row click handler |
| emptyMessage | string | 'No transactions yet' | Empty state message |
| className | string | - | Additional classes |

### TransactionRow

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| transaction | Transaction | - | Transaction object (required) |
| currency | string | 'USD' | Currency code |
| locale | string | 'en-US' | Locale |
| masked | boolean | false | Mask the amount |
| onClick | (transaction: Transaction) => void | - | Click handler |
| className | string | - | Additional classes |

### Transaction

| Prop | Type | Description |
|------|------|-------------|
| id | string | Unique identifier (required) |
| title | string | Transaction title (required) |
| description | string | Optional description |
| amount | number | Amount (required) |
| type | 'income' \| 'expense' | Transaction type |
| status | 'completed' \| 'pending' \| 'failed' | Status |
| category | TransactionCategory | Category type |
| date | string | Date string |
| icon | ReactNode | Custom icon |

### TransactionCategory

`'food' | 'health' | 'shopping' | 'transfer' | 'housing' | 'utilities' | 'card' | 'work' | 'gift' | 'transport' | 'other'`

## Notes

- Each category has a default icon and color
- Income amounts shown in green, expenses in default
- Status badges for pending/failed transactions
- Uses Framer Motion for row animations
- TransactionRow has its own forwardRef