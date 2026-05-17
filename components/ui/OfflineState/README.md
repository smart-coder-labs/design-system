# OfflineState

> **v1.0.15** · stable

A component for displaying offline or connection error states with retry functionality. Can be displayed as a card or full-page overlay.

## Basic Usage

```tsx
import { OfflineState } from '@/components/ui/OfflineState';

<OfflineState />
```

## With Retry

```tsx
<OfflineState
  onRetry={() => {
    // Retry connection
    window.location.reload();
  }}
/>
```

## Custom Content

```tsx
<OfflineState
  title="Connection Lost"
  description="We could not reach our servers. Please check your internet connection."
  icon={<WifiOff className="w-10 h-10 text-text-secondary" />}
/>
```

## Full Page Overlay

```tsx
<OfflineState
  title="No Internet Connection"
  description="Please check your network settings and try again."
  fullPage
  onRetry={() => console.log('Retrying...')}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'No Internet Connection'` | Title text |
| `description` | `string` | `'Please check your network settings and try again.'` | Description text |
| `onRetry` | `() => void` | - | Callback when retry button is clicked |
| `isRetrying` | `boolean` | `false` | Show loading state on retry button |
| `fullPage` | `boolean` | `false` | Display as full page overlay |
| `className` | `string` | - | Additional CSS classes |
| `icon` | `ReactNode` | - | Custom icon to display |

## Examples

### Minimal

```tsx
<OfflineState
  title="Offline"
  description="You are currently offline."
/>
```

### Banking App

```tsx
<OfflineState
  title="No Internet Connection"
  description="Your data is safe and will sync automatically when reconnected."
  onRetry={() => console.log('Reconnecting...')}
/>
```

### Maintenance Mode

```tsx
<OfflineState
  title="Scheduled Maintenance"
  description="We are upgrading our systems. Expected completion: 3:00 AM EST."
/>
```

## Notes

- Uses Framer Motion for entrance animation (fade in + scale)
- Animated background glow effect on icon
- Retry button shows loading spinner when `isRetrying` is true
- Full page mode uses fixed positioning with backdrop blur
- Card mode renders within existing container
- Dark mode support via design tokens