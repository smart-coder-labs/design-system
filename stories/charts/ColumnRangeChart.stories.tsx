import type { Meta, StoryObj } from '@storybook/react';
import { ColumnRangeChart } from '../../components/ui/charts/ColumnRangeChart';

const sampleData = [
  { label: 'Jan', min: 2, max: 15 },
  { label: 'Feb', min: 3, max: 18 },
  { label: 'Mar', min: 8, max: 24 },
  { label: 'Apr', min: 12, max: 28 },
  { label: 'May', min: 16, max: 32 },
  { label: 'Jun', min: 20, max: 35 },
];

const meta: Meta<typeof ColumnRangeChart> = {
  title: 'Charts/ColumnRangeChart',
  component: ColumnRangeChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ColumnRangeChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <ColumnRangeChart data={sampleData} variant="default" title="Default" />
      <ColumnRangeChart data={sampleData} variant="glass" title="Glass" />
      <ColumnRangeChart data={sampleData} variant="bordered" title="Bordered" />
      <ColumnRangeChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <ColumnRangeChart data={sampleData} size="sm" title="Small" variant="bordered" />
      <ColumnRangeChart data={sampleData} size="md" title="Medium" variant="bordered" />
      <ColumnRangeChart data={sampleData} size="lg" title="Large" variant="bordered" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Temperature Range' },
};

export const TemperatureRange: Story = {
  name: '🌡️ Caso de Uso: Temperature Range',
  args: {
    data: [
      { label: 'Jan', min: -5, max: 8 },
      { label: 'Feb', min: -3, max: 10 },
      { label: 'Mar', min: 2, max: 16 },
      { label: 'Apr', min: 6, max: 21 },
      { label: 'May', min: 11, max: 26 },
      { label: 'Jun', min: 16, max: 32 },
      { label: 'Jul', min: 19, max: 35 },
      { label: 'Aug', min: 18, max: 34 },
      { label: 'Sep', min: 14, max: 28 },
      { label: 'Oct', min: 8, max: 20 },
      { label: 'Nov', min: 2, max: 13 },
      { label: 'Dec', min: -2, max: 7 },
    ],
    variant: 'glass', size: 'lg', animated: true, showGrid: true, showTooltip: true,
    title: 'Monthly Temperature Range', subtitle: 'Min/Max °C',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, size: 'md', variant: 'default', animated: true, interactive: true, showTooltip: true, showGrid: true, showLabels: true, title: 'Playground' },
};
