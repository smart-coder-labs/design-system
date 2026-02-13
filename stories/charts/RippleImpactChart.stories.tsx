import type { Meta, StoryObj } from '@storybook/react';
import { RippleImpactChart } from '../../components/ui/charts/RippleImpactChart';

const sampleData = [
  { x: 25, y: 30, value: 80, label: 'Event A' },
  { x: 60, y: 50, value: 95, label: 'Event B' },
  { x: 40, y: 75, value: 60, label: 'Event C' },
  { x: 80, y: 25, value: 70, label: 'Event D' },
  { x: 15, y: 65, value: 50, label: 'Event E' },
];

const meta: Meta<typeof RippleImpactChart> = {
  title: 'Charts/Innovative/RippleImpactChart',
  component: RippleImpactChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof RippleImpactChart>;

export const Default: Story = { args: { data: sampleData, title: 'Ripple Impact' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <RippleImpactChart key={v} data={sampleData} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Dark Mode' },
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, size: 'md', variant: 'default', animated: true, title: 'Playground' },
};
