import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalBarChart } from '../../components/ui/charts/HorizontalBarChart';

const sampleData = [
  { label: 'React', value: 92 },
  { label: 'Vue', value: 71 },
  { label: 'Angular', value: 55 },
  { label: 'Svelte', value: 48 },
  { label: 'Next.js', value: 85 },
  { label: 'Nuxt', value: 38 },
];

const meta: Meta<typeof HorizontalBarChart> = {
  title: 'Charts/HorizontalBarChart',
  component: HorizontalBarChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
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
type Story = StoryObj<typeof HorizontalBarChart>;

export const Default: Story = {
  args: { data: sampleData },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <HorizontalBarChart data={sampleData} variant="default" title="Default" />
      <HorizontalBarChart data={sampleData} variant="glass" title="Glass" />
      <HorizontalBarChart data={sampleData} variant="bordered" title="Bordered" />
      <HorizontalBarChart data={sampleData} variant="elevated" title="Elevated" />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <HorizontalBarChart data={sampleData} size="sm" title="Small" variant="bordered" />
      <HorizontalBarChart data={sampleData} size="md" title="Medium" variant="bordered" />
      <HorizontalBarChart data={sampleData} size="lg" title="Large" variant="bordered" />
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
    title: 'Framework Popularity',
    subtitle: 'Hover bars for details',
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
    title: 'Framework Rankings',
  },
};

export const TeamPerformance: Story = {
  name: '📊 Caso de Uso: Team Performance',
  args: {
    data: [
      { label: 'Design', value: 95 },
      { label: 'Engineering', value: 88 },
      { label: 'Marketing', value: 72 },
      { label: 'Sales', value: 81 },
      { label: 'Support', value: 90 },
    ],
    variant: 'glass',
    size: 'lg',
    animated: true,
    showGrid: true,
    showTooltip: true,
    title: 'Team Performance Score',
    subtitle: 'Q4 2024 Review',
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
    showTooltip: true,
    showGrid: true,
    showLabels: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
