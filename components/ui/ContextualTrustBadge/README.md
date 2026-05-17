# ContextualTrustBadge

> **v1.0.31** · stable

A contextual security badge component that displays trust indicators in financial transactions. Shows encryption, insurance, or fraud protection information based on context.

## Installation

```bash
import { ContextualTrustBadge } from '@/components/ui/ContextualTrustBadge';
```

## Basic Usage

```tsx
<ContextualTrustBadge variant="encryption" />
```

## With Amount

```tsx
<ContextualTrustBadge 
  variant="insurance" 
  amount="$3,000.00 MXN" 
/>
```

## Custom Action Label

```tsx
<ContextualTrustBadge 
  variant="fraud-protection" 
  actionLabel="transferencia internacional" 
/>
```

## Variants

### Encryption

Displays end-to-end encryption information for secure transactions.

```tsx
<ContextualTrustBadge variant="encryption" />
```

### Insurance

Shows fund protection with optional amount display.

```tsx
<ContextualTrustBadge variant="insurance" amount="$50,000.00 MXN" />
```

### Fraud Protection

Displays fraud monitoring and dispute resolution information.

```tsx
<ContextualTrustBadge variant="fraud-protection" actionLabel="pago" />
```

## Payment Flow Example

```tsx
<div className="space-y-4 p-6 bg-background-primary rounded-2xl border">
  <h3 className="text-lg font-bold">Confirmar Pago</h3>
  <div className="space-y-2 text-sm">
    <div className="flex justify-between">
      <span>Destino</span>
      <span className="font-medium">Amazon MX</span>
    </div>
    <div className="flex justify-between">
      <span>Monto</span>
      <span className="font-bold">$1,250.00 MXN</span>
    </div>
  </div>
  <ContextualTrustBadge variant="encryption" />
  <ContextualTrustBadge variant="fraud-protection" actionLabel="compra" />
  <button className="w-full py-3 bg-blue-600 text-white rounded-xl">
    Confirmar Pago
  </button>
</div>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'encryption' \| 'insurance' \| 'fraud-protection'` | `'encryption'` | The type of trust indicator to display |
| `amount` | `string` | - | Amount to display for insurance variant |
| `actionLabel` | `string` | `'transacción'` | Action type for fraud protection variant |

## Notes

- Uses Framer Motion for entrance animations (fade + slide)
- Supports dark mode with appropriate color tokens
- Border colors adapt to the variant (blue, emerald, indigo)
- Fully accessible with proper ARIA attributes
- Designed for financial/fintech applications requiring trust signals