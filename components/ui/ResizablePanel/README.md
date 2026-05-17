# ResizablePanel

> **v1.0.20** · stable

A resizable panel component with drag-to-resize functionality. Supports both horizontal and vertical orientations with customizable size constraints.

## Installation

```bash
# The component is copied to your project with the add cli command
import { ResizablePanel } from '@/components/ui/ResizablePanel';
```

## Basic Usage

```tsx
import { ResizablePanel } from '@/components/ui/ResizablePanel';

<ResizablePanel
    initialSize="400px"
    minSize={200}
    maxSize={800}
    direction="horizontal"
>
    <div>Panel content</div>
</ResizablePanel>
```

## Vertical Resize

```tsx
<ResizablePanel
    initialSize="300px"
    minSize={150}
    maxSize={500}
    direction="vertical"
>
    <div>Vertical panel content</div>
</ResizablePanel>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialSize` | `string` | `'400px'` | Initial width (horizontal) or height (vertical) |
| `minSize` | `number` | `200` | Minimum size in pixels |
| `maxSize` | `number` | `1000` | Maximum size in pixels |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Resize orientation |
| `children` | `ReactNode` | - | Panel content |
| `className` | `string` | - | Additional classes |
| `style` | `React.CSSProperties` | - | Additional inline styles |

## Examples

### Sidebar + Content Layout

```tsx
<div className="flex h-full">
    <ResizablePanel
        initialSize="250px"
        minSize={180}
        maxSize={400}
        direction="horizontal"
    >
        <div className="p-4">
            <h3 className="font-semibold mb-3">Navigation</h3>
            {/* Navigation items */}
        </div>
    </ResizablePanel>
    <div className="flex-1 p-6">
        <h2>Main Content</h2>
    </div>
</div>
```

### Collapsed Panel

```tsx
<ResizablePanel
    initialSize="48px"
    minSize={48}
    maxSize={48}
    direction="horizontal"
>
    {/* Icon-only sidebar */}
</ResizablePanel>
```

## Notes

- Drag handle positioned at edge (right for horizontal, bottom for vertical)
- Supports both mouse and touch input
- Uses window event listeners for smooth dragging
- Fully accessible with keyboard support (tabindex, aria-orientation)
- Visual feedback during drag with cursor change
- CSS custom properties for theming