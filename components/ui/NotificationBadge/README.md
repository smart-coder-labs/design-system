# NotificationBadge

> Note: This component is exported from the `Badge` component, not as a standalone component.

## Overview

The NotificationBadge is a notification counter badge that displays on top of any child element, commonly used for notification indicators on buttons, icons, or avatars.

## Installation

```tsx
import { NotificationBadge } from '@/components/ui/Badge';
```

## Basic Usage

```tsx
<NotificationBadge count={5}>
  <Button>Notifications</Button>
</NotificationBadge>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | `0` | The notification count |
| `max` | `number` | `99` | Maximum display number (shows 99+) |
| `showZero` | `boolean` | `false` | Show badge even when count is 0 |
| `dot` | `boolean` | `false` | Show as a dot only (no number) |
| `children` | `ReactNode` | - | Element to display badge on |

## Examples

### Count Display

```tsx
<NotificationBadge count={5}>
  <Button>Notifications</Button>
</NotificationBadge>
```

### With Max Display

```tsx
<NotificationBadge count={150} max={99}>
  <Button>Messages</Button>
</NotificationBadge>
// Shows "99+"
```

### Dot Only

```tsx
<NotificationBadge count={3} dot>
  <IconButton icon={<Bell />} />
</NotificationBadge>
// Shows just a dot indicator
```

### Show Zero

```tsx
<NotificationBadge count={0} showZero>
  <Button>Alerts</Button>
</NotificationBadge>
// Badge visible even with 0
```

## Notes

- NotificationBadge auto-hides when count is 0 (unless showZero is true)
- Positioned at top-right corner of children
- Supports negative numbers (shows as negative)
- Compatible with any element as children

## See Also

- [Badge](./Badge/README.md) - Parent component