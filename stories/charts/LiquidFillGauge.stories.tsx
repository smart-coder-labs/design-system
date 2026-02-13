import type { Meta, StoryObj } from '@storybook/react';
import { LiquidFillGauge } from '../../components/ui/charts/LiquidFillGauge';

const meta: Meta<typeof LiquidFillGauge> = {
  title: 'Charts/LiquidFillGauge',
  component: LiquidFillGauge,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    max: { control: 'number' },
    color: { control: 'color' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof LiquidFillGauge>;

export const Default: Story = { args: { value: 65, title: 'Tank Level' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <LiquidFillGauge key={v} value={65} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { value: 42, color: '#5AC8FA', variant: 'bordered', title: 'Dark Mode' },
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { value: 75, max: 100, size: 'md', variant: 'default', animated: true, title: 'Playground' },
};
