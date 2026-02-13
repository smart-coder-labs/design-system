import type { Meta, StoryObj } from '@storybook/react';
import { GroupedBarChart } from '../../components/ui/charts/GroupedBarChart';

const monthlyProductData = [
  { label: 'Jan', values: [84200, 62100, 47800] },
  { label: 'Feb', values: [91500, 68400, 51200] },
  { label: 'Mar', values: [97800, 72900, 55600] },
  { label: 'Apr', values: [93200, 69800, 53100] },
  { label: 'May', values: [102400, 76500, 58900] },
  { label: 'Jun', values: [108900, 81200, 62400] },
];

const productSeries = [
  { name: 'Enterprise Suite', color: '#007AFF' },
  { name: 'Cloud Platform', color: '#34C759' },
  { name: 'Developer Tools', color: '#FF9500' },
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
      <div className="w-full max-w-3xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GroupedBarChart>;

export const Default: Story = {
  args: {
    data: monthlyProductData,
    series: productSeries,
    title: 'Product Line Performance',
    subtitle: 'H1 2024 — Monthly Revenue ($)',
    showGrid: true,
    showTooltip: true,
    showLegend: true,
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <GroupedBarChart data={monthlyProductData} series={productSeries} variant="default" title="Default" showLegend />
      <GroupedBarChart data={monthlyProductData} series={productSeries} variant="glass" title="Glass" showLegend />
      <GroupedBarChart data={monthlyProductData} series={productSeries} variant="bordered" title="Bordered" showLegend />
      <GroupedBarChart data={monthlyProductData} series={productSeries} variant="elevated" title="Elevated" showLegend />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <GroupedBarChart data={monthlyProductData} series={productSeries} size="sm" title="Small" variant="bordered" showLegend />
      <GroupedBarChart data={monthlyProductData} series={productSeries} size="md" title="Medium" variant="bordered" showLegend />
      <GroupedBarChart data={monthlyProductData} series={productSeries} size="lg" title="Large" variant="bordered" showLegend />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [
    (Story) => (
      <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
  args: {
    data: monthlyProductData,
    series: productSeries,
    variant: 'bordered',
    title: 'Product Line Performance',
    subtitle: 'Dark Mode Preview',
    showGrid: true,
    showLegend: true,
  },
};

export const DepartmentPerformance: Story = {
  name: '🏢 Department Performance Comparison',
  args: {
    data: [
      { label: 'Q1 2024', values: [87, 72, 91, 68, 83, 76] },
      { label: 'Q2 2024', values: [89, 78, 88, 74, 85, 79] },
      { label: 'Q3 2024', values: [92, 81, 85, 79, 88, 82] },
      { label: 'Q4 2024', values: [94, 84, 93, 82, 91, 85] },
    ],
    series: [
      { name: 'Engineering', color: '#007AFF' },
      { name: 'Marketing', color: '#FF9500' },
      { name: 'Sales', color: '#34C759' },
      { name: 'Customer Success', color: '#5856D6' },
      { name: 'Product', color: '#FF2D55' },
      { name: 'Operations', color: '#00C7BE' },
    ],
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    showGrid: true,
    showTooltip: true,
    showLegend: true,
    showLabels: true,
    title: 'Department Performance Comparison',
    subtitle: 'FY 2024 — KPI Score (0–100)',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: monthlyProductData,
    series: productSeries,
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
