# Caption

> **v1.0.5** · stable

A small text component for supplementary information, labels, and metadata. Renders as tertiary-colored tiny text.

## Installation

```bash
import { Caption } from '@/components/ui/Caption';
```

## Basic Usage

```tsx
<Caption>Figure 1: System architecture</Caption>
```

## API

### Props

Inherits from TextProps with preset variant="tiny" and color="tertiary".

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | undefined | Caption content |
| className | string | '' | Custom class |

## Examples

```tsx
<Caption className="mt-2">Last updated: January 2024</Caption>
```

## Notes

- Built on top of the Text component
- Always uses tiny variant and tertiary color
- Useful for image captions, form labels, timestamps