# RadioGroup

> **v1.0.6** · stable

A set of radio button components for selecting one option from a group. Built on native radio inputs with custom styling, supporting controlled/uncontrolled modes, disabled states, and proper accessibility.

## Installation

```bash
# The component is copied to your project with the add cli command
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';
```

## Basic Usage

```tsx
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';
import { Label } from '../Label';

<RadioGroup defaultValue="option-one">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>
```

## API

### RadioGroup Props

| Prop            | Type                      | Default | Description                        |
|-----------------|---------------------------|---------|------------------------------------|
| `value`         | `string`                  | -       | Controlled selected value          |
| `defaultValue`  | `string`                  | -       | Initial value for uncontrolled mode|
| `onValueChange` | `(value: string) => void` | -       | Callback when selection changes   |
| `name`          | `string`                  | -       | Name for the radio group (auto-generated if not provided)|
| `disabled`      | `boolean`                 | `false` | Disables all radio items in group |
| `className`     | `string`                  | -       | Additional CSS classes             |

### RadioGroupItem Props

| Prop        | Type           | Default | Description                        |
|-------------|----------------|---------|------------------------------------|
| `value`     | `string`       | -       | Unique value for this option       |
| `disabled`  | `boolean`      | `false` | Disables this individual item     |
| `className` | `string`       | -       | Additional CSS classes             |
| `id`        | `string`       | -       | HTML id for label association      |

## Examples

### Default (Uncontrolled)

```tsx
<RadioGroup defaultValue="apple">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="apple" id="apple" />
    <Label htmlFor="apple">Apple</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="banana" id="banana" />
    <Label htmlFor="banana">Banana</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="orange" id="orange" />
    <Label htmlFor="orange">Orange</Label>
  </div>
</RadioGroup>
```

### Controlled

```tsx
import { useState } from 'react';

function ControlledExample() {
  const [value, setValue] = useState('option-one');

  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-one" id="opt1" />
        <Label htmlFor="opt1">Option One</Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="option-two" id="opt2" />
        <Label htmlFor="opt2">Option Two</Label>
      </div>
    </RadioGroup>
  );
}
```

### Disabled Group

```tsx
<RadioGroup defaultValue="option-one" disabled>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option-one" id="opt1" />
    <Label htmlFor="opt1">Option One</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option-two" id="opt2" />
    <Label htmlFor="opt2">Option Two</Label>
  </div>
</RadioGroup>
```

### Disabled Individual Item

```tsx
<RadioGroup defaultValue="option-one">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option-one" id="opt1" />
    <Label htmlFor="opt1">Option One</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="option-two" id="opt2" disabled />
    <Label htmlFor="opt2">Option Two (Disabled)</Label>
  </div>
</RadioGroup>
```

### With Custom Name

```tsx
<RadioGroup defaultValue="a" name="payment-method">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="credit" id="credit" />
    <Label htmlFor="credit">Credit Card</Label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="debit" id="debit" />
    <Label htmlFor="debit">Debit Card</Label>
  </div>
</RadioGroup>
```

## Accessibility

- Uses native `<input type="radio">` for proper semantics
- `role="radiogroup"` on the container
- Proper label association via `htmlFor`/`id`
- Full keyboard navigation support
- Visual focus indicators
- Proper disabled state handling

## Notes

- Auto-generates unique group name using React.useId() if not provided
- Visual indicator shows filled circle when selected
- Supports dark mode via CSS classes
- Uses CSS transitions for state changes (200ms)
- Item labels can be any ReactNode, not just text