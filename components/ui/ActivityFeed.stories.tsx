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

export const FintechTransactionsFeed: Story = {
    args: {
        items: [
            { actor: { name: 'System', initials: 'SY' }, action: 'ACH transfer of $12,450.00 completed to Wells Fargo', date: '1 min ago', type: 'success' as const },
            { actor: { name: 'Fraud Detection', initials: 'FD' }, action: 'flagged transaction #TX-4421 for unusual spending pattern', date: '5 min ago', type: 'alert' as const },
            { actor: { name: 'Maria G.', initials: 'MG' }, action: 'approved wire transfer of $5,200 USD to Banco Santander', date: '12 min ago', type: 'pr' as const },
            { actor: { name: 'System', initials: 'SY' }, action: 'monthly interest payment of $34.50 credited to Savings (#7890)', date: '30 min ago', type: 'success' as const },
            { actor: { name: 'Compliance', initials: 'CP' }, action: 'review completed for onboarding request #2024-09-452', date: '45 min ago', type: 'file' as const },
            { actor: { name: 'Alert', initials: 'AL' }, action: 'credit card spending approaching monthly limit ($4,250 / $5,000)', date: '1 hour ago', type: 'alert' as const },
        ],
        showConnector: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'A realistic fintech transaction feed showing ACH transfers, fraud alerts, wire approvals, compliance reviews, and spending limit warnings.',
            },
        },
    },
};

export const LongActivityFeed: Story = {
    args: {
        items: Array.from({ length: 20 }, (_, i) => ({
            actor: { name: ['System', 'Alice', 'Bob', 'Carol'][i % 4], initials: ['SY', 'AJ', 'BS', 'CD'][i % 4] },
            action: ['processed batch payment', 'updated budget', 'reviewed transaction', 'added beneficiary'][i % 4],
            date: `${i * 8} min ago`,
            type: (['success', 'pr', 'alert', 'comment'] as const)[i % 4],
        })),
        showConnector: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'ActivityFeed with 20 items to test scrolling and rendering performance with a larger data set.',
            },
        },
    },
};

export const InteractiveFeed: Story = {
    args: {
        items: sampleItems,
        showConnector: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'ActivityFeed with the connector enabled and the full set of item types (success, PR, alert, comment, file) for testing all visual variants.',
            },
        },
    },
};
