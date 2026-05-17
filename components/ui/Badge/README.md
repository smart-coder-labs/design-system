# Badge

> **v1.0.28** · stable

A compact status indicator component for showing labels, counts, or status markers with variant styling.

## Installation

```bash
import { Badge, NotificationBadge } from '@/components/ui/Badge';
```

## Basic Usage

```tsx
<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning" dot>Warning</Badge>

<NotificationBadge count={5}>
  <Button>Messages</Button>
</NotificationBadge>
```

## API

### Badge

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'default' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info' | 'default' | Visual style variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Size of the badge |
| dot | boolean | false | Show a colored dot indicator |
| className | string | - | Additional classes |

### NotificationBadge

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| count | number | 0 | Number to display |
| max | number | 99 | Maximum number before showing "+" |
| showZero | boolean | false | Show badge when count is 0 |
| dot | boolean | false | Show as dot instead of number |
| children | ReactNode | - | Element to wrap with badge |

## Notes

- Uses React.forwardRef
- Supports Framer Motion animations on mount
- NotificationBadge auto-hides when count is 0 (unless showZero is true)