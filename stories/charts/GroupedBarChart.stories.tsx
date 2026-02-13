import type { Meta, StoryObj } from '@storybook/react';
import { GroupedBarChart } from '../../components/ui/charts/GroupedBarChart';

const sampleData = [
  { label: 'Q1', values: [42000, 31000] },
  { label: 'Q2', values: [48000, 33000] },
  { label: 'Q3', values: [55000, 38000] },
  { label: 'Q4', values: [61000, 42000] },
];

const sampleSeries = [
  { name: 'Revenue', color: 'var(--color-accent-blue)' },
  { name: 'Expenses', color: 'var(--color-status-warning)' },
];

const meta: Meta<typeof GroupedBarChart> = {
  title: 'Charts/GroupedBarChart',
  component: GroupedBarChart,
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
type Story = StoryObj<typeof GroupedBarChart>;

export const Default: Story = {
  args: { data: sampleData, series: sampleSeries },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <GroupedBarChart data={sampleData} series={sampleSeries} variant="default" title="Default" />
      <GroupedBarChart data={sampleData} series={sampleSeries} variant="glass" title="Glass" />
      <GroupedBarChart data={sampleData} series={sampleSeries} variant="bordered" title="Bordered" />
      <GroupedBarChart data={sampleData} series={sampleSeries} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <GroupedBarChart data={sampleData} series={sampleSeries} size="sm" title="Small" variant="bordered" />
      <GroupedBarChart data={sampleData} series={sampleSeries} size="md" title="Medium" variant="bordered" />
      <GroupedBarChart data={sampleData} series={sampleSeries} size="lg" title="Large" variant="bordered" />
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
    title: 'Revenue vs Expenses',
    subtitle: 'Hover bars for details',
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
    title: 'Revenue vs Expenses',
  },
};

export const MultiTeamComparison: Story = {
  name: '📊 Caso de Uso: Multi-Team Comparison',
  args: {
    data: [
      { label: 'Jan', values: [85, 72, 90] },
      { label: 'Feb', values: [88, 78, 85] },
      { label: 'Mar', values: [92, 80, 88] },
      { label: 'Apr', values: [87, 83, 92] },
    ],
    series: [
      { name: 'Engineering' },
      { name: 'Design' },
      { name: 'Product' },
    ],
    variant: 'glass',
    size: 'lg',
    animated: true,
    showLegend: true,
    showGrid: true,
    showTooltip: true,
    title: 'Team Performance',
    subtitle: 'Scores by Department',
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
