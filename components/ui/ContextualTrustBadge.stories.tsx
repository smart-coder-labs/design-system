import type { Meta, StoryObj } from '@storybook/react';
import { ContextualTrustBadge } from './ContextualTrustBadge';

const meta: Meta<typeof ContextualTrustBadge> = {
  title: 'Fintech/ContextualTrustBadge',
  component: ContextualTrustBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContextualTrustBadge>;

export const Encryption: Story = {
  args: {
    variant: 'encryption',
  },
};

export const Insurance: Story = {
  args: {
    variant: 'insurance',
    amount: '$3,000.00 MXN',
  },
};

export const FraudProtection: Story = {
  args: {
    variant: 'fraud-protection',
    actionLabel: 'transferencia internacional'
  },
};
