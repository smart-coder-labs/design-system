import type { Meta, StoryObj } from '@storybook/react';
import { RadarChart } from '../../components/ui/charts/RadarChart';

const sampleData = [
  { label: 'Speed', values: [80, 65, 90] },
  { label: 'Strength', values: [70, 85, 60] },
  { label: 'Defense', values: [90, 50, 75] },
  { label: 'Magic', values: [60, 90, 80] },
  { label: 'Stamina', values: [75, 70, 85] },
  { label: 'Agility', values: [85, 60, 70] },
];

const sampleSeries = [
  { name: 'Warrior', color: '#007AFF' },
  { name: 'Mage', color: '#34C759' },
  { name: 'Rogue', color: '#FF9500' },
];

const meta: Meta<typeof RadarChart> = {
  title: 'Charts/RadarChart',
  component: RadarChart,
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
type Story = StoryObj<typeof RadarChart>;

export const Default: Story = { args: { data: sampleData, series: sampleSeries } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <RadarChart key={v} data={sampleData} series={sampleSeries} variant={v} title={v} />
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
