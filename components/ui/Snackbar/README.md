# Snackbar

> **v1.0.32** · stable

A toast notification component for displaying brief messages at the bottom of the screen with auto-dismiss support.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Snackbar } from '@/components/ui/Snackbar';
```

## Basic Usage

```tsx
import { useState } from 'react';
import { Snackbar } from '@/components/ui/Snackbar';

function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Show Snackbar</button>
      <Snackbar 
        message="Transaction completed" 
        show={show} 
        onClose={() => setShow(false)} 
      />
    </>
  );
}
```

## With Action Button

```tsx
<Snackbar
  message="Item moved to trash"
  action={{ label: 'Undo', onClick: handleUndo }}
  show={show}
  onClose={() => setShow(false)}
/>
```

## Variants

```tsx
// Success
<Snackbar message="Transfer completed" variant="success" show={show} onClose={close} />

// Error
<Snackbar message="Transaction failed" variant="error" show={show} onClose={close} />

// Warning
<Snackbar message="High fees detected" variant="warning" show={show} onClose={close} />

// Info
<Snackbar message="2FA required" variant="info" show={show} onClose={close} />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | - | The message to display |
| `variant` | `'default' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'default'` | Visual style |
| `action` | `{ label: string; onClick: () => void }` | - | Action button |
| `duration` | `number` | `5000` | Auto-dismiss delay (ms), 0 = no auto-dismiss |
| `onClose` | `() => void` | - | Called when closed |
| `show` | `boolean` | `true` | Controls visibility |

## Examples

### Auto-Hide Duration

```tsx
<Snackbar
  message="This will auto-dismiss in 3 seconds"
  duration={3000}
  show={show}
  onClose={close}
/>
```

### Manual Control (No Auto-Dismiss)

```tsx
<Snackbar
  message="Permanent message - close manually"
  duration={0}
  show={show}
  onClose={close}
/>
```

### Dark Mode

```tsx
<div className="dark bg-gray-950 min-h-screen p-8">
  <Snackbar message="Dark mode snackbar" variant="success" show={true} onClose={() => {}} />
</div>
```

## Notes

- Renders via React Portal to document.body
- Uses Framer Motion for slide-in animation
- Positioned fixed at bottom center
- Auto-dismisses after specified duration
- Action button triggers callback and closes snackbar
- Click X to manually close
- Supports dark mode via design tokens