# BottomNavigation

> **v1.0.3** · stable

A mobile-style fixed bottom navigation bar with animated active states and badges.

## Installation

```tsx
import { BottomNavigation } from '@/components/ui/BottomNavigation';
```

## Basic Usage

```tsx
const items = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'search', label: 'Search', icon: SearchIcon },
  { id: 'profile', label: 'Profile', icon: UserIcon, badge: 3 },
];

<BottomNavigation
  items={items}
  onItemClick={(item) => console.log(item.id)}
/>
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | BottomNavigationItem[] | - | Navigation items |
| variant | 'default' \| 'glass' \| 'elevated' | 'default' | Visual style |
| showLabels | boolean | true | Display item labels |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Navigation size |
| onItemClick | (item) => void | - | Item click handler |
| className | string | - | Additional classes |

### BottomNavigationItem

| Prop | Type | Description |
|------|------|-------------|
| id | string | Unique identifier |
| label | string | Display label |
| icon | LucideIcon | Icon component |
| active | boolean | Active state |
| disabled | boolean | Disabled state |
| href | string (optional) | Link URL |
| badge | string \| number (optional) | Badge content |

## Notes

- Uses React.forwardRef
- Fixed position at bottom of viewport
-pb-safe padding for notched devices
- Staggered entrance animation
- Active indicator with layout animation