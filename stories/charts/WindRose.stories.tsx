import type { Meta, StoryObj } from '@storybook/react';
import { WindRose } from '../../components/ui/charts/WindRose';

const sampleData = [
  { direction: 'N', values: [30, 20, 10] },
  { direction: 'NE', values: [15, 25, 5] },
  { direction: 'E', values: [40, 15, 20] },
  { direction: 'SE', values: [20, 30, 15] },
  { direction: 'S', values: [25, 10, 30] },
  { direction: 'SW', values: [10, 20, 25] },
  { direction: 'W', values: [35, 25, 10] },
  { direction: 'NW', values: [20, 15, 20] },
];

const sampleSeries = [
  { name: '0-10 km/h', color: '#34C759' },
  { name: '10-20 km/h', color: '#FF9500' },
  { name: '20+ km/h', color: '#FF3B30' },
];

const meta: Meta<typeof WindRose> = {
  title: 'Charts/WindRose',
  component: WindRose,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLegend: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof WindRose>;

export const Default: Story = { args: { data: sampleData, series: sampleSeries } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <WindRose key={v} data={sampleData} series={sampleSeries} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, series: sampleSeries, variant: 'bordered', title: 'Dark Mode' },
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, series: sampleSeries, size: 'md', variant: 'default', animated: true, showLegend: true, title: 'Playground' },
};
