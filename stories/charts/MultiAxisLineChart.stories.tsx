import type { Meta, StoryObj } from '@storybook/react';
import { MultiAxisLineChart } from '../../components/ui/charts/MultiAxisLineChart';

const sampleData = [
  { label: 'Jan', values: [4200, 82] }, { label: 'Feb', values: [4800, 78] },
  { label: 'Mar', values: [5500, 85] }, { label: 'Apr', values: [5100, 90] },
  { label: 'May', values: [6300, 88] }, { label: 'Jun', values: [5800, 92] },
];
const sampleSeries = [
  { name: 'Revenue ($)', axis: 'left' as const },
  { name: 'NPS Score', axis: 'right' as const },
];

const meta: Meta<typeof MultiAxisLineChart> = {
  title: 'Charts/MultiAxisLineChart',
  component: MultiAxisLineChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof MultiAxisLineChart>;

export const Default: Story = { args: { data: sampleData, series: sampleSeries } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <MultiAxisLineChart key={v} data={sampleData} series={sampleSeries} variant={v} title={v} showLegend />
      ))}
    </div>
  ),
};
export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, series: sampleSeries, variant: 'bordered', showLegend: true, title: 'Revenue & NPS' },
};
export const RevenueAndSatisfaction: Story = {
  name: '📊 Caso de Uso: Revenue & Satisfaction',
  args: {
    data: sampleData, series: sampleSeries,
    variant: 'glass', size: 'lg', showLegend: true, showGrid: true, showTooltip: true,
    title: 'Revenue vs Customer Satisfaction', subtitle: 'Dual-axis comparison',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};
export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, series: sampleSeries, size: 'md', variant: 'default', animated: true, showLegend: true, showTooltip: true, showGrid: true, title: 'Playground' },
};
