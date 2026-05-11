import type { Meta, StoryObj } from '@storybook/react';
import { QuantitySelector } from './QuantitySelector';

const meta = {
  title: 'Components/QuantitySelector',
  component: QuantitySelector,
  tags: ['autodocs'],
} satisfies Meta<typeof QuantitySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1,
    min: 0,
    max: 10,
    onChange: (val: number) => console.log('Quantity:', val),
  },
};

export const CryptoAmount: Story = {
  args: {
    value: 0.5,
    min: 0.001,
    max: 10,
    step: 0.001,
    format: '0.000',
    onChange: (val: number) => console.log('Amount:', val),
  },
};

export const WithLabel: Story = {
  args: {
    value: 5,
    min: 1,
    max: 100,
    label: 'Units',
    onChange: (val: number) => console.log('Quantity:', val),
  },
};

export const Disabled: Story = {
  args: {
    value: 3,
    min: 1,
    max: 10,
    disabled: true,
    onChange: (val: number) => console.log('Quantity:', val),
  },
};

export const MaxReached: Story = {
  args: {
    value: 10,
    min: 1,
    max: 10,
    onChange: (val: number) => console.log('Quantity:', val),
  },
};
