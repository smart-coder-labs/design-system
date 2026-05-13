import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from './Input';
import { Search, Eye, EyeOff } from 'lucide-react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter value...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: 'Search transactions...',
    leftIcon: <Search className="w-4 h-4" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    rightIcon: <EyeOff className="w-4 h-4" />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Card Number',
    placeholder: '1234 5678 9012 3456',
    error: 'Invalid card number',
    defaultValue: '1234',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Amount',
    placeholder: '0.00',
    helperText: 'Minimum deposit is $10',
    type: 'number',
  },
};

export const Small: Story = {
  args: {
    inputSize: 'sm',
    placeholder: 'Small input',
  },
};

export const Large: Story = {
  args: {
    inputSize: 'lg',
    placeholder: 'Large input',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Locked field',
    placeholder: 'Cannot edit',
    disabled: true,
  },
};
