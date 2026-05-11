import type { Meta, StoryObj } from '@storybook/react';
import { StatisticDisplay } from './StatisticDisplay';

const meta = {
    title: 'Components/StatisticDisplay',
    component: StatisticDisplay,
    tags: ['autodocs'],
} satisfies Meta<typeof StatisticDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PortfolioOverview: Story = {
    args: {
        metrics: [
            { id: '1', label: 'Total Balance', value: '$124,532.00', change: '+12.5%', trend: 'up', icon: '💰' },
            { id: '2', label: 'Monthly Income', value: '$8,450.00', change: '+3.2%', trend: 'up', icon: '📈' },
            { id: '3', label: 'Monthly Expenses', value: '$4,230.00', change: '-2.1%', trend: 'down', icon: '📉' },
            { id: '4', label: 'Investments', value: '$62,150.00', change: '+8.7%', trend: 'up', icon: '🏦' },
        ],
        variant: 'card',
        columns: 4,
        size: 'md',
        animate: true,
    },
};

export const CardVariant: Story = {
    args: {
        metrics: [
            { id: '1', label: 'Revenue', value: '$45,230', change: '+18.3%', trend: 'up', description: 'vs last month', sparkline: [30, 45, 38, 52, 48, 65, 72], sparklineAccent: 'green' },
            { id: '2', label: 'Active Users', value: '2,847', change: '+5.7%', trend: 'up', description: 'vs last month', sparkline: [200, 350, 280, 420, 380, 500, 550], sparklineAccent: 'blue' },
            { id: '3', label: 'Avg. Transaction', value: '$342', change: '-1.2%', trend: 'down', description: 'vs last month', sparkline: [320, 350, 330, 340, 325, 348, 342], sparklineAccent: 'orange' },
        ],
        variant: 'card',
        columns: 3,
        size: 'md',
    },
};

export const Minimal: Story = {
    args: {
        metrics: [
            { id: '1', label: 'Portfolio Value', value: '$234,500', change: '+15.2%', trend: 'up' },
            { id: '2', label: 'Daily P&L', value: '+$1,230', change: '+2.3%', trend: 'up' },
        ],
        variant: 'minimal',
        columns: 2,
        size: 'lg',
        gap: 'lg',
    },
};

export const GlassVariant: Story = {
    args: {
        metrics: [
            { id: '1', label: 'Available Credit', value: '$15,000', change: '75% used', trend: 'neutral', goal: { label: 'Credit Limit', value: '$20,000', progress: 0.75 } },
            { id: '2', label: 'Savings Goal', value: '$8,500', change: '85% complete', trend: 'up', goal: { label: 'Target', value: '$10,000', progress: 0.85 } },
            { id: '3', label: 'Investment Return', value: '+18.4%', change: 'Above target', trend: 'up', goal: { label: 'Annual Target', value: '12%', progress: 0.84 } },
        ],
        variant: 'glass',
        columns: 3,
        size: 'md',
    },
};
