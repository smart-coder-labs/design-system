import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Calendar, CalendarEvent } from '../components/Calendar';

const meta: Meta<typeof Calendar> = {
    title: 'Data Display/Calendar',
    component: Calendar,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: `
# Calendar Full

A comprehensive calendar component with multiple views and full event management capabilities.

## Features

- 📅 **4 Views**: Month, Week, Day, and Agenda views
- ✏️ **CRUD Operations**: Add, edit, and delete events
- 🕐 **Time-based Events**: Schedule events with start and end times
- 🎨 **Customizable Colors**: Choose from predefined event colors
- 📍 **Location Support**: Add location to events
- 🔍 **Event Details**: View full event information
- ✨ **Premium UI**: Smooth animations and elegant design

## Usage

\`\`\`tsx
import { Calendar } from '@/components/Calendar';

const [events, setEvents] = useState<CalendarEvent[]>([]);

<Calendar
  defaultView="month"
  events={events}
  onAddEvent={(event) => {
    setEvents([...events, { ...event, id: Date.now().toString() }]);
  }}
  onUpdateEvent={(id, updated) => {
    setEvents(events.map(e => e.id === id ? { ...e, ...updated } : e));
  }}
  onDeleteEvent={(id) => {
    setEvents(events.filter(e => e.id !== id));
  }}
/>
\`\`\`
        `,
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

// Helper component for interactive stories
const CalendarWithState = (args: any) => {
    const [events, setEvents] = useState<CalendarEvent[]>(args.events || []);

    return (
        <div style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>
            <Calendar
                {...args}
                events={events}
                onAddEvent={(event) => {
                    const newEvent = {
                        ...event,
                        id: Date.now().toString(),
                    };
                    setEvents([...events, newEvent]);
                    console.log('Event added:', newEvent);
                }}
                onUpdateEvent={(id, updated) => {
                    setEvents(events.map(e => e.id === id ? { ...e, ...updated } : e));
                    console.log('Event updated:', id, updated);
                }}
                onDeleteEvent={(id) => {
                    setEvents(events.filter(e => e.id !== id));
                    console.log('Event deleted:', id);
                }}
            />
        </div>
    );
};

export const MonthView: Story = {
    render: (args) => <CalendarWithState {...args} />,
    args: {
        defaultView: 'month',
        highlightToday: true,
        events: [
            {
                id: '1',
                date: new Date(),
                startTime: '09:00',
                endTime: '10:00',
                title: 'Team Standup',
                description: 'Daily team sync meeting',
                color: '#007AFF',
                location: 'Conference Room A',
            },
            {
                id: '2',
                date: new Date(new Date().setDate(new Date().getDate() + 1)),
                startTime: '14:00',
                endTime: '15:30',
                title: 'Client Presentation',
                description: 'Q4 results presentation',
                color: '#FF9500',
                location: 'Zoom',
            },
            {
                id: '3',
                date: new Date(new Date().setDate(new Date().getDate() + 3)),
                startTime: '10:00',
                endTime: '11:00',
                title: 'Code Review',
                description: 'Review PR #234',
                color: '#34C759',
            },
        ],
    },
};

export const WeekView: Story = {
    render: (args) => <CalendarWithState {...args} />,
    args: {
        defaultView: 'week',
        highlightToday: true,
        events: [
            {
                id: '1',
                date: new Date(),
                startTime: '09:00',
                endTime: '10:00',
                title: 'Morning Standup',
                color: '#007AFF',
            },
            {
                id: '2',
                date: new Date(),
                startTime: '11:00',
                endTime: '12:00',
                title: 'Sprint Planning',
                color: '#5AC8FA',
            },
            {
                id: '3',
                date: new Date(),
                startTime: '14:00',
                endTime: '16:00',
                title: 'Deep Work Session',
                color: '#AF52DE',
            },
            {
                id: '4',
                date: new Date(new Date().setDate(new Date().getDate() + 1)),
                startTime: '10:00',
                endTime: '11:30',
                title: 'Design Review',
                color: '#FF9500',
            },
            {
                id: '5',
                date: new Date(new Date().setDate(new Date().getDate() + 2)),
                startTime: '15:00',
                endTime: '16:00',
                title: 'Team Retrospective',
                color: '#34C759',
            },
        ],
    },
};

export const DayView: Story = {
    render: (args) => <CalendarWithState {...args} />,
    args: {
        defaultView: 'day',
        highlightToday: true,
        events: [
            {
                id: '1',
                date: new Date(),
                startTime: '08:00',
                endTime: '09:00',
                title: 'Morning Exercise',
                description: 'Gym workout',
                color: '#34C759',
                location: 'Fitness Center',
            },
            {
                id: '2',
                date: new Date(),
                startTime: '09:30',
                endTime: '10:00',
                title: 'Daily Standup',
                description: 'Team sync',
                color: '#007AFF',
                location: 'Conference Room',
            },
            {
                id: '3',
                date: new Date(),
                startTime: '10:00',
                endTime: '12:00',
                title: 'Feature Development',
                description: 'Work on user dashboard',
                color: '#AF52DE',
            },
            {
                id: '4',
                date: new Date(),
                startTime: '12:00',
                endTime: '13:00',
                title: 'Lunch Break',
                color: '#FF9500',
            },
            {
                id: '5',
                date: new Date(),
                startTime: '14:00',
                endTime: '15:30',
                title: 'Client Call',
                description: 'Project status update',
                color: '#FF3B30',
                location: 'Zoom',
            },
            {
                id: '6',
                date: new Date(),
                startTime: '16:00',
                endTime: '17:00',
                title: 'Code Review',
                description: 'Review team PRs',
                color: '#5AC8FA',
            },
        ],
    },
};

export const AgendaView: Story = {
    render: (args) => <CalendarWithState {...args} />,
    args: {
        defaultView: 'agenda',
        highlightToday: true,
        events: [
            {
                id: '1',
                date: new Date(),
                startTime: '09:00',
                endTime: '10:00',
                title: 'Team Standup',
                description: 'Daily sync meeting with the team',
                color: '#007AFF',
                location: 'Conference Room A',
            },
            {
                id: '2',
                date: new Date(),
                startTime: '14:00',
                endTime: '15:00',
                title: 'Client Meeting',
                description: 'Discuss project requirements',
                color: '#FF9500',
                location: 'Zoom',
            },
            {
                id: '3',
                date: new Date(new Date().setDate(new Date().getDate() + 1)),
                startTime: '10:00',
                endTime: '11:30',
                title: 'Design Workshop',
                description: 'Brainstorming session for new features',
                color: '#AF52DE',
                location: 'Design Studio',
            },
            {
                id: '4',
                date: new Date(new Date().setDate(new Date().getDate() + 2)),
                startTime: '09:00',
                endTime: '17:00',
                title: 'Company Offsite',
                description: 'Team building and planning',
                color: '#34C759',
                location: 'Mountain View Resort',
            },
            {
                id: '5',
                date: new Date(new Date().setDate(new Date().getDate() + 5)),
                startTime: '15:00',
                endTime: '16:00',
                title: 'Sprint Review',
                description: 'Demo completed features',
                color: '#5AC8FA',
                location: 'Main Hall',
            },
        ],
    },
};

export const EmptyCalendar: Story = {
    render: (args) => <CalendarWithState {...args} />,
    args: {
        defaultView: 'month',
        highlightToday: true,
        events: [],
    },
};

export const BusySchedule: Story = {
    render: (args) => <CalendarWithState {...args} />,
    args: {
        defaultView: 'week',
        highlightToday: true,
        events: Array.from({ length: 20 }, (_, i) => ({
            id: `event-${i}`,
            date: new Date(new Date().setDate(new Date().getDate() + Math.floor(i / 3))),
            startTime: `${9 + (i % 8)}:00`,
            endTime: `${10 + (i % 8)}:00`,
            title: `Event ${i + 1}`,
            description: `Description for event ${i + 1}`,
            color: ['#007AFF', '#34C759', '#FF9500', '#FF3B30', '#5AC8FA', '#AF52DE'][i % 6],
        })),
    },
};
