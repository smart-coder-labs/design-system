# Timeline

> **v1.0.20** · stable

A vertical timeline component for displaying chronological events with support for alternate layouts and status indicators.

## Installation

```bash
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
```

## Basic Usage

```tsx
<Timeline>
  <TimelineItem
    date="10:30 AM"
    title="Project Created"
    description="Initial project setup completed"
    status="success"
  />
  <TimelineItem
    date="11:45 AM"
    title="Review Started"
    description="Code review in progress"
    status="loading"
  />
  <TimelineItem
    date="2:00 PM"
    title="Pending Approval"
    status="warning"
  />
</Timeline>
```

## API

### Timeline

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| layout | 'default' \| 'alternate' | 'default' | Timeline layout |
| className | string | - | Additional classes |
| children | ReactNode | - | Timeline items |

### TimelineItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| date | ReactNode | - | Date/time label |
| title | ReactNode | - | Item title |
| description | ReactNode | - | Item description |
| icon | ReactNode | - | Custom icon |
| status | 'default' \| 'success' \| 'warning' \| 'error' \| 'info' \| 'loading' | 'default' | Status type |
| isActive | boolean | false | Active state styling |
| isLast | boolean | false | Last item (internal) |
| position | 'left' \| 'right' | 'right' | Position in alternate layout |
| layout | TimelineLayout | - | Layout mode (internal) |
| className | string | - | Additional classes |

## Status Styles

- `default` - Gray dot, subtle line
- `success` - Green styling, check icon
- `warning` - Yellow styling, alert icon
- `error` - Red styling, X icon
- `info` - Blue styling, info icon
- `loading` - Purple styling, clock icon (pulsing)

## Notes

- `Timeline` accepts children or uses internal layout management
- Each item automatically gets `isLast` and `position` from parent
- Supports React.forwardRef