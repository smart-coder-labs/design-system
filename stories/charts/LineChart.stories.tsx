import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from '../../components/ui/charts/LineChart';

const sampleData = [
  { label: 'Jan', values: [42, 35] },
  { label: 'Feb', values: [48, 38] },
  { label: 'Mar', values: [55, 42] },
  { label: 'Apr', values: [51, 45] },
  { label: 'May', values: [63, 48] },
  { label: 'Jun', values: [58, 52] },
];
const sampleSeries = [{ name: 'Revenue' }, { name: 'Costs' }];

const meta: Meta<typeof LineChart> = {
  title: 'Charts/LineChart',
  component: LineChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
    showDots: { control: 'boolean' },
    curved: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof LineChart>;

export const Default: Story = { args: { data: sampleData, series: sampleSeries } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <LineChart key={v} data={sampleData} series={sampleSeries} variant={v} title={v} showLegend />
      ))}
    </div>
  ),
};
export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      {(['sm', 'md', 'lg'] as const).map(s => (
        <LineChart key={s} data={sampleData} series={sampleSeries} size={s} title={s} variant="bordered" />
      ))}
    </div>
  ),
};
export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, series: sampleSeries, variant: 'bordered', showLegend: true, title: 'Revenue Trend' },
};
export const SalesAnalytics: Story = {
  name: '📈 Caso de Uso: Sales Analytics',
  args: {
    data: [
      { label: 'Jan', values: [120, 95, 80] }, { label: 'Feb', values: [135, 105, 88] },
      { label: 'Mar', values: [148, 110, 92] }, { label: 'Apr', values: [142, 115, 98] },
      { label: 'May', values: [165, 125, 105] }, { label: 'Jun', values: [178, 130, 112] },
    ],
    series: [{ name: 'Online' }, { name: 'Retail' }, { name: 'Wholesale' }],
    variant: 'glass', size: 'lg', curved: true, showLegend: true, showGrid: true, showTooltip: true, showDots: true,
    title: 'Sales by Channel', subtitle: 'H1 2024 ($K)',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};
export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, series: sampleSeries, size: 'md', variant: 'default', animated: true, interactive: true, showLegend: true, showTooltip: true, showGrid: true, showDots: true, curved: false, title: 'Playground' },
};
