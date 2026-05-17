# Title

> **v1.0.11** · stable

A flexible heading component with comprehensive styling options including levels, weights, colors, alignment, and gradient effects.

## Installation

```bash
import { Title } from '@/components/ui/Title';
```

## Basic Usage

```tsx
<Title level={1}>Page Title</Title>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| level | 1-6 | 1 | Heading hierarchy (h1-h6) |
| weight | 'normal' \| 'medium' \| 'semibold' \| 'bold' \| 'black' | 'bold' | Font weight |
| align | 'left' \| 'center' \| 'right' | 'left' | Text alignment |
| color | TitleColor | 'primary' | Text color |
| gradient | boolean | false | Gradient background |
| truncate | boolean | false | Truncate overflow text |
| as | 'h1'-'h6' | undefined | Override render element |

### TitleColor Options

`'primary' | 'secondary' | 'tertiary' | 'inverse' | 'accent' | 'success' | 'warning' | 'error'`

## Examples

### Centered Title

```tsx
<Title level={2} align="center" color="secondary">
  Section Title
</Title>
```

### Gradient Title

```tsx
<Title level={1} gradient>Featured Content</Title>
```

### Colored Title

```tsx
<Title level={3} color="accent">Accent Heading</Title>
```

## Notes

- Uses semantic h1-h6 elements by default
- Supports custom rendering with `as` prop
- Gradient applies a blue-to-purple background