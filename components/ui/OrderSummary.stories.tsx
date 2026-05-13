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

export const WithDiscount: Story = {
    args: {
        items: [
            { id: '1', name: 'Apple MacBook Pro 16"', price: 2499.00, quantity: 1, image: '', variant: 'Space Black' },
            { id: '2', name: 'USB-C Hub', price: 49.99, quantity: 1, image: '', variant: '7-in-1' },
        ],
        currency: 'USD',
        discountAmount: 150.00,
        shippingCost: 0,
        taxAmount: 254.89,
    },
};

export const MultipleItems: Story = {
    args: {
        items: [
            { id: '1', name: 'Wireless Mouse', price: 79.99, quantity: 2, image: '' },
            { id: '2', name: 'Mechanical Keyboard', price: 199.99, quantity: 1, image: '', variant: 'Blue Switch' },
            { id: '3', name: 'Monitor Stand', price: 49.99, quantity: 1, image: '' },
            { id: '4', name: 'Webcam 4K', price: 129.99, quantity: 1, image: '' },
            { id: '5', name: 'Desk Lamp', price: 39.99, quantity: 1, image: '' },
        ],
        currency: 'USD',
        shippingCost: 12.99,
        taxAmount: 38.40,
    },
};

export const SingleSubscription: Story = {
    args: {
        items: [
            { id: '1', name: 'Annual Premium Subscription', price: 299.99, quantity: 1, image: '' },
        ],
        currency: 'USD',
        taxAmount: 30.00,
    },
};
