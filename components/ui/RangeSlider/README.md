# RangeSlider

> **v1.0.14** · stable

A dual-thumb slider component for selecting a range of numeric values. Supports mouse and touch interactions, keyboard navigation, controlled/uncontrolled modes, and custom styling.

## Installation

```bash
# The component is copied to your project with the add cli command
import { RangeSlider } from '@/components/ui/RangeSlider';
```

## Basic Usage

```tsx
import { RangeSlider } from '@/components/ui/RangeSlider';

<RangeSlider
  defaultValue={[25, 75]}
  min={0}
  max={100}
  onValueChange={(value) => console.log(value)}
/>
```

## API

### Props

| Prop            | Type                      | Default     | Description                                |
|-----------------|---------------------------|-------------|--------------------------------------------|
| `value`         | `[number, number]`       | -           | Controlled value range                     |
| `defaultValue`  | `[number, number]`       | `[min, max]`| Initial value for uncontrolled mode       |
| `min`           | `number`                 | `0`         | Minimum value                              |
| `max`           | `number`                 | `100`       | Maximum value                              |
| `step`          | `number`                 | `1`         | Step increment                             |
| `disabled`      | `boolean`                | `false`     | Disables the slider                        |
| `onValueChange` | `(value: [number, number]) => void` | - | Callback during drag |
| `onValueCommit` | `(value: [number, number]) => void` | - | Callback on drag end |
| `className`     | `string`                 | -           | Container CSS classes                      |
| `trackClassName`| `string`                 | -           | Track bar CSS classes                      |
| `rangeClassName`| `string`                 | -           | Active range CSS classes                   |
| `thumbClassName`| `string`                 | -           | Thumb button CSS classes                   |

## Examples

### Default Range

```tsx
<RangeSlider
  defaultValue={[25, 75]}
  max={100}
  step={1}
  onValueChange={(value) => console.log(value)}
/>
```

### Controlled Value

```tsx
import { useState } from 'react';

function Example() {
  const [range, setRange] = useState([25, 75]);

  return (
    <RangeSlider
      value={range}
      onValueChange={setRange}
      min={0}
      max={100}
    />
  );
}
```

### With Custom Step

```tsx
<RangeSlider
  defaultValue={[10, 50]}
  min={0}
  max={100}
  step={10}
  onValueChange={(value) => console.log(value)}
/>
```

### Disabled State

```tsx
<RangeSlider
  defaultValue={[20, 80]}
  min={0}
  max={100}
  disabled={true}
  onValueChange={(value) => console.log(value)}
/>
```

### Custom Styling

```tsx
<RangeSlider
  defaultValue={[30, 70]}
  min={0}
  max={100}
  trackClassName="bg-gray-200"
  rangeClassName="bg-blue-500"
  thumbClassName="border-blue-500"
  onValueChange={(value) => console.log(value)}
/>
```

## Keyboard Navigation

- **Arrow Right / Arrow Up**: Increment selected thumb value
- **Arrow Left / Arrow Down**: Decrement selected thumb value

## Accessibility

- Uses `role="slider"` for proper semantics on each thumb
- Proper `aria-valuemin`, `aria-valuemax`, `aria-valuenow` attributes
- Full keyboard navigation support
- Tab focus support for both thumbs

## Notes

- Values are automatically clamped to min/max range
- Step snapping ensures values align with step increments
- Supports both controlled (using `value`) and uncontrolled (using `defaultValue`) modes
- Touch and mouse drag interactions are fully supported
- Uses CSS transitions for smooth visual feedback
- Supports dark mode via CSS classes