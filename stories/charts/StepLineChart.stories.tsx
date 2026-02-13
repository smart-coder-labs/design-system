import type { Meta, StoryObj } from '@storybook/react';
import { StepLineChart } from '../../components/ui/charts/StepLineChart';

const sampleData = [
  { label: 'Jan', values: [10, 8] }, { label: 'Feb', values: [10, 12] },
  { label: 'Mar', values: [15, 12] }, { label: 'Apr', values: [15, 18] },
  { label: 'May', values: [20, 18] }, { label: 'Jun', values: [25, 22] },
];
const sampleSeries = [{ name: 'Plan A' }, { name: 'Plan B' }];

const meta: Meta<typeof StepLineChart> = {
  title: 'Charts/StepLineChart',
  component: StepLineChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
    showDots: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof StepLineChart>;

export const Default: Story = { args: { data: sampleData, series: sampleSeries } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <StepLineChart key={v} data={sampleData} series={sampleSeries} variant={v} title={v} showLegend />
      ))}
    </div>
  ),
};
export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, series: sampleSeries, variant: 'bordered', showLegend: true, title: 'Pricing Tiers' },
};
export const PricingChanges: Story = {
  name: '💲 Caso de Uso: Pricing Changes',
  args: {
    data: sampleData, series: sampleSeries,
    variant: 'glass', size: 'lg', showLegend: true, showGrid: true, showTooltip: true, showDots: true,
    title: 'Subscription Pricing', subtitle: 'Step changes over time',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};
export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, series: sampleSeries, size: 'md', variant: 'default', animated: true, showLegend: true, showTooltip: true, showGrid: true, showDots: true, title: 'Playground' },
};
