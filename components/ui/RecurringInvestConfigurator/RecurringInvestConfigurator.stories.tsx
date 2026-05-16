import type { Meta, StoryObj } from '@storybook/react';
import { RecurringInvestConfigurator } from './RecurringInvestConfigurator';
import { fn } from 'storybook/test';

const meta = {
  title: 'Fintech/Wealth & Crypto/RecurringInvestConfigurator',
  component: RecurringInvestConfigurator,
  tags: ['autodocs'],
} satisfies Meta<typeof RecurringInvestConfigurator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSave: fn(),
  },
};

export const WithDefaultAmount: Story = {
  args: {
    onSave: fn(),
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export const WeeklyBitcoinPlan: Story = {
  args: {
    onSave: fn(),
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center">
        <div className="text-center mb-4 text-sm text-text-tertiary">
          💡 Configure $50 Bitcoin every Monday
        </div>
        <Story />
      </div>
    ),
  ],
};

export const MonthlyETHSaver: Story = {
  args: {
    onSave: fn(),
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center">
        <div className="text-center mb-4 text-sm text-text-tertiary">
          💡 DCA $200 into Ethereum on the 1st of each month
        </div>
        <Story />
      </div>
    ),
  ],
};

export const LargeInvestment: Story = {
  args: {
    onSave: fn(),
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center">
        <div className="text-center mb-4 text-sm text-text-tertiary">
          💡 $10,000 weekly into S&P 500 for long-term growth
        </div>
        <Story />
      </div>
    ),
  ],
};

export const SmallDCA: Story = {
  args: {
    onSave: fn(),
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center">
        <div className="text-center mb-4 text-sm text-text-tertiary">
          💡 Start small: $5 daily into S&P 500
        </div>
        <Story />
      </div>
    ),
  ],
};

export const DarkMode: Story = {
  args: {
    onSave: fn(),
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="p-8 min-h-[500px] flex items-center justify-center" style={{ backgroundColor: '#1C1C1E' }}>
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
