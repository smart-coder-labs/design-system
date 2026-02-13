import type { Meta, StoryObj } from '@storybook/react';
import { DonutChart } from '../../components/ui/charts/DonutChart';

const sampleData = [
  { label: 'Stocks', value: 55, color: '#007AFF' },
  { label: 'Bonds', value: 25, color: '#34C759' },
  { label: 'Real Estate', value: 12, color: '#FF9500' },
  { label: 'Cash', value: 8, color: '#AF52DE' },
];

const meta: Meta<typeof DonutChart> = {
  title: 'Charts/DonutChart',
  component: DonutChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLabels: { control: 'boolean' },
    centerLabel: { control: 'text' },
    centerValue: { control: 'text' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <DonutChart data={sampleData} variant="default" title="Default" />
      <DonutChart data={sampleData} variant="glass" title="Glass" />
      <DonutChart data={sampleData} variant="bordered" title="Bordered" />
      <DonutChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Portfolio Allocation', centerLabel: 'Total', centerValue: '$125K' },
};

export const PortfolioOverview: Story = {
  name: '💼 Caso de Uso: Portfolio Overview',
  args: {
    data: [
      { label: 'US Equities', value: 42, color: '#007AFF' },
      { label: 'Intl Equities', value: 18, color: '#5856D6' },
      { label: 'Fixed Income', value: 22, color: '#34C759' },
      { label: 'Alternatives', value: 10, color: '#FF9500' },
      { label: 'Cash & Equiv.', value: 8, color: '#8E8E93' },
    ],
    variant: 'glass', size: 'lg', animated: true, showLegend: true, showTooltip: true,
    centerLabel: 'Net Worth', centerValue: '$1.2M',
    title: 'Asset Allocation', subtitle: 'Q4 2024',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: sampleData, size: 'md', variant: 'default', animated: true, interactive: true,
    showLegend: true, showTooltip: true, showLabels: true,
    centerLabel: 'Total', centerValue: '100%',
    title: 'Playground', subtitle: 'Adjust controls to customize',
  },
};
