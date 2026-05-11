import type { Meta, StoryObj } from '@storybook/react';
import { SubscriptionManager } from './SubscriptionManager';

const meta = {
    title: 'Components/SubscriptionManager',
    component: SubscriptionManager,
    tags: ['autodocs'],
} satisfies Meta<typeof SubscriptionManager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {},
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'SubscriptionManager used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};
