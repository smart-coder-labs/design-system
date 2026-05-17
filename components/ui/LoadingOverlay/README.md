# LoadingOverlay

> **v1.0.7** · stable

A semi-transparent overlay component that displays a loading spinner with an optional message. Ideal for indicating background operations or blocking user interaction during async operations.

## Installation

```bash
# The component is copied to your project with the add cli command
import { LoadingOverlay } from '@/components/ui/LoadingOverlay';
```

## Basic Usage

```tsx
import { LoadingOverlay } from '@/components/ui/LoadingOverlay';

function Example() {
  return (
    <div className="relative">
      <LoadingOverlay isLoading={true} message="Processing..." />
      {/* Content behind overlay */}
    </div>
  );
}
```

## With Custom Message

```tsx
<LoadingOverlay
  isLoading={true}
  message="Processing your transaction..."
  spinnerSize="lg"
/>
```

## Container Overlay (Default)

The overlay covers only the parent container.

```tsx
<div className="relative w-96 h-48">
  <LoadingOverlay
    isLoading={true}
    message="Verifying your identity..."
  />
  <div className="p-6">Content to cover</div>
</div>
```

## Full Page Overlay

Use `fullPage={true}` to cover the entire viewport.

```tsx
<LoadingOverlay
  isLoading={true}
  fullPage={true}
  message="Loading..."
  blur={true}
/>
```

## Without Blur

Disable the backdrop blur effect when you want a cleaner look.

```tsx
<LoadingOverlay
  isLoading={true}
  blur={false}
  message="Processing payment..."
  spinnerSize="md"
/>
```

## API

### Props

| Prop           | Type               | Default   | Description                                      |
|----------------|-------------------|-----------|--------------------------------------------------|
| `isLoading`    | `boolean`         | -         | Controls visibility of the overlay               |
| `message`      | `string`          | -         | Optional message to display below the spinner    |
| `fullPage`     | `boolean`         | `false`   | Whether to cover viewport (fixed) or container   |
| `blur`         | `boolean`         | `true`    | Apply blur effect to the backdrop                |
| `spinnerSize`  | `'sm' \| 'md' \| 'lg'` | `'lg'` | Size of the spinner                           |
| `className`    | `string`          | -         | Additional CSS classes for the container        |

## Examples

### Payment Processing

```tsx
<LoadingOverlay
  isLoading={true}
  message="Sending $250.00 to Alice Johnson..."
  spinnerSize="lg"
/>
```

### Small Spinner

```tsx
<LoadingOverlay
  isLoading={true}
  message="Refreshing data..."
  spinnerSize="sm"
/>
```

### Dark Mode

```tsx
<div className="dark">
  <LoadingOverlay
    isLoading={true}
    message="Loading your portfolio..."
  />
</div>
```

## Notes

- Uses `AnimatePresence` for smooth enter/exit animations (150ms)
- Semi-transparent background (`bg-surface-primary/80`)
- Backdrop blur effect when enabled (`backdrop-blur-sm`)
- `z-50` z-index to ensure it sits above other content
- Fully accessible with proper ARIA attributes
- Dark mode compatible via design tokens

---

## Architecture Decisions

### Why position-dependent rendering?

The component supports two positioning modes:
- **Container (default)**: `absolute` positioning within the parent
- **Full page**: `fixed` positioning covering the viewport

This design allows the component to be used flexibly in both embedded widgets and full-page loading states.

### When to use LoadingOverlay

- Form submissions with server processing
- Data fetching with loading states
- Payment processing indicators
- Multi-step wizard progress
- Initial app loading states