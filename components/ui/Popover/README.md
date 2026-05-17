# Popover

> **v1.0.29** · stable

A floating panel that appears relative to a trigger element. Useful for dropdowns, select menus, and contextual content.

## Installation

```bash
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/Popover';
```

## Basic Usage

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Popover content here</p>
  </PopoverContent>
</Popover>
```

## API

### Popover

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controls popover visibility (controlled) |
| defaultOpen | boolean | false | Initial open state (uncontrolled) |
| onOpenChange | (open: boolean) => void | - | Callback when open state changes |
| children | ReactNode | - | Popover components |

### PopoverTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | false | Use as wrapper for custom trigger |
| children | ReactNode | - | Trigger element |
| className | string | - | Additional classes |

### PopoverContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | 'top' \| 'bottom' \| 'left' \| 'right' | 'bottom' | Position relative to trigger |
| align | 'start' \| 'center' \| 'end' | 'center' | Alignment |
| sideOffset | number | 4 | Distance from trigger |
| children | ReactNode | - | Popover content |
| className | string | - | Additional classes |
| style | React.CSSProperties | - | Additional inline styles |

## Examples

### Basic Popover

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button>Click me</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <p className="font-medium">Actions</p>
      <Button variant="ghost" className="w-full justify-start">Edit</Button>
      <Button variant="ghost" className="w-full justify-start">Delete</Button>
    </div>
  </PopoverContent>
</Popover>
```

### Popover with Custom Position

```tsx
<Popover>
  <PopoverTrigger>
    <IconButton icon={<MoreVert />} />
  </PopoverTrigger>
  <PopoverContent side="right" align="start">
    {/* Content */}
  </PopoverContent>
</Popover>
```

### Controlled Popover

```tsx
const [open, setOpen] = useState(false);

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button>Menu</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Controlled popover</p>
  </PopoverContent>
</Popover>
```

### Rich Content Popover

```tsx
<Popover>
  <PopoverTrigger>
    <Button>User Menu</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="flex items-center gap-3 mb-4">
      <Avatar src="/avatar.jpg" />
      <div>
        <p className="font-medium">John Doe</p>
        <p className="text-sm text-text-secondary">john@example.com</p>
      </div>
    </div>
    <div className="space-y-1">
      <Button variant="ghost" className="w-full">Profile</Button>
      <Button variant="ghost" className="w-full">Settings</Button>
      <Button variant="ghost" className="w-full">Logout</Button>
    </div>
  </PopoverContent>
</Popover>
```

## Notes

- Uses React Portal to render at document body
- Click outside closes popover
- Escape key closes popover
- Automatically positions to stay in viewport
- Updates position on scroll/resize
- Glass morphism styling with backdrop blur