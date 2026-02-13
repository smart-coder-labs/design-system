import type { Meta, StoryObj } from '@storybook/react';
import { StackedBarChart } from '../../components/ui/charts/StackedBarChart';

const monthlyRevenueData = [
  { label: 'Jan', values: [182000, 94500, 61200, 38700] },
  { label: 'Feb', values: [195400, 101200, 67800, 41300] },
  { label: 'Mar', values: [214800, 108900, 72400, 44800] },
  { label: 'Apr', values: [203600, 112400, 68900, 46200] },
  { label: 'May', values: [228100, 119800, 75600, 49100] },
  { label: 'Jun', values: [241500, 126300, 81200, 52400] },
  { label: 'Jul', values: [256200, 131700, 86800, 55900] },
  { label: 'Aug', values: [247800, 128400, 83100, 53600] },
  { label: 'Sep', values: [263400, 135200, 89400, 57800] },
  { label: 'Oct', values: [278900, 142100, 94700, 61200] },
  { label: 'Nov', values: [295600, 148900, 99200, 64500] },
  { label: 'Dec', values: [312400, 156800, 105800, 68300] },
];

const revenueSeries = [
  { name: 'Product Sales', color: '#007AFF' },
  { name: 'Subscriptions', color: '#5856D6' },
  { name: 'Professional Services', color: '#34C759' },
  { name: 'Licensing Fees', color: '#FF9500' },
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
      <div className="w-full max-w-3xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof StackedBarChart>;

export const Default: Story = {
  args: {
    data: monthlyRevenueData,
    series: revenueSeries,
    title: 'Monthly Revenue by Stream',
    subtitle: 'FY 2024 — All Business Units',
    showGrid: true,
    showTooltip: true,
    showLegend: true,
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <StackedBarChart data={monthlyRevenueData} series={revenueSeries} variant="default" title="Default" showLegend />
      <StackedBarChart data={monthlyRevenueData} series={revenueSeries} variant="glass" title="Glass" showLegend />
      <StackedBarChart data={monthlyRevenueData} series={revenueSeries} variant="bordered" title="Bordered" showLegend />
      <StackedBarChart data={monthlyRevenueData} series={revenueSeries} variant="elevated" title="Elevated" showLegend />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <StackedBarChart data={monthlyRevenueData} series={revenueSeries} size="sm" title="Small" variant="bordered" showLegend />
      <StackedBarChart data={monthlyRevenueData} series={revenueSeries} size="md" title="Medium" variant="bordered" showLegend />
      <StackedBarChart data={monthlyRevenueData} series={revenueSeries} size="lg" title="Large" variant="bordered" showLegend />
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
    data: monthlyRevenueData,
    series: revenueSeries,
    variant: 'bordered',
    title: 'Monthly Revenue by Stream',
    subtitle: 'Dark Mode Preview',
    showGrid: true,
    showLegend: true,
  },
};

export const QuarterlyRevenueByRegion: Story = {
  name: '📊 Quarterly Revenue by Region',
  args: {
    data: [
      { label: 'Q1 2024', values: [4250000, 3180000, 2740000, 1120000, 680000] },
      { label: 'Q2 2024', values: [4620000, 3410000, 3050000, 1280000, 745000] },
      { label: 'Q3 2024', values: [4890000, 3590000, 3380000, 1410000, 812000] },
      { label: 'Q4 2024', values: [5340000, 3820000, 3710000, 1560000, 895000] },
    ],
    series: [
      { name: 'North America', color: '#007AFF' },
      { name: 'Europe', color: '#5856D6' },
      { name: 'Asia-Pacific', color: '#34C759' },
      { name: 'Latin America', color: '#FF9500' },
      { name: 'Middle East & Africa', color: '#FF2D55' },
    ],
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    showGrid: true,
    showTooltip: true,
    showLegend: true,
    showLabels: true,
    title: 'Quarterly Revenue by Region',
    subtitle: 'FY 2024 — Global Operations ($)',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: monthlyRevenueData,
    series: revenueSeries,
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
