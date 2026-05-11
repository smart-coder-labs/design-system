import type { Meta, StoryObj } from '@storybook/react';
import { CountersListWithChart } from './CountersListWithChart';

const meta = {
    title: 'Components/CountersListWithChart',
    component: CountersListWithChart,
    tags: ['autodocs'],
} satisfies Meta<typeof CountersListWithChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Asset Allocation',
        chartType: 'donut',
        items: [
            { label: 'US Equities', value: 45000, percent: 45, color: '#007AFF' },
            { label: 'Bonds', value: 20000, percent: 20, color: '#34C759' },
            { label: 'Crypto', value: 15000, percent: 15, color: '#AF52DE' },
            { label: 'Real Estate', value: 12000, percent: 12, color: '#FF9500' },
            { label: 'Cash', value: 8000, percent: 8, color: '#5AC8FA' },
        ],
    },
};

export const PieChart: Story = {
    args: {
        title: 'Expense Breakdown',
        template: 'pie' as any,
        chartType: 'pie',
        items: [
            { label: 'Housing', value: 2200, percent: 35, color: '#007AFF' },
            { label: 'Food', value: 1200, percent: 19, color: '#34C759' },
            { label: 'Transport', value: 800, percent: 13, color: '#FF9500' },
            { label: 'Entertainment', value: 600, percent: 10, color: '#AF52DE' },
            { label: 'Savings', value: 1500, percent: 24, color: '#5AC8FA' },
        ],
    },
};

export const ThreeItems: Story = {
    args: {
        title: 'Portfolio Summary',
        items: [
            { label: 'Conservative', value: 60000, percent: 60, color: '#34C759' },
            { label: 'Moderate', value: 30000, percent: 30, color: '#007AFF' },
            { label: 'Aggressive', value: 10000, percent: 10, color: '#AF52DE' },
        ],
    },
};

export const WithoutTitle: Story = {
    args: {
        items: [
            { label: 'Checking', value: 5500, percent: 28, color: '#007AFF' },
            { label: 'Savings', value: 12000, percent: 60, color: '#34C759' },
            { label: 'Investment', value: 2500, percent: 13, color: '#AF52DE' },
        ],
    },
};
