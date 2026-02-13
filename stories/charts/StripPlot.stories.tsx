import type { Meta, StoryObj } from '@storybook/react';
import { StripPlot } from '../../components/ui/charts/StripPlot';

const sampleData = [
  { label: 'Group A', values: [12, 15, 18, 20, 22, 24, 25, 26, 28, 30, 32, 35, 38, 40, 42] },
  { label: 'Group B', values: [20, 22, 25, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50] },
  { label: 'Group C', values: [5, 8, 10, 12, 14, 15, 16, 18, 20, 22, 24, 26, 28, 30, 32] },
];

const meta: Meta<typeof StripPlot> = {
  title: 'Charts/StripPlot',
  component: StripPlot,
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
type Story = StoryObj<typeof StripPlot>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <StripPlot key={v} data={sampleData} variant={v} title={v} />
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
