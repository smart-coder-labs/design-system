import type { Meta, StoryObj } from '@storybook/react';
import { FunnelChart } from '../../components/ui/charts/FunnelChart';

const salesFunnelData = [
  { label: 'Website Visitors', value: 48500, color: '#5AC8FA' },
  { label: 'Lead Captured', value: 18200, color: '#007AFF' },
  { label: 'Marketing Qualified', value: 9400, color: '#5856D6' },
  { label: 'Sales Qualified', value: 4800, color: '#AF52DE' },
  { label: 'Proposal Sent', value: 2650, color: '#FF2D55' },
  { label: 'Closed Won', value: 1420, color: '#34C759' },
];

const meta: Meta<typeof FunnelChart> = {
  title: 'Charts/FunnelChart',
  component: FunnelChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLabels: { control: 'boolean' },
    showPercentage: { control: 'boolean' },
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
type Story = StoryObj<typeof FunnelChart>;

export const Default: Story = {
  args: {
    data: salesFunnelData,
    title: 'Sales Pipeline Funnel',
    subtitle: 'Q4 2024 — Lead to Close',
    showTooltip: true,
    showPercentage: true,
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <FunnelChart data={salesFunnelData} variant="default" title="Default" showPercentage />
      <FunnelChart data={salesFunnelData} variant="glass" title="Glass" showPercentage />
      <FunnelChart data={salesFunnelData} variant="bordered" title="Bordered" showPercentage />
      <FunnelChart data={salesFunnelData} variant="elevated" title="Elevated" showPercentage />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <FunnelChart data={salesFunnelData} size="sm" title="Small" variant="bordered" showPercentage />
      <FunnelChart data={salesFunnelData} size="md" title="Medium" variant="bordered" showPercentage />
      <FunnelChart data={salesFunnelData} size="lg" title="Large" variant="bordered" showPercentage />
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
    data: salesFunnelData,
    variant: 'bordered',
    title: 'Sales Pipeline Funnel',
    subtitle: 'Dark Mode Preview',
    showPercentage: true,
  },
};

export const ECommerceConversionFunnel: Story = {
  name: '🛒 E-Commerce Conversion Funnel',
  args: {
    data: [
      { label: 'Site Visitors', value: 1250000, color: '#8E8E93' },
      { label: 'Product Browse', value: 682000, color: '#5AC8FA' },
      { label: 'Add to Cart', value: 243500, color: '#007AFF' },
      { label: 'Begin Checkout', value: 156800, color: '#5856D6' },
      { label: 'Payment Info', value: 118400, color: '#AF52DE' },
      { label: 'Order Confirmed', value: 94200, color: '#FF2D55' },
      { label: 'Shipped', value: 91800, color: '#FF9500' },
      { label: 'Delivered', value: 89500, color: '#34C759' },
    ],
    variant: 'glass',
    size: 'lg',
    animated: true,
    interactive: true,
    showLabels: true,
    showTooltip: true,
    showPercentage: true,
    title: 'E-Commerce Conversion Funnel',
    subtitle: 'November 2024 — 7.2% Overall Conversion Rate',
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
    data: salesFunnelData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showLegend: true,
    showTooltip: true,
    showLabels: true,
    showPercentage: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
