import type { Meta, StoryObj } from '@storybook/react';
import { AgendaView } from './AgendaView';

const meta = {
    title: 'Data Display/AgendaView',
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

export const ManyEvents: Story = {
    args: {
        events: Array.from({ length: 25 }, (_, i) => ({
            id: `many-${i}`,
            date: new Date(today.getTime() + i * 3600000 * 4),
            startTime: `${String((i % 12) + 8).padStart(2, '0')}:00`,
            endTime: `${String((i % 12) + 9).padStart(2, '0')}:00`,
            title: `Event #${i + 1}`,
            description: `Auto-generated event number ${i + 1} for stress testing`,
            color: ['#007AFF', '#34C759', '#FF9500', '#FF3B30', '#AF52DE'][i % 5],
            location: i % 3 === 0 ? 'Room ' + ((i % 10) + 1) : undefined,
        })),
        currentDate: today,
        days: 5,
    },
};

export const WithOnEventClick: Story = {
    args: {
        events: sampleEvents,
        currentDate: today,
        days: 30,
        onEventClick: (event) => console.log('Event clicked:', event.title, event.id),
    },
};

export const LongTitles: Story = {
    args: {
        events: [
            {
                id: 'long-1',
                date: today,
                startTime: '08:00',
                endTime: '09:30',
                title: 'International Product Strategy & Quarterly Planning Review Session',
                description: 'A very long description that should demonstrate how text truncation handles edge cases with exceptionally verbose content that goes on and on',
                color: '#007AFF',
                location: 'Main Conference Room - Floor 42 - Building A - Innovation Hub',
            },
            {
                id: 'long-2',
                date: today,
                startTime: '10:00',
                endTime: '11:00',
                title: 'Sprint',
                description: 'Short',
                color: '#34C759',
            },
        ],
        currentDate: today,
        days: 1,
    },
};

export const DarkMode: Story = {
    args: {
        events: sampleEvents.slice(0, 3),
        currentDate: today,
        days: 7,
    },
    decorators: [
        (Story) => (
            <div className="dark p-4 bg-gray-900 rounded-lg">
                <Story />
            </div>
        ),
    ],
};

export const MobileResponsive: Story = {
    args: {
        events: sampleEvents,
        currentDate: today,
        days: 7,
    },
    decorators: [
        (Story) => (
            <div className="max-w-sm mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const Glasphormism: Story = {
    args: {
        events: sampleEvents,
        currentDate: today,
        days: 7,
        variant: 'glasphormism',
    },
    decorators: [
        (Story) => (
            <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-2xl w-full">
                <Story />
            </div>
        ),
    ],
};
