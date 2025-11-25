import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import PaymentMethodSelector from '../components/PaymentMethodSelector';

const meta: Meta<typeof PaymentMethodSelector> = {
  title: 'Payments/Payment Method Selector',
  component: PaymentMethodSelector,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PaymentMethodSelector>;

const methods = [
  { id: 'card-1', type: 'card', label: 'Visa •••• 4242', details: 'Expires 12/26' },
  { id: 'apple', type: 'applepay', label: 'Apple Pay' },
  { id: 'paypal', type: 'paypal', label: 'PayPal' },
  { id: 'bank-1', type: 'bank', label: 'Bank •••• 6789', disabled: false },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>('card-1');
    return (
      <div className="p-6 max-w-md">
        <PaymentMethodSelector methods={methods} value={value} onChange={setValue} onAdd={() => alert('Add method')} />
        <div className="mt-4">Selected: {value}</div>
      </div>
    );
  },
};

export const WithDisabled: Story = {
  render: () => (
    <div className="p-6 max-w-md">
      <PaymentMethodSelector
        methods={[
          { id: 'card-1', type: 'card', label: 'Visa •••• 4242' },
          { id: 'card-2', type: 'card', label: 'Mastercard •••• 1111', disabled: true },
        ]}
        defaultValue={'card-1'}
      />
    </div>
  ),
};
