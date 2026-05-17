# Divider

> **v1.0.18** · stable

A visual separator component for dividing content with optional labels. Supports horizontal and vertical orientations with multiple line styles.

## Installation

```bash
import { Divider } from '@/components/ui/Divider';
```

## Basic Usage

```tsx
<Divider />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | Divider direction |
| label | ReactNode | undefined | Optional label text |
| labelPosition | 'left' \| 'center' \| 'right' | 'center' | Label alignment |
| variant | 'solid' \| 'dashed' \| 'dotted' | 'solid' | Line style |
| lineClassName | string | undefined | Custom class for line |

## Examples

### With Label

```tsx
<Divider label="or" labelPosition="center" />
```

### Vertical Divider

```tsx
<div className="flex items-center">
  <span>Left</span>
  <Divider orientation="vertical" />
  <span>Right</span>
</div>
```

### Dashed Variant

```tsx
<Divider variant="dashed" label="Section Break" />
```

## Notes

- Uses React.forwardRef for ref forwarding
- Supports ARIA roles for accessibility
- Works in both light and dark modes