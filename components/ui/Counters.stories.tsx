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

export const FintechFormat: Story = {
    args: {
        items: [
            { value: '$145,230.50', label: 'Saldo Total', subtitle: 'Todas las cuentas' },
            { value: '23', label: 'Transacciones', subtitle: 'Este mes' },
            { value: '4.75%', label: 'APY', subtitle: 'Tasa actual' },
            { value: '$2,500', label: 'Límite Diario', subtitle: 'Disponible: $1,200' },
        ],
    },
};

export const LargeValues: Story = {
    args: {
        items: [
            { value: '$12,458,932,100', label: 'Market Cap' },
            { value: '99.9999%', label: 'Uptime SLA' },
            { value: '1,234,567', label: 'Total Users' },
        ],
    },
};

export const SingleCounter: Story = {
    args: {
        items: [
            { value: '42', label: 'Pending Tasks', subtitle: 'Requires attention' },
        ],
    },
};

export const DarkMode: Story = {
    args: {
        items: [
            { value: '$12,450', label: 'Balance', subtitle: 'Available' },
            { value: '47', label: 'Transactions', subtitle: 'This month' },
        ],
    },
    decorators: [
        (Story) => (
            <div className="dark p-4 bg-gray-900 rounded-lg">
                <Story />
            </div>
        ),
    ],
};
