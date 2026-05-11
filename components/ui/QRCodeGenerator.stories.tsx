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
