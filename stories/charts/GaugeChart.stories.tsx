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
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GaugeChart>;

export const Default: Story = {
  args: {
    value: 67,
    title: 'CPU Usage',
    subtitle: 'Current processor load',
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <GaugeChart key={v} value={67} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <GaugeChart value={67} size="sm" title="Small" variant="bordered" />
      <GaugeChart value={67} size="md" title="Medium" variant="bordered" />
      <GaugeChart value={67} size="lg" title="Large" variant="bordered" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [
    (Story) => (
      <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
  args: {
    value: 67,
    variant: 'bordered',
    title: 'CPU Usage',
    subtitle: 'Dark Mode Preview',
  },
};

export const FactoryPerformance: Story = {
  name: '🏭 Factory Performance',
  args: {
    value: 85,
    min: 0,
    max: 100,
    zones: [
      { from: 0, to: 40, color: '#FF3B30' },
      { from: 40, to: 70, color: '#FF9500' },
      { from: 70, to: 100, color: '#34C759' },
    ],
    variant: 'elevated',
    size: 'lg',
    animated: true,
    title: 'Factory Performance',
    subtitle: 'Overall Equipment Effectiveness (OEE)',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <Story />
      </div>
    ),
  ],
};

export const PatientVitals: Story = {
  name: '🏥 Patient Vitals',
  args: {
    value: 72,
    min: 40,
    max: 200,
    zones: [
      { from: 40, to: 60, color: '#007AFF' },
      { from: 60, to: 100, color: '#34C759' },
      { from: 100, to: 150, color: '#FF9500' },
      { from: 150, to: 200, color: '#FF3B30' },
    ],
    variant: 'glass',
    size: 'lg',
    animated: true,
    title: 'Heart Rate',
    subtitle: 'Resting BPM — Normal Range',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    value: 55,
    min: 0,
    max: 100,
    size: 'md',
    variant: 'default',
    animated: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
