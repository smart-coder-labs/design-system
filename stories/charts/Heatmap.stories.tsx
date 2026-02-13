import type { Meta, StoryObj } from '@storybook/react';
import { Heatmap } from '../../components/ui/charts/Heatmap';

const sampleData = {
  rows: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  cols: ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM'],
  values: [
    [2, 5, 8, 12, 6, 4, 3, 1],
    [3, 7, 10, 15, 8, 5, 4, 2],
    [1, 4, 9, 14, 10, 7, 5, 3],
    [4, 6, 11, 13, 9, 6, 4, 2],
    [2, 3, 7, 10, 5, 3, 2, 1],
  ],
};

const meta: Meta<typeof Heatmap> = {
  title: 'Charts/Heatmap',
  component: Heatmap,
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
type Story = StoryObj<typeof Heatmap>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <Heatmap key={v} data={sampleData} variant={v} title={v} />
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
