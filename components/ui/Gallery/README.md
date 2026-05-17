# Gallery

> **v1.0.34** · stable

An image gallery component with automatic lightbox integration, supporting various aspect ratios and column configurations. Clicking any image opens a full-screen lightbox.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Gallery } from '@/components/ui/Gallery';
import { LightboxImage } from '@/components/ui/Lightbox';
```

## Basic Usage

```tsx
import { Gallery } from '@/components/ui/Gallery';
import { LightboxImage } from '@/components/ui/Lightbox';

const images: LightboxImage[] = [
  { src: 'https://example.com/image1.jpg', alt: 'Dashboard', caption: 'Main Dashboard' },
  { src: 'https://example.com/image2.jpg', alt: 'Analytics', caption: 'Revenue Chart' },
  { src: 'https://example.com/image3.jpg', alt: 'Profile', caption: 'User Profile' },
];

<Gallery images={images} />
```

## API

### GalleryProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `LightboxImage[]` | - | Array of images with src, alt, caption |
| `columns` | `number` | `3` | Number of columns |
| `gap` | `number` | `16` | Gap between images (px) |
| `aspectRatio` | `'square' \| 'video' \| 'portrait' \| 'auto'` | `'square'` | Image aspect ratio |
| `className` | `string` | - | Additional classes |

### LightboxImage Type

```typescript
interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}
```

## Examples

### Two Columns

```tsx
<Gallery images={images} columns={2} />
```

### Four Columns

```tsx
<Gallery images={images} columns={4} />
```

### Portrait Aspect Ratio

```tsx
<Gallery images={images} columns={3} aspectRatio="portrait" />
```

### Video Aspect Ratio (16:9)

```tsx
<Gallery images={images} columns={3} aspectRatio="video" />
```

### Custom Gap

```tsx
<Gallery images={images} columns={3} gap={24} />
```

## Notes

- Built on top of the Lightbox component
- Images lazy-load automatically
- Shows fallback UI for broken images
- Smooth hover animations with scale and overlay
- Caption previews appear on hover
- Full keyboard navigation in lightbox
- Dark mode support via CSS tokens
- Responsive: adapts to mobile viewports