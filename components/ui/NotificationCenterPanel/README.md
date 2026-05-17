# NotificationCenterPanel

> **v1.0.0** · stable

A notification center panel for displaying lists of notifications with different types (info, success, warning, error), read/unread states, and action buttons.

## Basic Usage

```tsx
import { NotificationCenterPanel } from '@/components/ui/NotificationCenterPanel';

const notifications = [
  { id: '1', title: 'New message', message: 'You have a new message', type: 'info', timestamp: '2 min ago', read: false },
  { id: '2', title: 'Payment successful', message: 'Your payment was processed', type: 'success', timestamp: '1 hour ago', read: true },
];

<NotificationCenterPanel notifications={notifications} />
```

## With Actions

```tsx
<NotificationCenterPanel
  notifications={notifications}
  onNotificationClick={(n) => console.log('Clicked:', n)}
  onMarkAllRead={() => console.log('Mark all read')}
  onClearAll={() => console.log('Clear all')}
  onDismiss={(n) => console.log('Dismiss:', n)}
/>
```

## With Custom Icons

```tsx
import { Mail, Calendar } from 'lucide-react';

<NotificationCenterPanel
  notifications={[
    { id: '1', title: 'New email', icon: <Mail />, timestamp: '5 min ago', read: false },
    { id: '2', title: 'Meeting reminder', icon: <Calendar />, timestamp: '10 min ago', read: false },
  ]}
/>
```

## With Action Buttons

```tsx
<NotificationCenterPanel
  notifications={[
    {
      id: '1',
      title: 'Security alert',
      message: 'New login from unrecognized device',
      type: 'warning',
      timestamp: '3 hours ago',
      read: false,
      action: {
        label: 'Review',
        onClick: () => console.log('Review security alert'),
      },
    },
  ]}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `notifications` | `Notification[]` | Required | Array of notification objects |
| `onNotificationClick` | `(notification: Notification) => void` | - | Callback when notification is clicked |
| `onMarkAllRead` | `() => void` | - | Callback to mark all as read |
| `onClearAll` | `() => void` | - | Callback to clear all notifications |
| `onDismiss` | `(notification: Notification) => void` | - | Callback to dismiss single notification |
| `className` | `string` | - | Additional CSS classes |

### Notification

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `title` | `string` | Notification title |
| `message` | `string` | Notification body text (optional) |
| `type` | `'info' \| 'success' \| 'warning' \| 'error'` | Notification type for styling |
| `timestamp` | `string` | Time string (e.g., '5 min ago') |
| `read` | `boolean` | Whether notification is read |
| `action` | `{ label: string; onClick: () => void }` | Action button (optional) |
| `icon` | `ReactNode` | Custom icon (optional) |

## Examples

### Empty State

```tsx
<NotificationCenterPanel notifications={[]} />
```

### Unread Only

```tsx
<NotificationCenterPanel
  notifications={notifications.filter(n => !n.read)}
  onMarkAllRead={() => markAllRead()}
/>
```

### Different Types

```tsx
<NotificationCenterPanel
  notifications={[
    { id: '1', title: 'Payment processed', type: 'success', timestamp: '5 min ago', read: false },
    { id: '2', title: 'Storage almost full', type: 'warning', timestamp: '10 min ago', read: false },
    { id: '3', title: 'Payment failed', type: 'error', timestamp: '30 min ago', read: false },
  ]}
/>
```

## Notes

- Displays unread count badge in header
- Shows empty state when no notifications
- Unread notifications have subtle blue background tint
- Icon and border color change based on type
- Supports custom icons per notification
- Animations use Framer Motion with staggered entry
- Dark mode support via design tokens