# Slider

> **v1.0.2** · experimental

A slider component for selecting a value from a range. Supports keyboard navigation, step values, and controlled/uncontrolled modes.

## Installation

```bash
import { Slider } from '@/components/ui/Slider';
```

## Basic Usage

```tsx
<Slider defaultValue={50} />
```

## API

### Slider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | number | - | Controlled value |
| defaultValue | number | min | Initial value (uncontrolled) |
| min | number | 0 | Minimum value |
| max | number | 100 | Maximum value |
| step | number | 1 | Step increment |
| disabled | boolean | false | Disable the slider |
| onValueChange | (value: number) => void | - | Callback while dragging |
| onValueCommit | (value: number) => void | - | Callback when drag ends |
| className | string | - | Additional classes |
| trackClassName | string | - | Track element classes |
| rangeClassName | string | - | Filled range classes |
| thumbClassName | string | - | Thumb button classes |

## Examples

### Basic Slider

```tsx
<Slider defaultValue={50} />
```

### Controlled Slider

```tsx
const [value, setValue] = useState(50);

<Slider value={value} onValueChange={setValue} />
```

### Slider with Custom Range

```tsx
<Slider min={0} max={1000} defaultValue={500} />
```

### Slider with Step

```tsx
<Slider min={0} max={100} step={10} defaultValue={50} />
```

### Disabled Slider

```tsx
<Slider defaultValue={50} disabled />
```

### Custom Styling

```tsx
<Slider
  defaultValue={75}
  trackClassName="bg-gray-200"
  rangeClassName="bg-blue-500"
  thumbClassName="border-blue-500"
/>
```

### With Value Commit Callback

```tsx
const handleCommit = (value) => {
  console.log('Slider committed to:', value);
};

<Slider
  defaultValue={50}
  onValueChange={handleChange}
  onValueCommit={handleCommit}
/>
```

## Notes

- Uses custom pointer event handling (not native input)
- Supports mouse and touch interactions
- Keyboard accessible (Arrow keys for step, Home/End for min/max)
- Snaps to step values
- Clamps value to min/max bounds
- Accessible with role="slider" and aria attributes