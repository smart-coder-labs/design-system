# Toast

> **v1.0.33** · stable

A notification toast component with auto-dismiss functionality. Supports multiple variants (default, destructive, success) and customizable duration.

## Installation

```bash
import { ToastProvider, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction, ToastViewport } from '@/components/ui/Toast';
```

## Basic Usage

```tsx
<ToastProvider>
  <Toast>
    <ToastTitle>Notification</ToastTitle>
    <ToastDescription>Your settings have been saved.</ToastDescription>
    <ToastClose />
  </Toast>
</ToastProvider>
```

## API

### ToastProvider

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Toast components and app content |

### Toast

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controls toast visibility (controlled) |
| defaultOpen | boolean | false | Initial open state (uncontrolled) |
| onOpenChange | (open: boolean) => void | - | Callback when open state changes |
| variant | 'default' \| 'destructive' \| 'success' | 'default' | Toast style variant |
| duration | number | 5000 | Auto-dismiss delay (ms), use Infinity to disable |
| role | 'status' \| 'alert' | 'status' | ARIA role for accessibility |
| className | string | - | Additional classes |

### ToastTitle

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Title content |
| className | string | - | Additional classes |

### ToastDescription

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Description content |
| className | string | - | Additional classes |

### ToastClose

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Close button content (optional) |
| className | string | - | Additional classes |

### ToastAction

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| altText | string | - | Accessible label |
| children | ReactNode | - | Action button content |
| className | string | - | Additional classes |

### ToastViewport

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| className | string | - | Additional classes |

## Examples

### Default Toast

```tsx
<Toast>
  <ToastTitle>Changes saved</ToastTitle>
  <ToastDescription>Your preferences have been updated.</ToastDescription>
  <ToastClose />
</Toast>
```

### Success Toast

```tsx
<Toast variant="success">
  <ToastTitle>Success</ToastTitle>
  <ToastDescription>Payment processed successfully.</ToastDescription>
</Toast>
```

### Destructive Toast

```tsx
<Toast variant="destructive">
  <ToastTitle>Error</ToastTitle>
  <ToastDescription>Failed to connect to server.</ToastDescription>
  <ToastAction altText="Retry">Retry</ToastAction>
  <ToastClose />
</Toast>
```

### Controlled Toast

```tsx
const [open, setOpen] = useState(false);

<Toast open={open} onOpenChange={setOpen} duration={3000}>
  <ToastTitle>Timed Toast</ToastTitle>
  <ToastDescription>This will close after 3 seconds.</ToastDescription>
</Toast>
```

### Toast with Action

```tsx
<Toast>
  <ToastTitle>Update available</ToastTitle>
  <ToastDescription>A new version is ready to install.</ToastDescription>
  <ToastAction altText="Install">Install</ToastAction>
  <ToastClose />
</Toast>
```

### Persisting Toast

```tsx
<Toast duration={Infinity}>
  <ToastTitle>Important</ToastTitle>
  <ToastDescription>This toast will not auto-dismiss.</ToastDescription>
  <ToastClose />
</Toast>
```

## Notes

- Requires ToastProvider wrapping your app
- Renders into ToastViewport (fixed position container)
- Uses React Portal when viewport is available
- Auto-dismisses after specified duration
- Accessible with aria-live and role attributes
- Swipe gesture support (via data attributes)
- Glass morphism styling with backdrop blur