import type { Meta, StoryObj } from '@storybook/react';
import { RingGauge } from '../../components/ui/charts/RingGauge';

const meta: Meta<typeof RingGauge> = {
  title: 'Charts/RingGauge',
  component: RingGauge,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    max: { control: 'number' },
    label: { control: 'text' },
    color: { control: 'color' },
    showLabel: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof RingGauge>;

export const Default: Story = { args: { value: 75, max: 100, label: 'Progress', showLabel: true } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <RingGauge value={75} label="Default" showLabel variant="default" />
      <RingGauge value={75} label="Glass" showLabel variant="glass" />
      <RingGauge value={75} label="Bordered" showLabel variant="bordered" />
      <RingGauge value={75} label="Elevated" showLabel variant="elevated" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { value: 82, label: 'Disk Usage', showLabel: true, color: '#FF9500', variant: 'bordered' },
};

export const FitnessTracker: Story = {
  name: '🏃 Caso de Uso: Fitness Tracker',
  args: {
    value: 6800, max: 10000, label: 'Steps', showLabel: true, color: '#34C759',
    variant: 'glass', size: 'lg', animated: true,
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    value: 65, max: 100, label: 'Playground', color: '#007AFF', showLabel: true,
    size: 'md', variant: 'default', animated: true,
  },
};
