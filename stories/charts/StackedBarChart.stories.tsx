import type { Meta, StoryObj } from '@storybook/react';
import { StackedBarChart } from '../../components/ui/charts/StackedBarChart';

const sampleData = [
  { label: 'Q1', values: [42000, 18000, 8000] },
  { label: 'Q2', values: [48000, 21000, 9500] },
  { label: 'Q3', values: [55000, 24000, 11000] },
  { label: 'Q4', values: [61000, 28000, 12500] },
];

const sampleSeries = [
  { name: 'Products' },
  { name: 'Services' },
  { name: 'Subscriptions' },
];

const meta: Meta<typeof StackedBarChart> = {
  title: 'Charts/StackedBarChart',
  component: StackedBarChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StackedBarChart>;

export const Default: Story = {
  args: { data: sampleData, series: sampleSeries },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <StackedBarChart data={sampleData} series={sampleSeries} variant="default" title="Default" />
      <StackedBarChart data={sampleData} series={sampleSeries} variant="glass" title="Glass" />
      <StackedBarChart data={sampleData} series={sampleSeries} variant="bordered" title="Bordered" />
      <StackedBarChart data={sampleData} series={sampleSeries} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <StackedBarChart data={sampleData} series={sampleSeries} size="sm" title="Small" variant="bordered" />
      <StackedBarChart data={sampleData} series={sampleSeries} size="md" title="Medium" variant="bordered" />
      <StackedBarChart data={sampleData} series={sampleSeries} size="lg" title="Large" variant="bordered" />
    </div>
  ),
};

export const Interactive: Story = {
  name: '🖱 Interactive',
  args: {
    data: sampleData,
    series: sampleSeries,
    interactive: true,
    showTooltip: true,
    showLegend: true,
    variant: 'bordered',
    title: 'Revenue Breakdown',
    subtitle: 'Hover segments for details',
  },
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [
    (Story) => (
      <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
  args: {
    data: sampleData,
    series: sampleSeries,
    showLegend: true,
    variant: 'bordered',
    title: 'Revenue Breakdown',
  },
};

export const RevenueComposition: Story = {
  name: '💰 Caso de Uso: Revenue Composition',
  args: {
    data: [
      { label: 'Jan', values: [32000, 15000, 6000] },
      { label: 'Feb', values: [35000, 17000, 7000] },
      { label: 'Mar', values: [38000, 19000, 8000] },
      { label: 'Apr', values: [41000, 21000, 9000] },
      { label: 'May', values: [44000, 23000, 10000] },
      { label: 'Jun', values: [48000, 25000, 11000] },
    ],
    series: [
      { name: 'Products' },
      { name: 'Services' },
      { name: 'Subscriptions' },
    ],
    variant: 'glass',
    size: 'lg',
    animated: true,
    showLegend: true,
    showGrid: true,
    showTooltip: true,
    title: 'Revenue Composition',
    subtitle: 'H1 2024 Breakdown',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: sampleData,
    series: sampleSeries,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showLegend: true,
    showTooltip: true,
    showGrid: true,
    showLabels: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
