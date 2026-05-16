import type { Meta, StoryObj } from '@storybook/react';
import { CashbackWidget } from './CashbackWidget';

const meta = {
    title: 'Fintech/Cards/CashbackWidget',
    component: CashbackWidget,
    tags: ['autodocs'],
} satisfies Meta<typeof CashbackWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        earned: 45.50,
        total: 100,
        currency: 'USD',
        percentage: 2.5,
        label: 'Cashback Earned',
        period: 'This month',
    },
};

export const NearGoal: Story = {
    args: {
        earned: 87.25,
        total: 100,
        currency: 'USD',
        percentage: 2.5,
        period: 'This month',
    },
};

export const CompletedGoal: Story = {
    args: {
        earned: 100,
        total: 100,
        currency: 'USD',
        percentage: 3.0,
        period: 'This month',
    },
};

export const NoGoal: Story = {
    args: {
        earned: 32.80,
        currency: 'USD',
        percentage: 1.5,
        period: 'This week',
    },
};

export const EuroCurrency: Story = {
    args: {
        earned: 78.50,
        total: 200,
        currency: 'EUR',
        locale: 'de-DE',
        percentage: 2.0,
        period: 'This quarter',
    },
};

export const HighPercentage: Story = {
    args: {
        earned: 150.00,
        total: 200,
        currency: 'USD',
        percentage: 5.0,
        label: 'Bonus Cashback',
        period: 'Promotional period',
    },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
