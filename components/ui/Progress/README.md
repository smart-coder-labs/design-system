# Progress

> **v1.0.9** · stable

A progress bar component with animated fill, customizable value range, and accessibility support.

## Installation

```bash
import { Progress } from '@/components/ui/Progress';
```

## Basic Usage

```tsx
<Progress value={50} />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | number | 0 | Current progress value |
| max | number | 100 | Maximum value |
| className | string | undefined | Container class |
| indicatorClassName | string | undefined | Fill bar class |

## Examples

### Determinate Progress

```tsx
<Progress value={75} max={100} />
```

### Custom Max

```tsx
<Progress value={3} max={5} />
```

### With Custom Styling

```tsx
<Progress 
  value={60} 
  className="h-3"
  indicatorClassName="bg-green-500"
/>
```

## Notes

- Uses Framer Motion for smooth fill animation
- Automatically clamps value between 0 and max
- Accessible with ARIA role and attributes
- Uses accent-blue as default fill color