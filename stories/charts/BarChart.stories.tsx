import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from '../../components/ui/charts/BarChart';

const sampleData = [
  { label: 'Jan', value: 4200 },
  { label: 'Feb', value: 5800 },
  { label: 'Mar', value: 3900 },
  { label: 'Apr', value: 7100 },
  { label: 'May', value: 6300 },
  { label: 'Jun', value: 8200 },
];

const meta: Meta<typeof BarChart> = {
  title: 'Charts/BarChart',
  component: BarChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BarChart>;

export const Default: Story = {
  args: {
    data: sampleData,
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <BarChart data={sampleData} variant="default" title="Default" />
      <BarChart data={sampleData} variant="glass" title="Glass" />
      <BarChart data={sampleData} variant="bordered" title="Bordered" />
      <BarChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <BarChart data={sampleData} size="sm" title="Small" variant="bordered" />
      <BarChart data={sampleData} size="md" title="Medium" variant="bordered" />
      <BarChart data={sampleData} size="lg" title="Large" variant="bordered" />
    </div>
  ),
};

export const Interactive: Story = {
  name: '🖱 Interactive',
  args: {
    data: sampleData,
    interactive: true,
    showTooltip: true,
    variant: 'bordered',
    title: 'Interactive Bar Chart',
    subtitle: 'Hover over bars to see tooltips',
  },
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [
    (Story) => (
      <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
  args: {
    data: sampleData,
    variant: 'bordered',
    title: 'Dark Mode Bar Chart',
  },
};

export const FinancialDashboard: Story = {
  name: '💰 Caso de Uso: Dashboard Financiero',
  args: {
    data: [
      { label: 'Ene', value: 42000 },
      { label: 'Feb', value: 48000 },
      { label: 'Mar', value: 35000 },
      { label: 'Abr', value: 52000 },
      { label: 'May', value: 61000 },
      { label: 'Jun', value: 58000 },
    ],
    variant: 'glass',
    size: 'lg',
    animated: true,
    showGrid: true,
    showTooltip: true,
    title: 'Monthly Revenue',
    subtitle: '2024 Q1-Q2',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: sampleData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showLegend: false,
    showTooltip: true,
    showGrid: true,
    showLabels: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
