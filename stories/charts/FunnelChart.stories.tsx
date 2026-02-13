import type { Meta, StoryObj } from '@storybook/react';
import { FunnelChart } from '../../components/ui/charts/FunnelChart';

const sampleData = [
  { label: 'Visitors', value: 12000, color: '#007AFF' },
  { label: 'Sign Ups', value: 5200, color: '#5856D6' },
  { label: 'Activated', value: 3100, color: '#AF52DE' },
  { label: 'Subscribed', value: 1400, color: '#FF2D55' },
  { label: 'Retained', value: 980, color: '#FF9500' },
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
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof FunnelChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <FunnelChart data={sampleData} variant="default" title="Default" />
      <FunnelChart data={sampleData} variant="glass" title="Glass" />
      <FunnelChart data={sampleData} variant="bordered" title="Bordered" />
      <FunnelChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Conversion Funnel', showPercentage: true },
};

export const SalesPipeline: Story = {
  name: '📈 Caso de Uso: Sales Pipeline',
  args: {
    data: [
      { label: 'Leads', value: 2400, color: '#5AC8FA' },
      { label: 'Qualified', value: 1350, color: '#007AFF' },
      { label: 'Proposal', value: 720, color: '#5856D6' },
      { label: 'Negotiation', value: 340, color: '#AF52DE' },
      { label: 'Closed Won', value: 180, color: '#34C759' },
    ],
    variant: 'glass', size: 'lg', animated: true, showPercentage: true,
    showLabels: true, showTooltip: true,
    title: 'Sales Pipeline', subtitle: 'Q4 2024 — 7.5% Conversion',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: sampleData, size: 'md', variant: 'default', animated: true, interactive: true,
    showLegend: true, showTooltip: true, showLabels: true, showPercentage: true,
    title: 'Playground', subtitle: 'Adjust controls to customize',
  },
};
