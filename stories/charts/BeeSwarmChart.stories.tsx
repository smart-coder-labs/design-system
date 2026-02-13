import type { Meta, StoryObj } from '@storybook/react';
import { BeeSwarmChart } from '../../components/ui/charts/BeeSwarmChart';

const sampleData = [
  { label: 'Group A', values: [10, 12, 14, 15, 16, 18, 20, 22, 24, 25, 26, 28, 30, 35] },
  { label: 'Group B', values: [18, 20, 22, 24, 25, 26, 28, 30, 32, 34, 36, 38, 40, 42] },
  { label: 'Group C', values: [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34] },
];

const meta: Meta<typeof BeeSwarmChart> = {
  title: 'Charts/BeeSwarmChart',
  component: BeeSwarmChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof BeeSwarmChart>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <BeeSwarmChart key={v} data={sampleData} variant={v} title={v} />
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
