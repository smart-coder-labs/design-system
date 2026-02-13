import type { Meta, StoryObj } from '@storybook/react';
import { StackedAreaChart } from '../../components/ui/charts/StackedAreaChart';

const sampleData = [
  { label: 'Jan', values: [30, 20, 10] }, { label: 'Feb', values: [35, 22, 12] },
  { label: 'Mar', values: [40, 25, 15] }, { label: 'Apr', values: [38, 28, 14] },
  { label: 'May', values: [45, 30, 18] }, { label: 'Jun', values: [50, 32, 20] },
];
const sampleSeries = [{ name: 'Organic' }, { name: 'Paid' }, { name: 'Referral' }];

const meta: Meta<typeof StackedAreaChart> = {
  title: 'Charts/StackedAreaChart',
  component: StackedAreaChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
    curved: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof StackedAreaChart>;

export const Default: Story = { args: { data: sampleData, series: sampleSeries } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <StackedAreaChart key={v} data={sampleData} series={sampleSeries} variant={v} title={v} showLegend />
      ))}
    </div>
  ),
};
export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, series: sampleSeries, variant: 'bordered', showLegend: true, title: 'Traffic Sources' },
};
export const TrafficSources: Story = {
  name: '🌐 Caso de Uso: Traffic Sources',
  args: {
    data: sampleData, series: sampleSeries,
    variant: 'glass', size: 'lg', curved: true, showLegend: true, showGrid: true, showTooltip: true,
    title: 'Traffic by Source', subtitle: 'H1 2024',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};
export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, series: sampleSeries, size: 'md', variant: 'default', animated: true, showLegend: true, showTooltip: true, showGrid: true, curved: true, title: 'Playground' },
};
