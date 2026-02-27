import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { EarlyPaymentDiscount } from '../components/ui/EarlyPaymentDiscount';

const meta: Meta<typeof EarlyPaymentDiscount> = {
    title: 'Fintech/Credit & BNPL/EarlyPaymentDiscount',
    component: EarlyPaymentDiscount,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EarlyPaymentDiscount>;

export const Default: Story = {
    args: {
        totalInterestRemaining: 5000,
        monthlyPayment: 450,
        remainingMonths: 12,
        currency: 'USD',
        onPayEarly: (amountToPay: number, interestSaved: number) => console.log('Capture savings:', amountToPay, interestSaved),
    },
};
