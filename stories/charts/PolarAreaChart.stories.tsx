import type { Meta, StoryObj } from '@storybook/react';
import { PolarAreaChart } from '../../components/ui/charts/PolarAreaChart';

const sampleData = [
  { label: 'Jan', value: 40 },
  { label: 'Feb', value: 65 },
  { label: 'Mar', value: 85 },
  { label: 'Apr', value: 55 },
  { label: 'May', value: 70 },
  { label: 'Jun', value: 90 },
  { label: 'Jul', value: 45 },
  { label: 'Aug', value: 75 },
];

const meta: Meta<typeof PolarAreaChart> = {
  title: 'Charts/PolarAreaChart',
  component: PolarAreaChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLegend: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof PolarAreaChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <PolarAreaChart key={v} data={sampleData} variant={v} title={v} />
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
  args: { data: sampleData, size: 'md', variant: 'default', animated: true, showLegend: true, title: 'Playground' },
};
