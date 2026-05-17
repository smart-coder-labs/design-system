# WindowControls

> **v1.0.10** · stable

A macOS-style or Windows-style window control button set for custom title bars. Provides close, minimize, and maximize buttons with hover effects.

## Installation

```bash
# The component is copied to your project with the add cli command
import { WindowControls } from '@/components/ui/WindowControls';
```

## Basic Usage

```tsx
import { WindowControls } from '@/components/ui/WindowControls';

<WindowControls
  onClose={() => console.log('close')}
  onMinimize={() => console.log('minimize')}
  onMaximize={() => console.log('maximize')}
/>
```

## Windows Variant

```tsx
<WindowControls
  variant="windows"
  onClose={() => console.log('close')}
  onMinimize={() => console.log('minimize')}
  onMaximize={() => console.log('maximize')}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onClose` | `() => void` | - | Close button callback |
| `onMinimize` | `() => void` | - | Minimize button callback |
| `onMaximize` | `() => void` | - | Maximize button callback |
| `variant` | `'macos' \| 'windows'` | `'macos'` | Visual style |
| `className` | `string` | - | Additional CSS classes |

## Behavior

### macOS Variant
- Shows colored circles (red/yellow/green)
- Icons appear on hover
- Scale animation on hover/tap

### Windows Variant
- Shows rectangular buttons with icons
- Solid hover background
- Standard button appearance

## Notes

- Controls are only rendered if their callbacks are provided
- Uses Framer Motion for macOS hover animations
- Supports dark mode via CSS tokens
- Accessible with ARIA labels