# Sidebar

> **v1.0.1** · stable

Vertical navigation component for side navigation panels and menus.

## Installation

```bash
import { Sidebar } from '@/components/ui/Sidebar';
```

## Basic Usage

```tsx
<Sidebar
  items={[
    { label: 'Home', href: '/', icon: <HomeIcon /> },
    { label: 'Dashboard', href: '/dashboard', icon: <LayoutIcon /> },
    { label: 'Settings', href: '/settings', icon: <SettingsIcon />, active: true },
  ]}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | `SidebarItem[]` | - | Navigation items array |
| className | `string` | `''` | Optional className for custom styling |

### SidebarItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | `string` | - | Item label text |
| href | `string` | - | Navigation URL (renders as link) |
| icon | `ReactNode` | - | Optional icon element |
| active | `boolean` | `false` | Active state styling |
| onClick | `() => void` | - | Click handler (renders as button) |

## Notes

- Uses React.forwardRef
- Supports dark mode via design tokens
- Uses Framer Motion for entrance animation (slide in from left)
- Active state shows primary text with surface background
- Inactive state shows secondary text with hover effect