import type { Meta, StoryObj } from '@storybook/react';
import { StatisticDisplay } from './StatisticDisplay';
import { CreditCard, PiggyBank, TrendingUp, DollarSign } from 'lucide-react';

const meta = {
    title: 'Data Display/StatisticDisplay',
    component: StatisticDisplay,
    tags: ['autodocs'],
} satisfies Meta<typeof StatisticDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        metrics: [
            { label: 'Total Balance', value: '$124,532.80', change: '+3.2%', trend: 'up', icon: <DollarSign size={20} /> },
            { label: 'Monthly Spending', value: '$4,230.50', change: '+8.1%', trend: 'up', icon: <CreditCard size={20} /> },
            { label: 'Savings Rate', value: '32.5%', change: '+5.2%', trend: 'up', icon: <PiggyBank size={20} /> },
            { label: 'Investments', value: '$78,200.00', change: '+12.4%', trend: 'up', icon: <TrendingUp size={20} /> },
        ],
        columns: 4,
    },
};

export const TwoColumns: Story = {
    args: {
        metrics: [
            { label: 'Portfolio Value', value: '$245,800.50', change: '+8.3%', trend: 'up' },
            { label: 'Daily P&L', value: '+$1,234.00', change: '+2.1%', trend: 'up' },
        ],
        columns: 2,
    },
};

export const WithSparklines: Story = {
    args: {
        metrics: [
            { label: 'AAPL', value: '$178.50', change: '+1.2%', trend: 'up', sparkline: [170, 172, 175, 174, 176, 178, 177, 178.5], sparklineAccent: 'green' },
            { label: 'TSLA', value: '$245.00', change: '-0.8%', trend: 'down', sparkline: [250, 248, 247, 245, 246, 244, 245, 245], sparklineAccent: 'pink' },
            { label: 'BTC', value: '$46,820', change: '+5.4%', trend: 'up', sparkline: [44000, 44500, 45000, 44800, 45500, 46200, 46500, 46820], sparklineAccent: 'orange' },
            { label: 'S&P 500', value: '5,234', change: '+0.6%', trend: 'up', sparkline: [5200, 5210, 5220, 5215, 5225, 5230, 5232, 5234], sparklineAccent: 'blue' },
        ],
        columns: 4,
    },
};

export const WithGoals: Story = {
    args: {
        metrics: [
            { label: 'Emergency Fund', value: '$8,500', target: '$10,000', goal: { label: 'Progress', value: '85%', progress: 0.85 } },
            { label: 'Vacation Fund', value: '$4,250', target: '$10,000', goal: { label: 'Progress', value: '42.5%', progress: 0.425 } },
            { label: 'Retirement', value: '$125,000', target: '$500,000', goal: { label: 'Progress', value: '25%', progress: 0.25 } },
        ],
        columns: 3,
        variant: 'card',
    },
};

export const SoftVariant: Story = {
    args: {
        metrics: [
            { label: 'Balance', value: '$12,450' },
            { label: 'Income', value: '$8,230', change: '+12%', trend: 'up' },
            { label: 'Expenses', value: '$3,780', change: '-5%', trend: 'down' },
        ],
        variant: 'soft',
        columns: 3,
    },
};

export const BorderedVariant: Story = {
    args: {
        metrics: [
            { label: 'Active Cards', value: '3', description: '2 debit, 1 credit' },
            { label: 'Pending Transactions', value: '5', description: '$245.80 total' },
            { label: 'Monthly Budget', value: '78%', description: '$3,900 of $5,000 used' },
        ],
        variant: 'bordered',
        columns: 3,
    },
};

export const MinimalVariant: Story = {
    args: {
        metrics: [
            { label: 'YoY Growth', value: '+18.5%', change: '+5.2pp', trend: 'up' },
            { label: 'Net Worth', value: '$345,000', change: '+$22,000', trend: 'up' },
        ],
        variant: 'minimal',
        columns: 2,
    },
};

export const SingleStat: Story = {
    args: {
        metrics: [
            { label: 'Net Worth', value: '$456,780', change: '+$12,340', trend: 'up', description: 'Updated 5m ago', badge: 'Premium' },
        ],
        columns: 1,
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        metrics: [
            { label: 'Portfolio', value: '$245,800', change: '+8.3%', trend: 'up' },
            { label: 'Cash', value: '$52,400', change: '-2.1%', trend: 'down' },
            { label: 'Crypto', value: '$18,920', change: '+15.4%', trend: 'up' },
        ],
        columns: 3,
    },
};
