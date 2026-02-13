import type { Meta, StoryObj } from '@storybook/react';
import { DonutChart } from '../../components/ui/charts/DonutChart';

const expenseData = [
  { label: 'Housing & Rent', value: 2850, color: '#007AFF' },
  { label: 'Food & Dining', value: 1240, color: '#34C759' },
  { label: 'Transportation', value: 680, color: '#FF9500' },
  { label: 'Healthcare', value: 520, color: '#FF2D55' },
  { label: 'Entertainment', value: 380, color: '#AF52DE' },
  { label: 'Utilities', value: 310, color: '#00C7BE' },
];

const meta: Meta<typeof DonutChart> = {
  title: 'Charts/DonutChart',
  component: DonutChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    centerLabel: { control: 'text' },
    centerValue: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

export const Default: Story = {
  args: {
    data: expenseData,
    centerLabel: 'Monthly',
    centerValue: '$5,980',
    showLegend: true,
    showTooltip: true,
    title: 'Monthly Expenses',
    subtitle: 'Household Budget Breakdown',
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <DonutChart data={expenseData} variant="default" title="Default" centerLabel="Total" centerValue="$5,980" />
      <DonutChart data={expenseData} variant="glass" title="Glass" centerLabel="Total" centerValue="$5,980" />
      <DonutChart data={expenseData} variant="bordered" title="Bordered" centerLabel="Total" centerValue="$5,980" />
      <DonutChart data={expenseData} variant="elevated" title="Elevated" centerLabel="Total" centerValue="$5,980" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [
    (Story) => (
      <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
  args: {
    data: expenseData,
    variant: 'bordered',
    centerLabel: 'Total',
    centerValue: '$5,980',
    showLegend: true,
    title: 'Expenses',
    subtitle: 'Dark Mode Preview',
  },
};

export const PortfolioAllocation: Story = {
  name: '💵 Portfolio Allocation',
  args: {
    data: [
      { label: 'US Large Cap', value: 720000, color: '#007AFF' },
      { label: 'International Equity', value: 408000, color: '#5856D6' },
      { label: 'US Bonds', value: 336000, color: '#34C759' },
      { label: 'Real Estate (REITs)', value: 264000, color: '#FF9500' },
      { label: 'Emerging Markets', value: 216000, color: '#FF2D55' },
      { label: 'Commodities', value: 168000, color: '#AC8E68' },
      { label: 'US Small Cap', value: 144000, color: '#00C7BE' },
      { label: 'Cash & Equivalents', value: 144000, color: '#8E8E93' },
    ],
    centerLabel: 'Total',
    centerValue: '$2.4M',
    showLegend: true,
    showTooltip: true,
    variant: 'glass',
    size: 'lg',
    animated: true,
    title: 'Investment Portfolio',
    subtitle: 'Asset Allocation — Q4 2024',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const SprintProgress: Story = {
  name: '📊 Sprint Progress',
  args: {
    data: [
      { label: 'Completed', value: 34, color: '#34C759' },
      { label: 'In Progress', value: 12, color: '#007AFF' },
      { label: 'In Review', value: 8, color: '#FF9500' },
      { label: 'Blocked', value: 3, color: '#FF2D55' },
      { label: 'To Do', value: 7, color: '#8E8E93' },
    ],
    centerLabel: 'Sprint 24',
    centerValue: '78%',
    showLegend: true,
    showTooltip: true,
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    title: 'Sprint Progress',
    subtitle: 'Team Velocity — 64 Story Points',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: expenseData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showLegend: true,
    showTooltip: true,
    centerLabel: 'Total',
    centerValue: '$5,980',
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
