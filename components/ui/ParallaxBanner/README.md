# ParallaxBanner

> **v1.0.5** · stable

A scroll-triggered parallax hero banner component using Framer Motion. Creates a depth effect where the background image moves at a different speed than the foreground content during scroll.

## Installation

```bash
import { ParallaxBanner } from '@/components/ui/ParallaxBanner';
```

## Basic Usage

```tsx
<ParallaxBanner image="/hero-image.jpg">
  <h1 className="text-4xl font-bold text-white">Welcome</h1>
  <p className="text-white/80">Your tagline here</p>
</ParallaxBanner>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | `string` | Required | Background image URL |
| `height` | `string` | `'h-[60vh]'` | Container height (Tailwind class) |
| `speed` | `number` | `0.5` | Parallax speed (0 to 1) |
| `children` | `ReactNode` | - | Foreground content |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Default Hero Banner

```tsx
<ParallaxBanner image="https://images.unsplash.com/photo-1460925895917-afdab827c52f">
  <div className="space-y-4">
    <h1 className="text-5xl font-bold text-white">Build Faster</h1>
    <p className="text-xl text-white/80">Ship your next project in record time</p>
  </div>
</ParallaxBanner>
```

### Full Height Banner

```tsx
<ParallaxBanner image="/landscape.jpg" height="h-screen">
  <div className="flex flex-col items-center justify-center h-full">
    <h1 className="text-6xl font-bold text-white">Explore</h1>
    <Button variant="primary" size="lg">Get Started</Button>
  </div>
</ParallaxBanner>
```

### Slower Parallax Effect

```tsx
<ParallaxBanner image="/mountain.jpg" speed={0.3} height="h-[70vh]">
  <div className="text-center">
    <h1 className="text-4xl text-white font-bold">Adventure Awaits</h1>
  </div>
</ParallaxBanner>
```

### With CTA Buttons

```tsx
<ParallaxBanner image="/hero.jpg">
  <div className="flex flex-col items-center gap-6">
    <Title level={1} className="text-white">Transform Your Business</Title>
    <Text variant="lead" className="text-white/90 max-w-2xl">
      Join thousands of companies using our platform to scale.
    </Text>
    <div className="flex gap-4">
      <Button size="lg" variant="secondary">Learn More</Button>
      <Button size="lg" variant="primary">Start Free Trial</Button>
    </div>
  </div>
</ParallaxBanner>
```

## How It Works

1. The container has `overflow-hidden` to clip the moving background
2. The background image is 140% of container height (140% - 20% = 120% visible)
3. Framer Motion's `useScroll` tracks scroll progress within the container
4. `useTransform` maps scroll progress to vertical offset (-20% to +20%)
5. This creates the parallax depth effect

## Notes

- Uses Framer Motion for smooth 60fps animations
- The image scales up slightly (140%) to allow movement without gaps
- Dark overlay (bg-black/30) improves text readability
- Responds to scroll position relative to viewport (not page scroll)