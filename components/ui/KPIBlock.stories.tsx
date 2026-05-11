import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { KPIBlock } from './KPIBlock';
import { TrendingUp, TrendingDown, DollarSign, Users, CreditCard, Activity } from 'lucide-react';

const meta: Meta<typeof KPIBlock> = {
  title: 'Components/KPIBlock',
  component: KPIBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Total Revenue',
    value: '$128,430',
    change: 12.5,
    icon: <DollarSign className="w-5 h-5" />,
  },
};

export const NegativeChange: Story = {
  args: {
    label: 'Operating Costs',
    value: '$42,890',
    change: -5.2,
    icon: <TrendingDown className="w-5 h-5" />,
  },
};

export const NoChange: Story = {
  args: {
    label: 'Active Users',
    value: '2,458',
    change: 0,
    icon: <Users className="w-5 h-5" />,
  },
};

export const LargeValue: Story = {
  args: {
    label: 'Assets Under Management',
    value: '$12.4B',
    change: 8.3,
    icon: <Activity className="w-5 h-5" />,
  },
};

export const Compact: Story = {
  args: {
    label: 'Daily Volume',
    value: '$1.2M',
    change: 3.8,
    compact: true,
  },
};

export const DashboardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-96">
      <KPIBlock label="Balance" value="$45,892" change={5.2} icon={<DollarSign className="w-5 h-5" />} />
      <KPIBlock label="Income" value="$12,430" change={8.1} icon={<TrendingUp className="w-5 h-5" />} />
      <KPIBlock label="Expenses" value="$8,210" change={-3.4} icon={<CreditCard className="w-5 h-5" />} />
      <KPIBlock label="Savings Rate" value="34%" change={2.1} icon={<Activity className="w-5 h-5" />} />
    </div>
  ),
};

export const SmallChange: Story = {
  args: {
    label: 'Portfolio Return',
    value: '+$3,240',
    change: 0.4,
    icon: <TrendingUp className="w-5 h-5" />,
  },
};

export const LargeChange: Story = {
  args: {
    label: 'New Accounts',
    value: '847',
    change: 45.8,
    icon: <Users className="w-5 h-5" />,
  },
};

export const CompactDashboard: Story = {
  render: () => (
    <div className="flex gap-3 w-96">
      <KPIBlock label="BTC" value="$67K" change={2.4} compact icon={<TrendingUp className="w-4 h-4" />} />
      <KPIBlock label="ETH" value="$3.4K" change={-1.2} compact icon={<TrendingDown className="w-4 h-4" />} />
      <KPIBlock label="SOL" value="$185" change={8.4} compact icon={<TrendingUp className="w-4 h-4" />} />
    </div>
  ),
};
