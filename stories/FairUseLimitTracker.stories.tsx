import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FairUseLimitTracker } from '../components/ui/FairUseLimitTracker';
import { Globe, Landmark, BadgePercent } from 'lucide-react';

const meta: Meta<typeof FairUseLimitTracker> = {
    title: 'Fintech/FX & International Payments/FairUseLimitTracker',
    component: FairUseLimitTracker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FairUseLimitTracker>;

export const Default: Story = {
    args: {
        categories: [
            {
                id: 'atm',
                title: 'Free ATM Withdrawals',
                used: 250,
                total: 400,
                currency: 'USD',
                icon: <Landmark className="w-5 h-5" />,
                color: 'text-indigo-500',
            },
            {
                id: 'fx',
                title: 'No-Fee Currency Exchange',
                used: 950,
                total: 1000,
                currency: 'USD',
                icon: <Globe className="w-5 h-5" />,
                color: 'text-emerald-500',
            },
            {
                id: 'crypto',
                title: 'Free Crypto Purchases',
                used: 50,
                total: 50,
                currency: 'USD',
                icon: <BadgePercent className="w-5 h-5" />,
                color: 'text-amber-500',
            },
        ],
    },
};
