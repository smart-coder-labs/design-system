import type { Meta, StoryObj } from '@storybook/react';
import { TideChart } from '../../components/ui/charts/TideChart';

const sampleData = [
  { label: '12am', value: 20 },
  { label: '2am', value: 35 },
  { label: '4am', value: 65 },
  { label: '6am', value: 90 },
  { label: '8am', value: 75 },
  { label: '10am', value: 45 },
  { label: '12pm', value: 25 },
  { label: '2pm', value: 40 },
  { label: '4pm', value: 70 },
  { label: '6pm', value: 95 },
  { label: '8pm', value: 80 },
  { label: '10pm', value: 50 },
];

const meta: Meta<typeof TideChart> = {
  title: 'Charts/Innovative/TideChart',
  component: TideChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof TideChart>;

export const Default: Story = { args: { data: sampleData, title: 'Tide Chart' } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <TideChart key={v} data={sampleData} variant={v} title={v} />
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
