import type { Meta, StoryObj } from '@storybook/react';
import { GaugeChart } from '../../components/ui/charts/GaugeChart';

const meta: Meta<typeof GaugeChart> = {
  title: 'Charts/GaugeChart',
  component: GaugeChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    min: { control: 'number' },
    max: { control: 'number' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof GaugeChart>;

export const Default: Story = { args: { value: 72, title: 'Speed' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <GaugeChart key={v} value={72} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const CustomZones: Story = {
  name: '🌡️ Custom Zones',
  args: {
    value: 45,
    min: 0,
    max: 120,
    zones: [
      { from: 0, to: 40, color: '#34C759' },
      { from: 40, to: 80, color: '#FF9500' },
      { from: 80, to: 120, color: '#FF3B30' },
    ],
    title: 'Engine Temp',
    size: 'lg',
  },
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { value: 85, variant: 'bordered', title: 'Dark Mode' },
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { value: 55, size: 'md', variant: 'default', animated: true, title: 'Playground' },
};
