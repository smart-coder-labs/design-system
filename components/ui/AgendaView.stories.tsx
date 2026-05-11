import type { Meta, StoryObj } from '@storybook/react';
import { AgendaView } from './AgendaView';

const meta = {
    title: 'Components/AgendaView',
    component: AgendaView,
    tags: ['autodocs'],
} satisfies Meta<typeof AgendaView>;

export default meta;
type Story = StoryObj<typeof meta>;

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const nextWeek = new Date(today);
nextWeek.setDate(nextWeek.getDate() + 7);

const sampleEvents = [
    {
        id: '1',
        date: today,
        startTime: '09:00',
        endTime: '10:00',
        title: 'Team Standup',
        description: 'Daily sync with the engineering team',
        color: '#007AFF',
        location: 'Zoom Room A',
    },
    {
        id: '2',
        date: today,
        startTime: '14:00',
        endTime: '15:30',
        title: 'Sprint Review',
        description: 'Review completed stories for the current sprint',
        color: '#34C759',
    },
    {
        id: '3',
        date: tomorrow,
        startTime: '11:00',
        endTime: '12:00',
        title: 'Design Review',
        description: 'Review new component designs',
        color: '#AF52DE',
        location: 'Design Lab',
    },
    {
        id: '4',
        date: nextWeek,
        startTime: '10:00',
        endTime: '11:00',
        title: 'Budget Planning',
        description: 'Quarterly budget review and planning',
        color: '#FF9500',
        location: 'Conference Room B',
    },
    {
        id: '5',
        date: nextWeek,
        startTime: '15:00',
        endTime: '16:00',
        title: 'Client Meeting',
        description: 'Demo of new fintech features',
        color: '#FF3B30',
    },
];

export const Default: Story = {
    args: {
        events: sampleEvents,
        currentDate: today,
        days: 30,
    },
};

export const With7Days: Story = {
    args: {
        events: sampleEvents,
        currentDate: today,
        days: 7,
    },
};

export const EmptyState: Story = {
    args: {
        events: [],
        currentDate: today,
        days: 30,
    },
};

export const SingleDay: Story = {
    args: {
        events: sampleEvents.filter(e => e.id === '1' || e.id === '2'),
        currentDate: today,
        days: 1,
    },
};
