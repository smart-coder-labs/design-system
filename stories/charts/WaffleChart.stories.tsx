import type { Meta, StoryObj } from '@storybook/react';
import { WaffleChart } from '../../components/ui/charts/WaffleChart';

const sampleData = [
  { label: 'Completed', value: 63, color: '#34C759' },
  { label: 'In Progress', value: 22, color: '#FF9500' },
  { label: 'Pending', value: 15, color: '#FF3B30' },
];

const meta: Meta<typeof WaffleChart> = {
  title: 'Charts/WaffleChart',
  component: WaffleChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    total: { control: 'number' },
    rows: { control: 'number' },
    cols: { control: 'number' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof WaffleChart>;

export const Default: Story = { args: { data: sampleData, total: 100, rows: 10, cols: 10 } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <WaffleChart data={sampleData} total={100} rows={10} cols={10} variant="default" title="Default" />
      <WaffleChart data={sampleData} total={100} rows={10} cols={10} variant="glass" title="Glass" />
      <WaffleChart data={sampleData} total={100} rows={10} cols={10} variant="bordered" title="Bordered" />
      <WaffleChart data={sampleData} total={100} rows={10} cols={10} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, total: 100, rows: 10, cols: 10, variant: 'bordered', title: 'Task Progress' },
};

export const ProjectProgress: Story = {
  name: '📋 Caso de Uso: Project Progress',
  args: {
    data: [
      { label: 'Done', value: 47, color: '#34C759' },
      { label: 'In Review', value: 12, color: '#5856D6' },
      { label: 'In Progress', value: 18, color: '#FF9500' },
      { label: 'Blocked', value: 5, color: '#FF3B30' },
      { label: 'To Do', value: 18, color: '#8E8E93' },
    ],
    total: 100, rows: 10, cols: 10,
    variant: 'glass', size: 'lg', animated: true, showLegend: true, showTooltip: true,
    title: 'Sprint Progress', subtitle: 'Sprint 14 — Week 2',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: sampleData, total: 100, rows: 10, cols: 10,
    size: 'md', variant: 'default', animated: true, interactive: true,
    showLegend: true, showTooltip: true,
    title: 'Playground', subtitle: 'Adjust controls to customize',
  },
};
