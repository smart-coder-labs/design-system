import type { Meta, StoryObj } from '@storybook/react';
import { Chart } from './Chart';

const meta = {
    title: 'Components/Chart',
    component: Chart,
    tags: ['autodocs'],
} satisfies Meta<typeof Chart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PieChart: Story = {
    args: {
        type: 'pie',
        data: {
            labels: ['Stocks', 'Bonds', 'Crypto', 'Real Estate', 'Cash'],
            datasets: [{
                data: [45, 20, 15, 12, 8],
                backgroundColor: ['#007AFF', '#34C759', '#AF52DE', '#FF9500', '#5AC8FA'],
            }],
        },
        size: 220,
    },
};

export const DonutChart: Story = {
    args: {
        type: 'donut',
        data: {
            labels: ['US Stocks', 'International', 'Bonds', 'Alternatives'],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: ['#007AFF', '#34C759', '#FF9500', '#AF52DE'],
            }],
        },
        size: 220,
    },
};

export const PieChartSmall: Story = {
    args: {
        type: 'pie',
        data: {
            labels: ['Category A', 'Category B', 'Category C'],
            datasets: [{
                data: [50, 30, 20],
                backgroundColor: ['#007AFF', '#34C759', '#FF9500'],
            }],
        },
        size: 150,
    },
};

export const DonutChartLarge: Story = {
    args: {
        type: 'donut',
        data: {
            labels: ['Savings', 'Checking', 'Investment', 'Credit'],
            datasets: [{
                data: [35, 25, 25, 15],
                backgroundColor: ['#34C759', '#007AFF', '#AF52DE', '#FF9500'],
            }],
        },
        size: 280,
    },
};

export const LineChart: Story = {
    args: {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                data: [100, 120, 115, 135, 130, 150],
            }],
        },
    },
};

export const BarChart: Story = {
    args: {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                data: [25000, 32000, 28000, 45000],
            }],
        },
    },
};

export const RadialChart: Story = {
    args: {
        type: 'radial',
        data: {
            labels: ['Progress'],
            datasets: [{
                data: [75],
            }],
        },
        size: 200,
    },
};

export const InteractivePie: Story = {
    args: {
        type: 'pie',
        data: {
            labels: ['Equities', 'Fixed Income', 'Commodities', 'Real Estate', 'Cash'],
            datasets: [{
                data: [35, 25, 15, 15, 10],
                backgroundColor: ['#007AFF', '#34C759', '#FF9500', '#AF52DE', '#5AC8FA'],
            }],
        },
        activeIndex: 2,
        size: 220,
    },
};
