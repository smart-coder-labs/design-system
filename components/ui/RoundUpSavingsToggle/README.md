# RoundUpSavingsToggle

> **v1.0.9** · stable

A toggle component for enabling automatic round-up savings. Displays monthly savings projection and detailed information when activated.

## Installation

```bash
# The component is copied to your project with the add cli command
import { RoundUpSavingsToggle } from '@/components/ui/RoundUpSavingsToggle';
```

## Basic Usage

```tsx
import { RoundUpSavingsToggle } from '@/components/ui/RoundUpSavingsToggle';

<RoundUpSavingsToggle
    initialState={false}
    onToggle={(active) => console.log('Round-up savings:', active ? 'enabled' : 'disabled')}
/>
```

## Active State

```tsx
<RoundUpSavingsToggle
    initialState={true}
    monthlyProjection={1250.50}
    onToggle={handleToggle}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialState` | `boolean` | `false` | Initial toggle state |
| `onToggle` | `(active: boolean) => void` | - | Called when toggle changes |
| `monthlyProjection` | `number` | `1250.50` | Projected monthly savings |

## Examples

### Low Projection

```tsx
<RoundUpSavingsToggle
    initialState={true}
    monthlyProjection={185.75}
    onToggle={handleToggle}
/>
```

### High Projection

```tsx
<RoundUpSavingsToggle
    initialState={true}
    monthlyProjection={3450.00}
    onToggle={handleToggle}
/>
```

### Interactive Toggle

```tsx
const [active, setActive] = useState(false);

<RoundUpSavingsToggle
    initialState={active}
    onToggle={(state) => {
        setActive(state);
        if (state) {
            alert('Round-up savings activated!');
        }
    }}
/>
```

## Notes

- Toggle activates/deactivates round-up savings feature
- When active, displays projected monthly savings amount
- Shows description of how round-ups work
- Animated UI with gradient background when active
- Decorative coin elements and blur effects
- Mobile-responsive design
- Supports dark mode via CSS tokens