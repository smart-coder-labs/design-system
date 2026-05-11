import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HapticButton } from './HapticButton';
import { action } from '@storybook/addon-actions';
import { Send, ArrowRight, Check, CreditCard, Wallet } from 'lucide-react';

const meta: Meta<typeof HapticButton> = {
  title: 'Components/HapticButton',
  component: HapticButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Send Payment',
    onClick: action('clicked'),
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Cancel',
    onClick: action('clicked'),
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Learn More',
    onClick: action('clicked'),
    variant: 'ghost',
  },
};

export const Danger: Story = {
  args: {
    children: 'Delete Account',
    onClick: action('clicked'),
    variant: 'danger',
  },
};

export const Large: Story = {
  args: {
    children: 'Confirm Payment',
    onClick: action('clicked'),
    size: 'lg',
    icon: <Check className="w-5 h-5" />,
  },
};

export const Small: Story = {
  args: {
    children: 'Send',
    onClick: action('clicked'),
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Send',
    onClick: action('clicked'),
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Send Money',
    onClick: action('clicked'),
    icon: <Send className="w-4 h-4" />,
    variant: 'primary',
  },
};

export const Loading: Story = {
  args: {
    children: 'Processing',
    onClick: action('clicked'),
    loading: true,
    variant: 'primary',
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Confirm $250.00 Payment',
    onClick: action('clicked'),
    variant: 'primary',
    fullWidth: true,
    icon: <Check className="w-4 h-4" />,
  },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
};

export const PaymentActions: Story = {
  render: () => (
    <div className="w-80 space-y-3">
      <p className="text-sm font-semibold text-text-primary">Complete Payment</p>
      <HapticButton variant="primary" fullWidth icon={<CreditCard className="w-4 h-4" />} onClick={action('pay')}>
        Pay $250.00
      </HapticButton>
      <HapticButton variant="secondary" fullWidth icon={<Wallet className="w-4 h-4" />} onClick={action('wallet')}>
        Pay with Wallet
      </HapticButton>
      <HapticButton variant="ghost" fullWidth onClick={action('cancel')}>
        Cancel
      </HapticButton>
    </div>
  ),
};

export const DarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-900 rounded-2xl">
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Continue',
    onClick: action('clicked'),
    variant: 'primary',
    icon: <ArrowRight className="w-4 h-4" />,
  },
};

export const LongText: Story = {
  args: {
    children: 'Approve recurring transfer of $150.00 every month',
    onClick: action('clicked'),
    variant: 'primary',
  },
};
