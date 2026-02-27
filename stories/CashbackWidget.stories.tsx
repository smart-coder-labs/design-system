import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CashbackWidget } from '../components/ui/CashbackWidget';

const meta: Meta<typeof CashbackWidget> = {
    title: 'Fintech/Cards/CashbackWidget',
    component: CashbackWidget,
    parameters: { layout: 'centered' },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof CashbackWidget>;

export const Default: Story = {
    args: {
        earned: 342.50,
        total: 500,
        currency: 'MXN',
        percentage: 3.5,
    },
    decorators: [(Story) => <div className="w-[380px]"><Story /></div>],
};

export const USD: Story = {
    name: '💵 USD Cashback',
    args: {
        earned: 128.75,
        total: 250,
        currency: 'USD',
        locale: 'en-US',
        percentage: 2.0,
    },
    decorators: [(Story) => <div className="w-[380px]"><Story /></div>],
};

export const HighReward: Story = {
    name: '🏆 High Reward',
    args: {
        earned: 4500,
        total: 5000,
        currency: 'MXN',
        percentage: 5.0,
        label: 'Premium Cashback',
    },
    decorators: [(Story) => <div className="w-[380px]"><Story /></div>],
};
