import type { Meta, StoryObj } from '@storybook/react';
import { ActivityFeed, ActivityItem } from './ActivityFeed';

const meta = {
    title: 'Components/ActivityFeed',
    component: ActivityFeed,
    tags: ['autodocs'],
} satisfies Meta<typeof ActivityFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
    {
        actor: { name: 'Alice Johnson', initials: 'AJ' },
        action: 'created a new budget plan',
        date: '2 min ago',
        type: 'success' as const,
    },
    {
        actor: { name: 'Bob Smith', initials: 'BS' },
        action: 'approved transfer of $1,200',
        date: '15 min ago',
        type: 'pr' as const,
    },
    {
        actor: { name: 'Carol Davis', initials: 'CD' },
        action: 'flagged suspicious transaction',
        date: '1 hour ago',
        type: 'alert' as const,
    },
    {
        actor: { name: 'David Lee', initials: 'DL' },
        action: 'updated monthly savings goal',
        date: '3 hours ago',
        type: 'comment' as const,
    },
    {
        actor: { name: 'Eve Martinez', initials: 'EM' },
        action: 'added a new payment method',
        date: '5 hours ago',
        type: 'file' as const,
    },
];

export const Default: Story = {
    args: {
        items: sampleItems,
    },
};

export const WithConnector: Story = {
    args: {
        items: sampleItems.slice(0, 3),
        showConnector: true,
    },
};

export const WithoutConnector: Story = {
    args: {
        items: sampleItems.slice(0, 3),
        showConnector: false,
    },
};

export const SingleItem: Story = {
    args: {
        items: [sampleItems[0]],
    },
};

export const EmptyFeed: Story = {
    args: {
        items: [],
    },
};
