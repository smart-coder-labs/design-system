import type { Meta, StoryObj } from '@storybook/react';
import { BalanceChart } from './BalanceChart';

const meta = {
    title: 'Fintech/Dashboard/BalanceChart',
    component: BalanceChart,
    tags: ['autodocs'],
} satisfies Meta<typeof BalanceChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const generateBalanceData = (days: number, base: number, variance: number) =>
    Array.from({ length: days }, (_, i) => ({
        label: `Day ${i + 1}`,
        value: base + Math.sin(i * 0.3) * variance + (Math.random() - 0.5) * variance * 0.3,
    }));

const upwardTrendData = generateBalanceData(30, 5000, 800);
const volatileData = generateBalanceData(30, 5000, 2000);

export const Default: Story = {
    args: {
        data: upwardTrendData,
        currency: 'USD',
        title: 'Balance Evolution',
        maskable: true,
    },
};

export const EuroCurrency: Story = {
    args: {
        data: upwardTrendData,
        currency: 'EUR',
        title: 'Balance Evolution',
    },
};

export const Masked: Story = {
    args: {
        data: upwardTrendData,
        currency: 'USD',
        title: 'Balance Evolution',
        maskable: true,
    },
};

export const MaskedHidden: Story = {
    args: {
        data: upwardTrendData.slice(-7),
        currency: 'USD',
        title: 'This Week',
        maskable: true,
    },
};

export const VolatileTrend: Story = {
    args: {
        data: volatileData,
        currency: 'USD',
        title: 'Volatile Portfolio',
    },
};

export const WeekView: Story = {
    args: {
        data: upwardTrendData.slice(-7),
        currency: 'USD',
        title: 'This Week',
        height: 120,
    },
};

export const CustomHeight: Story = {
    args: {
        data: upwardTrendData,
        currency: 'USD',
        title: 'Tall Chart',
        height: 250,
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
