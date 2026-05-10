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
        pending: 85.25,
        lifetime: 2340,
        currency: 'MXN',
        locale: 'es-MX',
        cashbackRate: 2,
        nextReward: '$150',
    },
    decorators: [(Story) => <div className="w-[380px]"><Story /></div>],
};

export const USD: Story = {
    name: '💵 USD Cashback',
    args: {
        earned: 128.75,
        pending: 32.00,
        lifetime: 850,
        currency: 'USD',
        locale: 'en-US',
        cashbackRate: 2,
        nextReward: '$50',
    },
    decorators: [(Story) => <div className="w-[380px]"><Story /></div>],
};

export const Premium: Story = {
    name: '🏆 Premium Card',
    args: {
        earned: 4500,
        pending: 1200,
        lifetime: 15000,
        currency: 'MXN',
        locale: 'es-MX',
        cashbackRate: 5,
        nextReward: '$250',
    },
    decorators: [(Story) => <div className="w-[380px]"><Story /></div>],
};
