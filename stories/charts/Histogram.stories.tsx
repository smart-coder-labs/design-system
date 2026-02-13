import type { Meta, StoryObj } from '@storybook/react';
import { Histogram } from '../../components/ui/charts/Histogram';

const sampleData = [
  { label: '0-10', value: 5 },
  { label: '10-20', value: 12 },
  { label: '20-30', value: 28 },
  { label: '30-40', value: 45 },
  { label: '40-50', value: 38 },
  { label: '50-60', value: 22 },
  { label: '60-70', value: 15 },
  { label: '70-80', value: 8 },
  { label: '80-90', value: 4 },
  { label: '90-100', value: 2 },
];

const meta: Meta<typeof Histogram> = {
  title: 'Charts/Histogram',
  component: Histogram,
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
type Story = StoryObj<typeof Histogram>;

export const Default: Story = {
  args: { data: sampleData },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <Histogram data={sampleData} variant="default" title="Default" />
      <Histogram data={sampleData} variant="glass" title="Glass" />
      <Histogram data={sampleData} variant="bordered" title="Bordered" />
      <Histogram data={sampleData} variant="elevated" title="Elevated" />
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
  args: { data: sampleData, variant: 'bordered', title: 'Dark Mode Histogram' },
};

export const TestScoreDistribution: Story = {
  name: '📊 Test Score Distribution',
  args: {
    data: [
      { label: 'F (0-59)', value: 8 },
      { label: 'D (60-69)', value: 15 },
      { label: 'C (70-79)', value: 32 },
      { label: 'B (80-89)', value: 45 },
      { label: 'A (90-100)', value: 25 },
    ],
    variant: 'glass',
    size: 'lg',
    title: 'Exam Score Distribution',
    subtitle: 'Fall 2024 Final Exam',
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
