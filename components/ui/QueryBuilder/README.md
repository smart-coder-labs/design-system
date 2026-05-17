# QueryBuilder

> **v1.0.34** · stable

A visual query builder component for creating complex filter rules with AND/OR logic. Supports nested rule groups, multiple field types (text, number, date, select), and various operators.

## Installation

```bash
# The component is copied to your project with the add cli command
import { QueryBuilder } from '@/components/ui/QueryBuilder';
```

## Basic Usage

```tsx
import { QueryBuilder } from '@/components/ui/QueryBuilder';

const fields = [
  { id: 'status', label: 'Status', type: 'select', options: [
    { label: 'Completed', value: 'completed' },
    { label: 'Pending', value: 'pending' },
    { label: 'Failed', value: 'failed' },
  ]},
  { id: 'amount', label: 'Amount', type: 'number' },
  { id: 'date', label: 'Date', type: 'date' },
];

<QueryBuilder
  fields={fields}
  onChange={(query) => console.log(query)}
/>
```

## API

### Props

| Prop       | Type           | Default | Description                              |
|------------|----------------|---------|------------------------------------------|
| `fields`   | `Field[]`      | -       | Available fields for filtering          |
| `value`    | `RuleGroup`    | -       | Controlled query value                   |
| `onChange` | `(value: RuleGroup) => void` | - | Callback when query changes |
| `className`| `string`       | -       | Additional CSS classes                  |

### Field

| Prop      | Type                              | Description                    |
|-----------|-----------------------------------|--------------------------------|
| `id`      | `string`                          | Unique field identifier        |
| `label`   | `string`                          | Display label                  |
| `type`    | `'text' \| 'number' \| 'date' \| 'select'` | Field type |
| `options` | `{ label: string; value: string }[]` | Options for select type  |

### Operators by Type

| Type    | Available Operators                              |
|---------|--------------------------------------------------|
| `text`  | Equals, Not Equals, Contains, Starts With, Ends With |
| `number`| Equals, Not Equals, Greater Than, Less Than, Greater or Equal, Less or Equal |
| `date`  | Equals, Not Equals, Greater Than, Less Than, Greater or Equal, Less or Equal |
| `select`| Equals, Not Equals                                |

### RuleGroup

| Prop        | Type                    | Description                      |
|-------------|-------------------------|----------------------------------|
| `id`        | `string`                | Unique group identifier          |
| `combinator`| `'and' \| 'or'`         | How rules are combined           |
| `rules`     | `(Rule \| RuleGroup)[]` | Array of rules or nested groups |

### Rule

| Prop       | Type      | Description                   |
|------------|-----------|-------------------------------|
| `id`       | `string`  | Unique rule identifier       |
| `fieldId`  | `string`  | Field this rule applies to   |
| `operator` | `Operator`| Comparison operator           |
| `value`    | `any`     | Value to compare against      |

## Examples

### Transaction Filter

```tsx
<QueryBuilder
  fields={[
    { id: 'type', label: 'Transaction Type', type: 'select', options: [
      { label: 'Buy', value: 'buy' },
      { label: 'Sell', value: 'sell' },
      { label: 'Swap', value: 'swap' },
    ]},
    { id: 'minAmount', label: 'Min Amount', type: 'number' },
    { id: 'maxAmount', label: 'Max Amount', type: 'number' },
    { id: 'fromDate', label: 'From Date', type: 'date' },
  ]}
  onChange={(query) => console.log(query)}
/>
```

### Pre-filled Query with OR

```tsx
<QueryBuilder
  fields={[
    { id: 'amount', label: 'Amount', type: 'number' },
    { id: 'type', label: 'Type', type: 'select', options: [
      { label: 'Credit', value: 'credit' },
      { label: 'Debit', value: 'debit' },
    ]},
  ]}
  value={{
    id: 'root',
    combinator: 'or',
    rules: [
      { id: 'r1', fieldId: 'amount', operator: 'gte', value: '1000' },
      { id: 'r2', fieldId: 'type', operator: 'equals', value: 'credit' },
    ],
  }}
  onChange={(query) => console.log(query)}
/>
```

### Complex Nested Query

```tsx
<QueryBuilder
  fields={[
    { id: 'amount', label: 'Amount', type: 'number' },
    { id: 'status', label: 'Status', type: 'select', options: [
      { label: 'Completed', value: 'completed' },
      { label: 'Pending', value: 'pending' },
    ]},
    { id: 'date', label: 'Date', type: 'date' },
    { id: 'currency', label: 'Currency', type: 'text' },
  ]}
  value={{
    id: 'root',
    combinator: 'and',
    rules: [
      {
        id: 'g1',
        combinator: 'or',
        rules: [
          { id: 'r1', fieldId: 'amount', operator: 'gte', value: '5000' },
          { id: 'r2', fieldId: 'status', operator: 'equals', value: 'failed' },
        ],
      },
      { id: 'r3', fieldId: 'currency', operator: 'equals', value: 'USD' },
    ],
  }}
  onChange={(query) => console.log(query)}
/>
```

### Many Filters

```tsx
<QueryBuilder
  fields={[
    { id: 'type', label: 'Type', type: 'select', options: [
      { label: 'Buy', value: 'buy' }, { label: 'Sell', value: 'sell' },
      { label: 'Swap', value: 'swap' }, { label: 'Transfer', value: 'transfer' },
    ]},
    { id: 'amount', label: 'Amount', type: 'number' },
    { id: 'currency', label: 'Currency', type: 'select', options: [
      { label: 'USD', value: 'usd' }, { label: 'EUR', value: 'eur' },
    ]},
    { id: 'status', label: 'Status', type: 'select', options: [
      { label: 'Completed', value: 'completed' },
    ]},
    { id: 'fromDate', label: 'From Date', type: 'date' },
  ]}
  onChange={(query) => console.log(query)}
/>
```

## Features

- **AND/OR Combinators**: Toggle between logical operators at group level
- **Nested Groups**: Create complex nested query structures
- **Dynamic Field Types**: Supports text, number, date, and select fields
- **Add/Remove Rules**: Add individual rules or entire rule groups
- **Visual Controls**: Easy-to-use dropdowns for fields, operators, and values

## Notes

- Uses internal state for uncontrolled mode when `value` is not provided
- Automatically generates unique IDs for new rules and groups
- Operator dropdown shows only valid operators for the selected field type
- Supports dark mode via CSS variables
- Fully accessible with proper form semantics