import type { Meta, StoryObj } from '@storybook/react';
import { SocialPaymentFeed } from './SocialPaymentFeed';

const meta = {
  title: 'Components/SocialPaymentFeed',
  component: SocialPaymentFeed,
  tags: ['autodocs'],
} satisfies Meta<typeof SocialPaymentFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    payments: [
      { id: '1', user: 'Alice', amount: '$50', message: 'Dinner 🍕', time: '2m ago' },
      { id: '2', user: 'Bob', amount: '$200', message: 'Rent payment', time: '1h ago' },
      { id: '3', user: 'Carol', amount: '$25', message: 'Coffee ☕', time: '3h ago' },
    ],
  },
};

export const WithAvatars: Story = {
  args: {
    payments: [
      { id: '1', user: 'Alice', avatar: '', amount: '$100', message: 'Birthday gift 🎁', time: '5m ago' },
      { id: '2', user: 'Bob', avatar: '', amount: '$1,500', message: 'Invoice payment', time: '30m ago' },
      { id: '3', user: 'Dave', avatar: '', amount: '$20', message: 'Thanks! 🙏', time: '2h ago' },
    ],
  },
};

export const CryptoPayments: Story = {
  args: {
    payments: [
      { id: '1', user: '0x1234...5678', amount: '0.05 ETH', message: 'Swap completed', time: '1m ago' },
      { id: '2', user: '0xabcd...ef01', amount: '100 USDC', message: 'Payment received', time: '15m ago' },
      { id: '3', user: '0x9876...5432', amount: '0.001 BTC', message: 'Lightning payment ⚡', time: '1h ago' },
    ],
  },
};

export const Empty: Story = {
  args: {
    payments: [],
  },
};
