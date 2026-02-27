import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RecurringInvestConfigurator } from '../components/ui/RecurringInvestConfigurator';
import { CryptoAsset } from '../components/ui/RetailSwapInterface';

const meta: Meta<typeof RecurringInvestConfigurator> = {
    title: 'Fintech/Wealth & Crypto/RecurringInvestConfigurator',
    component: RecurringInvestConfigurator,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RecurringInvestConfigurator>;

export const Default: Story = {
    args: {
        onSave: (rule) => console.log('Saved rule:', rule),
    },
};
