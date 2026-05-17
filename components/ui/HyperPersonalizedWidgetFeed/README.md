# HyperPersonalizedWidgetFeed

> **v1.0.10** · stable

A hyper-personalized widget feed component for financial dashboards. Allows users to customize their dashboard by showing/hiding and reordering widgets. Perfect for banking apps and fintech products.

## Installation

```bash
# The component is copied to your project with the add cli command
import { HyperPersonalizedWidgetFeed } from '@/components/ui/HyperPersonalizedWidgetFeed';
```

## Basic Usage

```tsx
import { HyperPersonalizedWidgetFeed } from '@/components/ui/HyperPersonalizedWidgetFeed';

<HyperPersonalizedWidgetFeed />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialWidgets` | `WidgetData[]` | Default 4 widgets | Initial widget configuration |

### WidgetData

```typescript
interface WidgetData {
  id: string;
  title: string;
  type: 'balance' | 'crypto' | 'spending' | 'savings';
  visible: boolean;
  order: number;
}
```

## Examples

### Default Widgets

```tsx
<HyperPersonalizedWidgetFeed />
```

### Custom Initial Widgets

```tsx
<HyperPersonalizedWidgetFeed
  initialWidgets={[
    { id: 'w1', title: 'Saldo Principal', type: 'balance', visible: true, order: 1 },
    { id: 'w2', title: 'Análisis de Gastos', type: 'spending', visible: true, order: 2 },
    { id: 'w3', title: 'Portafolio Cripto', type: 'crypto', visible: false, order: 3 },
    { id: 'w4', title: 'Metas de Ahorro', type: 'savings', visible: true, order: 4 },
  ]}
/>
```

### With All Widgets Hidden

```tsx
<HyperPersonalizedWidgetFeed
  initialWidgets={[
    { id: 'w1', title: 'Saldo Principal', type: 'balance', visible: false, order: 1 },
    { id: 'w2', title: 'Análisis de Gastos', type: 'spending', visible: false, order: 2 },
  ]}
/>
```

### Many Widgets

```tsx
<HyperPersonalizedWidgetFeed
  initialWidgets={[
    { id: 'w1', title: 'Saldo Principal', type: 'balance', visible: true, order: 1 },
    { id: 'w2', title: 'Análisis de Gastos', type: 'spending', visible: true, order: 2 },
    { id: 'w3', title: 'Portafolio Cripto', type: 'crypto', visible: true, order: 3 },
    { id: 'w4', title: 'Metas de Ahorro', type: 'savings', visible: true, order: 4 },
    { id: 'w5', title: 'Préstamos Activos', type: 'balance', visible: true, order: 5 },
    { id: 'w6', title: 'Inversiones', type: 'savings', visible: true, order: 6 },
    { id: 'w7', title: 'Recompensas', type: 'spending', visible: true, order: 7 },
    { id: 'w8', title: 'Tarjetas Virtuales', type: 'crypto', visible: true, order: 8 },
  ]}
/>
```

## Widget Types

| Type | Description | Visual |
|------|-------------|--------|
| `balance` | Account balance display | Gradient blue card with dollar amount |
| `spending` | Spending analysis | White card with progress bar |
| `crypto` | Crypto portfolio | Dark card with monospace font |
| `savings` | Savings goals | Green card with amount |

## Interactive Features

- **Edit Mode**: Click the settings icon to enter edit mode
- **Toggle Visibility**: Remove widgets by clicking the minus button
- **Add Widgets**: Restore hidden widgets from the "Widgets Inactivos" section
- **Reorder**: Drag widgets using the grip handle (visual only in current version)

## Dark Mode

The component automatically adapts to dark mode:

```tsx
<div className="dark">
  <HyperPersonalizedWidgetFeed />
</div>
```

## Notes

- Uses Framer Motion for layout animations
- Responsive design optimized for mobile-first
- Widget content is mocked (customize as needed)
- Supports dark mode via CSS tokens