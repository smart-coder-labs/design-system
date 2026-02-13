import type { Meta, StoryObj } from '@storybook/react';
import { Treemap } from '../../components/ui/charts/Treemap';

const marketSectorData = [
  { label: 'Technology', value: 48, color: '#007AFF', children: [
    { label: 'Software', value: 22 },
    { label: 'Hardware', value: 14 },
    { label: 'Cloud Services', value: 8 },
    { label: 'Semiconductors', value: 4 },
  ]},
  { label: 'Healthcare', value: 32, color: '#34C759', children: [
    { label: 'Pharmaceuticals', value: 16 },
    { label: 'Biotech', value: 10 },
    { label: 'Medical Devices', value: 6 },
  ]},
  { label: 'Finance', value: 24, color: '#FF9500', children: [
    { label: 'Banking', value: 12 },
    { label: 'Insurance', value: 7 },
    { label: 'Fintech', value: 5 },
  ]},
  { label: 'Consumer', value: 18, color: '#5856D6', children: [
    { label: 'Retail', value: 10 },
    { label: 'E-Commerce', value: 8 },
  ]},
  { label: 'Energy', value: 14, color: '#FF2D55', children: [
    { label: 'Renewables', value: 8 },
    { label: 'Oil & Gas', value: 6 },
  ]},
  { label: 'Industrials', value: 10, color: '#AF52DE' },
];

const meta: Meta<typeof Treemap> = {
  title: 'Charts/Treemap',
  component: Treemap,
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
type Story = StoryObj<typeof Treemap>;

export const Default: Story = {
  args: {
    data: marketSectorData,
    title: 'Market Sector Allocation',
    subtitle: 'Portfolio Breakdown by Industry',
    showTooltip: true,
    showLabels: true,
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <Treemap data={marketSectorData} variant="default" title="Default" showLabels />
      <Treemap data={marketSectorData} variant="glass" title="Glass" showLabels />
      <Treemap data={marketSectorData} variant="bordered" title="Bordered" showLabels />
      <Treemap data={marketSectorData} variant="elevated" title="Elevated" showLabels />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <Treemap data={marketSectorData} size="sm" title="Small" variant="bordered" showLabels />
      <Treemap data={marketSectorData} size="md" title="Medium" variant="bordered" showLabels />
      <Treemap data={marketSectorData} size="lg" title="Large" variant="bordered" showLabels />
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
    data: marketSectorData,
    variant: 'bordered',
    title: 'Market Sector Allocation',
    subtitle: 'Dark Mode Preview',
    showLabels: true,
  },
};

export const DiskSpaceAnalysis: Story = {
  name: '📁 Disk Space Analysis',
  args: {
    data: [
      { label: 'Applications', value: 94.2, color: '#007AFF', children: [
        { label: 'Xcode', value: 36.8 },
        { label: 'Docker', value: 24.1 },
        { label: 'VS Code', value: 12.4 },
        { label: 'Figma', value: 8.6 },
        { label: 'Other Apps', value: 12.3 },
      ]},
      { label: 'Developer', value: 78.5, color: '#5856D6', children: [
        { label: 'node_modules', value: 32.4 },
        { label: 'Git Repos', value: 22.8 },
        { label: '.cache', value: 14.1 },
        { label: 'Virtual Envs', value: 9.2 },
      ]},
      { label: 'Media', value: 62.3, color: '#FF9500', children: [
        { label: 'Photos Library', value: 28.7 },
        { label: 'Music', value: 18.4 },
        { label: 'Videos', value: 15.2 },
      ]},
      { label: 'Documents', value: 45.8, color: '#34C759', children: [
        { label: 'Projects', value: 18.6 },
        { label: 'Downloads', value: 14.2 },
        { label: 'Archives', value: 8.4 },
        { label: 'Exports', value: 4.6 },
      ]},
      { label: 'System', value: 38.4, color: '#8E8E93', children: [
        { label: 'macOS', value: 15.2 },
        { label: 'System Data', value: 12.8 },
        { label: 'Logs', value: 10.4 },
      ]},
      { label: 'Mail & Messages', value: 24.6, color: '#FF2D55', children: [
        { label: 'Mail Attachments', value: 14.2 },
        { label: 'Messages', value: 6.8 },
        { label: 'Calendars', value: 3.6 },
      ]},
      { label: 'Cloud Storage', value: 18.9, color: '#5AC8FA', children: [
        { label: 'iCloud Drive', value: 10.4 },
        { label: 'Dropbox Cache', value: 5.2 },
        { label: 'Google Drive', value: 3.3 },
      ]},
      { label: 'Miscellaneous', value: 12.3, color: '#AF52DE', children: [
        { label: 'Fonts', value: 4.8 },
        { label: 'Plugins', value: 3.6 },
        { label: 'Temp Files', value: 3.9 },
      ]},
    ],
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    showLabels: true,
    showTooltip: true,
    title: 'Disk Space Analysis',
    subtitle: '375 GB used of 512 GB — MacBook Pro (M3)',
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
    data: marketSectorData,
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
