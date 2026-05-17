# FloatingElement

> **v1.0.11** · stable

A scroll-driven floating animation component that creates a subtle parallax effect. The element rotates and moves vertically based on scroll position, creating a floating/levitating appearance.

## Installation

```bash
# The component is copied to your project with the add cli command
import { FloatingElement } from '@/components/ui/FloatingElement';
```

## Basic Usage

```tsx
import { FloatingElement } from '@/components/ui/FloatingElement';

<FloatingElement>
  <div className="w-24 h-24 bg-accent-blue/20 rounded-2xl flex items-center justify-center text-accent-blue text-3xl">
    ✦
  </div>
</FloatingElement>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rotationSpeed` | `number` | `1` | Rotation speed multiplier (0 = no rotation) |
| `children` | `ReactNode` | - | Content to animate |
| `className` | `string` | - | Additional CSS classes |
| `...HTMLMotionProps` | - | - | Additional Framer Motion props |

## Examples

### Default (Speed 1)

```tsx
<FloatingElement rotationSpeed={1}>
  <div className="w-24 h-24 bg-accent-blue/20 rounded-2xl">✦</div>
</FloatingElement>
```

### Slow Speed

```tsx
<FloatingElement rotationSpeed={0.3}>
  <div className="w-20 h-20 bg-emerald-500/20 rounded-full">●</div>
</FloatingElement>
```

### Fast Speed

```tsx
<FloatingElement rotationSpeed={2}>
  <div className="w-16 h-16 bg-purple-500/20 rotate-45">◆</div>
</FloatingElement>
```

### No Rotation (Vertical Float Only)

```tsx
<FloatingElement rotationSpeed={0}>
  <div className="w-24 h-24 bg-rose-500/20 rounded-3xl">◈</div>
</FloatingElement>
```

### Large Icon

```tsx
<FloatingElement rotationSpeed={0.6}>
  <div className="w-32 h-32 bg-amber-500/15 rounded-full text-5xl">
    💰
  </div>
</FloatingElement>
```

### Small Icon

```tsx
<FloatingElement rotationSpeed={1.5}>
  <div className="w-10 h-10 bg-indigo-500/20 rounded-lg">✦</div>
</FloatingElement>
```

### Multiple Elements on Same Page

```tsx
<div className="relative">
  <FloatingElement rotationSpeed={0.5}>
    <div className="absolute -top-20 -left-20 w-20 h-20 bg-sky-500/20 rounded-full">✦</div>
  </FloatingElement>
  <FloatingElement rotationSpeed={1.2}>
    <div className="w-24 h-24 bg-violet-500/20 rounded-2xl">◆</div>
  </FloatingElement>
  <FloatingElement rotationSpeed={0.8}>
    <div className="absolute -bottom-16 -right-16 w-16 h-16 bg-emerald-500/20 rounded-full">●</div>
  </FloatingElement>
</div>
```

### Complex Children

```tsx
<FloatingElement rotationSpeed={0.4}>
  <div className="w-40 h-40 bg-gradient-to-br from-accent-blue/20 to-purple-500/20 rounded-3xl flex flex-col items-center justify-center gap-2 border border-white/10 shadow-lg">
    <span className="text-4xl">🚀</span>
    <span className="text-xs font-semibold text-accent-blue">Growth</span>
  </div>
</FloatingElement>
```

## Notes

- Uses Framer Motion's `useScroll` and `useTransform` hooks
- Rotation: 360 degrees × rotationSpeed over full scroll range
- Vertical movement: 100px up and 100px down based on scroll
- Scroll target is the element itself (starts animating when element enters viewport)
- Useful for decorative elements, background shapes, or highlighted content
- Supports all Framer Motion HTML props for customization
- `will-change-transform` applied for performance optimization
- Works best with relatively positioned parent containers
- Can be combined with gradient backgrounds for cyberpunk/aesthetic effects