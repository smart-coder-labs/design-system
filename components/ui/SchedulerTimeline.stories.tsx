import type { Meta, StoryObj } from '@storybook/react';
import { SchedulerTimeline } from './SchedulerTimeline';
import { useState } from 'react';

const meta = {
    title: 'Components/SchedulerTimeline',
    component: SchedulerTimeline,
    tags: ['autodocs'],
} satisfies Meta<typeof SchedulerTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultResources = [
    { id: '1', name: 'Alice Johnson', subtitle: 'Senior Advisor', color: '#3B82F6' },
    { id: '2', name: 'Bob Smith', subtitle: 'Financial Analyst', color: '#10B981' },
    { id: '3', name: 'Carol White', subtitle: 'Portfolio Manager', color: '#F59E0B' },
];

const defaultEvents = [
    { id: 'e1', resourceId: '1', title: 'Client Review', startTime: '09:00', endTime: '10:30', color: '#3B82F6' },
    { id: 'e2', resourceId: '1', title: 'Market Analysis', startTime: '11:00', endTime: '12:00', color: '#8B5CF6' },
    { id: 'e3', resourceId: '2', title: 'Portfolio Rebalance', startTime: '10:00', endTime: '11:30', color: '#10B981' },
    { id: 'e4', resourceId: '2', title: 'Lunch Break', startTime: '12:00', endTime: '13:00', color: '#6B7280' },
    { id: 'e5', resourceId: '3', title: 'Investment Committee', startTime: '09:30', endTime: '11:00', color: '#F59E0B' },
];

export const Default: Story = {
    args: {
        resources: defaultResources,
        events: defaultEvents,
        date: new Date(),
        onEventClick: (event) => console.log('Event clicked:', event.title),
        onTimeSlotClick: (resourceId, time) => console.log('Slot:', resourceId, time),
    },
};

export const FullDayView: Story = {
    args: {
        resources: defaultResources,
        events: [
            { id: 'e1', resourceId: '1', title: 'Opening Briefing', startTime: '08:00', endTime: '09:00', color: '#3B82F6' },
            { id: 'e2', resourceId: '1', title: 'Client Onboarding', startTime: '09:30', endTime: '11:00', color: '#8B5CF6' },
            { id: 'e3', resourceId: '1', title: 'Strategy Session', startTime: '13:00', endTime: '15:00', color: '#EC4899' },
            { id: 'e4', resourceId: '2', title: 'Risk Assessment', startTime: '08:30', endTime: '10:00', color: '#10B981' },
            { id: 'e5', resourceId: '2', title: 'Report Review', startTime: '14:00', endTime: '16:00', color: '#14B8A6' },
            { id: 'e6', resourceId: '3', title: 'Fund Performance', startTime: '09:00', endTime: '12:00', color: '#F59E0B' },
            { id: 'e7', resourceId: '3', title: 'Compliance Check', startTime: '13:30', endTime: '14:30', color: '#EF4444' },
            { id: 'e8', resourceId: '3', title: 'End of Day Review', startTime: '16:00', endTime: '17:00', color: '#6366F1' },
        ],
        date: new Date(),
        startHour: 8,
        endHour: 18,
        onEventClick: (event) => console.log('Event:', event.title),
    },
};

export const SingleResource: Story = {
    args: {
        resources: [
            { id: '1', name: 'My Schedule', subtitle: 'Personal Calendar', color: '#3B82F6' },
        ],
        events: [
            { id: 'e1', resourceId: '1', title: 'Morning Review', startTime: '09:00', endTime: '10:00', color: '#3B82F6' },
            { id: 'e2', resourceId: '1', title: 'Call with Client', startTime: '10:30', endTime: '11:30', color: '#10B981' },
            { id: 'e3', resourceId: '1', title: 'Lunch', startTime: '12:00', endTime: '13:00', color: '#6B7280' },
            { id: 'e4', resourceId: '1', title: 'Team Standup', startTime: '14:00', endTime: '14:30', color: '#8B5CF6' },
        ],
        date: new Date(),
        onEventClick: (event) => console.log('Event:', event.title),
    },
};

export const WithTimeSlotInteraction: Story = {
    render: () => {
        const [log, setLog] = useState<string[]>([]);
        return (
            <div className="space-y-4">
                <SchedulerTimeline
                    resources={defaultResources}
                    events={defaultEvents}
                    date={new Date()}
                    onEventClick={(event) => setLog(prev => [...prev, `Clicked: ${event.title}`])}
                    onTimeSlotClick={(resourceId, time) => setLog(prev => [...prev, `Slot ${resourceId} at ${time}`])}
                />
                <div className="p-3 bg-surface-secondary rounded-lg border border-border-primary">
                    <h4 className="text-xs font-semibold text-text-secondary mb-1">Interaction Log</h4>
                    <div className="text-xs font-mono text-text-secondary space-y-0.5 max-h-24 overflow-y-auto">
                        {log.length === 0 && <p className="text-text-tertiary">No interactions yet</p>}
                        {log.map((entry, i) => <p key={i}>{entry}</p>)}
                    </div>
                </div>
            </div>
        );
    },
};

export const ManyResources: Story = {
    args: {
        resources: [
            { id: '1', name: 'Alice Johnson', subtitle: 'Senior Advisor', color: '#3B82F6' },
            { id: '2', name: 'Bob Smith', subtitle: 'Analyst', color: '#10B981' },
            { id: '3', name: 'Carol White', subtitle: 'Manager', color: '#F59E0B' },
            { id: '4', name: 'David Brown', subtitle: 'Intern', color: '#EC4899' },
            { id: '5', name: 'Eve Davis', subtitle: 'Consultant', color: '#8B5CF6' },
        ],
        events: defaultEvents,
        date: new Date(),
        onEventClick: (event) => console.log('Event:', event.title),
    },
};

export const EmptyTimeline: Story = {
    args: {
        resources: defaultResources,
        events: [],
        date: new Date(),
        onEventClick: (event) => console.log('Event:', event.title),
    },
};
