# Text

> **v1.0.3** · experimental

A versatile text component for all body content with control over variant, weight, alignment, color, and text decorations.

## Installation

```bash
import { Text } from '@/components/ui/Text';
```

## Basic Usage

```tsx
<Text>Plain text content</Text>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'body' \| 'small' \| 'tiny' \| 'lead' | 'body' | Text size |
| weight | 'normal' \| 'medium' \| 'semibold' \| 'bold' | 'normal' | Font weight |
| align | 'left' \| 'center' \| 'right' \| 'justify' | 'left' | Text alignment |
| color | TextColor | 'primary' | Text color |
| italic | boolean | false | Italic style |
| underline | boolean | false | Underline style |
| truncate | boolean | false | Truncate overflow |
| lineClamp | number | undefined | Line clamp limit |
| as | 'p' \| 'span' \| 'div' \| 'label' | 'p' | Render element |

### TextColor Options

`'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'inverse' | 'accent' | 'success' | 'warning' | 'error'`

## Examples

### Lead Text

```tsx
<Text variant="lead">This is a leading paragraph with larger text.</Text>
```

### Truncated Text

```tsx
<Text truncate lineClamp={3}>
  Long content that will be clamped to 3 lines...
</Text>
```

### Colored Secondary Text

```tsx
<Text color="secondary">Secondary information</Text>
```

## Notes

- Accepts all HTML attributes for the underlying element
- Supports Tailwind line-clamp utilities
- Works with dark mode color variants