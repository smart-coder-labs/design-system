import type { Meta, StoryObj } from '@storybook/react';
import { StatisticDisplay } from './StatisticDisplay';

const meta = {
  title: 'Components/StatisticDisplay',
  component: StatisticDisplay,
  tags: ['autodocs'],
} satisfies Meta<typeof StatisticDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Portfolio Value',
    value: '$125,430',
  },
};

export const WithChangePositive: Story = {
  args: {
    label: 'BTC Balance',
    value: '2.45 BTC',
    change: '+5.2%',
    changeDirection: 'up',
  },
};

export const WithChangeNegative: Story = {
  args: {
    label: 'ETH Balance',
    value: '15.8 ETH',
    change: '-2.1%',
    changeDirection: 'down',
  },
};

export const LargeValue: Story = {
  args: {
    label: 'Total Market Cap',
    value: '$2.4T',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    label: '24h Volume',
    value: '$1.2B',
    size: 'sm',
  },
};

export const WithTrend: Story = {
  args: {
    label: 'Active Users',
    value: '12,847',
    trend: [12000, 12400, 12300, 12500, 12847],
  },
};

export const Loading: Story = {
  args: {
    label: 'Current Price',
    value: '---',
    loading: true,
  },
};
