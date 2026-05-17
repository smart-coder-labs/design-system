# QuantitySelector

> **v1.0.0** · stable

A numeric input with increment/decrement buttons for selecting quantities. Supports controlled/uncontrolled modes, min/max limits, step increments, and keyboard navigation.

## Installation

```bash
# The component is copied to your project with the add cli command
import { QuantitySelector } from '@/components/ui/QuantitySelector';
```

## Basic Usage

```tsx
import { QuantitySelector } from '@/components/ui/QuantitySelector';
import { useState } from 'react';

function Example() {
  const [quantity, setQuantity] = useState(1);

  return (
    <QuantitySelector
      value={quantity}
      onChange={setQuantity}
      min={0}
      max={10}
    />
  );
}
```

## API

### Props

| Prop          | Type                        | Default     | Description                                    |
|---------------|-----------------------------|-------------|------------------------------------------------|
| `value`       | `number`                   | -           | Controlled value                               |
| `defaultValue`| `number`                   | `1`         | Initial value for uncontrolled mode            |
| `onChange`    | `(value: number) => void`  | -           | Callback when value changes                    |
| `min`         | `number`                   | `0`         | Minimum allowed value                         |
| `max`         | `number`                   | `Infinity`  | Maximum allowed value                         |
| `step`        | `number`                   | `1`         | Increment/decrement step                      |
| `disabled`    | `boolean`                  | `false`     | Disables the component                        |
| `compact`     | `boolean`                  | `false`     | Uses smaller dimensions                       |
| `className`   | `string`                   | -           | Additional CSS classes                         |
| `aria-label`  | `string`                   | `'Quantity'`| Accessibility label                           |

## Examples

### Default Range (0-10)

```tsx
<QuantitySelector
  defaultValue={1}
  min={0}
  max={10}
  onChange={(val) => console.log(val)}
/>
```

### Crypto Amount (precise decimals)

```tsx
<QuantitySelector
  value={0.5}
  min={0.001}
  max={10}
  step={0.001}
  onChange={(val) => console.log(val)}
/>
```

### Controlled with Min/Max Limits

```tsx
<QuantitySelector
  value={5}
  min={1}
  max={5}
  onChange={(val) => console.log(val)}
/>
```

### Large Range with Step

```tsx
<QuantitySelector
  defaultValue={50}
  min={1}
  max={100}
  step={5}
  onChange={(val) => console.log(val)}
/>
```

### Compact Variant

```tsx
<QuantitySelector
  defaultValue={1}
  min={0}
  max={99}
  compact={true}
  onChange={(val) => console.log(val)}
/>
```

### Disabled State

```tsx
<QuantitySelector
  defaultValue={3}
  min={1}
  max={10}
  disabled={true}
  onChange={(val) => console.log(val)}
/>
```

### At Maximum Value

```tsx
<QuantitySelector
  value={10}
  min={1}
  max={10}
  onChange={(val) => console.log(val)}
/>
```

## Keyboard Navigation

- **Arrow Up**: Increment value
- **Arrow Down**: Decrement value
- **Home**: Set to minimum
- **End**: Set to maximum

## Accessibility

- Uses `role="spinbutton"` for proper semantics
- Proper `aria-valuenow`, `aria-valuemin`, `aria-valuemax` attributes
- Increment/Decrement buttons have `aria-label`
- Fully keyboard accessible
- Tab focus support

## Notes

- Supports both controlled (using `value`) and uncontrolled (using `defaultValue`) modes
- Values are clamped to min/max range
- Step rounding ensures values align with step increments
- Input field allows direct typing with validation
- Buttons disable automatically at min/max limits
- Supports dark mode via design tokens