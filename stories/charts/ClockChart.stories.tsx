import type { Meta, StoryObj } from '@storybook/react';
import { ClockChart } from '../../components/ui/charts/ClockChart';

const sampleData = [
  { hour: 0, value: 5 }, { hour: 1, value: 3 }, { hour: 2, value: 2 },
  { hour: 3, value: 1 }, { hour: 4, value: 2 }, { hour: 5, value: 8 },
  { hour: 6, value: 25 }, { hour: 7, value: 45 }, { hour: 8, value: 65 },
  { hour: 9, value: 80 }, { hour: 10, value: 70 }, { hour: 11, value: 55 },
  { hour: 12, value: 60 }, { hour: 13, value: 50 }, { hour: 14, value: 45 },
  { hour: 15, value: 55 }, { hour: 16, value: 65 }, { hour: 17, value: 75 },
  { hour: 18, value: 60 }, { hour: 19, value: 40 }, { hour: 20, value: 30 },
  { hour: 21, value: 20 }, { hour: 22, value: 15 }, { hour: 23, value: 8 },
];

const meta: Meta<typeof ClockChart> = {
  title: 'Charts/ClockChart',
  component: ClockChart,
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
type Story = StoryObj<typeof ClockChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <ClockChart key={v} data={sampleData} variant={v} title={v} />
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
