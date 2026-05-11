import type { Meta, StoryObj } from '@storybook/react';
import { Counters } from './Counters';

const meta = {
    title: 'Components/Counters',
    component: Counters,
    tags: ['autodocs'],
} satisfies Meta<typeof Counters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            { value: '$12,450', label: 'Balance', subtitle: 'Available' },
            { value: '47', label: 'Transactions', subtitle: 'This month' },
            { value: '3.2%', label: 'APY', subtitle: 'Interest rate' },
        ],
    },
};

export const Compact: Story = {
    args: {
        items: [
            { value: '152', label: 'Clients' },
            { value: '$45K', label: 'Revenue' },
            { value: '12', label: 'Open Trades' },
            { value: '8.5%', label: 'Return' },
        ],
        compact: true,
    },
};

export const TwoItems: Story = {
    args: {
        items: [
            { value: '85%', label: 'Portfolio Health' },
            { value: '$128K', label: 'Total Value' },
        ],
    },
};

export const FiveItems: Story = {
    args: {
        items: [
            { value: '1,234', label: 'Active Users' },
            { value: '$89K', label: 'Revenue' },
            { value: '99.9%', label: 'Uptime' },
            { value: '42', label: 'Countries' },
            { value: '4.8★', label: 'Rating' },
        ],
        compact: true,
    },
};
