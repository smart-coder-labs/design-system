import type { Meta, StoryObj } from '@storybook/react';
import { ViolinPlot } from '../../components/ui/charts/ViolinPlot';

function generateNormal(mean: number, std: number, n: number): number[] {
  const vals: number[] = [];
  for (let i = 0; i < n; i++) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    vals.push(mean + std * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v));
  }
  return vals;
}

const sampleData = [
  { label: 'Group A', values: generateNormal(50, 10, 100) },
  { label: 'Group B', values: generateNormal(60, 15, 100) },
  { label: 'Group C', values: generateNormal(45, 8, 100) },
  { label: 'Group D', values: generateNormal(55, 12, 100) },
];

const meta: Meta<typeof ViolinPlot> = {
  title: 'Charts/ViolinPlot',
  component: ViolinPlot,
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
type Story = StoryObj<typeof ViolinPlot>;

export const Default: Story = {
  args: { data: sampleData },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <ViolinPlot data={sampleData} variant="default" title="Default" />
      <ViolinPlot data={sampleData} variant="glass" title="Glass" />
      <ViolinPlot data={sampleData} variant="bordered" title="Bordered" />
      <ViolinPlot data={sampleData} variant="elevated" title="Elevated" />
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
  args: { data: sampleData, variant: 'bordered', title: 'Dark Mode Violin Plot' },
};

export const ResponseTimeAnalysis: Story = {
  name: '⏱️ Response Time Analysis',
  args: {
    data: [
      { label: 'API v1', values: generateNormal(120, 30, 200) },
      { label: 'API v2', values: generateNormal(80, 20, 200) },
      { label: 'API v3', values: generateNormal(60, 15, 200) },
    ],
    variant: 'glass',
    size: 'lg',
    title: 'API Response Times',
    subtitle: 'Distribution of response times (ms)',
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
