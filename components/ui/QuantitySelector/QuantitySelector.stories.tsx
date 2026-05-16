import type { Meta, StoryObj } from '@storybook/react';
import { QuantitySelector } from './QuantitySelector';

const meta = {
  title: 'Forms/QuantitySelector',
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

export const WithDefaultValue: Story = {
    args: {
        defaultValue: 3,
        min: 1,
        max: 10,
        onChange: (v) => console.log('Quantity:', v),
    },
};

export const WithLimits: Story = {
    args: {
        defaultValue: 5,
        min: 1,
        max: 5,
        onChange: (v) => console.log('Quantity:', v),
    },
};

export const DisabledWithDefault: Story = {
    args: {
        defaultValue: 2,
        min: 1,
        max: 10,
        disabled: true,
        onChange: (v) => console.log('Quantity:', v),
    },
};

export const Compact: Story = {
    args: {
        defaultValue: 1,
        min: 0,
        max: 99,
        compact: true,
        onChange: (v) => console.log('Quantity:', v),
    },
};

export const LargeRange: Story = {
    args: {
        defaultValue: 50,
        min: 1,
        max: 100,
        step: 5,
        onChange: (v) => console.log('Quantity:', v),
    },
};
