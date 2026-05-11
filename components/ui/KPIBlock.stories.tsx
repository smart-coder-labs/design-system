import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { KPIBlock } from './KPIBlock';
import { DollarSign, Users, TrendingUp, ShoppingCart } from 'lucide-react';

const meta: Meta<typeof KPIBlock> = {
  title: 'Components/KPIBlock',
  component: KPIBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Total Revenue',
    value: '$124,500',
    change: '+12.5%',
    trend: 'up',
    icon: <DollarSign className="w-5 h-5" />,
  },
};

export const DownTrend: Story = {
  args: {
    label: 'Expenses',
    value: '$38,200',
    change: '-5.2%',
    trend: 'down',
    icon: <ShoppingCart className="w-5 h-5" />,
  },
};

export const NeutralTrend: Story = {
  args: {
    label: 'Active Users',
    value: '2,847',
    change: '0%',
    trend: 'neutral',
    icon: <Users className="w-5 h-5" />,
  },
};

export const BorderedVariant: Story = {
  args: {
    label: 'Net Profit',
    value: '$86,300',
    change: '+8.3%',
    trend: 'up',
    variant: 'bordered',
    icon: <TrendingUp className="w-5 h-5" />,
  },
};

export const ElevatedVariant: Story = {
  args: {
    label: 'Monthly Recurring Revenue',
    value: '$42,000',
    change: '+3.1%',
    trend: 'up',
    variant: 'elevated',
    icon: <DollarSign className="w-5 h-5" />,
  },
};

export const MinimalVariant: Story = {
  args: {
    label: 'Conversion Rate',
    value: '3.4%',
    change: '+0.6%',
    trend: 'up',
    variant: 'minimal',
    icon: <TrendingUp className="w-5 h-5" />,
  },
};

export const Small: Story = {
  args: {
    label: 'Today Sales',
    value: '$3,240',
    change: '+2.1%',
    trend: 'up',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Total Assets Under Management',
    value: '$2.4M',
    change: '+15.8%',
    trend: 'up',
    size: 'lg',
    icon: <DollarSign className="w-6 h-6" />,
  },
};

export const Loading: Story = {
  args: {
    label: 'Portfolio Value',
    value: '$485,000',
    change: '+4.2%',
    trend: 'up',
    loading: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Customer Lifetime Value',
    value: '$1,240',
    change: '+7.5%',
    trend: 'up',
    description: 'Average across all segments',
    icon: <Users className="w-5 h-5" />,
  },
};
