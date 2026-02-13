import type { Meta, StoryObj } from '@storybook/react';
import { BoxPlot } from '../../components/ui/charts/BoxPlot';

const sampleData = [
  { label: 'Group A', min: 10, q1: 25, median: 35, q3: 50, max: 70, outliers: [5, 78] },
  { label: 'Group B', min: 15, q1: 30, median: 45, q3: 55, max: 65 },
  { label: 'Group C', min: 5, q1: 20, median: 30, q3: 45, max: 60, outliers: [2] },
  { label: 'Group D', min: 20, q1: 35, median: 50, q3: 60, max: 75 },
  { label: 'Group E', min: 8, q1: 22, median: 38, q3: 52, max: 68, outliers: [3, 80] },
];

const meta: Meta<typeof BoxPlot> = {
  title: 'Charts/BoxPlot',
  component: BoxPlot,
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
type Story = StoryObj<typeof BoxPlot>;

export const Default: Story = {
  args: { data: sampleData },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <BoxPlot data={sampleData} variant="default" title="Default" />
      <BoxPlot data={sampleData} variant="glass" title="Glass" />
      <BoxPlot data={sampleData} variant="bordered" title="Bordered" />
      <BoxPlot data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
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
  args: { data: sampleData, variant: 'bordered', title: 'Dark Mode Box Plot' },
};

export const SalaryDistribution: Story = {
  name: '💼 Salary Distribution',
  args: {
    data: [
      { label: 'Engineering', min: 65, q1: 85, median: 110, q3: 140, max: 180, outliers: [200, 220] },
      { label: 'Design', min: 50, q1: 70, median: 90, q3: 115, max: 145 },
      { label: 'Marketing', min: 45, q1: 60, median: 75, q3: 95, max: 120 },
      { label: 'Sales', min: 40, q1: 55, median: 70, q3: 100, max: 130, outliers: [160] },
    ],
    variant: 'glass',
    size: 'lg',
    title: 'Salary Distribution by Department',
    subtitle: 'Annual salary in thousands (USD)',
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
