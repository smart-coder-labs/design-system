import type { Meta, StoryObj } from '@storybook/react';
import { AuroraChart } from '../../components/ui/charts/AuroraChart';

const sampleData = [
  { label: 'Green Aurora', values: [20, 45, 30, 60, 40, 55, 35, 50, 25, 40] },
  { label: 'Purple Aurora', values: [15, 35, 50, 25, 45, 30, 55, 20, 40, 35] },
  { label: 'Teal Aurora', values: [30, 20, 40, 35, 55, 25, 45, 60, 30, 45] },
];

const meta: Meta<typeof AuroraChart> = {
  title: 'Charts/Innovative/AuroraChart',
  component: AuroraChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof AuroraChart>;

export const Default: Story = { args: { data: sampleData, title: 'Aurora Chart' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <AuroraChart key={v} data={sampleData} variant={v} title={v} />
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
