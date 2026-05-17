# InfiniteHorizontalLoop

> **v1.0.9** · stable

A seamless infinite horizontal scrolling component for displaying logos, brands, or any repeated content. Uses GPU-optimized animations for smooth 60fps performance.

## Installation

```bash
# The component is copied to your project with the add cli command
import { InfiniteHorizontalLoop } from '@/components/ui/InfiniteHorizontalLoop';
```

## Basic Usage

```tsx
import { InfiniteHorizontalLoop } from '@/components/ui/InfiniteHorizontalLoop';

const logos = [
  <div key="1">Logo 1</div>,
  <div key="2">Logo 2</div>,
  <div key="3">Logo 3</div>,
  <div key="4">Logo 4</div>,
];

<InfiniteHorizontalLoop items={logos} />
```

## Custom Speed

```tsx
<InfiniteHorizontalLoop
  items={logos}
  speed={10} // Faster (10 seconds per loop)
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `React.ReactNode[]` | - | Array of items to display |
| `speed` | `number` | `20` | Duration in seconds for one complete loop |
| `direction` | `'left' \| 'right'` | `'left'` | Scroll direction |
| `gap` | `string` | `'gap-8'` | Tailwind gap class for spacing |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `HTMLDivElement` | - | Standard div element props |

## Examples

### Right Direction

```tsx
<InfiniteHorizontalLoop
  items={logos}
  direction="right"
  speed={25}
/>
```

### Custom Gap

```tsx
<InfiniteHorizontalLoop
  items={logos}
  gap="gap-12"
/>
```

### Slow Scroll (Marquee Effect)

```tsx
<InfiniteHorizontalLoop
  items={logos}
  speed={40}
  gap="gap-8"
/>
```

### Brand Ticker

```tsx
const brands = [
  <img key="1" src="/stripe.svg" alt="Stripe" />,
  <img key="2" src="/paypal.svg" alt="PayPal" />,
  <img key="3" src="/square.svg" alt="Square" />,
  <img key="4" src="/plaid.svg" alt="Plaid" />,
];

<InfiniteHorizontalLoop items={brands} speed={20} />
```

### Crypto Ticker

```tsx
const cryptoLogos = [
  <div key="1" className="px-8 py-4 font-bold">Bitcoin</div>,
  <div key="2" className="px-8 py-4 font-bold">Ethereum</div>,
  <div key="3" className="px-8 py-4 font-bold">Solana</div>,
  <div key="4" className="px-8 py-4 font-bold">Cardano</div>,
];

<InfiniteHorizontalLoop
  items={cryptoLogos}
  speed={22}
  direction="left"
/>
```

## Notes

- Items are automatically duplicated to create seamless infinite loop
- Uses Framer Motion for smooth animation
- GPU-accelerated with `willChange: transform` for 60fps
- Linear easing (no acceleration/deceleration) for constant speed
- Animation resets at 50% to create seamless transition
- Responsive and works with any item type (text, images, components)
- Dark mode compatible via parent container styling