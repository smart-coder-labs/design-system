# ImageCarousel

> **v1.0.31** · stable

An image carousel with navigation arrows, indicators, auto-play support, and smooth animations. Supports both slide and fade transition effects.

## Installation

```bash
# The component is copied to your project with the add cli command
import { ImageCarousel } from '@/components/ui/ImageCarousel';
```

## Basic Usage

```tsx
import { ImageCarousel } from '@/components/ui/ImageCarousel';

const images = [
  { src: '/image1.jpg', alt: 'Image 1', caption: 'First image' },
  { src: '/image2.jpg', alt: 'Image 2', caption: 'Second image' },
  { src: '/image3.jpg', alt: 'Image 3', caption: 'Third image' },
];

<ImageCarousel images={images} />
```

## Auto-Play Carousel

```tsx
<ImageCarousel
  images={images}
  autoPlay={true}
  interval={5000}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `CarouselImage[]` | - | Array of image objects |
| `autoPlay` | `boolean` | `false` | Enables automatic slide transitions |
| `interval` | `number` | `5000` | Auto-play interval in milliseconds |
| `showArrows` | `boolean` | `true` | Shows left/right navigation arrows |
| `showIndicators` | `boolean` | `true` | Shows dot indicators at bottom |
| `effect` | `'slide' \| 'fade'` | `'slide'` | Transition effect type |
| `height` | `string \| number` | `'400px'` | Carousel height |
| `className` | `string` | - | Additional CSS classes |

### CarouselImage

| Prop | Type | Description |
|------|------|-------------|
| `src` | `string` | Image source URL |
| `alt` | `string` | Image alt text for accessibility |
| `caption` | `string` | Optional caption displayed over image |

## Examples

### Fade Effect

```tsx
<ImageCarousel
  images={images}
  effect="fade"
  autoPlay={true}
/>
```

### Without Navigation

```tsx
<ImageCarousel
  images={images}
  showArrows={false}
  showIndicators={false}
/>
```

### Custom Height

```tsx
<ImageCarousel
  images={images}
  height={600}
/>
```

### Product Showcase

```tsx
<ImageCarousel
  images={[
    { src: '/product1.jpg', alt: 'Product front', caption: 'Premium Card' },
    { src: '/product2.jpg', alt: 'Product back', caption: 'Sleek Design' },
    { src: '/product3.jpg', alt: 'Product detail', caption: 'Quality Materials' },
  ]}
  autoPlay={true}
  interval={4000}
  height={500}
/>
```

## Notes

- Pauses auto-play on hover and resumes on mouse leave
- Supports touch/swipe gestures for mobile navigation
- Arrow buttons appear on hover (desktop)
- Indicators are keyboard accessible
- Dark overlay gradient for caption readability
- Uses Framer Motion for smooth slide/fade transitions
- Fully accessible with ARIA labels