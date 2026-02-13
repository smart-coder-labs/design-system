import type { Meta, StoryObj } from '@storybook/react';
import { PulseRing } from '../../components/ui/charts/PulseRing';

const meta: Meta<typeof PulseRing> = {
  title: 'Charts/Innovative/PulseRing',
  component: PulseRing,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    value: { control: { type: 'range', min: 0, max: 100 } },
    pulseSpeed: { control: { type: 'range', min: 0.5, max: 5, step: 0.1 } },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof PulseRing>;

export const Default: Story = { args: { value: 75, title: 'Pulse Ring' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <PulseRing key={v} value={75} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { value: 85, variant: 'bordered', title: 'Dark Mode', color: '#AF52DE' },
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { value: 60, size: 'md', variant: 'default', animated: true, title: 'Playground', pulseSpeed: 1.5 },
};
