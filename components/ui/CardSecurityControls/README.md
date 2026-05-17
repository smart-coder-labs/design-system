# CardSecurityControls

> **v1.0.2** · stable

A card component displaying security toggle controls for payment cards (freeze, limits, international).

## Installation

```tsx
import { CardSecurityControls } from '@/components/ui/CardSecurityControls';
```

## Basic Usage

```tsx
<CardSecurityControls
  onToggle={(id, checked) => console.log(id, checked)}
/>

<CardSecurityControls
  title="Account Security"
  controls={[
    {
      id: 'freeze',
      label: 'Freeze Account',
      description: 'Block all transactions',
      icon: <Snowflake />,
      variant: 'danger',
    },
  ]}
/>
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| controls | CardControl[] | defaultControls | Security toggle items |
| onToggle | (id, checked) => void | - | Toggle change handler |
| title | string | 'Card Security' | Card header title |
| className | string | - | Additional classes |

### Default Controls

- Freeze Card (danger variant)
- Spending Limits
- International Purchases

### CardControl

| Prop | Type | Description |
|------|------|-------------|
| id | string | Unique identifier |
| label | string | Control label |
| description | string | Helper text |
| icon | ReactNode | Icon element |
| checked | boolean | Toggle state |
| variant | 'default' \| 'danger' | Visual variant |

## Notes

- No React.forwardRef (uses FC)
- Animated toggle switches with Framer Motion
- Staggered entrance animation
- Default controls provided for convenience