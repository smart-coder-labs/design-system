import type { Meta, StoryObj } from '@storybook/react';
import { SpiralChart } from '../../components/ui/charts/SpiralChart';

const sampleData = [
  { label: 'Week 1', value: 20 },
  { label: 'Week 2', value: 35 },
  { label: 'Week 3', value: 50 },
  { label: 'Week 4', value: 30 },
  { label: 'Week 5', value: 65 },
  { label: 'Week 6', value: 45 },
  { label: 'Week 7', value: 80 },
  { label: 'Week 8', value: 55 },
  { label: 'Week 9', value: 70 },
  { label: 'Week 10', value: 90 },
  { label: 'Week 11', value: 40 },
  { label: 'Week 12', value: 75 },
];

const meta: Meta<typeof SpiralChart> = {
  title: 'Charts/SpiralChart',
  component: SpiralChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof SpiralChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <SpiralChart key={v} data={sampleData} variant={v} title={v} />
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
