import type { Meta, StoryObj } from '@storybook/react';
import { PriceDisplay } from './PriceDisplay';

const meta = {
  title: 'Data Display/PriceDisplay',
  component: PriceDisplay,
  tags: ['autodocs'],
} satisfies Meta<typeof PriceDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 1234.56,
    currency: 'USD',
  },
};

export const PositiveChange: Story = {
  args: {
    value: 45678.90,
    currency: 'USD',
    change: 2.45,
  },
};

export const NegativeChange: Story = {
  args: {
    value: 32000.00,
    currency: 'BTC',
    change: -1.23,
  },
};

export const LargeValue: Story = {
  args: {
    value: 1250000.00,
    currency: 'USD',
    compact: true,
  },
};

export const CompactWithChange: Story = {
  args: {
    value: 0.025,
    currency: 'BTC',
    change: 5.67,
    compact: true,
  },
};

export const WithLabel: Story = {
  args: {
    value: 250.00,
    currency: 'USDC',
    label: 'Available Balance',
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
