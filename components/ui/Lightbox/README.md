# Lightbox

> **v1.0.6** · stable

A full-screen image viewer with navigation, keyboard controls, captions, and download functionality. Perfect for viewing transaction receipts, dashboards, and image galleries.

## Installation

```bash
import { Lightbox } from '@/components/ui/Lightbox';
```

## Basic Usage

```tsx
import { useState } from 'react';
import { Lightbox } from '@/components/ui/Lightbox';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    { src: '/image1.jpg', alt: 'Dashboard preview' },
    { src: '/image2.jpg', alt: 'Analytics chart' },
  ];

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Lightbox</button>
      <Lightbox
        isOpen={isOpen}
        images={images}
        currentIndex={index}
        onClose={() => setIsOpen(false)}
        onIndexChange={setIndex}
      />
    </>
  );
}
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | Controls lightbox visibility |
| `images` | `LightboxImage[]` | - | Array of image objects |
| `currentIndex` | `number` | - | Current image index |
| `onClose` | `() => void` | - | Called when close button or backdrop is clicked |
| `onNext` | `() => void` | - | Custom next navigation handler |
| `onPrev` | `() => void` | - | Custom previous navigation handler |
| `onIndexChange` | `(index: number) => void` | - | Called when index changes |
| `className` | `string` | - | Additional CSS classes |

### LightboxImage

```typescript
interface LightboxImage {
  src: string;
  alt?: string;
  caption?: string;
}
```

## Examples

### Single Image

```tsx
<Lightbox
  isOpen={isOpen}
  images={[{ src: '/receipt.jpg', alt: 'Transaction receipt' }]}
  currentIndex={0}
  onClose={() => setIsOpen(false)}
/>
```

### With Captions

```tsx
<Lightbox
  isOpen={isOpen}
  images={[
    { src: '/dashboard.jpg', alt: 'Dashboard', caption: 'Financial Dashboard Overview — Q1 2025' },
    { src: '/portfolio.jpg', alt: 'Portfolio', caption: 'Investment Portfolio Performance' },
    { src: '/report.jpg', alt: 'Report', caption: 'Monthly Spending Report — March 2025' },
  ]}
  currentIndex={1}
  onClose={() => setIsOpen(false)}
  onIndexChange={setIndex}
/>
```

### Custom Navigation Handlers

```tsx
<Lightbox
  isOpen={isOpen}
  images={images}
  currentIndex={index}
  onClose={() => setIsOpen(false)}
  onNext={() => setIndex((i) => (i + 1) % images.length)}
  onPrev={() => setIndex((i) => (i - 1 + images.length) % images.length)}
/>
```

### Receipt Viewer

```tsx
<Lightbox
  isOpen={isOpen}
  images={[
    { src: '/receipt1.jpg', alt: 'Payment receipt', caption: 'Transaction Receipt — TRX-2025-04-8912' },
    { src: '/receipt2.jpg', alt: 'Invoice', caption: 'Invoice INV-2025-4421 — $1,200.00' },
  ]}
  currentIndex={0}
  onClose={() => setIsOpen(false)}
/>
```

### Image Gallery

```tsx
<Lightbox
  isOpen={isOpen}
  images={Array.from({ length: 8 }, (_, i) => ({
    src: `/gallery${i}.jpg`,
    alt: `Gallery image ${i + 1}`,
  }))}
  currentIndex={0}
  onClose={() => setIsOpen(false)}
/>
```

## Keyboard Controls

| Key | Action |
|-----|--------|
| `Escape` | Close lightbox |
| `ArrowRight` | Next image |
| `ArrowLeft` | Previous image |

## Notes

- Full-screen overlay with backdrop blur
- Keyboard navigation support (Escape, Arrow keys)
- Body scroll lock when open
- Image counter display (e.g., "2 / 5")
- Download button opens image in new tab
- Framer Motion animations for smooth transitions
- Navigation wraps around (last → first, first → last)
- Click outside image to close
- Touch-friendly navigation buttons
- Dark background (#000000 at 95% opacity)