# Sheet

> **v1.0.19** · stable

A slide-in panel component that slides in from any edge (top, bottom, left, right). Perfect for sidebars, dialogs, and configuration panels.

## Installation

```bash
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/Sheet';
```

## Basic Usage

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
    <div className="py-4">Content goes here</div>
    <SheetFooter>
      <SheetClose>Cancel</SheetClose>
      <Button variant="primary">Save</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## API

### Sheet

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controls sheet visibility (controlled) |
| defaultOpen | boolean | false | Initial open state (uncontrolled) |
| onOpenChange | (open: boolean) => void | - | Callback when open state changes |
| children | ReactNode | - | Sheet components |

### SheetTrigger

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | boolean | false | Use as wrapper for custom trigger |
| children | ReactNode | - | Trigger element |
| className | string | - | Additional classes |

### SheetContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| side | 'top' \| 'bottom' \| 'left' \| 'right' | 'right' | Which edge to slide from |
| children | ReactNode | - | Sheet content |
| className | string | - | Additional classes |

### SheetHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Header content |
| className | string | - | Additional classes |

### SheetFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Footer actions |
| className | string | - | Additional classes |

### SheetTitle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Title content |
| className | string | - | Additional classes |

### SheetDescription

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Description content |
| className | string | - | Additional classes |

### SheetClose

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Close button content |
| className | string | - | Additional classes |

## Examples

### Right Sheet (Default)

```tsx
<Sheet>
  <SheetTrigger>
    <Button>Open Settings</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Settings</SheetTitle>
      <SheetDescription>Configure your preferences</SheetDescription>
    </SheetHeader>
    <SheetContent>
      {/* Settings form */}
    </SheetContent>
  </SheetContent>
</Sheet>
```

### Left Sheet

```tsx
<Sheet>
  <SheetTrigger>
    <Button>Open Menu</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
    </SheetHeader>
    {/* Navigation items */}
  </SheetContent>
</Sheet>
```

### Bottom Sheet

```tsx
<Sheet>
  <SheetTrigger>
    <Button>Open Filters</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Filters</SheetTitle>
    </SheetHeader>
    {/* Filter options */}
  </SheetContent>
</Sheet>
```

### Controlled Sheet

```tsx
const [open, setOpen] = useState(false);

<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild>
    <Button>Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetTitle>Controlled Sheet</SheetTitle>
    {/* Content */}
  </SheetContent>
</Sheet>
```

## Notes

- Uses React Portal to render at document body
- Escape key closes sheet
- Overlay with backdrop blur
- Built with Radix-style context pattern
- class-variance-authority for side variants
- Includes built-in close button (X icon)