import type { Meta, StoryObj } from '@storybook/react';
import { OrderSummary } from './OrderSummary';

const meta = {
  title: 'Components/OrderSummary',
  component: OrderSummary,
  tags: ['autodocs'],
} satisfies Meta<typeof OrderSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Bitcoin', value: '0.0025 BTC', amount: '$145.20' },
      { label: 'Ethereum', value: '0.015 ETH', amount: '$42.30' },
    ],
    total: '$187.50',
    currency: 'USD',
  },
};

export const WithFees: Story = {
  args: {
    items: [
      { label: 'Amount', value: '500.00 USDC', amount: '$500.00' },
      { label: 'Network Fee', value: '~$2.50', amount: '$2.50' },
      { label: 'Processing Fee', value: '1.5%', amount: '$7.50' },
    ],
    total: '$510.00',
    currency: 'USD',
    fees: '$10.00',
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'USDT Purchase', value: '1,000 USDT', amount: '$1,005.00' },
    ],
    total: '$1,005.00',
    currency: 'USD',
  },
};

export const WithStatus: Story = {
  args: {
    items: [
      { label: 'Swap: ETH → BTC', value: '0.1 ETH → 0.004 BTC', amount: '$320.00' },
    ],
    total: '$320.00',
    status: 'completed',
    currency: 'USD',
  },
};

export const Loading: Story = {
  args: {
    items: [],
    total: '---',
    loading: true,
    currency: 'USD',
  },
};
