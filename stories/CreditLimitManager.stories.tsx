import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CreditLimitManager } from '../components/ui/CreditLimitManager';

const meta: Meta<typeof CreditLimitManager> = {
    title: 'Fintech/Credit & BNPL/CreditLimitManager',
    component: CreditLimitManager,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CreditLimitManager>;

export const Default: Story = {
    args: {
        maxLimit: 15000,
        initialLimit: 12000,
        currentBalance: 3500,
        currency: 'USD',
        onSave: (newLimit) => console.log('New limit saved:', newLimit),
    },
};
