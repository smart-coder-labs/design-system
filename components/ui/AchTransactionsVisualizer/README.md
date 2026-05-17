# AchTransactionsVisualizer

> **v1.0.1** · stable

A premium, accessible component to view complex ACH transactions. Supports both list and table layouts with expandable details, fee breakdowns, and history timelines.

## Installation

```bash
import { AchTransactionsVisualizer } from '@/components/ui/AchTransactionsVisualizer';
```

## Basic Usage

```tsx
import { AchTransactionsVisualizer, VisualizerTransaction } from '@/components/ui/AchTransactionsVisualizer';

const transactions: VisualizerTransaction[] = [
  {
    id: '1',
    amount: 10560.10,
    currency: 'USD',
    type: 'DEBIT',
    status: 'COMPLETED',
    date: 'Feb 6, 2026',
    title: 'BEE THE QUEEN INC',
    subtitle: 'Wells Fargo Bank (•••4362)',
    description: 'Workers Comp Premium - Feb 2026',
  },
];

<AchTransactionsVisualizer
  title="ACH Transactions"
  transactions={transactions}
  layout="list"
/>
```

## Table Layout

```tsx
<AchTransactionsVisualizer
  title="ACH Transactions"
  transactions={transactions}
  layout="table"
  tableColumns={[
    { key: 'title', header: 'Entity', sortable: true },
    { key: 'amount', header: 'Amount', sortable: true },
    { key: 'status', header: 'Status', sortable: true },
  ]}
/>
```

## With Custom Details and History

```tsx
<AchTransactionsVisualizer
  title="ACH Transactions"
  transactions={[
    {
      id: '1',
      amount: 5000,
      type: 'CREDIT',
      status: 'PENDING',
      date: 'Feb 25, 2026',
      title: 'Acme Corp',
      details: [
        { id: '1', label: 'Transaction ID', value: 'tx-12345', icon: Hash },
        { id: '2', label: 'Carrier', value: 'Hartford' },
      ],
      fees: [
        { id: 'f1', title: 'ACH Fee', amount: 0.50 },
      ],
      history: [
        { id: 'h1', statusType: 'info', date: 'Feb 23', title: 'Initiated' },
        { id: 'h2', statusType: 'success', date: 'Feb 25', title: 'Completed' },
      ],
    },
  ]}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `transactions` | `VisualizerTransaction[]` | - | Array of transaction objects |
| `layout` | `'list' \| 'table'` | `'list'` | Display layout |
| `tableColumns` | `Column<VisualizerTransaction>[]` | - | Custom table columns (table layout only) |
| `title` | `ReactNode` | - | Component title |
| `subtitle` | `ReactNode` | - | Subtitle text |
| `emptyMessage` | `ReactNode` | - | Empty state message |
| `emptyDescription` | `ReactNode` | - | Empty state description |
| `className` | `string` | - | Additional classes |

### VisualizerTransaction

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `amount` | `number` | Transaction amount |
| `currency` | `string` | Currency code (default: USD) |
| `type` | `'CREDIT' \| 'DEBIT'` | Transaction type |
| `status` | `string` | Status (COMPLETED, PENDING, FAILED, UPLOADED) |
| `date` | `ReactNode` | Display date |
| `title` | `ReactNode` | Main title |
| `subtitle` | `ReactNode` | Secondary text |
| `description` | `ReactNode` | Description |
| `details` | `VisualizerDetailItem[]` | Detail items to display |
| `fees` | `VisualizerFeeItem[]` | Fee breakdown items |
| `history` | `VisualizerHistoryItem[]` | Timeline events |

## Statuses

The component automatically handles these statuses with appropriate styling:
- **COMPLETED** - Green checkmark
- **PENDING** - Yellow clock
- **UPLOADED** - Blue activity icon
- **FAILED** - Red X circle

## Notes

- Uses Framer Motion for expand/collapse animations (300ms)
- Supports dark mode via CSS tokens
- Accessible with ARIA roles and keyboard navigation
- Uses compound components pattern internally (not exposed)