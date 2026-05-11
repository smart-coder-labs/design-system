import type { Meta, StoryObj } from '@storybook/react';
import { VirtualCardPreview } from './VirtualCardPreview';

const meta = {
  title: 'Components/VirtualCardPreview',
  component: VirtualCardPreview,
  tags: ['autodocs'],
} satisfies Meta<typeof VirtualCardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardholderName: 'John Doe',
    cardNumber: '4242 4242 4242 4242',
    expiryDate: '12/28',
    cvv: '123',
    brand: 'visa',
  },
};

export const Mastercard: Story = {
  args: {
    cardholderName: 'Alice Johnson',
    cardNumber: '5555 5555 5555 4444',
    expiryDate: '06/27',
    cvv: '321',
    brand: 'mastercard',
  },
};

export const Amex: Story = {
  args: {
    cardholderName: 'Bob Smith',
    cardNumber: '3782 822463 10005',
    expiryDate: '09/26',
    cvv: '7890',
    brand: 'amex',
  },
};

export const WithBalance: Story = {
  args: {
    cardholderName: 'Carol White',
    cardNumber: '4242 4242 4242 4242',
    expiryDate: '12/28',
    cvv: '456',
    brand: 'visa',
    balance: 12500.00,
    currency: 'USD',
  },
};

export const PurpleGradient: Story = {
  args: {
    cardholderName: 'Dave Brown',
    cardNumber: '4242 4242 4242 4242',
    expiryDate: '03/29',
    cvv: '789',
    brand: 'visa',
    gradient: 'purple',
    balance: 8500.00,
  },
};

export const GoldGradient: Story = {
  args: {
    cardholderName: 'Eve Davis',
    cardNumber: '4242 4242 4242 4242',
    expiryDate: '08/27',
    cvv: '012',
    brand: 'mastercard',
    gradient: 'gold',
    balance: 55000.00,
  },
};

export const Frozen: Story = {
  args: {
    cardholderName: 'Frank Wilson',
    cardNumber: '4242 4242 4242 4242',
    expiryDate: '11/28',
    cvv: '345',
    brand: 'visa',
    frozen: true,
    balance: 3200.00,
  },
};

export const Compact: Story = {
  args: {
    cardholderName: 'Grace Lee',
    cardNumber: '4242 4242 4242 4242',
    expiryDate: '05/28',
    brand: 'visa',
    variant: 'compact',
  },
};

export const GlassStyle: Story = {
  args: {
    cardholderName: 'Henry Taylor',
    cardNumber: '4242 4242 4242 4242',
    expiryDate: '01/29',
    cvv: '678',
    brand: 'mastercard',
    gradient: 'glass',
    balance: 23000.00,
  },
};
