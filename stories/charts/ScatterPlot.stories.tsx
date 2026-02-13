import type { Meta, StoryObj } from '@storybook/react';
import { ScatterPlot } from '../../components/ui/charts/ScatterPlot';

const sampleData = [
  { x: 10, y: 20, label: 'A' },
  { x: 25, y: 45, label: 'B' },
  { x: 35, y: 30, label: 'C' },
  { x: 50, y: 60, label: 'D' },
  { x: 65, y: 55, label: 'E' },
  { x: 75, y: 80, label: 'F' },
  { x: 85, y: 70, label: 'G' },
  { x: 40, y: 50, label: 'H' },
  { x: 55, y: 35, label: 'I' },
  { x: 70, y: 90, label: 'J' },
];

const meta: Meta<typeof ScatterPlot> = {
  title: 'Charts/ScatterPlot',
  component: ScatterPlot,
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
type Story = StoryObj<typeof ScatterPlot>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <ScatterPlot key={v} data={sampleData} variant={v} title={v} />
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
