# ConfirmDialog

> **v1.0.22** · stable

A confirmation dialog component for user actions with customizable variants and icons.

## Installation

```bash
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
```

## Basic Usage

```tsx
const [open, setOpen] = useState(false);

<ConfirmDialog
  open={open}
  onOpenChange={setOpen}
  title="Are you sure?"
  description="This action cannot be undone."
  confirmLabel="Delete"
  onConfirm={() => console.log('Confirmed')}
/>
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | - | Controlled open state (required) |
| onOpenChange | (open: boolean) => void | - | Callback when open state changes (required) |
| title | string | - | Dialog title (required) |
| description | ReactNode | - | Dialog description |
| confirmLabel | string | 'Confirm' | Confirm button text |
| cancelLabel | string | 'Cancel' | Cancel button text |
| onConfirm | () => void | - | Confirm button callback (required) |
| onCancel | () => void | - | Cancel button callback |
| variant | 'default' \| 'destructive' \| 'warning' \| 'info' | 'default' | Dialog variant |
| isLoading | boolean | false | Show loading state on confirm button |
| icon | ReactNode | - | Custom icon (overrides default) |

## Variants

- `default` - Blue icon, primary confirm button
- `destructive` - Red icon, destructive confirm button
- `warning` - Yellow icon, primary confirm button
- `info` - Blue icon, primary confirm button

## Notes

- Uses the Modal component internally
- Automatically closes on cancel
- Supports React.forwardRef