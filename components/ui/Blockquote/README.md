# Blockquote

> **v1.0.26** · stable

A styled quote component for displaying quotations with optional author and source attribution.

## Installation

```bash
import { Blockquote } from '@/components/ui/Blockquote';
```

## Basic Usage

```tsx
<Blockquote>
  The quick brown fox jumps over the lazy dog.
</Blockquote>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | required | Quote content |
| author | string | undefined | Author name |
| source | string | undefined | Source/citation |
| className | string | '' | Custom class |

## Examples

### With Attribution

```tsx
<Blockquote author="Albert Einstein" source="Science Journal">
  Imagination is more important than knowledge.
</Blockquote>
```

## Notes

- Uses Text component internally for consistent typography
- Includes decorative quote icon
- Supports dark mode