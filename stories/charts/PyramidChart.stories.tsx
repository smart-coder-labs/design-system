import type { Meta, StoryObj } from '@storybook/react';
import { PyramidChart } from '../../components/ui/charts/PyramidChart';

const sampleData = [
  { label: 'Physiological', value: 40, color: '#34C759' },
  { label: 'Safety', value: 30, color: '#007AFF' },
  { label: 'Belonging', value: 18, color: '#FF9500' },
  { label: 'Esteem', value: 8, color: '#AF52DE' },
  { label: 'Self-Actualization', value: 4, color: '#FF2D55' },
];

const meta: Meta<typeof PyramidChart> = {
  title: 'Charts/PyramidChart',
  component: PyramidChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof PyramidChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <PyramidChart data={sampleData} variant="default" title="Default" />
      <PyramidChart data={sampleData} variant="glass" title="Glass" />
      <PyramidChart data={sampleData} variant="bordered" title="Bordered" />
      <PyramidChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Maslow\'s Hierarchy' },
};

export const CustomerSegments: Story = {
  name: '👥 Caso de Uso: Customer Segments',
  args: {
    data: [
      { label: 'Free Users', value: 50000, color: '#8E8E93' },
      { label: 'Basic Plan', value: 12000, color: '#5AC8FA' },
      { label: 'Pro Plan', value: 4500, color: '#007AFF' },
      { label: 'Enterprise', value: 800, color: '#5856D6' },
      { label: 'VIP', value: 120, color: '#AF52DE' },
    ],
    variant: 'glass', size: 'lg', animated: true,
    showLabels: true, showTooltip: true, showLegend: true,
    title: 'Customer Tiers', subtitle: '67,420 Total Users',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: sampleData, size: 'md', variant: 'default', animated: true, interactive: true,
    showLegend: true, showTooltip: true, showLabels: true,
    title: 'Playground', subtitle: 'Adjust controls to customize',
  },
};
