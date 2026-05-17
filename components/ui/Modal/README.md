# Modal

> **v1.0.10** · stable

A flexible modal dialog component with multiple positioning options (center, bottom, left, right, fullscreen) and focus trap for accessibility.

## Installation

```bash
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, ModalCloseButton } from '@/components/ui/Modal';
```

## Basic Usage

```tsx
const [open, setOpen] = useState(false);

<Modal open={open} onOpenChange={setOpen}>
  <ModalCloseButton />
  <ModalHeader>
    <ModalTitle>Modal Title</ModalTitle>
    <ModalDescription>Description goes here</ModalDescription>
  </ModalHeader>
  <ModalContent>
    <p>Modal content</p>
  </ModalContent>
  <ModalFooter>
    <Button variant="ghost">Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </ModalFooter>
</Modal>
```

## API

### Modal

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controls modal visibility (required) |
| onOpenChange | (open: boolean) => void | - | Callback when open state changes |
| children | ReactNode | - | Modal content |
| size | 'sm' \| 'md' \| 'lg' \| 'xl' \| 'full' | 'md' | Modal width |
| position | 'center' \| 'right' \| 'left' \| 'bottom' \| 'fullscreen' | 'center' | Modal position |

### ModalHeader

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Header content |
| className | string | - | Additional classes |

### ModalTitle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Title content |
| className | string | - | Additional classes |

### ModalDescription

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Description content |
| className | string | - | Additional classes |

### ModalContent

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Main content |
| className | string | - | Additional classes |

### ModalFooter

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Footer actions |
| className | string | - | Additional classes |

### ModalCloseButton

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional classes |

## Examples

### Center Modal (Default)

```tsx
<Modal open={open} onOpenChange={setOpen} size="md">
  <ModalCloseButton />
  <ModalHeader>
    <ModalTitle>Confirm Action</ModalTitle>
    <ModalDescription>Are you sure you want to proceed?</ModalDescription>
  </ModalHeader>
  <ModalContent>
    <p>This action cannot be undone.</p>
  </ModalContent>
  <ModalFooter>
    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </ModalFooter>
</Modal>
```

### Bottom Sheet

```tsx
<Modal open={open} onOpenChange={setOpen} position="bottom" size="full">
  <ModalHeader>
    <ModalTitle>Filters</ModalTitle>
  </ModalHeader>
  <ModalContent>
    {/* Filter options */}
  </ModalContent>
  <ModalFooter>
    <Button variant="primary" onClick={() => setOpen(false)}>Apply</Button>
  </ModalFooter>
</Modal>
```

### Right Side Sheet

```tsx
<Modal open={open} onOpenChange={setOpen} position="right" size="md">
  <ModalHeader>
    <ModalTitle>Settings</ModalTitle>
  </ModalHeader>
  <ModalContent>
    {/* Settings content */}
  </ModalContent>
</Modal>
```

### Fullscreen Modal

```tsx
<Modal open={open} onOpenChange={setOpen} position="fullscreen">
  <ModalContent>
    {/* Fullscreen content */}
  </ModalContent>
</Modal>
```

## Notes

- Uses React Portal to render at document body
- Focus trap for keyboard accessibility
- Escape key closes modal
- Prevents body scroll when open
- Animated entry/exit with Framer Motion
- Overlay with backdrop blur effect