# AgendaView

> **v1.0.35** · stable

A calendar agenda component that displays events in a chronological list grouped by date. Shows event title, description, time, and location.

## Installation

```bash
import { AgendaView } from '@/components/ui/AgendaView';
```

## Basic Usage

```tsx
import { AgendaView } from '@/components/ui/AgendaView';

const events = [
  {
    id: '1',
    title: 'Team Standup',
    date: new Date('2026-02-20T09:00:00'),
    startTime: '9:00 AM',
    endTime: '9:30 AM',
    description: 'Daily sync with the development team',
    color: '#007AFF',
  },
  {
    id: '2',
    title: 'Product Review',
    date: new Date('2026-02-20T14:00:00'),
    startTime: '2:00 PM',
    endTime: '3:00 PM',
    location: 'Conference Room A',
    color: '#34C759',
  },
];

<AgendaView
  events={events}
  currentDate={new Date('2026-02-20')}
/>
```

## Custom Date Range

```tsx
<AgendaView
  events={events}
  currentDate={new Date('2026-02-20')}
  days={7}
/>
```

## With Event Click Handler

```tsx
<AgendaView
  events={events}
  currentDate={new Date('2026-02-20')}
  onEventClick={(event) => {
    console.log('Clicked event:', event.title);
    // Navigate to event details, open modal, etc.
  }}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `events` | `CalendarEvent[]` | - | Array of calendar events |
| `currentDate` | `Date` | - | Reference date for the view |
| `days` | `number` | `30` | Number of days to display from currentDate |
| `onEventClick` | `(event: CalendarEvent) => void` | - | Callback when an event is clicked |

### CalendarEvent

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `title` | `string` | Event title |
| `date` | `Date` | Event date |
| `startTime` | `string` | Start time (e.g., '9:00 AM') |
| `endTime` | `string` | End time (e.g., '10:30 AM') |
| `description` | `string` | Event description |
| `location` | `string` | Event location |
| `color` | `string` | Accent color for the left border |

## Examples

### Default 30-day View

```tsx
<AgendaView
  events={events}
  currentDate={new Date()}
/>
```

### Weekly View

```tsx
<AgendaView
  events={events}
  currentDate={new Date()}
  days={7}
/>
```

## Notes

- Events are sorted chronologically within each day
- Each date shows the full day name (e.g., "Friday, February 20, 2026")
- Events display with colored left border based on `color` prop
- Hover state changes background color
- Uses CSS custom properties for theming
- Scrollable container with max-height of 600px