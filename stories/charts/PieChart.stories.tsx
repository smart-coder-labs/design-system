import type { Meta, StoryObj } from '@storybook/react';
import { PieChart } from '../../components/ui/charts/PieChart';

const sampleData = [
  { label: 'Desktop', value: 45, color: '#007AFF' },
  { label: 'Mobile', value: 30, color: '#34C759' },
  { label: 'Tablet', value: 15, color: '#FF9500' },
  { label: 'Other', value: 10, color: '#AF52DE' },
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
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof PieChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <PieChart data={sampleData} variant="default" title="Default" />
      <PieChart data={sampleData} variant="glass" title="Glass" />
      <PieChart data={sampleData} variant="bordered" title="Bordered" />
      <PieChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Device Breakdown' },
};

export const BrowserMarketShare: Story = {
  name: '🌐 Caso de Uso: Browser Market Share',
  args: {
    data: [
      { label: 'Chrome', value: 63, color: '#4285F4' },
      { label: 'Safari', value: 20, color: '#007AFF' },
      { label: 'Firefox', value: 8, color: '#FF6611' },
      { label: 'Edge', value: 5, color: '#0078D4' },
      { label: 'Other', value: 4, color: '#999' },
    ],
    variant: 'glass', size: 'lg', animated: true, showLegend: true, showTooltip: true,
    title: 'Browser Market Share', subtitle: '2024 Global Stats',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: sampleData, size: 'md', variant: 'default', animated: true, interactive: true,
    showLegend: true, showTooltip: true, showLabels: true, title: 'Playground', subtitle: 'Adjust controls to customize',
  },
};
