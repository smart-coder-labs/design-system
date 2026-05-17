# Callout

> **v1.0.0** · stable

An informational alert component for displaying messages with contextual variants, optional dismissibility, and custom icons.

## Installation

```bash
import { Callout } from '@/components/ui/Callout';
```

## Basic Usage

```tsx
<Callout>
  This is an informational message.
</Callout>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'info' \| 'success' \| 'warning' \| 'error' \| 'neutral' | 'info' | Visual style |
| title | string | undefined | Optional title |
| icon | ElementType | undefined | Custom icon |
| dismissible | boolean | false | Show dismiss button |
| onDismiss | () => void | undefined | Dismiss callback |

## Examples

### Warning Callout

```tsx
<Callout variant="warning" title="Warning">
  Please review your settings before proceeding.
</Callout>
```

### Dismissible Success

```tsx
<Callout
  variant="success"
  title="Saved"
  dismissible
  onDismiss={() => setShow(false)}
>
  Your changes have been saved successfully.
</Callout>
```

## Notes

- Uses React.forwardRef for ref forwarding
- Custom icons must be Lucide React components or compatible
- Colors adapt automatically to dark mode