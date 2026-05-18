# SchedulerTimeline

> **v1.0.3** · experimental

A day-view timeline scheduler for managing events across multiple resources (e.g., team members, rooms). Displays time slots, events, and current time indicator.

## Installation

```bash
# The component is copied to your project with the add cli command
import { SchedulerTimeline } from '@/components/ui/SchedulerTimeline';
```

## Basic Usage

```tsx
import { SchedulerTimeline } from '@/components/ui/SchedulerTimeline';

const resources = [
    { id: '1', name: 'John Doe', subtitle: 'Developer', avatar: 'JD', color: '#3B82F6' },
    { id: '2', name: 'Jane Smith', subtitle: 'Designer', avatar: 'JS', color: '#10B981' },
];

const events = [
    { id: 'e1', resourceId: '1', title: 'Team Meeting', startTime: '09:00', endTime: '10:00' },
    { id: 'e2', resourceId: '2', title: 'Client Call', startTime: '11:00', endTime: '12:00' },
];

<SchedulerTimeline
    resources={resources}
    events={events}
    date={new Date()}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `resources` | `SchedulerResource[]` | - | Resources (e.g., team members) |
| `events` | `SchedulerEvent[]` | - | Scheduled events |
| `date` | `Date` | - | Current date to display |
| `startHour` | `number` | `8` | Start hour (24h format) |
| `endHour` | `number` | `18` | End hour (24h format) |
| `onEventClick` | `(event: SchedulerEvent) => void` | - | Called when event is clicked |
| `onTimeSlotClick` | `(resourceId: string, time: string) => void` | - | Called when time slot is clicked |
| `onDateChange` | `(date: Date) => void` | - | Called when date changes |
| `className` | `string` | - | Additional classes |

### SchedulerResource

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier |
| `name` | `string` | Resource name |
| `subtitle` | `string` | Secondary text (role, etc.) |
| `avatar` | `string` | Avatar text or initial |
| `color` | `string` | Theme color (hex) |

### SchedulerEvent

| Property | Type | Description |
|----------|------|-------------|
| `id` | `string` | Unique identifier |
| `resourceId` | `string` | Associated resource |
| `title` | `string` | Event title |
| `description` | `string` | Event details |
| `startTime` | `string` | Start time (HH:MM) |
| `endTime` | `string` | End time (HH:MM) |
| `date` | `Date` | Event date |
| `color` | `string` | Event color (hex) |

## Examples

### With Custom Time Range

```tsx
<SchedulerTimeline
    resources={resources}
    events={events}
    date={new Date()}
    startHour={6}
    endHour={22}
/>
```

### With Event Click Handler

```tsx
<SchedulerTimeline
    resources={resources}
    events={events}
    date={new Date()}
    onEventClick={(event) => {
        console.log('Clicked event:', event.title);
    }}
/>
```

### With Time Slot Click

```tsx
<SchedulerTimeline
    resources={resources}
    events={events}
    date={new Date()}
    onTimeSlotClick={(resourceId, time) => {
        console.log(`Create event for ${resourceId} at ${time}`);
    }}
/>
```

### Navigation

```tsx
const [currentDate, setCurrentDate] = useState(new Date());

<SchedulerTimeline
    resources={resources}
    events={events}
    date={currentDate}
    onDateChange={setCurrentDate}
/>
```

## Notes

- Horizontal time grid with hour columns
- Vertical resource columns on the left
- Current time indicator (red line) updates every minute
- Events rendered as colored blocks on the timeline
- Navigation: Previous day, Today, Next day buttons
- Supports both same-day and multi-day events
- Clickable time slots for adding new events
- Event hover effect with slight scale and z-index change
- Mobile-responsive with horizontal scrolling