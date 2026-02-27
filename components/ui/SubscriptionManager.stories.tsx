import type { Meta, StoryObj } from '@storybook/react';
import { SubscriptionManager } from './SubscriptionManager';

const meta: Meta<typeof SubscriptionManager> = {
  title: 'Fintech/SubscriptionManager',
  component: SubscriptionManager,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SubscriptionManager>;

export const Default: Story = {
  args: {},
};
