import type { Meta, StoryObj } from '@storybook/react';
import { AreaChart } from '../../components/ui/charts/AreaChart';

const sampleData = [
  { label: 'Jan', values: [42, 28] }, { label: 'Feb', values: [48, 32] },
  { label: 'Mar', values: [55, 38] }, { label: 'Apr', values: [51, 35] },
  { label: 'May', values: [63, 42] }, { label: 'Jun', values: [58, 45] },
];
const sampleSeries = [{ name: 'Users' }, { name: 'Sessions' }];

const meta: Meta<typeof AreaChart> = {
  title: 'Charts/AreaChart',
  component: AreaChart,
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
type Story = StoryObj<typeof AreaChart>;

export const Default: Story = { args: { data: sampleData, series: sampleSeries } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <AreaChart key={v} data={sampleData} series={sampleSeries} variant={v} title={v} showLegend />
      ))}
    </div>
  ),
};
export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      {(['sm', 'md', 'lg'] as const).map(s => (
        <AreaChart key={s} data={sampleData} series={sampleSeries} size={s} title={s} variant="bordered" />
      ))}
    </div>
  ),
};
export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, series: sampleSeries, variant: 'bordered', showLegend: true, curved: true, title: 'Traffic' },
};
export const WebTraffic: Story = {
  name: '🌐 Caso de Uso: Web Traffic',
  args: {
    data: [
      { label: 'Mon', values: [2400, 1800] }, { label: 'Tue', values: [3100, 2200] },
      { label: 'Wed', values: [2800, 2000] }, { label: 'Thu', values: [3500, 2600] },
      { label: 'Fri', values: [3200, 2400] }, { label: 'Sat', values: [1800, 1200] },
      { label: 'Sun', values: [1500, 1000] },
    ],
    series: [{ name: 'Page Views' }, { name: 'Unique Visitors' }],
    variant: 'glass', size: 'lg', curved: true, showLegend: true, showGrid: true, showTooltip: true,
    title: 'Weekly Traffic', subtitle: 'Page Views & Unique Visitors',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};
export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, series: sampleSeries, size: 'md', variant: 'default', animated: true, showLegend: true, showTooltip: true, showGrid: true, curved: true, title: 'Playground' },
};
