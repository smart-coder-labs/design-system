# Calendar

> **v1.0.29** · stable

A full-featured calendar component with month, week, day, and agenda views. Supports event management with add, edit, and delete functionality.

## Installation

```bash
import { Calendar } from '@/components/ui/Calendar';
```

## Basic Usage

```tsx
<Calendar
  onChange={(date) => console.log('Selected:', date)}
/>
```

## With Events

```tsx
<Calendar
  value={selectedDate}
  onChange={handleDateSelect}
  events={[
    {
      id: '1',
      date: new Date(2024, 5, 15),
      startTime: '09:00',
      endTime: '10:00',
      title: 'Team Meeting',
      description: 'Weekly sync',
      color: '#007AFF',
    },
  ]}
  onAddEvent={(event) => console.log('Add:', event)}
  onUpdateEvent={(id, event) => console.log('Update:', id, event)}
  onDeleteEvent={(id) => console.log('Delete:', id)}
/>
```

## Views

The Calendar supports four view modes:

- **month**: Default monthly grid view showing the full month
- **week**: Horizontal view showing 7 days with hourly time slots
- **day**: Single day view with hourly time slots
- **agenda**: List view showing upcoming events

```tsx
<Calendar
  defaultView="week"
  onChange={(date) => console.log(date)}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | `Date` | - | Currently selected date |
| onChange | `(date: Date) => void` | - | Callback when date is selected |
| events | `CalendarEvent[]` | `[]` | Array of events to display |
| onAddEvent | `(event: Omit<CalendarEvent, 'id'>) => void` | - | Callback when event is created |
| onUpdateEvent | `(id: string, event: Partial<CalendarEvent>) => void` | - | Callback when event is updated |
| onDeleteEvent | `(id: string) => void` | - | Callback when event is deleted |
| minDate | `Date` | - | Minimum selectable date |
| maxDate | `Date` | - | Maximum selectable date |
| highlightToday | `boolean` | `true` | Highlight today's date |
| defaultView | `CalendarView` | `'month'` | Initial view mode |
| className | `string` | `''` | Additional CSS classes |

### CalendarEvent

| Property | Type | Description |
|----------|------|-------------|
| id | `string` | Unique identifier |
| date | `Date` | Event date |
| startTime | `string` | Start time (HH:mm format) |
| endTime | `string` | End time (HH:mm format) |
| title | `string` | Event title |
| description | `string` | Event description |
| color | `string` | Event color (hex) |
| location | `string` | Event location |

### CalendarView

```typescript
type CalendarView = 'month' | 'week' | 'day' | 'agenda';
```

## Event Management

The Calendar includes a built-in modal for creating and editing events:

```tsx
<Calendar
  events={events}
  onAddEvent={(event) => {
    // Create event
  }}
  onUpdateEvent={(id, updates) => {
    // Update event
  }}
  onDeleteEvent={(id) => {
    // Delete event
  }}
/>
```

## Date Constraints

Restrict selectable dates with minDate and maxDate:

```tsx
<Calendar
  minDate={new Date(2024, 0, 1)}
  maxDate={new Date(2024, 11, 31)}
  onChange={(date) => console.log(date)}
/>
```

## Notes

- Uses Framer Motion for smooth view transitions
- Supports dark mode with appropriate color tokens
- Includes built-in event modal with form validation
- Time slots in week/day views use 24-hour format
- Events display color coding and time information