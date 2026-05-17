# ContextMenu

> **v1.0.35** · stable

A right-click context menu component with support for nested submenus, checkboxes, and radio groups.

## Installation

```bash
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuLabel, ContextMenuSub, ContextMenuRadioGroup } from '@/components/ui/ContextMenu';
```

## Basic Usage

```tsx
<ContextMenu>
  <ContextMenuTrigger>
    <div>Right-click me</div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Edit</ContextMenuItem>
    <ContextMenuItem>Duplicate</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

## API

### ContextMenu

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state |
| defaultOpen | boolean | false | Initial open state |
| onOpenChange | (open: boolean) => void | - | Callback when open state changes |
| className | string | - | Additional classes |

### ContextMenuTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | false | Use child element as trigger |
| className | string | - | Additional classes |

### ContextMenuContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional classes |
| style | React.CSSProperties | - | Custom styles |

### ContextMenuItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| inset | boolean | false | Add left padding |
| onSelect | () => void | - | Callback when item is selected |
| className | string | - | Additional classes |

### ContextMenuCheckboxItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | Checked state |
| onCheckedChange | (checked: boolean) => void | - | Callback when checked state changes |
| className | string | - | Additional classes |

### ContextMenuRadioGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | - | Selected value |
| onValueChange | (value: string) => void | - | Callback when value changes |
| className | string | - | Additional classes |

### Sub-components

- `ContextMenuLabel` - Section label (supports `inset` prop)
- `ContextMenuSeparator` - Visual divider
- `ContextMenuShortcut` - Keyboard shortcut text
- `ContextMenuGroup` - Group wrapper
- `ContextMenuSub` - Nested submenu container
- `ContextMenuSubTrigger` - Submenu trigger
- `ContextMenuSubContent` - Submenu content

## Notes

- Uses React.createPortal to render menus at document body level
- Supports keyboard navigation (Escape to close)
- All sub-components use React.forwardRef