import type { Meta, StoryObj } from '@storybook/react';
import { WaterfallChart } from '../../components/ui/charts/WaterfallChart';

const defaultData = [
  { label: 'Starting Balance', value: 250000, type: 'total' as const },
  { label: 'Product Revenue', value: 185000, type: 'increase' as const },
  { label: 'Service Revenue', value: 72000, type: 'increase' as const },
  { label: 'Cost of Goods', value: -98000, type: 'decrease' as const },
  { label: 'Salaries', value: -124000, type: 'decrease' as const },
  { label: 'Marketing', value: -34000, type: 'decrease' as const },
  { label: 'Other Income', value: 18000, type: 'increase' as const },
  { label: 'Ending Balance', value: 269000, type: 'total' as const },
];

const meta: Meta<typeof WaterfallChart> = {
  title: 'Charts/WaterfallChart',
  component: WaterfallChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
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
type Story = StoryObj<typeof WaterfallChart>;

export const Default: Story = {
  args: {
    data: defaultData,
    title: 'Cash Flow Waterfall',
    subtitle: 'Q4 2024 — Financial Summary',
    showTooltip: true,
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <WaterfallChart key={v} data={defaultData} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <WaterfallChart data={defaultData} size="sm" title="Small" variant="bordered" />
      <WaterfallChart data={defaultData} size="md" title="Medium" variant="bordered" />
      <WaterfallChart data={defaultData} size="lg" title="Large" variant="bordered" />
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
    data: defaultData,
    variant: 'bordered',
    title: 'Cash Flow Waterfall',
    subtitle: 'Dark Mode Preview',
  },
};

export const PLBridgeAnalysis: Story = {
  name: '💰 P&L Bridge Analysis',
  args: {
    data: [
      { label: 'Revenue', value: 12450000, type: 'total' as const },
      { label: 'COGS', value: -4980000, type: 'decrease' as const },
      { label: 'Gross Profit', value: 7470000, type: 'total' as const },
      { label: 'R&D', value: -1860000, type: 'decrease' as const },
      { label: 'Sales & Marketing', value: -1490000, type: 'decrease' as const },
      { label: 'General & Admin', value: -870000, type: 'decrease' as const },
      { label: 'Other OpEx', value: -420000, type: 'decrease' as const },
      { label: 'EBITDA', value: 2830000, type: 'total' as const },
      { label: 'Depreciation', value: -340000, type: 'decrease' as const },
      { label: 'Interest Expense', value: -185000, type: 'decrease' as const },
      { label: 'Tax Provision', value: -575000, type: 'decrease' as const },
      { label: 'Net Income', value: 1730000, type: 'total' as const },
    ],
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    showTooltip: true,
    title: 'P&L Bridge Analysis',
    subtitle: 'FY 2024 — Income Statement Waterfall ($)',
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
    data: defaultData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showTooltip: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
