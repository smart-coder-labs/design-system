import type { Meta, StoryObj } from '@storybook/react';
import { ParallelCoordinates } from '../../components/ui/charts/ParallelCoordinates';

const sampleData = {
  axes: ['Price', 'Quality', 'Speed', 'Support', 'Reliability'],
  items: [
    { label: 'Product A', values: [85, 90, 70, 80, 95] },
    { label: 'Product B', values: [60, 75, 95, 85, 70] },
    { label: 'Product C', values: [90, 65, 80, 60, 85] },
    { label: 'Product D', values: [75, 80, 85, 90, 75] },
  ],
};

const meta: Meta<typeof ParallelCoordinates> = {
  title: 'Charts/ParallelCoordinates',
  component: ParallelCoordinates,
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
type Story = StoryObj<typeof ParallelCoordinates>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <ParallelCoordinates key={v} data={sampleData} variant={v} title={v} />
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
