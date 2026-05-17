# Skeleton

> **v1.0.10** · stable

A loading placeholder component with a shimmer animation effect. Used to indicate content is being loaded.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Skeleton } from '@/components/ui/Skeleton';
```

## Basic Usage

```tsx
import { Skeleton } from '@/components/ui/Skeleton';

<Skeleton className="h-4 w-full" />
```

## Loading Card Example

```tsx
import { Skeleton } from '@/components/ui/Skeleton';

<div className="space-y-3">
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-5/6" />
</div>
```

## Avatar Placeholder

```tsx
import { Skeleton } from '@/components/ui/Skeleton';

<Skeleton className="h-12 w-12 rounded-full" />
```

## Custom Dimensions

```tsx
import { Skeleton } from '@/components/ui/Skeleton';

// Rectangle
<Skeleton className="h-20 w-full" />

// Square
<Skeleton className="h-16 w-16" />

// Circle
<Skeleton className="h-12 w-12 rounded-full" />
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `...divProps` | `HTMLAttributes` | - | Standard div element props |

## Notes

- Shimmer animation runs infinitely
- Inherits standard div HTML attributes
- Use for: loading states, content placeholders, skeleton screens
- Animation: 1.5s linear gradient shimmer effect