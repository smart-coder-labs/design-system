import type { Meta, StoryObj } from '@storybook/react';
import { QRCodeGenerator } from './QRCodeGenerator';

const meta = {
  title: 'Components/QRCodeGenerator',
  component: QRCodeGenerator,
  tags: ['autodocs'],
} satisfies Meta<typeof QRCodeGenerator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'https://example.com',
  },
};

export const BitcoinAddress: Story = {
  args: {
    value: 'bitcoin:bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh?amount=0.01',
    label: 'Bitcoin Address',
  },
};

export const WithLabel: Story = {
  args: {
    value: '0x1234567890abcdef1234567890abcdef12345678',
    label: 'Ethereum Address',
  },
};

export const Large: Story = {
  args: {
    value: 'https://app.cryptowallet.com/referral?code=ABC123',
    size: 256,
    label: 'Referral Link',
  },
};

export const Small: Story = {
  args: {
    value: 'payment-12345',
    size: 128,
    label: 'Payment Code',
  },
};

export const PaymentQR: Story = {
    args: {
        defaultValue: 'https://pay.bank.com/send?to=123456&amount=50.00',
        size: 200,
        showInput: false,
        label: 'Scan to Pay $50 USD',
    },
};

export const BitcoinAddress: Story = {
    args: {
        defaultValue: 'bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.01',
        size: 200,
        showInput: false,
        label: 'Bitcoin Receiving Address',
    },
};

export const WithColor: Story = {
    args: {
        defaultValue: 'https://fintech.app/profile/cesar',
        size: 180,
        color: '#007AFF',
        backgroundColor: '#F2F2F7',
        showInput: true,
        label: 'Profile QR Code',
    },
};

export const LargeQR: Story = {
    args: {
        defaultValue: 'https://banking.app/invite/referral?code=CESAR2026',
        size: 300,
        showInput: false,
        label: 'Referral Code',
    },
};
