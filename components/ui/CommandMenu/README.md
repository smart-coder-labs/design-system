# CommandMenu

> **v1.0.12** · stable

A command palette/modal component similar to Spotlight or cmd+k menus. Provides quick access to commands or searchable items with keyboard navigation.

## Installation

```bash
import { CommandMenu } from '@/components/ui/CommandMenu';
```

## Basic Usage

The CommandMenu is a controlled component - you manage the `isOpen` state:

```tsx
const [open, setOpen] = useState(false);

<>
  <button onClick={() => setOpen(true)}>Open Commands</button>
  <CommandMenu
    isOpen={open}
    onClose={() => setOpen(false)}
    groups={[
      {
        title: 'Actions',
        items: [
          {
            id: 'new-file',
            label: 'New File',
            shortcut: '⌘N',
            onSelect: () => console.log('New file'),
          },
          {
            id: 'save',
            label: 'Save',
            shortcut: '⌘S',
            onSelect: () => console.log('Save'),
          },
        ],
      },
    ]}
  />
</>
```

## With Descriptions

```tsx
<CommandMenu
  isOpen={open}
  onClose={() => setOpen(false)}
  groups={[
    {
      items: [
        {
          id: 'settings',
          label: 'Settings',
          description: 'Configure your preferences',
          onSelect: () => openSettings(),
        },
      ],
    },
  ]}
/>
```

## With Icons

```tsx
<CommandMenu
  isOpen={open}
  onClose={() => setOpen(false)}
  groups={[
    {
      title: 'Navigation',
      items: [
        {
          id: 'home',
          label: 'Go to Home',
          icon: <HomeIcon />,
          onSelect: () => navigate('/'),
        },
        {
          id: 'dashboard',
          label: 'Go to Dashboard',
          icon: <DashboardIcon />,
          onSelect: () => navigate('/dashboard'),
        },
      ],
    },
  ]}
/>
```

## With Keywords

Enhance searchability by adding keywords:

```tsx
<CommandMenu
  isOpen={open}
  onClose={() => setOpen(false)}
  groups={[
    {
      items: [
        {
          id: 'dark-mode',
          label: 'Toggle Dark Mode',
          keywords: ['theme', 'dark', 'light', 'mode', 'contrast'],
          onSelect: () => toggleTheme(),
        },
      ],
    },
  ]}
/>
```

## Custom Placeholder

```tsx
<CommandMenu
  isOpen={open}
  onClose={() => setOpen(false)}
  placeholder="Search commands or type > for actions..."
  groups={groups}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| isOpen | `boolean` | - | Controls whether the menu is visible |
| onClose | `() => void` | - | Callback when menu should close |
| groups | `CommandMenuGroup[]` | - | Grouped list of commands |
| placeholder | `string` | `'Type a command or search...'` | Search input placeholder |
| emptyMessage | `string` | `'No results found.'` | Message when no results |
| className | `string` | `''` | Additional CSS classes |

### CommandMenuGroup

```typescript
interface CommandMenuGroup {
  title?: string;
  items: CommandMenuItem[];
}
```

### CommandMenuItem

```typescript
interface CommandMenuItem {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  shortcut?: string;
  keywords?: string[];
  onSelect: () => void;
}
```

## Keyboard Navigation

- **Arrow Up/Down**: Navigate through items
- **Enter**: Execute selected command
- **Escape**: Close the menu

A help footer shows available keyboard shortcuts.

## Search Behavior

The search filters by:
- Item label (case-insensitive)
- Item description (case-insensitive)
- Keywords array (case-insensitive)

## Features

- **Grouped Items**: Organize commands into sections
- **Search**: Filter items as you type
- **Keyboard Shortcuts**: Display and execute shortcuts
- **Icons**: Support for custom icons
- **Descriptions**: Show descriptive text for items
- **Keywords**: Enhanced search with synonyms

## Notes

- Does not render anything when `isOpen` is false
- Manages body overflow to prevent background scrolling
- Uses Framer Motion for smooth open/close animations
- Supports dark mode with appropriate color tokens
- Backdrop click closes the menu