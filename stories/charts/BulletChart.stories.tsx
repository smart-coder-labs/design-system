import type { Meta, StoryObj } from '@storybook/react';
import { BulletChart } from '../../components/ui/charts/BulletChart';

const sampleData = [
  { label: 'Revenue', value: 275, target: 250, ranges: [150, 225, 300] as [number, number, number] },
  { label: 'Profit', value: 55, target: 60, ranges: [20, 40, 80] as [number, number, number] },
  { label: 'Satisfaction', value: 82, target: 90, ranges: [50, 70, 100] as [number, number, number] },
];

const meta: Meta<typeof BulletChart> = {
  title: 'Charts/BulletChart',
  component: BulletChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof BulletChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <BulletChart data={sampleData} variant="default" title="Default" />
      <BulletChart data={sampleData} variant="glass" title="Glass" />
      <BulletChart data={sampleData} variant="bordered" title="Bordered" />
      <BulletChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <BulletChart data={sampleData} size="sm" title="Small" variant="bordered" />
      <BulletChart data={sampleData} size="md" title="Medium" variant="bordered" />
      <BulletChart data={sampleData} size="lg" title="Large" variant="bordered" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Performance Metrics' },
};

export const KPIDashboard: Story = {
  name: '📊 Caso de Uso: KPI Dashboard',
  args: {
    data: [
      { label: 'Revenue ($K)', value: 275, target: 250, ranges: [150, 225, 300] as [number, number, number] },
      { label: 'Profit ($K)', value: 55, target: 60, ranges: [20, 40, 80] as [number, number, number] },
      { label: 'NPS Score', value: 82, target: 90, ranges: [50, 70, 100] as [number, number, number] },
      { label: 'Retention %', value: 91, target: 95, ranges: [60, 80, 100] as [number, number, number] },
    ],
    variant: 'glass', size: 'lg', animated: true, showTooltip: true,
    title: 'KPI Performance', subtitle: 'Q4 2024 vs Targets',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, size: 'md', variant: 'default', animated: true, interactive: true, showTooltip: true, showLabels: true, title: 'Playground' },
};
