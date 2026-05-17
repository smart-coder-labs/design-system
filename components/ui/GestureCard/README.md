# GestureCard

> **v1.0.8** · stable

A 3D tilt effect card that responds to mouse movement. The card rotates based on cursor position, creating an immersive interactive experience with optional glow effects.

## Installation

```bash
# The component is copied to your project with the add cli command
import { GestureCard } from '@/components/ui/GestureCard';
```

## Basic Usage

```tsx
import { GestureCard } from '@/components/ui/GestureCard';

<GestureCard>
  <div className="p-6">
    <h3 className="text-lg font-bold mb-2">Premium Account</h3>
    <p className="text-3xl font-bold text-accent-blue">$24,580.00</p>
  </div>
</GestureCard>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Card content |
| `intensity` | `number` | `15` | Rotation intensity (degrees) |
| `perspective` | `number` | `1000` | CSS perspective value (px) |
| `glowEffect` | `boolean` | `true` | Enable glow effect on hover |
| `glowColor` | `string` | `'rgba(0, 122, 255, 0.3)'` | Glow color |
| `variant` | `CardVariant` | `'elevated'` | Card visual variant |
| `padding` | `CardPadding` | `'md'` | Card padding |
| `className` | `string` | - | Additional classes |

## Examples

### Low Intensity (Subtle Effect)

```tsx
<GestureCard intensity={5}>
  <div className="p-6">
    <h3>Investment Portfolio</h3>
    <p>$185,000</p>
  </div>
</GestureCard>
```

### High Intensity (Dramatic Effect)

```tsx
<GestureCard intensity={30}>
  <div className="p-6">
    <h3>Interactive Card</h3>
    <p>Move your mouse to rotate</p>
  </div>
</GestureCard>
```

### Without Glow

```tsx
<GestureCard glowEffect={false}>
  <div className="p-6">
    <h3>No Glow Effect</h3>
    <p>Clean, flat interaction</p>
  </div>
</GestureCard>
```

### Custom Glow Color

```tsx
<GestureCard
  glowColor="rgba(16, 185, 129, 0.4)"
  glowEffect={true}
>
  <div className="p-6">
    <h3>Emerald Glow</h3>
  </div>
</GestureCard>
```

### Credit Card Style

```tsx
<GestureCard intensity={15}>
  <div className="p-6 bg-gradient-to-br from-accent-blue to-purple-600 rounded-xl text-white">
    <div className="flex items-center justify-between mb-8">
      <CreditCard className="w-8 h-8" />
      <span>VISA</span>
    </div>
    <p className="text-lg tracking-widest">•••• •••• •••• 4821</p>
  </div>
</GestureCard>
```

### Savings Goal Card

```tsx
<GestureCard intensity={10}>
  <div className="p-6">
    <div className="flex items-center gap-2 mb-4">
      <PiggyBank className="w-5 h-5 text-amber-500" />
      <h3>Emergency Fund</h3>
    </div>
    <p className="text-3xl font-bold">$32,000</p>
    <div className="w-full h-2 bg-surface-tertiary rounded-full">
      <div className="h-full bg-amber-500 rounded-full" style={{ width: '64%' }} />
    </div>
  </div>
</GestureCard>
```

## How It Works

The component uses Framer Motion's motion values to track mouse position and transform it into rotation:

1. **Mouse Move**: Calculates cursor position relative to card center
2. **Normalization**: Converts position to -1 to 1 range
3. **Spring Animation**: Applies smooth spring physics to rotation
4. **3D Transform**: Uses CSS `perspective` and `transform: rotateX/Y` for depth
5. **Glow**: Adds radial gradient overlay on hover

## Notes

- Requires `"use client"` directive for Next.js App Router
- Uses Framer Motion for smooth physics-based animations
- Supports dark mode
- Card internally uses the Card component with all its variants
- Glow effect uses pulsing animation (2s loop)