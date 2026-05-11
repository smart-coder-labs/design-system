import type { Meta, StoryObj } from '@storybook/react';
import { PaymentConfirmationModal } from './PaymentConfirmationModal';

const meta = {
  title: 'Components/PaymentConfirmationModal',
  component: PaymentConfirmationModal,
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentConfirmationModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    amount: 250.00,
    currency: 'USD',
    recipient: 'alice@example.com',
    description: 'Payment for invoice #1234',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled'),
  },
};

export const CryptoPayment: Story = {
  args: {
    open: true,
    amount: 0.025,
    currency: 'BTC',
    recipient: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    description: 'Bitcoin transfer',
    network: 'Bitcoin',
    fee: '$1.20',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled'),
  },
};

export const LargeAmount: Story = {
  args: {
    open: true,
    amount: 15000.00,
    currency: 'USD',
    recipient: 'company@business.com',
    description: 'Quarterly service payment',
    fee: '$45.00',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled'),
  },
};

export const Loading: Story = {
  args: {
    open: true,
    amount: 100.00,
    currency: 'USDC',
    recipient: '0x1234...5678',
    description: 'Swap confirmation',
    loading: true,
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled'),
  },
};
