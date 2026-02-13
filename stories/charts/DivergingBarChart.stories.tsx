import type { Meta, StoryObj } from '@storybook/react';
import { DivergingBarChart } from '../../components/ui/charts/DivergingBarChart';

const sampleData = [
  { label: 'Product A', value: 45 },
  { label: 'Product B', value: -23 },
  { label: 'Product C', value: 67 },
  { label: 'Product D', value: -12 },
  { label: 'Product E', value: 34 },
  { label: 'Product F', value: -38 },
  { label: 'Product G', value: 51 },
];

const meta: Meta<typeof DivergingBarChart> = {
  title: 'Charts/DivergingBarChart',
  component: DivergingBarChart,
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
type Story = StoryObj<typeof DivergingBarChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <DivergingBarChart data={sampleData} variant="default" title="Default" />
      <DivergingBarChart data={sampleData} variant="glass" title="Glass" />
      <DivergingBarChart data={sampleData} variant="bordered" title="Bordered" />
      <DivergingBarChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <DivergingBarChart data={sampleData} size="sm" title="Small" variant="bordered" />
      <DivergingBarChart data={sampleData} size="md" title="Medium" variant="bordered" />
      <DivergingBarChart data={sampleData} size="lg" title="Large" variant="bordered" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Profit & Loss' },
};

export const SentimentAnalysis: Story = {
  name: '💬 Caso de Uso: Sentiment Analysis',
  args: {
    data: [
      { label: 'Feature A', value: 72 },
      { label: 'Feature B', value: -15 },
      { label: 'Feature C', value: 48 },
      { label: 'Feature D', value: -32 },
      { label: 'Feature E', value: 85 },
      { label: 'Feature F', value: -8 },
    ],
    variant: 'glass', size: 'lg', animated: true, showGrid: true, showTooltip: true,
    title: 'Customer Sentiment', subtitle: 'Net Promoter Score by Feature',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, size: 'md', variant: 'default', animated: true, interactive: true, showTooltip: true, showGrid: true, showLabels: true, title: 'Playground' },
};
