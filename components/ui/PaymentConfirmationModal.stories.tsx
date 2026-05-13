import type { Meta, StoryObj } from '@storybook/react';
import { PaymentConfirmationModal } from './PaymentConfirmationModal';

const meta = {
  title: 'Fintech/Payments/PaymentConfirmationModal',
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

/** Bank transfer with fee */
export const BankTransfer: Story = {
  args: {
    open: true,
    amount: 3500.00,
    currency: 'USD',
    recipient: 'Acme Corporation',
    description: 'Invoice INV-2025-4421',
    fee: '$15.00',
    bankName: 'Chase Bank',
    accountLastFour: '4823',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled'),
  },
};

/** Zero amount payment — edge case */
export const ZeroAmount: Story = {
  args: {
    open: true,
    amount: 0.00,
    currency: 'USD',
    recipient: 'test@example.com',
    description: 'Test transaction — zero value',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled'),
  },
};

/** International wire transfer */
export const InternationalWire: Story = {
  args: {
    open: true,
    amount: 12500.00,
    currency: 'EUR',
    recipient: 'Global Bank GmbH',
    description: 'SWIFT transfer for Q3 services',
    fee: '€35.00',
    bankName: 'Deutsche Bank',
    accountLastFour: '7712',
    estimatedArrival: '3-5 business days',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled'),
  },
};

/** High-precision crypto amount */
export const CryptoSmallAmount: Story = {
  args: {
    open: true,
    amount: 0.0001,
    currency: 'BTC',
    recipient: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
    description: 'Test micro-transaction',
    network: 'Bitcoin',
    fee: '0.00005 BTC',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled'),
  },
};

/** Dark mode */
export const DarkMode: Story = {
  args: {
    open: true,
    amount: 500.00,
    currency: 'USDC',
    recipient: '0xDeFi...Wallet',
    description: 'DeFi yield deposit',
    fee: '$2.50',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled'),
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

/** Mobile narrow container */
export const Mobile: Story = {
  args: {
    open: true,
    amount: 75.00,
    currency: 'USD',
    recipient: 'merchant@store.com',
    description: 'Online purchase — Order #8832',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled'),
  },
  decorators: [
    (Story) => (
      <div className="max-w-[320px] mx-auto">
        <Story />
      </div>
    ),
  ],
};
