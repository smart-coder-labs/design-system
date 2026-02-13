import type { Meta, StoryObj } from '@storybook/react';
import { AreaChart } from '../../components/ui/charts/AreaChart';

const trafficData = [
  { label: 'Jan', values: [45200, 28100, 18700] },
  { label: 'Feb', values: [48900, 31400, 20300] },
  { label: 'Mar', values: [52100, 33800, 22500] },
  { label: 'Apr', values: [56800, 36200, 24100] },
  { label: 'May', values: [61300, 39500, 26800] },
  { label: 'Jun', values: [58700, 37100, 25200] },
  { label: 'Jul', values: [63200, 41800, 28400] },
  { label: 'Aug', values: [67500, 44200, 30100] },
  { label: 'Sep', values: [72100, 47600, 32800] },
  { label: 'Oct', values: [76800, 50300, 35200] },
  { label: 'Nov', values: [81400, 53700, 37600] },
  { label: 'Dec', values: [85200, 56100, 39800] },
];

const trafficSeries = [
  { name: 'Organic Search', color: '#007AFF' },
  { name: 'Direct Traffic', color: '#34C759' },
  { name: 'Social Media', color: '#FF9500' },
];

const meta: Meta<typeof AreaChart> = {
  title: 'Charts/AreaChart',
  component: AreaChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
    curved: { control: 'boolean' },
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
type Story = StoryObj<typeof AreaChart>;

export const Default: Story = {
  args: {
    data: trafficData,
    series: trafficSeries,
    showLegend: true,
    showGrid: true,
    curved: true,
    title: 'Website Traffic Sources',
    subtitle: 'FY 2024 — Monthly Sessions',
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <AreaChart
          key={v}
          data={trafficData}
          series={trafficSeries}
          variant={v}
          title={v}
          showLegend
          curved
        />
      ))}
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
    data: trafficData,
    series: trafficSeries,
    variant: 'bordered',
    showLegend: true,
    curved: true,
    title: 'Traffic Overview',
    subtitle: 'Dark Mode Preview',
  },
};

export const WebAnalyticsDashboard: Story = {
  name: '🌐 Web Analytics Dashboard',
  args: {
    data: [
      { label: 'Mon', values: [12400, 5800, 4200, 3100] },
      { label: 'Tue', values: [14200, 6300, 4800, 3500] },
      { label: 'Wed', values: [15800, 7100, 5300, 3900] },
      { label: 'Thu', values: [16500, 7600, 5700, 4200] },
      { label: 'Fri', values: [15100, 6900, 5100, 3800] },
      { label: 'Sat', values: [9800, 4200, 6800, 2900] },
      { label: 'Sun', values: [8200, 3500, 7500, 2600] },
    ],
    series: [
      { name: 'Organic', color: '#34C759' },
      { name: 'Paid Ads', color: '#007AFF' },
      { name: 'Social', color: '#FF2D55' },
      { name: 'Direct', color: '#AF52DE' },
    ],
    curved: true,
    showLegend: true,
    showGrid: true,
    showTooltip: true,
    variant: 'glass',
    size: 'lg',
    title: 'Traffic by Acquisition Channel',
    subtitle: 'Last 7 Days — Sessions by Source',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const RevenueStreams: Story = {
  name: '💰 Revenue Streams',
  args: {
    data: [
      { label: 'Jan', values: [89000, 42000, 31000, 18000] },
      { label: 'Feb', values: [95000, 45000, 34000, 21000] },
      { label: 'Mar', values: [102000, 48000, 37000, 23000] },
      { label: 'Apr', values: [98000, 51000, 35000, 25000] },
      { label: 'May', values: [112000, 54000, 39000, 28000] },
      { label: 'Jun', values: [118000, 57000, 42000, 30000] },
      { label: 'Jul', values: [125000, 61000, 45000, 33000] },
      { label: 'Aug', values: [121000, 58000, 43000, 31000] },
      { label: 'Sep', values: [132000, 64000, 48000, 35000] },
      { label: 'Oct', values: [138000, 67000, 51000, 38000] },
      { label: 'Nov', values: [145000, 72000, 55000, 41000] },
      { label: 'Dec', values: [158000, 78000, 62000, 45000] },
    ],
    series: [
      { name: 'SaaS Subscriptions', color: '#007AFF' },
      { name: 'Professional Services', color: '#5856D6' },
      { name: 'Marketplace', color: '#34C759' },
      { name: 'Enterprise Licenses', color: '#FF9500' },
    ],
    curved: true,
    showLegend: true,
    showGrid: true,
    showTooltip: true,
    variant: 'elevated',
    size: 'lg',
    title: 'Revenue by Product Line',
    subtitle: 'FY 2024 — Monthly Breakdown ($)',
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
    data: trafficData,
    series: trafficSeries,
    size: 'md',
    variant: 'default',
    animated: true,
    showLegend: true,
    showTooltip: true,
    showGrid: true,
    curved: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
