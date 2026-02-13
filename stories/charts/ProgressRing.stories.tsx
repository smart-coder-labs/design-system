import type { Meta, StoryObj } from '@storybook/react';
import { ProgressRing } from '../../components/ui/charts/ProgressRing';

const meta: Meta<typeof ProgressRing> = {
  title: 'Charts/ProgressRing',
  component: ProgressRing,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    max: { control: 'number' },
    label: { control: 'text' },
    color: { control: 'color' },
    strokeWidth: { control: { type: 'range', min: 4, max: 30, step: 1 } },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ProgressRing>;

export const Default: Story = { args: { value: 75, label: 'Move', color: '#FF2D55' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <ProgressRing key={v} value={75} label="Move" color="#FF2D55" variant={v} title={v} />
      ))}
    </div>
  ),
};

export const HealthRings: Story = {
  name: '🏃 Health Rings',
  render: () => (
    <div className="flex gap-4 items-center">
      <ProgressRing value={82} label="Move" color="#FF2D55" size="lg" />
      <ProgressRing value={65} label="Exercise" color="#34C759" size="lg" />
      <ProgressRing value={90} label="Stand" color="#5AC8FA" size="lg" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { value: 68, label: 'Calories', color: '#FF9500', variant: 'bordered', title: 'Dark Mode' },
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { value: 60, max: 100, label: 'Progress', size: 'md', variant: 'default', animated: true, title: 'Playground' },
};
