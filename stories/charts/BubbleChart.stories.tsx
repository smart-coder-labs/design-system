import type { Meta, StoryObj } from '@storybook/react';
import { BubbleChart } from '../../components/ui/charts/BubbleChart';

const sampleData = [
  { x: 10, y: 20, size: 30, label: 'Product A' },
  { x: 25, y: 45, size: 50, label: 'Product B' },
  { x: 40, y: 30, size: 20, label: 'Product C' },
  { x: 55, y: 60, size: 80, label: 'Product D' },
  { x: 70, y: 50, size: 40, label: 'Product E' },
  { x: 85, y: 75, size: 60, label: 'Product F' },
  { x: 30, y: 55, size: 45, label: 'Product G' },
  { x: 60, y: 40, size: 35, label: 'Product H' },
];

const meta: Meta<typeof BubbleChart> = {
  title: 'Charts/BubbleChart',
  component: BubbleChart,
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
type Story = StoryObj<typeof BubbleChart>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <BubbleChart key={v} data={sampleData} variant={v} title={v} />
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
