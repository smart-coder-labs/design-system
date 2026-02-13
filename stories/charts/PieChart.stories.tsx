import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from '../../components/ui/charts/PieChart';

const marketSegmentData = [
  { label: 'Enterprise SaaS', value: 28.5, color: '#007AFF' },
  { label: 'Cloud Infrastructure', value: 22.3, color: '#5856D6' },
  { label: 'Cybersecurity', value: 15.8, color: '#34C759' },
  { label: 'Data Analytics', value: 12.1, color: '#FF9500' },
  { label: 'AI & Machine Learning', value: 8.7, color: '#FF2D55' },
  { label: 'DevOps Tools', value: 5.4, color: '#AF52DE' },
  { label: 'IoT Platforms', value: 4.2, color: '#00C7BE' },
  { label: 'Other', value: 3.0, color: '#8E8E93' },
];

const meta: Meta<typeof PieChart> = {
  title: 'Charts/PieChart',
  component: PieChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
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
type Story = StoryObj<typeof PieChart>;

export const Default: Story = {
  args: {
    data: marketSegmentData,
    showLegend: true,
    showTooltip: true,
    title: 'B2B Tech Market Segments',
    subtitle: '2024 Revenue Distribution (%)',
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <PieChart data={marketSegmentData} variant="default" title="Default" showLegend />
      <PieChart data={marketSegmentData} variant="glass" title="Glass" showLegend />
      <PieChart data={marketSegmentData} variant="bordered" title="Bordered" showLegend />
      <PieChart data={marketSegmentData} variant="elevated" title="Elevated" showLegend />
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
    data: marketSegmentData,
    variant: 'bordered',
    showLegend: true,
    title: 'Market Segments',
    subtitle: 'Dark Mode Preview',
  },
};

export const MarketShareAnalysis: Story = {
  name: '🌍 Market Share Analysis',
  args: {
    data: [
      { label: 'Microsoft', value: 21.8, color: '#00A4EF' },
      { label: 'Amazon (AWS)', value: 18.5, color: '#FF9900' },
      { label: 'Google Cloud', value: 12.3, color: '#4285F4' },
      { label: 'Salesforce', value: 8.9, color: '#00A1E0' },
      { label: 'Oracle', value: 7.2, color: '#F80000' },
      { label: 'SAP', value: 6.5, color: '#0FAAFF' },
      { label: 'IBM', value: 5.1, color: '#054ADA' },
      { label: 'Adobe', value: 4.8, color: '#FF0000' },
      { label: 'ServiceNow', value: 3.6, color: '#81B5A1' },
      { label: 'Others', value: 11.3, color: '#8E8E93' },
    ],
    showLegend: true,
    showTooltip: true,
    showLabels: true,
    variant: 'glass',
    size: 'lg',
    animated: true,
    title: 'Enterprise Cloud Market Share',
    subtitle: '2024 Global Revenue Share (%)',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const MobileOSDistribution: Story = {
  name: '📱 Mobile OS Distribution',
  args: {
    data: [
      { label: 'Android', value: 71.8, color: '#3DDC84' },
      { label: 'iOS', value: 27.3, color: '#007AFF' },
      { label: 'HarmonyOS', value: 0.4, color: '#C10015' },
      { label: 'KaiOS', value: 0.2, color: '#6F02B5' },
      { label: 'Samsung (Tizen)', value: 0.15, color: '#034EA2' },
      { label: 'Other', value: 0.15, color: '#8E8E93' },
    ],
    showLegend: true,
    showTooltip: true,
    showLabels: true,
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    title: 'Mobile OS Market Share',
    subtitle: 'Global Distribution — Q4 2024 (%)',
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
    data: marketSegmentData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showLegend: true,
    showTooltip: true,
    showLabels: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
