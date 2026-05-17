# MenuBar

> **v1.0.14** · stable

macOS-style menu bar component with dropdown menus, keyboard navigation, and nested submenus.

## Installation

```bash
import { MenuBar } from '@/components/ui/MenuBar';
```

## Basic Usage

```tsx
<MenuBar
  menus={[
    {
      id: 'file',
      label: 'File',
      items: [
        { id: 'new', label: 'New', shortcut: '⌘N' },
        { id: 'open', label: 'Open', shortcut: '⌘O' },
        { id: 'div1', label: '', divider: true },
        { id: 'save', label: 'Save', shortcut: '⌘S', disabled: true },
      ],
    },
    {
      id: 'edit',
      label: 'Edit',
      items: [
        { id: 'cut', label: 'Cut', shortcut: '⌘X' },
        { id: 'copy', label: 'Copy', shortcut: '⌘C' },
        { id: 'paste', label: 'Paste', shortcut: '⌘V' },
      ],
    },
  ]}
  leftContent={<AppLogo />}
  rightContent={<UserAvatar />}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| menus | `MenuBarMenu[]` | - | Menu configuration array |
| leftContent | `ReactNode` | - | Optional left content (app logo) |
| rightContent | `ReactNode` | - | Optional right content (user menu) |
| className | `string` | `''` | Optional className |

### MenuBarMenu

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | `string` | - | Unique menu identifier |
| label | `string` | - | Menu button label |
| items | `MenuBarItem[]` | - | Menu items array |

### MenuBarItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| id | `string` | - | Unique item identifier |
| label | `string` | - | Item label text |
| icon | `ReactNode` | - | Optional icon |
| shortcut | `string` | - | Optional keyboard shortcut |
| disabled | `boolean` | `false` | Disabled state |
| divider | `boolean` | `false` | Renders as divider line |
| onSelect | `() => void` | - | Selection handler |
| submenu | `MenuBarItem[]` | - | Nested submenu items |

## Notes

- Uses React.forwardRef
- Supports dark mode via design tokens
- Click outside closes active menu
- Escape key closes menu
- Framer Motion for dropdown animations
- Supports disabled items and dividers
- Keyboard shortcut display with kbd styling