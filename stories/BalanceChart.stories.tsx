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

const weekData = [
    { label: 'Mon', value: 42500 },
    { label: 'Tue', value: 43200 },
    { label: 'Wed', value: 41800 },
    { label: 'Thu', value: 44500 },
    { label: 'Fri', value: 45000 },
    { label: 'Sat', value: 44200 },
    { label: 'Sun', value: 46800 },
];

const downTrend = [
    { label: 'Mon', value: 55000 },
    { label: 'Tue', value: 53000 },
    { label: 'Wed', value: 50200 },
    { label: 'Thu', value: 48800 },
    { label: 'Fri', value: 47500 },
    { label: 'Sat', value: 46100 },
    { label: 'Sun', value: 44300 },
];

export const Default: Story = {
    args: {
        data: weekData,
        currency: 'MXN',
        locale: 'es-MX',
        title: 'Balance — Last 7 Days',
    },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

export const DownTrend: Story = {
    name: '📉 Down Trend',
    args: {
        data: downTrend,
        currency: 'MXN',
        locale: 'es-MX',
        title: 'Balance — Last 7 Days',
    },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

export const USDAccount: Story = {
    name: '💵 USD Account',
    args: {
        data: weekData.map(d => ({ ...d, value: d.value / 17 })),
        currency: 'USD',
        locale: 'en-US',
        title: 'USD Balance',
    },
    decorators: [(Story) => <div className="w-[420px]"><Story /></div>],
};

export const Playground: Story = {
    name: '🎨 Playground',
    args: { ...Default.args },
    decorators: [(Story) => <div className="w-[500px]"><Story /></div>],
};
