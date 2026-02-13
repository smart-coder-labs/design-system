import type { Meta, StoryObj } from '@storybook/react';
import { NestedDonutChart } from '../../components/ui/charts/NestedDonutChart';

const sampleRings = [
  { label: '2024', data: [
    { label: 'Product', value: 45, color: '#007AFF' },
    { label: 'Services', value: 30, color: '#34C759' },
    { label: 'Licensing', value: 25, color: '#FF9500' },
  ]},
  { label: '2023', data: [
    { label: 'Product', value: 38, color: '#007AFF' },
    { label: 'Services', value: 35, color: '#34C759' },
    { label: 'Licensing', value: 27, color: '#FF9500' },
  ]},
];

const meta: Meta<typeof NestedDonutChart> = {
  title: 'Charts/NestedDonutChart',
  component: NestedDonutChart,
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
type Story = StoryObj<typeof NestedDonutChart>;

export const Default: Story = { args: { rings: sampleRings } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <NestedDonutChart rings={sampleRings} variant="default" title="Default" />
      <NestedDonutChart rings={sampleRings} variant="glass" title="Glass" />
      <NestedDonutChart rings={sampleRings} variant="bordered" title="Bordered" />
      <NestedDonutChart rings={sampleRings} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { rings: sampleRings, variant: 'bordered', title: 'Revenue Comparison' },
};

export const QuarterlyComparison: Story = {
  name: '📊 Caso de Uso: Quarterly Comparison',
  args: {
    rings: [
      { label: 'Q4 2024', data: [
        { label: 'Hardware', value: 52, color: '#007AFF' },
        { label: 'Software', value: 28, color: '#5856D6' },
        { label: 'Services', value: 20, color: '#34C759' },
      ]},
      { label: 'Q3 2024', data: [
        { label: 'Hardware', value: 48, color: '#007AFF' },
        { label: 'Software', value: 30, color: '#5856D6' },
        { label: 'Services', value: 22, color: '#34C759' },
      ]},
      { label: 'Q2 2024', data: [
        { label: 'Hardware', value: 44, color: '#007AFF' },
        { label: 'Software', value: 32, color: '#5856D6' },
        { label: 'Services', value: 24, color: '#34C759' },
      ]},
    ],
    variant: 'glass', size: 'lg', animated: true, showLegend: true, showTooltip: true,
    title: 'Revenue by Quarter', subtitle: 'Product mix comparison',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    rings: sampleRings, size: 'md', variant: 'default', animated: true, interactive: true,
    showLegend: true, showTooltip: true, showLabels: true,
    title: 'Playground', subtitle: 'Adjust controls to customize',
  },
};
