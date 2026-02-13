import type { Meta, StoryObj } from '@storybook/react';
import { MarimekkoChart } from '../../components/ui/charts/MarimekkoChart';

const sampleData = [
  { label: 'North America', width: 40, segments: [
    { label: 'Product A', value: 55, color: '#007AFF' },
    { label: 'Product B', value: 30, color: '#5856D6' },
    { label: 'Product C', value: 15, color: '#AF52DE' },
  ]},
  { label: 'Europe', width: 30, segments: [
    { label: 'Product A', value: 35, color: '#007AFF' },
    { label: 'Product B', value: 40, color: '#5856D6' },
    { label: 'Product C', value: 25, color: '#AF52DE' },
  ]},
  { label: 'Asia Pacific', width: 20, segments: [
    { label: 'Product A', value: 45, color: '#007AFF' },
    { label: 'Product B', value: 25, color: '#5856D6' },
    { label: 'Product C', value: 30, color: '#AF52DE' },
  ]},
  { label: 'Latin America', width: 10, segments: [
    { label: 'Product A', value: 50, color: '#007AFF' },
    { label: 'Product B', value: 35, color: '#5856D6' },
    { label: 'Product C', value: 15, color: '#AF52DE' },
  ]},
];

const meta: Meta<typeof MarimekkoChart> = {
  title: 'Charts/MarimekkoChart',
  component: MarimekkoChart,
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
type Story = StoryObj<typeof MarimekkoChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <MarimekkoChart data={sampleData} variant="default" title="Default" />
      <MarimekkoChart data={sampleData} variant="glass" title="Glass" />
      <MarimekkoChart data={sampleData} variant="bordered" title="Bordered" />
      <MarimekkoChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Regional Product Mix' },
};

export const MarketAnalysis: Story = {
  name: '🌍 Caso de Uso: Market Analysis',
  args: {
    data: [
      { label: 'Enterprise', width: 45, segments: [
        { label: 'SaaS', value: 60, color: '#007AFF' },
        { label: 'On-Prem', value: 25, color: '#34C759' },
        { label: 'Hybrid', value: 15, color: '#FF9500' },
      ]},
      { label: 'Mid-Market', width: 30, segments: [
        { label: 'SaaS', value: 75, color: '#007AFF' },
        { label: 'On-Prem', value: 10, color: '#34C759' },
        { label: 'Hybrid', value: 15, color: '#FF9500' },
      ]},
      { label: 'SMB', width: 25, segments: [
        { label: 'SaaS', value: 90, color: '#007AFF' },
        { label: 'On-Prem', value: 5, color: '#34C759' },
        { label: 'Hybrid', value: 5, color: '#FF9500' },
      ]},
    ],
    variant: 'glass', size: 'lg', animated: true, showLegend: true, showTooltip: true, showLabels: true,
    title: 'Deployment by Segment', subtitle: 'Revenue share across customer tiers',
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
