import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { BalanceChart } from '../components/ui/BalanceChart';

const meta: Meta<typeof BalanceChart> = {
    title: 'Fintech/Dashboard/BalanceChart',
    component: BalanceChart,
    parameters: { layout: 'centered' },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof BalanceChart>;

export const Default: Story = {
    args: {
        dataPoints: [42500, 43200, 41800, 44500, 45000, 44200, 46800],
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        currentBalance: 46800,
        previousBalance: 42500,
        currency: 'MXN',
        locale: 'es-MX',
        title: 'Balance — Last 7 Days',
    },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

export const DownTrend: Story = {
    name: '📉 Down Trend',
    args: {
        dataPoints: [55000, 53000, 50200, 48800, 47500, 46100, 44300],
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        currentBalance: 44300,
        previousBalance: 55000,
        currency: 'MXN',
        locale: 'es-MX',
        title: 'Balance — Last 7 Days',
    },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

export const USDAccount: Story = {
    name: '💵 USD Account',
    args: {
        dataPoints: [2500, 2540, 2480, 2610, 2650, 2600, 2750],
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        currentBalance: 2750,
        previousBalance: 2500,
        currency: 'USD',
        locale: 'en-US',
        title: 'USD Balance',
    },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

export const WithPrediction: Story = {
    name: '🔮 With Prediction',
    args: {
        dataPoints: [42500, 43200, 41800, 44500, 45000, 44200, 46800],
        predictedDataPoints: [47200, 47800, 48500],
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        currentBalance: 46800,
        previousBalance: 42500,
        currency: 'MXN',
        locale: 'es-MX',
        title: 'Balance with Forecast',
    },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};
