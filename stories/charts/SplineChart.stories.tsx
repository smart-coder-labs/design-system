import type { Meta, StoryObj } from '@storybook/react';
import { SplineChart } from '../../components/ui/charts/SplineChart';

const sampleData = [
  { label: 'Jan', values: [42, 28] }, { label: 'Feb', values: [48, 35] },
  { label: 'Mar', values: [55, 32] }, { label: 'Apr', values: [51, 40] },
  { label: 'May', values: [63, 45] }, { label: 'Jun', values: [58, 50] },
];
const sampleSeries = [{ name: 'Temperature' }, { name: 'Humidity' }];

const meta: Meta<typeof SplineChart> = {
  title: 'Charts/SplineChart',
  component: SplineChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
    showDots: { control: 'boolean' },
    tension: { control: { type: 'range', min: 0.1, max: 2, step: 0.1 } },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof SplineChart>;

export const Default: Story = { args: { data: sampleData, series: sampleSeries } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <SplineChart key={v} data={sampleData} series={sampleSeries} variant={v} title={v} showLegend />
      ))}
    </div>
  ),
};
export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, series: sampleSeries, variant: 'bordered', showLegend: true, title: 'Climate Data' },
};
export const SensorData: Story = {
  name: '🌡️ Caso de Uso: Sensor Data',
  args: {
    data: sampleData, series: sampleSeries,
    variant: 'glass', size: 'lg', showLegend: true, showGrid: true, showTooltip: true, showDots: true, tension: 0.5,
    title: 'Environmental Sensors', subtitle: 'Smooth Catmull-Rom interpolation',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};
export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, series: sampleSeries, size: 'md', variant: 'default', animated: true, showLegend: true, showTooltip: true, showGrid: true, showDots: true, tension: 0.5, title: 'Playground' },
};
