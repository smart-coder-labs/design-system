import type { Meta, StoryObj } from '@storybook/react';
import { PaymentMethodSelector, type PaymentMethod } from './PaymentMethodSelector';
import { fn } from 'storybook/test';

const meta = {
  title: 'Fintech/Payments/PaymentMethodSelector',
  component: PaymentMethodSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultMethods: PaymentMethod[] = [
  { id: 'visa', type: 'card', label: 'Visa •••• 4242', details: 'Expires 12/27' },
  { id: 'mastercard', type: 'card', label: 'Mastercard •••• 8888', details: 'Expires 09/26' },
  { id: 'amex', type: 'card', label: 'Amex •••• 3000', details: 'Expires 03/28' },
  { id: 'bank', type: 'bank', label: 'Chase Checking •••• 5678', details: 'Free transfers' },
];

export const Default: Story = {
  args: {
    methods: defaultMethods,
    onChange: fn(),
  },
};

export const WithSelected: Story = {
  args: {
    methods: defaultMethods,
    value: 'visa',
    onChange: fn(),
  },
};

export const SingleMethod: Story = {
  args: {
    methods: [{ id: 'crypto', type: 'card', label: 'USDC (Polygon)', details: '0x8f3...7e91' }],
    value: 'crypto',
    onChange: fn(),
  },
};

export const ApplePayOnly: Story = {
  args: {
    methods: [
      { id: 'apple', type: 'applepay', label: 'Apple Pay' },
      { id: 'card', type: 'card', label: 'Visa •••• 4242', details: 'Expires 12/27' },
    ],
    value: 'apple',
    onChange: fn(),
  },
};

export const PayPalOnly: Story = {
  args: {
    methods: [
      { id: 'paypal', type: 'paypal', label: 'PayPal', details: 'cesar@example.com' },
    ],
    value: 'paypal',
    onChange: fn(),
  },
};

export const WithAddButton: Story = {
  args: {
    methods: defaultMethods,
    value: 'bank',
    onChange: fn(),
    onAdd: fn(),
    showAdd: true,
  },
};

export const HiddenAddButton: Story = {
  args: {
    methods: defaultMethods,
    value: 'visa',
    onChange: fn(),
    showAdd: false,
  },
};

export const DisabledMethod: Story = {
  args: {
    methods: [
      { id: 'visa', type: 'card', label: 'Visa •••• 4242', details: 'Expires 12/27' },
      { id: 'amex', type: 'card', label: 'Amex •••• 3000', details: 'Expired 03/24', disabled: true },
    ],
    value: 'visa',
    onChange: fn(),
  },
};

export const ManyMethods: Story = {
  args: {
    methods: [
      { id: 'visa', type: 'card', label: 'Visa •••• 4242', details: 'Default' },
      { id: 'mastercard', type: 'card', label: 'Mastercard •••• 8888' },
      { id: 'amex', type: 'card', label: 'Amex •••• 3000' },
      { id: 'discover', type: 'card', label: 'Discover •••• 1111' },
      { id: 'apple', type: 'applepay', label: 'Apple Pay' },
      { id: 'paypal', type: 'paypal', label: 'PayPal', details: 'cesar@example.com' },
      { id: 'bank', type: 'bank', label: 'Wells Fargo Checking', details: '•••• 4321' },
    ],
    value: 'visa',
    onChange: fn(),
  },
};

export const Uncontrolled: Story = {
  args: {
    methods: defaultMethods,
    defaultValue: 'mastercard',
    onChange: fn(),
  },
};
