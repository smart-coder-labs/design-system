# Spinner

> **v1.0.23** · stable

A rotating loading spinner with configurable size and color. Uses a 12-segment wheel animation.

## Installation

```bash
import { Spinner } from '@/components/ui/Spinner';
```

## Basic Usage

```tsx
<Spinner />
```

## API

### Spinner

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'sm' \| 'md' \| 'lg' | 'md' | Spinner size |
| color | 'default' \| 'white' \| 'blue' | 'default' | Spinner color |
| className | string | - | Additional classes |

## Examples

### Different Sizes

```tsx
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```

### Different Colors

```tsx
// Default (secondary color)
<Spinner color="default" />

// White (for dark backgrounds)
<Spinner color="white" />

// Blue accent
<Spinner color="blue" />
```

### Loading Button

```tsx
<Button disabled={isLoading}>
  {isLoading ? <Spinner size="sm" color="white" /> : 'Submit'}
</Button>
```

### Full Page Loading

```tsx
<div className="flex items-center justify-center h-screen">
  <Spinner size="lg" />
</div>
```

### Inline Loading Text

```tsx
<div className="flex items-center gap-2">
  <Spinner size="sm" />
  <span>Loading...</span>
</div>
```

## Notes

- Uses Framer Motion for smooth rotation animation
- Accessible with role="status" and aria-label="Loading"
- 12-segment wheel with sequential opacity animation
- Animation runs infinitely with 1.2s duration per cycle