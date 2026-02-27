import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InstallmentSimulator } from '../components/ui/InstallmentSimulator';

const meta: Meta<typeof InstallmentSimulator> = {
    title: 'Fintech/Credit & BNPL/InstallmentSimulator',
    component: InstallmentSimulator,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InstallmentSimulator>;

export const Default: Story = {
    args: {
        purchaseAmount: 2499.00,
        currency: 'USD',
        maxMonths: 12,
        interestRate: 15.99,
        onConfirm: (months, payment) => console.log('Confirmed:', months, payment),
    },
};
