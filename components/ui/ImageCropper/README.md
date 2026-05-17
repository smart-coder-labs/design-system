# ImageCropper

> **v1.0.29** · stable

An interactive image cropping component with zoom, rotation, and aspect ratio controls. Features a rule-of-thirds grid overlay for precise cropping.

## Installation

```bash
# The component is copied to your project with the add cli command
import { ImageCropper } from '@/components/ui/ImageCropper';
```

## Basic Usage

```tsx
import { ImageCropper } from '@/components/ui/ImageCropper';

function Example() {
  const handleCrop = (croppedImage) => {
    console.log('Cropped image:', croppedImage);
  };

  return (
    <ImageCropper
      src="/path/to/image.jpg"
      onCrop={handleCrop}
      onCancel={() => console.log('Cancelled')}
    />
  );
}
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image source URL |
| `aspectRatio` | `number` | `1` | Crop area aspect ratio (e.g., 1 for square, 16/9 for widescreen) |
| `onCrop` | `(croppedImage: string) => void` | - | Called with base64 cropped image data |
| `onCancel` | `() => void` | - | Called when cancel button is clicked |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Square Crop (Profile Picture)

```tsx
<ImageCropper
  src="https://example.com/photo.jpg"
  aspectRatio={1}
  onCrop={handleCrop}
  onCancel={handleCancel}
/>
```

### Wide Banner

```tsx
<ImageCropper
  src="https://example.com/photo.jpg"
  aspectRatio={2}
  onCrop={handleCrop}
  onCancel={handleCancel}
/>
```

### ID Document (1.586 aspect ratio)

```tsx
<ImageCropper
  src="https://example.com/id.jpg"
  aspectRatio={1.586}
  onCrop={handleCrop}
  onCancel={handleCancel}
/>
```

### Custom Crop with State

```tsx
import { useState } from 'react';

function CustomCrop() {
  const [image, setImage] = useState(null);

  return (
    <ImageCropper
      src="/path/to/image.jpg"
      aspectRatio={16/9}
      onCrop={(cropped) => {
        setImage(cropped);
        // Upload to server
      }}
      onCancel={() => setImage(null)}
    />
  );
}
```

## Notes

- Drag to pan the image within the crop area
- Zoom slider adjusts image scale (10% - 300%)
- Rotation slider rotates image (-180° to 180°)
- Rule-of-thirds grid overlay helps with composition
- Reset button restores default zoom, rotation, and position
- Outputs cropped image as base64 JPEG (90% quality)
- Dark editor background for better image visibility
- Supports both mouse and touch interactions
- Real-time preview updates as controls change