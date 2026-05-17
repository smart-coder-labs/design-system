# SubscriptionManager

> **v1.0.8** · stable

A fintech-style subscription management component that displays active subscriptions with total monthly cost, expand/collapse details, and cancellation options.

## Installation

```bash
import { SubscriptionManager } from '@/components/ui/SubscriptionManager';
```

## Basic Usage

```tsx
<SubscriptionManager />
```

## API

### SubscriptionItem

The component manages subscriptions internally with this structure:

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `name` | `string` | Subscription name |
| `category` | `string` | Category (e.g., Entertainment, Music) |
| `cost` | `number` | Monthly cost in local currency |
| `status` | `'active' \| 'canceling' \| 'canceled'` | Subscription status |
| `icon` | `ElementType` | Lucide icon component |
| `nextBilling` | `string` | Next billing date |
| `color` | `string` | CSS classes for icon background |
| `warning` | `boolean` | Show price increase warning |

## Features

### Total Monthly Cost

The header displays the sum of all active subscriptions, updated in real-time.

### Expandable Items

Click on any subscription to expand and see action buttons:
- **Cancel Subscription** - Initiates cancellation flow
- **Pause** - Placeholder for pause functionality

### Price Warnings

Subscriptions with price increases show a warning badge and detail message when expanded.

### Cancellation Flow

Clicking "Cancelar Suscripción" triggers:
1. Status changes to `'canceling'` (shows "Procesando...")
2. After 2 second simulated delay, status changes to `'canceled'`
3. Item is hidden from the list
4. Success message appears at bottom

## Examples

### Default State

```tsx
// Shows 4 default subscriptions:
// - NetStream (Entretenimiento) - $299
// - AudioMax (Música) - $149 - has warning
// - FitPlus (Salud) - $599
// - CloudStore 2TB (Productividad) - $199
<SubscriptionManager />
```

### With Warning Highlight

The AudioMax subscription demonstrates the warning feature—when expanded, it shows:
```
Este servicio aumentó de precio un 10% el mes pasado. Considera revisarlo.
```

### Dark Mode

```tsx
<div className="dark">
  <SubscriptionManager />
</div>
```

## Notes

- Component is self-contained with internal state management
- Hardcoded demo data (can be extended for prop-based configuration)
- Uses Framer Motion for expand/collapse animations
- Default subscriptions: 4 popular services (streaming, music, fitness, cloud)
- Total cost updates automatically when subscriptions are canceled
- Canceled subscriptions are hidden after the cancellation animation
- Warning feature highlights price increases
- Bilingual: uses Spanish labels in UI ("Suscripciones", "Renueva el", etc.)