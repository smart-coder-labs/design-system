# Counters

> **v1.0.8** · stable

A horizontal statistics display component for showing key metrics in a dashboard-style format. Displays multiple counter values in an equal-width flex layout with dividers.

## Installation

```bash
import { Counters } from '@/components/ui/Counters';
```

## Basic Usage

```tsx
<Counters
  items={[
    { value: '$12,450', label: 'Balance', subtitle: 'Available' },
    { value: '47', label: 'Transactions', subtitle: 'This month' },
    { value: '3.2%', label: 'APY', subtitle: 'Interest rate' },
  ]}
/>
```

## Compact Mode

Use compact mode for tighter spaces with reduced padding.

```tsx
<Counters
  items={[
    { value: '152', label: 'Clients' },
    { value: '$45K', label: 'Revenue' },
    { value: '12', label: 'Open Trades' },
    { value: '8.5%', label: 'Return' },
  ]}
  compact
/>
```

## Two Items

```tsx
<Counters
  items={[
    { value: '85%', label: 'Portfolio Health' },
    { value: '$128K', label: 'Total Value' },
  ]}
/>
```

## Five Items

```tsx
<Counters
  items={[
    { value: '1,234', label: 'Active Users' },
    { value: '$89K', label: 'Revenue' },
    { value: '99.9%', label: 'Uptime' },
    { value: '42', label: 'Countries' },
    { value: '4.8★', label: 'Rating' },
  ]}
  compact
/>
```

## Large Values

```tsx
<Counters
  items={[
    { value: '$12,458,932,100', label: 'Market Cap' },
    { value: '99.9999%', label: 'Uptime SLA' },
    { value: '1,234,567', label: 'Total Users' },
  ]}
/>
```

## Fintech Dashboard Example

```tsx
<Counters
  items={[
    { value: '$145,230.50', label: 'Saldo Total', subtitle: 'Todas las cuentas' },
    { value: '23', label: 'Transacciones', subtitle: 'Este mes' },
    { value: '4.75%', label: 'APY', subtitle: 'Tasa actual' },
    { value: '$2,500', label: 'Límite Diario', subtitle: 'Disponible: $1,200' },
  ]}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `CountersItem[]` | - | Array of counter items to display |
| `compact` | `boolean` | `false` | Use compact spacing mode |
| `className` | `string` | - | Additional CSS classes |

### CountersItem

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string \| number` | The numeric/currency value to display |
| `label` | `string` | Primary label for the counter |
| `subtitle` | `string` | Optional secondary text |

## Notes

- Equal-width flexbox layout with vertical dividers between items
- Always displays on accent blue background
- White text with varying opacity levels for hierarchy
- Compact mode reduces vertical padding from py-8 to py-4
- Each counter is keyboard accessible with proper ARIA labels
- Supports any string or number format for values