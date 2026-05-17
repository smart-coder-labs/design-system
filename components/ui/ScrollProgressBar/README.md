# ScrollProgressBar

> **v1.0.21** · stable

A slim progress indicator fixed to the top or bottom of the viewport that fills based on the page scroll position. Perfect for reading progress indicators, article completion tracking, or multi-step form progress.

## Installation

```tsx
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
```

## Basic Usage

```tsx
<ScrollProgressBar />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `'#007AFF'` | Progress bar color (hex, rgb) |
| `height` | `string` | `'h-1.5'` | Bar height (Tailwind class) |
| `position` | `'top' \| 'bottom'` | `'top'` | Fixed position on screen |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Default (Top Position)

```tsx
<ScrollProgressBar />
```

### Bottom Position

```tsx
<ScrollProgressBar position="bottom" />
```

### Custom Color

```tsx
// Green
<ScrollProgressBar color="#34C759" />

// Red
<ScrollProgressBar color="#FF3B30" />

// Purple gradient (use CSS)
<ScrollProgressBar color="purple" />
```

### Thicker Bar

```tsx
<ScrollProgressBar height="h-3" />
<ScrollProgressBar height="h-2" />
```

### Combined Options

```tsx
<ScrollProgressBar
  color="#FF9500"
  height="h-2"
  position="bottom"
/>
```

## How It Works

1. Uses Framer Motion's `useScroll` to track viewport scroll progress (0 to 1)
2. Wraps the progress with `useSpring` for smooth, organic movement
3. Applies `transform: scaleX()` to animate the fill
4. Fixed position ensures it stays visible during scroll

## Notes

- Spring physics make the bar movement feel natural even with abrupt scrolling
- Respects `prefers-reduced-motion` for accessibility
- High z-index (z-50) ensures it stays above other content
- Works best for long-form content and articles