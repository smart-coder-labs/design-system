# SignaturePad

> **v1.0.16** · stable

A canvas-based signature capture component with touch and mouse support. Includes built-in clear and save functionality with PNG export.

## Installation

```bash
import { SignaturePad } from '@/components/ui/SignaturePad';
```

## Basic Usage

```tsx
import { SignaturePad } from '@/components/ui/SignaturePad';

<SignaturePad
    onEnd={(dataUrl) => console.log('Signature:', dataUrl)}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | - | Canvas width in pixels |
| `height` | `number` | `200` | Canvas height in pixels |
| `penColor` | `string` | `'#000000'` | Stroke color |
| `backgroundColor` | `string` | `'#FFFFFF'` | Canvas background |
| `strokeWidth` | `number` | `2` | Pen stroke width |
| `onEnd` | `(dataUrl: string) => void` | - | Called when drawing ends |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Default

```tsx
<SignaturePad
    onEnd={(dataUrl) => saveSignature(dataUrl)}
/>
```

### Custom Colors

```tsx
<SignaturePad
    penColor="#2563eb"
    backgroundColor="#f0f9ff"
    strokeWidth={3}
    onEnd={handleSave}
/>
```

### Large Canvas

```tsx
<SignaturePad
    width={500}
    height={300}
    penColor="#7c3aed"
    strokeWidth={2}
    onEnd={handleSave}
/>
```

### Dark Mode

```tsx
<SignaturePad
    penColor="#e2e8f0"
    backgroundColor="#1e293b"
    strokeWidth={2}
    onEnd={handleSave}
/>
```

### Mobile Responsive

```tsx
<SignaturePad
    width={320}
    height={160}
    strokeWidth={4}
    onEnd={handleSave}
/>
```

### Thick Stroke

```tsx
<SignaturePad
    strokeWidth={6}
    penColor="#dc2626"
    onEnd={handleSave}
/>
```

## Usage Notes

- The `onEnd` callback provides a base64 PNG data URL
- Use the data URL to store in database or send to server
- Canvas is responsive by default (uses container width)
- Touch events are supported for mobile devices
- Includes "Sign here" placeholder text when empty

## Accessibility

- Canvas has `cursor-crosshair` for drawing indication
- Buttons include proper aria-labels through Button component
- Touch events prevent scrolling while drawing
- Clear and Save buttons are disabled when no signature exists

## Notes

- Uses HTML5 Canvas API for drawing
- Supports both mouse and touch input
- Built-in clear button (erases canvas)
- Built-in save button (triggers download)
- Framer Motion entrance animation
- Dark mode compatible with custom colors
- Uses design tokens for border and shadow styling