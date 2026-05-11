import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FairUseLimitTracker, LimitCategory } from './FairUseLimitTracker';
import { CreditCard, Landmark, RefreshCw } from 'lucide-react';

const categories: LimitCategory[] = [
  {
    id: 'transfers',
    title: 'Transfers',
    used: 12,
    total: 20,
    icon: <RefreshCw className="w-4 h-4" />,
    color: 'text-blue-500',
  },
  {
    id: 'withdrawals',
    title: 'ATM Withdrawals',
    used: 5,
    total: 10,
    icon: <Landmark className="w-4 h-4" />,
    color: 'text-emerald-500',
  },
  {
    id: 'virtual-cards',
    title: 'Virtual Cards',
    used: 3,
    total: 5,
    icon: <CreditCard className="w-4 h-4" />,
    color: 'text-purple-500',
  },
];

const meta: Meta<typeof FairUseLimitTracker> = {
  title: 'Components/FairUseLimitTracker',
  component: FairUseLimitTracker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categories,
  },
};

export const WarningLimits: Story = {
  args: {
    categories: categories.map(c => ({ ...c, used: c.total * 0.85 })),
  },
};

export const ExceededLimits: Story = {
  args: {
    categories: [
      { id: 'transfers', title: 'Transfers', used: 20, total: 20, icon: <RefreshCw className="w-4 h-4" />, color: 'text-blue-500' },
      { id: 'withdrawals', title: 'ATM Withdrawals', used: 12, total: 10, icon: <Landmark className="w-4 h-4" />, color: 'text-emerald-500' },
    ],
  },
};

export const CurrencyLimits: Story = {
  args: {
    categories: [
      {
        id: 'spending',
        title: 'Monthly Spending',
        used: 2500,
        total: 5000,
        currency: 'USD',
        icon: <CreditCard className="w-4 h-4" />,
        color: 'text-blue-500',
      },
      {
        id: 'savings',
        title: 'Savings Goal',
        used: 180000,
        total: 500000,
        currency: 'MXN',
        icon: <Landmark className="w-4 h-4" />,
        color: 'text-emerald-500',
      },
    ],
  },
};
