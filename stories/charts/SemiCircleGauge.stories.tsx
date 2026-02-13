import type { Meta, StoryObj } from '@storybook/react';
import { SemiCircleGauge } from '../../components/ui/charts/SemiCircleGauge';

const meta: Meta<typeof SemiCircleGauge> = {
  title: 'Charts/SemiCircleGauge',
  component: SemiCircleGauge,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    min: { control: 'number' },
    max: { control: 'number' },
    label: { control: 'text' },
    unit: { control: 'text' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof SemiCircleGauge>;

export const Default: Story = { args: { value: 72, label: 'Performance', unit: '%' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <SemiCircleGauge value={72} label="Default" unit="%" variant="default" />
      <SemiCircleGauge value={72} label="Glass" unit="%" variant="glass" />
      <SemiCircleGauge value={72} label="Bordered" unit="%" variant="bordered" />
      <SemiCircleGauge value={72} label="Elevated" unit="%" variant="elevated" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { value: 85, label: 'CPU Usage', unit: '%', variant: 'bordered' },
};

export const ServerHealth: Story = {
  name: '🖥️ Caso de Uso: Server Health',
  args: {
    value: 67, min: 0, max: 100, label: 'Server Load', unit: '%',
    variant: 'glass', size: 'lg', animated: true,
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    value: 50, min: 0, max: 100, label: 'Playground', unit: '%',
    size: 'md', variant: 'default', animated: true,
  },
};
