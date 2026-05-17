# DockBar

> **v1.0.26** · stable

A macOS-style dock navigation component with magnification effects on hover. Perfect for creating app-like navigation experiences in web applications.

## Installation

```bash
# The component is copied to your project with the add cli command
import { DockBar } from '@/components/ui/DockBar';
```

## Basic Usage

```tsx
import { DockBar, DockBarItem } from '@/components/ui/DockBar';
import { Home, Search, Settings, User } from 'lucide-react';

const items: DockBarItem[] = [
  { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" />, active: true },
  { id: 'search', label: 'Search', icon: <Search className="w-5 h-5" /> },
  { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
];

<DockBar items={items} />
```

## Sizes

### Small

```tsx
<DockBar items={items} size="sm" />
```

### Medium (Default)

```tsx
<DockBar items={items} size="md" />
```

### Large

```tsx
<DockBar items={items} size="lg" />
```

## Positions

### Bottom (Default)

```tsx
<DockBar items={items} position="bottom" />
```

### Left

```tsx
<DockBar items={items} position="left" />
```

### Right

```tsx
<DockBar items={items} position="right" />
```

## API

### Props

| Prop           | Type                              | Default   | Description                         |
| -------------- | --------------------------------- | --------- | ----------------------------------- |
| `items`        | `DockBarItem[]`                   | -         | Array of dock items (required)      |
| `position`     | `'bottom' \| 'left' \| 'right'`   | `'bottom'`| Dock position                      |
| `size`         | `'sm' \| 'md' \| 'lg'`            | `'md'`    | Icon size                           |
| `magnification`| `boolean`                         | `true`    | Enable magnification on hover       |
| `className`    | `string`                          | -         | Additional CSS classes              |

### DockBarItem

| Prop        | Type           | Description                   |
| ----------- | -------------- | ----------------------------- |
| `id`        | `string`       | Unique identifier             |
| `label`     | `string`       | Tooltip label                 |
| `icon`      | `ReactNode`    | Icon element                  |
| `onClick`   | `() => void`   | Click handler                 |
| `badge`     | `string \| number` | Optional badge/counter   |
| `active`    | `boolean`      | Active state indicator        |

## Examples

### With Badges

```tsx
const items: DockBarItem[] = [
  { id: 'mail', label: 'Mail', icon: <Mail className="w-5 h-5" />, badge: 3 },
  { id: 'calendar', label: 'Calendar', icon: <Calendar className="w-5 h-5" />, badge: '12' },
];

<DockBar items={items} />
```

### Without Magnification

```tsx
<DockBar items={items} magnification={false} />
```

### Left Position with Active State

```tsx
const items: DockBarItem[] = [
  { id: 'finder', label: 'Finder', icon: <Folder className="w-5 h-5" />, active: true },
  { id: 'browser', label: 'Browser', icon: <Globe className="w-5 h-5" /> },
];

<DockBar items={items} position="left" />
```

### With Emoji Icons

```tsx
const items: DockBarItem[] = [
  { id: 'emoji', label: 'Emoji', icon: <span className="text-xl">😊</span>, active: true },
];
```

## Notes

- Uses Framer Motion for smooth magnification animations
- Fixed positioning: place in a layout with sufficient padding
- Glassmorphism styling with backdrop blur
- Tooltips appear on hover
- Active indicator (small dot) shows current selection
- Badges display as red counters
- Supports dark mode via design tokens