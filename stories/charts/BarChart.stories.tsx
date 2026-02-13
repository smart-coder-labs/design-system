import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from '../../components/ui/charts/BarChart';

const monthlyRevenueData = [
  { label: 'Jan', value: 124500 },
  { label: 'Feb', value: 138200 },
  { label: 'Mar', value: 152800 },
  { label: 'Apr', value: 147300 },
  { label: 'May', value: 163900 },
  { label: 'Jun', value: 178400 },
  { label: 'Jul', value: 185600 },
  { label: 'Aug', value: 172100 },
  { label: 'Sep', value: 191300 },
  { label: 'Oct', value: 204700 },
  { label: 'Nov', value: 218500 },
  { label: 'Dec', value: 235800 },
];

const meta: Meta<typeof BarChart> = {
  title: 'Charts/BarChart',
  component: BarChart,
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
type Story = StoryObj<typeof BarChart>;

export const Default: Story = {
  args: {
    data: monthlyRevenueData,
    title: 'Monthly Revenue',
    subtitle: 'FY 2024 — All Regions',
    showGrid: true,
    showTooltip: true,
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <BarChart data={monthlyRevenueData} variant="default" title="Default" />
      <BarChart data={monthlyRevenueData} variant="glass" title="Glass" />
      <BarChart data={monthlyRevenueData} variant="bordered" title="Bordered" />
      <BarChart data={monthlyRevenueData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <BarChart data={monthlyRevenueData} size="sm" title="Small" variant="bordered" />
      <BarChart data={monthlyRevenueData} size="md" title="Medium" variant="bordered" />
      <BarChart data={monthlyRevenueData} size="lg" title="Large" variant="bordered" />
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
    variant: 'bordered',
    title: 'Monthly Revenue',
    subtitle: 'Dark Mode Preview',
    showGrid: true,
  },
};

export const ECommerceDashboard: Story = {
  name: '📊 E-Commerce Dashboard',
  args: {
    data: [
      { label: 'Wireless Earbuds', value: 84200, color: '#007AFF' },
      { label: 'Phone Cases', value: 72150, color: '#5856D6' },
      { label: 'USB-C Cables', value: 65800, color: '#34C759' },
      { label: 'Screen Protectors', value: 58400, color: '#FF9500' },
      { label: 'Charging Pads', value: 51200, color: '#FF2D55' },
      { label: 'Laptop Stands', value: 47600, color: '#AF52DE' },
      { label: 'Webcams', value: 43100, color: '#00C7BE' },
      { label: 'Keyboards', value: 38900, color: '#FF6482' },
      { label: 'Mouse Pads', value: 32500, color: '#30B0C7' },
      { label: 'Headphone Stands', value: 28700, color: '#AC8E68' },
      { label: 'Cable Organizers', value: 21300, color: '#8E8E93' },
      { label: 'Monitor Arms', value: 18900, color: '#636366' },
    ],
    variant: 'glass',
    size: 'lg',
    animated: true,
    showGrid: true,
    showTooltip: true,
    title: 'Top Products by Sales',
    subtitle: 'Q4 2024 — Units Sold',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const DepartmentBudget: Story = {
  name: '🏢 Department Budget',
  args: {
    data: [
      { label: 'Engineering', value: 485000, color: '#007AFF' },
      { label: 'Marketing', value: 320000, color: '#FF9500' },
      { label: 'Sales', value: 275000, color: '#34C759' },
      { label: 'Product', value: 210000, color: '#5856D6' },
      { label: 'Operations', value: 185000, color: '#FF2D55' },
      { label: 'HR & People', value: 142000, color: '#AF52DE' },
      { label: 'Finance', value: 98000, color: '#00C7BE' },
      { label: 'Legal', value: 67000, color: '#8E8E93' },
    ],
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    showGrid: true,
    showTooltip: true,
    showLabels: true,
    title: 'Annual Department Budget',
    subtitle: 'FY 2025 Budget Allocation ($)',
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
    data: monthlyRevenueData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showLegend: false,
    showTooltip: true,
    showGrid: true,
    showLabels: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
