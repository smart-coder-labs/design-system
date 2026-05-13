import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';

const meta = {
    title: 'Components/Calendar',
    component: Calendar,
    tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

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
        description: 'Daily sync',
        color: '#007AFF',
    },
    {
        id: '2',
        date: today,
        startTime: '14:00',
        endTime: '15:00',
        title: 'Sprint Review',
        color: '#34C759',
    },
    {
        id: '3',
        date: tomorrow,
        startTime: '11:00',
        endTime: '12:00',
        title: 'Design Review',
        color: '#AF52DE',
        location: 'Design Lab',
    },
    {
        id: '4',
        date: nextWeek,
        startTime: '10:00',
        endTime: '11:00',
        title: 'Budget Planning',
        color: '#FF9500',
    },
];

export const Default: Story = {
    args: {
        events: sampleEvents,
        defaultView: 'month',
        highlightToday: true,
    },
};

export const WeekView: Story = {
    args: {
        events: sampleEvents,
        defaultView: 'week',
    },
};

export const DayView: Story = {
    args: {
        events: sampleEvents,
        defaultView: 'day',
    },
};

export const AgendaView: Story = {
    args: {
        events: sampleEvents,
        defaultView: 'agenda',
    },
};

export const WithDateRange: Story = {
    args: {
        events: sampleEvents,
        minDate: new Date(today.getFullYear(), today.getMonth(), 1),
        maxDate: new Date(today.getFullYear(), today.getMonth() + 2, 0),
        highlightToday: true,
    },
};

export const WithWeekNumbers: Story = {
    args: {
        events: sampleEvents,
        showWeekNumbers: true,
    },
};

export const EmptyCalendar: Story = {
    args: {
        events: [],
        highlightToday: true,
    },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
