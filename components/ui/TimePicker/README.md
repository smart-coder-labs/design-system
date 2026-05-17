# TimePicker

> **v1.0.21** · stable

A time selection component with a dropdown picker supporting 12h/24h formats and configurable minute steps.

## Installation

```bash
import { TimePicker } from '@/components/ui/TimePicker';
```

## Basic Usage

```tsx
import { useState } from 'react';
import { TimePicker } from '@/components/ui/TimePicker';

function Example() {
  const [time, setTime] = useState<string | null>(null);
  
  return (
    <TimePicker
      value={time || undefined}
      onChange={setTime}
    />
  );
}
```

## With Label

```tsx
<TimePicker
  label="Meeting Time"
  value={time}
  onChange={setTime}
/>
```

## API

### Props

| Prop           | Type                      | Default       | Description                         |
| -------------- | ------------------------- | ------------- | ----------------------------------- |
| `label`        | `string`                  | -             | Label text displayed above input   |
| `value`        | `string`                  | -             | Time value in "HH:mm" 24h format   |
| `onChange`     | `(time: string | null) => void` | -        | Called when time changes           |
| `placeholder`  | `string`                  | `'Select time'` | Placeholder text                  |
| `error`        | `string`                  | -             | Error message                      |
| `helperText`   | `string`                  | -             | Helper text below input            |
| `disabled`    | `boolean`                 | `false`       | Disables the picker                |
| `format`       | `'12h' \| '24h'`          | `'12h'`       | Time format                        |
| `step`         | `number`                  | `15`          | Minute step (1, 5, 15, 30)         |
| `className`    | `string`                  | -             | Additional classes                 |

## Examples

### 24-Hour Format

```tsx
<TimePicker
  label="Flight Time"
  value="14:30"
  format="24h"
  onChange={setTime}
/>
```

### 15-Minute Steps

```tsx
<TimePicker
  label="Time Slot"
  value="09:00"
  step={15}
  onChange={setTime}
/>
```

### With Helper Text

```tsx
<TimePicker
  label="Delivery Time"
  helperText="Business hours: Mon-Fri, 9AM-6PM"
  onChange={setTime}
/>
```

### With Error State

```tsx
<TimePicker
  label="Departure Time"
  error="Please select a valid time"
  onChange={setTime}
/>
```

### Disabled State

```tsx
<TimePicker
  label="Locked Time"
  value="12:00"
  disabled
/>
```

## Notes

- Internal value is always stored as "HH:mm" (24h format) regardless of display format
- Click outside closes the dropdown
- Uses Framer Motion for dropdown animations (spring physics)
- Fully accessible with keyboard navigation
- Supports dark mode via design tokens
- Uses React.forwardRef for the root element
- Z-index ensures dropdown appears above other elements