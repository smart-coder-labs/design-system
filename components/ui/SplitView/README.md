# SplitView

> **v1.0.31** · stable

A macOS Finder-style resizable split panel layout with a glass-effect sidebar and main content area.

## Installation

```bash
import { SplitView } from '@/components/ui/SplitView';
```

## Basic Usage

```tsx
<SplitView
  left={<div>Sidebar content</div>}
  right={<div>Main content</div>}
/>
```

## Resizable Panel

```tsx
<SplitView
  left={<div>Resizable sidebar</div>}
  right={<div>Content area</div>}
  initialLeftSize="280px"
  minLeftSize={200}
  maxLeftSize={400}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `left` | `ReactNode` | - | Left panel content (sidebar) |
| `right` | `ReactNode` | - | Right panel content (main area) |
| `initialLeftSize` | `string` | `'320px'` | Initial width of left panel |
| `minLeftSize` | `number` | `200` | Minimum width of left panel (px) |
| `maxLeftSize` | `number` | `600` | Maximum width of left panel (px) |
| `className` | `string` | - | Additional classes |
| `style` | `CSSProperties` | - | Custom styles |

## Examples

### Fintech Dashboard

```tsx
<SplitView
  left={
    <div className="space-y-3">
      <h3 className="text-sm font-semibold">Navigation</h3>
      {['Overview', 'Accounts', 'Cards', 'Investments'].map(item => (
        <div key={item} className="p-2 rounded-lg hover:bg-surface-secondary">
          {item}
        </div>
      ))}
    </div>
  }
  right={
    <div>
      <h2 className="text-xl font-bold">Portfolio Overview</h2>
      {/* Dashboard content */}
    </div>
  }
  initialLeftSize="200px"
  minLeftSize={160}
  maxLeftSize={320}
/>
```

### Minimal Sidebar

```tsx
<SplitView
  left={
    <div className="flex flex-col items-center gap-3 pt-4">
      {['🏠', '💳', '📊'].map((icon, i) => (
        <div key={i} className="w-10 h-10 flex items-center justify-center rounded-xl">
          {icon}
        </div>
      ))}
    </div>
  }
  right={<div>Main content</div>}
  initialLeftSize="64px"
  minLeftSize={48}
  maxLeftSize={80}
/>
```

### Settings Layout

```tsx
<SplitView
  left={
    <div className="space-y-2">
      {['Profile', 'Security', 'Notifications', 'Privacy'].map(item => (
        <div key={item} className="p-2 rounded-lg hover:bg-surface-secondary">
          {item}
        </div>
      ))}
    </div>
  }
  right={
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Profile Settings</h2>
      {/* Form content */}
    </div>
  }
  initialLeftSize="220px"
  minLeftSize={160}
  maxLeftSize={300}
/>
```

## Notes

- Uses ResizablePanel internally for drag-to-resize functionality
- Mobile responsive: stacks panels vertically on small screens
- Glass effect with backdrop blur on sidebar
- Smooth cubic-bezier transitions (200ms duration)
- Accessible with proper ARIA attributes from ResizablePanel
- Dark mode support via design tokens