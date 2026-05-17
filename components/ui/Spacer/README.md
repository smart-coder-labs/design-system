# Spacer

> **v1.0.35** · stable

A flexible spacing component for adding consistent whitespace between elements. Supports preset sizes, custom values, and flex-grow behavior.

## Installation

```bash
import { Spacer } from '@/components/ui/Spacer';
```

## Basic Usage

```tsx
<div>
  <Content />
  <Spacer />
  <MoreContent />
</div>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| number | 'md' | Space height/width |
| axis | 'vertical' \| 'horizontal' | 'vertical' | Spacing direction |
| flex | boolean | false | Expand to fill space |
| className | string | undefined | Custom class |
| style | CSSProperties | undefined | Custom styles |

### Size Values

| Preset | Value |
|--------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |

## Examples

### Custom Size

```tsx
<Spacer size={32} />
```

### Horizontal Spacer

```tsx
<div className="flex">
  <Left />
  <Spacer axis="horizontal" size="lg" />
  <Right />
</div>
```

### Flex Spacer

```tsx
<div className="flex">
  <FixedContent />
  <Spacer flex />
  <MoreContent />
</div>
```

## Notes

- Uses React.forwardRef for ref forwarding
- Prevents collapse with min dimensions
- Hidden from screen readers (aria-hidden)