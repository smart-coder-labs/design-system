import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CurrencyConverterWidget } from '../components/ui/CurrencyConverterWidget';

const meta: Meta<typeof CurrencyConverterWidget> = {
    title: 'Fintech/FX & International Payments/CurrencyConverterWidget',
    component: CurrencyConverterWidget,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CurrencyConverterWidget>;

export const Default: Story = {
    args: {
        currencies: [
            { code: 'USD', flag: '🇺🇸', name: 'US Dollar' },
            { code: 'EUR', flag: '🇪🇺', name: 'Euro' },
            { code: 'GBP', flag: '🇬🇧', name: 'British Pound' },
        ],
        exchangeRate: 0.92,
        feePercentage: 0.5,
        estimatedDelivery: 'In seconds',
        onConvert: (from, to, amount) => alert(`Converting ${amount} ${from} to ${to}`),
    },
};
