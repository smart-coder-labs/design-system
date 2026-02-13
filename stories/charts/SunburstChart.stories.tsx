import type { Meta, StoryObj } from '@storybook/react';
import { SunburstChart } from '../../components/ui/charts/SunburstChart';

const sampleData = [
  { label: 'Engineering', value: 50, color: '#007AFF', children: [
    { label: 'Frontend', value: 20, color: '#5AC8FA' },
    { label: 'Backend', value: 18, color: '#34C759' },
    { label: 'DevOps', value: 12, color: '#FF9500' },
  ]},
  { label: 'Design', value: 25, color: '#AF52DE', children: [
    { label: 'Product', value: 15, color: '#FF2D55' },
    { label: 'Brand', value: 10, color: '#FF6482' },
  ]},
  { label: 'Marketing', value: 25, color: '#FF9500', children: [
    { label: 'Growth', value: 15, color: '#FFCC00' },
    { label: 'Content', value: 10, color: '#FF9F0A' },
  ]},
];

const meta: Meta<typeof SunburstChart> = {
  title: 'Charts/SunburstChart',
  component: SunburstChart,
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
type Story = StoryObj<typeof SunburstChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <SunburstChart data={sampleData} variant="default" title="Default" />
      <SunburstChart data={sampleData} variant="glass" title="Glass" />
      <SunburstChart data={sampleData} variant="bordered" title="Bordered" />
      <SunburstChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Team Structure' },
};

export const OrgBudget: Story = {
  name: '🏢 Caso de Uso: Organization Budget',
  args: {
    data: [
      { label: 'Product', value: 40, color: '#007AFF', children: [
        { label: 'R&D', value: 22, color: '#5AC8FA' },
        { label: 'QA', value: 10, color: '#34C759' },
        { label: 'UX Research', value: 8, color: '#64D2FF' },
      ]},
      { label: 'Operations', value: 30, color: '#FF9500', children: [
        { label: 'Infrastructure', value: 18, color: '#FFCC00' },
        { label: 'Support', value: 12, color: '#FF9F0A' },
      ]},
      { label: 'Sales', value: 30, color: '#AF52DE', children: [
        { label: 'Enterprise', value: 20, color: '#FF2D55' },
        { label: 'SMB', value: 10, color: '#FF6482' },
      ]},
    ],
    variant: 'glass', size: 'lg', animated: true, showLegend: true, showTooltip: true,
    title: 'Budget Allocation', subtitle: 'FY 2024 — $12M Total',
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
