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

export const WithMultipleWarnings: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Showcases edge case where multiple subscriptions have price increase warnings or billing issues. Tests the component ability to highlight concurrent warnings.',
      },
    },
  },
};

export const TotalCostOverlay: Story = {
  render: () => (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-8 rounded-2xl">
      <SubscriptionManager />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'SubscriptionManager displayed on a gradient background simulating a financial dashboard overlay, testing visual contrast and integration polish.',
      },
    },
  },
};

export const LongSubscriptionList: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-sm mx-auto my-4">
        <Story />
      </div>
    ),
  ],
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story: 'Mobile viewport simulation demonstrating how the subscription manager behaves with limited horizontal space on a phone screen.',
      },
    },
  },
};
