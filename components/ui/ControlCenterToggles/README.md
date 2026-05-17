# ControlCenterToggles

> **v1.0.5** · stable

A macOS-style control center toggle grid for managing system settings. Supports grid and list layouts with visual feedback for enabled/disabled states.

## Installation

```bash
import { ControlCenterToggles } from '@/components/ui/ControlCenterToggles';
```

## Basic Usage

```tsx
<ControlCenterToggles
  controls={[
    { id: 'wifi', label: 'Wi-Fi', icon: <Wifi />, enabled: true, onToggle: (v) => {} },
    { id: 'bluetooth', label: 'Bluetooth', icon: <Bluetooth />, enabled: false, onToggle: (v) => {} },
  ]}
/>
```

## Grid Layout

The default grid layout displays controls in a 3-column square grid.

```tsx
<ControlCenterToggles
  controls={controls}
  layout="grid"
/>
```

## List Layout

For mobile or narrow spaces, use the vertical list layout.

```tsx
<ControlCenterToggles
  controls={controls}
  layout="list"
/>
```

## With Values

Display current values for controls that have them (like volume or battery).

```tsx
<ControlCenterToggles
  controls={[
    { id: 'wifi', label: 'Wi-Fi', icon: <Wifi />, enabled: true, onToggle: () => {}, value: 'Home Network', showValue: true },
    { id: 'volume', label: 'Volume', icon: <Volume2 />, enabled: true, onToggle: () => {}, value: '75%', showValue: true },
  ]}
  layout="grid"
/>
```

## Disabled Controls

Controls can be disabled with appropriate visual feedback.

```tsx
<ControlCenterToggles
  controls={[
    { id: 'wifi', label: 'Wi-Fi', icon: <Wifi />, enabled: true, onToggle: () => {}, disabled: true },
  ]}
  layout="grid"
/>
```

## Interactive State Management

```tsx
const [controls, setControls] = useState(defaultControls);

const handleToggle = (id: string, enabled: boolean) => {
  setControls(prev =>
    prev.map(control =>
      control.id === id ? { ...control, enabled } : control
    )
  );
};

<ControlCenterToggles
  controls={controls.map(control => ({
    ...control,
    onToggle: (enabled) => handleToggle(control.id, enabled),
  }))}
  layout="grid"
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `controls` | `ToggleControl[]` | - | Array of toggle control objects |
| `layout` | `'grid' \| 'list'` | `'grid'` | Layout mode for controls |
| `className` | `string` | - | Additional CSS classes |

### ToggleControl

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier for the control |
| `label` | `string` | Display label for the control |
| `icon` | `ReactNode` | Icon component to display |
| `enabled` | `boolean` | Current enabled state |
| `onToggle` | `(enabled: boolean) => void` | Callback when toggled |
| `value` | `string \| number` | Optional value to display |
| `showValue` | `boolean` | Whether to show the value |
| `disabled` | `boolean` | Whether the control is disabled |

## Notes

- Uses Framer Motion for scale animations on hover/tap
- Grid layout uses square aspect ratio for each control
- Enabled controls show accent blue color
- Disabled controls show reduced opacity and not-allowed cursor
- Active indicator dot appears in top-right for grid layout
- Fully accessible with keyboard navigation and ARIA attributes