import type { Meta, StoryObj } from '@storybook/react';
import { AgendaView } from '../components/AgendaView';
import { CalendarEvent } from '../components/Calendar';

const meta: Meta<typeof AgendaView> = {
    title: 'Data Display/AgendaView',
    component: AgendaView,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `
# Agenda View

A component that displays a list of events grouped by date, useful for showing a schedule or itinerary.

## Features

- 📅 **Grouped by Date**: Events are organized under date headers.
- 🎨 **Visual Indicators**: Events show their assigned color.
- 📍 **Details**: Displays time, title, description, and location.
- 🖱️ **Interactive**: Supports click events for handling user interactions.
`,
            },
        },
    },
    tags: [],
    argTypes: {
        onEventClick: { action: 'event clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof AgendaView>;

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);

const sampleEvents: CalendarEvent[] = [
    {
        id: '1',
        date: today,
        startTime: '09:00',
        endTime: '10:00',
        title: 'Team Standup',
        description: 'Daily sync meeting with the team',
        color: '#007AFF',
        location: 'Conference Room A',
    },
    {
        id: '2',
        date: today,
        startTime: '14:00',
        endTime: '15:00',
        title: 'Client Meeting',
        description: 'Discuss project requirements',
        color: '#FF9500',
        location: 'Zoom',
    },
    {
        id: '3',
        date: tomorrow,
        startTime: '10:00',
        endTime: '11:30',
        title: 'Design Workshop',
        description: 'Brainstorming session for new features',
        color: '#AF52DE',
        location: 'Design Studio',
    },
    {
        id: '4',
        date: nextWeek,
        startTime: '09:00',
        endTime: '17:00',
        title: 'Company Offsite',
        description: 'Team building and planning',
        color: '#34C759',
        location: 'Mountain View Resort',
    },
];

export const Default: Story = {
    args: {
        events: sampleEvents,
        currentDate: today,
        days: 30,
    },
};

export const ShortPeriod: Story = {
    args: {
        events: sampleEvents,
        currentDate: today,
        days: 7,
    },
};

export const Empty: Story = {
    args: {
        events: [],
        currentDate: today,
        days: 30,
    },
};

export const ManyEvents: Story = {
    args: {
        currentDate: today,
        days: 30,
        events: Array.from({ length: 15 }, (_, i) => {
            const date = new Date(today);
            date.setDate(today.getDate() + Math.floor(i / 3));
            return {
                id: `event-${i}`,
                date: date,
                startTime: `${9 + (i % 8)}:00`,
                endTime: `${10 + (i % 8)}:00`,
                title: `Event ${i + 1}`,
                description: `Description for event ${i + 1}`,
                color: ['#007AFF', '#34C759', '#FF9500', '#FF3B30', '#5AC8FA', '#AF52DE'][i % 6],
                location: i % 2 === 0 ? 'Meeting Room' : undefined,
            };
        }),
    },
};
