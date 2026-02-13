import type { Meta, StoryObj } from '@storybook/react';
import { ThermometerChart } from '../../components/ui/charts/ThermometerChart';

const meta: Meta<typeof ThermometerChart> = {
  title: 'Charts/ThermometerChart',
  component: ThermometerChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    value: { control: { type: 'range', min: -20, max: 50, step: 1 } },
    min: { control: 'number' },
    max: { control: 'number' },
    color: { control: 'color' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ThermometerChart>;

export const Default: Story = { args: { value: 37, min: 0, max: 50, title: 'Temperature' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <ThermometerChart key={v} value={37} min={0} max={50} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { value: 28, min: -10, max: 45, color: '#FF9500', variant: 'bordered', title: 'Dark Mode' },
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { value: 22, min: 0, max: 50, size: 'md', variant: 'default', animated: true, title: 'Playground' },
};
