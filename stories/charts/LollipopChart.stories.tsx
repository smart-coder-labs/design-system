import type { Meta, StoryObj } from '@storybook/react';
import { LollipopChart } from '../../components/ui/charts/LollipopChart';

const sampleData = [
  { label: 'Mon', value: 42 },
  { label: 'Tue', value: 58 },
  { label: 'Wed', value: 35 },
  { label: 'Thu', value: 71 },
  { label: 'Fri', value: 63 },
  { label: 'Sat', value: 82 },
  { label: 'Sun', value: 45 },
];

const meta: Meta<typeof LollipopChart> = {
  title: 'Charts/LollipopChart',
  component: LollipopChart,
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
type Story = StoryObj<typeof LollipopChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <LollipopChart data={sampleData} variant="default" title="Default" />
      <LollipopChart data={sampleData} variant="glass" title="Glass" />
      <LollipopChart data={sampleData} variant="bordered" title="Bordered" />
      <LollipopChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <LollipopChart data={sampleData} size="sm" title="Small" variant="bordered" />
      <LollipopChart data={sampleData} size="md" title="Medium" variant="bordered" />
      <LollipopChart data={sampleData} size="lg" title="Large" variant="bordered" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Weekly Activity' },
};

export const WeeklyTraffic: Story = {
  name: '🌐 Caso de Uso: Weekly Traffic',
  args: {
    data: [
      { label: 'Mon', value: 12400 },
      { label: 'Tue', value: 15800 },
      { label: 'Wed', value: 14200 },
      { label: 'Thu', value: 18900 },
      { label: 'Fri', value: 16500 },
      { label: 'Sat', value: 9800 },
      { label: 'Sun', value: 7200 },
    ],
    variant: 'glass', size: 'lg', animated: true, showGrid: true, showTooltip: true,
    title: 'Website Visitors', subtitle: 'This Week',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, size: 'md', variant: 'default', animated: true, interactive: true, showTooltip: true, showGrid: true, showLabels: true, title: 'Playground' },
};
