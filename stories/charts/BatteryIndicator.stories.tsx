import type { Meta, StoryObj } from '@storybook/react';
import { BatteryIndicator } from '../../components/ui/charts/BatteryIndicator';

const meta: Meta<typeof BatteryIndicator> = {
  title: 'Charts/BatteryIndicator',
  component: BatteryIndicator,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    max: { control: 'number' },
    status: { control: 'select', options: ['good', 'warning', 'critical'] },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof BatteryIndicator>;

export const Default: Story = { args: { value: 75 } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <BatteryIndicator key={v} value={75} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const StatusLevels: Story = {
  name: '🔋 Status Levels',
  render: () => (
    <div className="grid grid-cols-3 gap-6">
      <BatteryIndicator value={85} status="good" title="Good" />
      <BatteryIndicator value={35} status="warning" title="Warning" />
      <BatteryIndicator value={12} status="critical" title="Critical" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { value: 45, status: 'warning', variant: 'bordered', title: 'Dark Mode' },
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { value: 62, size: 'md', variant: 'default', animated: true, title: 'Playground' },
};
