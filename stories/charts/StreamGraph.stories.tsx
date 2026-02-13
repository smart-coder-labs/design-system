import type { Meta, StoryObj } from '@storybook/react';
import { StreamGraph } from '../../components/ui/charts/StreamGraph';

const sampleData = [
  { label: 'Jan', values: [30, 20, 15] }, { label: 'Feb', values: [35, 25, 18] },
  { label: 'Mar', values: [28, 30, 22] }, { label: 'Apr', values: [40, 22, 20] },
  { label: 'May', values: [45, 28, 25] }, { label: 'Jun', values: [38, 35, 28] },
];
const sampleSeries = [{ name: 'Music' }, { name: 'Video' }, { name: 'Podcasts' }];

const meta: Meta<typeof StreamGraph> = {
  title: 'Charts/StreamGraph',
  component: StreamGraph,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof StreamGraph>;

export const Default: Story = { args: { data: sampleData, series: sampleSeries } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <StreamGraph key={v} data={sampleData} series={sampleSeries} variant={v} title={v} showLegend />
      ))}
    </div>
  ),
};
export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, series: sampleSeries, variant: 'bordered', showLegend: true, title: 'Content Streams' },
};
export const MediaConsumption: Story = {
  name: '🎬 Caso de Uso: Media Consumption',
  args: {
    data: sampleData, series: sampleSeries,
    variant: 'glass', size: 'lg', showLegend: true, showTooltip: true,
    title: 'Media Consumption', subtitle: 'Stream visualization by category',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};
export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, series: sampleSeries, size: 'md', variant: 'default', animated: true, showLegend: true, showTooltip: true, title: 'Playground' },
};
