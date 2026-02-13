import type { Meta, StoryObj } from '@storybook/react';
import { MultiRingGauge } from '../../components/ui/charts/MultiRingGauge';

const sampleRings = [
  { label: 'Move', value: 420, max: 500, color: '#FF2D55' },
  { label: 'Exercise', value: 28, max: 30, color: '#34C759' },
  { label: 'Stand', value: 10, max: 12, color: '#5AC8FA' },
];

const meta: Meta<typeof MultiRingGauge> = {
  title: 'Charts/MultiRingGauge',
  component: MultiRingGauge,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    showLabels: { control: 'boolean' },
    showLegend: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof MultiRingGauge>;

export const Default: Story = { args: { rings: sampleRings, showLabels: true, showLegend: true } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <MultiRingGauge rings={sampleRings} variant="default" title="Default" showLegend />
      <MultiRingGauge rings={sampleRings} variant="glass" title="Glass" showLegend />
      <MultiRingGauge rings={sampleRings} variant="bordered" title="Bordered" showLegend />
      <MultiRingGauge rings={sampleRings} variant="elevated" title="Elevated" showLegend />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { rings: sampleRings, variant: 'bordered', title: 'Activity Rings', showLabels: true, showLegend: true },
};

export const ActivityRings: Story = {
  name: '⌚ Caso de Uso: Apple Watch Activity',
  args: {
    rings: [
      { label: 'Move', value: 480, max: 500, color: '#FF2D55' },
      { label: 'Exercise', value: 25, max: 30, color: '#34C759' },
      { label: 'Stand', value: 9, max: 12, color: '#5AC8FA' },
    ],
    variant: 'glass', size: 'lg', animated: true, showLabels: true, showLegend: true,
    title: 'Today\'s Activity', subtitle: 'Almost there!',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    rings: sampleRings, showLabels: true, showLegend: true,
    size: 'md', variant: 'default', animated: true,
    title: 'Playground', subtitle: 'Adjust controls to customize',
  },
};
