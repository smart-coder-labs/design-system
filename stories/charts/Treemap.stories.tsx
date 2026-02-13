import type { Meta, StoryObj } from '@storybook/react';
import { Treemap } from '../../components/ui/charts/Treemap';

const sampleData = [
  { label: 'Technology', value: 45, color: '#007AFF', children: [
    { label: 'Software', value: 25 },
    { label: 'Hardware', value: 12 },
    { label: 'Services', value: 8 },
  ]},
  { label: 'Healthcare', value: 28, color: '#34C759', children: [
    { label: 'Pharma', value: 15 },
    { label: 'Biotech', value: 13 },
  ]},
  { label: 'Finance', value: 18, color: '#FF9500' },
  { label: 'Energy', value: 9, color: '#FF3B30' },
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
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Treemap>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <Treemap data={sampleData} variant="default" title="Default" />
      <Treemap data={sampleData} variant="glass" title="Glass" />
      <Treemap data={sampleData} variant="bordered" title="Bordered" />
      <Treemap data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Market Sectors' },
};

export const DiskUsage: Story = {
  name: '💾 Caso de Uso: Disk Usage',
  args: {
    data: [
      { label: 'Applications', value: 85, color: '#007AFF', children: [
        { label: 'Xcode', value: 35 },
        { label: 'Docker', value: 28 },
        { label: 'Other Apps', value: 22 },
      ]},
      { label: 'Documents', value: 45, color: '#FF9500', children: [
        { label: 'Projects', value: 25 },
        { label: 'Downloads', value: 20 },
      ]},
      { label: 'System', value: 30, color: '#8E8E93' },
      { label: 'Media', value: 40, color: '#AF52DE', children: [
        { label: 'Photos', value: 22 },
        { label: 'Music', value: 18 },
      ]},
    ],
    variant: 'glass', size: 'lg', animated: true, showLabels: true, showTooltip: true,
    title: 'Storage Breakdown', subtitle: '200 GB used of 512 GB',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: sampleData, size: 'md', variant: 'default', animated: true, interactive: true,
    showLegend: true, showTooltip: true, showLabels: true,
    title: 'Playground', subtitle: 'Adjust controls to customize',
  },
};
