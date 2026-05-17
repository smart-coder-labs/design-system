# Alert

> **v1.0.2** · stable

A contextual feedback component for displaying important messages to users. Supports multiple variants for different message types.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';
```

## Basic Usage

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';

<Alert>
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
        You can add components to your app using the cli.
    </AlertDescription>
</Alert>
```

## Variants

```tsx
// Default (info)
<Alert>
    <AlertTitle>Default</AlertTitle>
    <AlertDescription>Standard informational message</AlertDescription>
</Alert>

// Destructive (error)
<Alert variant="destructive">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
</Alert>

// Success
<Alert variant="success">
    <AlertTitle>Success</AlertTitle>
    <AlertDescription>Your changes have been saved successfully.</AlertDescription>
</Alert>

// Warning
<Alert variant="warning">
    <AlertTitle>Warning</AlertTitle>
    <AlertDescription>This action cannot be undone.</AlertDescription>
</Alert>

// Info
<Alert variant="info">
    <AlertTitle>Note</AlertTitle>
    <AlertDescription>Please read the documentation for more details.</AlertDescription>
</Alert>
```

## API

### Alert Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'success' \| 'warning' \| 'info'` | `'default'` | Visual style variant |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Alert content |

### AlertTitle Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |
| `children` | `ReactNode` | Title content |

### AlertDescription Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |
| `children` | `ReactNode` | Description content |

## Examples

### With Custom Icon

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';
import { Terminal } from 'lucide-react';

<Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>System Update</AlertTitle>
    <AlertDescription>
        A new version is available. Restart to apply updates.
    </AlertDescription>
</Alert>
```

### With React Router Style Notice

```tsx
<Alert variant="warning">
    <AlertTitle>Maintenance Notice</AlertTitle>
    <AlertDescription>
        The system will be down for maintenance on Sunday at 2:00 AM UTC.
    </AlertDescription>
</Alert>
```

## Notes

- Uses React.forwardRef for the root element
- Each variant includes a corresponding icon from lucide-react
- Fully accessible with role="alert" ARIA attribute
- Supports dark mode via design tokens
- Uses class-variance-authority for variants