import type { Meta, StoryObj } from '@storybook/react';
import { CreditLimitManager } from './CreditLimitManager';

const meta = {
    title: 'Components/CreditLimitManager',
    component: CreditLimitManager,
    tags: ['autodocs'],
} satisfies Meta<typeof CreditLimitManager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        maxLimit: 10000,
        initialLimit: 5000,
        currentBalance: 1500,
        currency: 'USD',
    },
};

export const FullLimit: Story = {
    args: {
        maxLimit: 10000,
        initialLimit: 10000,
        currentBalance: 3200,
        currency: 'USD',
    },
};

export const NearBalance: Story = {
    args: {
        maxLimit: 5000,
        initialLimit: 1800,
        currentBalance: 1750,
        currency: 'USD',
    },
};

export const HighLimit: Story = {
    args: {
        maxLimit: 50000,
        initialLimit: 25000,
        currentBalance: 8500,
        currency: 'USD',
    },
};

export const EuroCurrency: Story = {
    args: {
        maxLimit: 15000,
        initialLimit: 10000,
        currentBalance: 3200,
        currency: 'EUR',
    },
};

export const ZeroBalance: Story = {
    args: {
        maxLimit: 2000,
        initialLimit: 2000,
        currentBalance: 0,
        currency: 'USD',
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
