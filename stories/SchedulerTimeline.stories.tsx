import type { Meta, StoryObj } from '@storybook/react';
import { SchedulerTimeline, SchedulerResource, SchedulerEvent } from '../components/SchedulerTimeline';
import { useState } from 'react';

const meta: Meta<typeof SchedulerTimeline> = {
    title: 'Data Display/SchedulerTimeline',
    component: SchedulerTimeline,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `
# Scheduler Timeline

A resource-based horizontal timeline component for scheduling and visualizing events across multiple resources (e.g., rooms, employees, equipment).

## Features

- 📊 **Resource View**: Lists resources on the left axis.
- 🕒 **Horizontal Timeline**: Visualizes time slots horizontally.
- 📅 **Date Navigation**: Navigate between days.
- 🖱️ **Interactive**: Click events and time slots.
- 🔴 **Current Time**: Visual indicator for the current time.
`,
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SchedulerTimeline>;

const resources: SchedulerResource[] = [
    { id: 'r1', name: 'Conference Room A', subtitle: 'Capacity: 10', color: '#007AFF', avatar: 'A' },
    { id: 'r2', name: 'Conference Room B', subtitle: 'Capacity: 6', color: '#34C759', avatar: 'B' },
    { id: 'r3', name: 'Executive Boardroom', subtitle: 'Capacity: 20', color: '#AF52DE', avatar: 'E' },
    { id: 'r4', name: 'Phone Booth 1', subtitle: 'Capacity: 1', color: '#FF9500', avatar: 'P1' },
    { id: 'r5', name: 'Phone Booth 2', subtitle: 'Capacity: 1', color: '#FF9500', avatar: 'P2' },
];

const initialEvents: SchedulerEvent[] = [
    { id: 'e1', resourceId: 'r1', title: 'Team Standup', startTime: '09:00', endTime: '10:00', color: '#007AFF', date: new Date() },
    { id: 'e2', resourceId: 'r1', title: 'Product Review', startTime: '11:00', endTime: '12:30', color: '#5AC8FA', date: new Date() },
    { id: 'e3', resourceId: 'r2', title: 'Client Call', startTime: '10:00', endTime: '11:00', color: '#34C759', date: new Date() },
    { id: 'e4', resourceId: 'r3', title: 'Board Meeting', startTime: '14:00', endTime: '16:00', color: '#AF52DE', date: new Date() },
    { id: 'e5', resourceId: 'r4', title: 'Interview', startTime: '13:00', endTime: '14:00', color: '#FF9500', date: new Date() },
];

const SchedulerWithState = (args: any) => {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState(initialEvents);

    const handleEventClick = (event: SchedulerEvent) => {
        alert(`Clicked event: ${event.title}`);
    };

    const handleTimeSlotClick = (resourceId: string, time: string) => {
        const title = prompt(`Add event for resource ${resourceId} at ${time}?`);
        if (title) {
            const [h, m] = time.split(':').map(Number);
            const endH = h + 1;
            const endTime = `${endH.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;

            const newEvent: SchedulerEvent = {
                id: Date.now().toString(),
                resourceId,
                title,
                startTime: time,
                endTime,
                color: '#8E8E93',
            };
            setEvents([...events, newEvent]);
        }
    };

    return (
        <div style={{ height: '600px' }}>
            <SchedulerTimeline
                {...args}
                date={date}
                events={events}
                onDateChange={setDate}
                onEventClick={handleEventClick}
                onTimeSlotClick={handleTimeSlotClick}
            />
        </div>
    );
};

export const Default: Story = {
    render: (args) => <SchedulerWithState {...args} />,
    args: {
        resources: resources,
        events: initialEvents,
        startHour: 8,
        endHour: 18,
    },
};

export const EmployeeShifts: Story = {
    render: (args) => <SchedulerWithState {...args} />,
    args: {
        startHour: 6,
        endHour: 22,
        resources: [
            { id: 'emp1', name: 'Alice Smith', subtitle: 'Manager', color: '#FF3B30', avatar: 'AS' },
            { id: 'emp2', name: 'Bob Jones', subtitle: 'Developer', color: '#007AFF', avatar: 'BJ' },
            { id: 'emp3', name: 'Charlie Brown', subtitle: 'Designer', color: '#FF9500', avatar: 'CB' },
        ],
        events: [
            { id: 's1', resourceId: 'emp1', title: 'Morning Shift', startTime: '08:00', endTime: '16:00', color: '#FF3B30', date: new Date() },
            { id: 's2', resourceId: 'emp2', title: 'Day Shift', startTime: '10:00', endTime: '18:00', color: '#007AFF', date: new Date() },
            { id: 's3', resourceId: 'emp3', title: 'Late Shift', startTime: '12:00', endTime: '20:00', color: '#FF9500', date: new Date() },
        ],
    },
};
