import type { Meta, StoryObj } from '@storybook/react';
import { PaymentMethodSelector } from './PaymentMethodSelector';

const meta = {
  title: 'Components/PaymentMethodSelector',
  component: PaymentMethodSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    methods: [
      { id: 'card', name: 'Credit Card', icon: 'credit-card' },
      { id: 'crypto', name: 'Cryptocurrency', icon: 'bitcoin' },
      { id: 'bank', name: 'Bank Transfer', icon: 'bank' },
    ],
    onSelect: (id: string) => console.log('Selected:', id),
  },
};

export const WithSelected: Story = {
  args: {
    methods: [
      { id: 'visa', name: 'Visa •••• 4242', icon: 'credit-card' },
      { id: 'mastercard', name: 'Mastercard •••• 8888', icon: 'credit-card' },
      { id: 'paypal', name: 'PayPal', icon: 'wallet' },
    ],
    selectedId: 'visa',
    onSelect: (id: string) => console.log('Selected:', id),
  },
};

export const SingleMethod: Story = {
  args: {
    methods: [
      { id: 'crypto', name: 'USDC (Polygon)', icon: 'wallet' },
    ],
    selectedId: 'crypto',
    onSelect: (id: string) => console.log('Selected:', id),
  },
};
