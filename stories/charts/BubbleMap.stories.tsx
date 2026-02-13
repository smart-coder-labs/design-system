import type { Meta, StoryObj } from '@storybook/react';
import { BubbleMap } from '../../components/ui/charts/BubbleMap';

const sampleData = [
  { label: 'New York', x: 74, y: 41, value: 8300 },
  { label: 'LA', x: 118, y: 34, value: 3900 },
  { label: 'Chicago', x: 88, y: 42, value: 2700 },
  { label: 'Houston', x: 95, y: 30, value: 2300 },
  { label: 'Phoenix', x: 112, y: 33, value: 1600 },
  { label: 'Seattle', x: 122, y: 48, value: 740 },
  { label: 'Miami', x: 80, y: 26, value: 470 },
];

const meta: Meta<typeof BubbleMap> = {
  title: 'Charts/BubbleMap',
  component: BubbleMap,
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
type Story = StoryObj<typeof BubbleMap>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <BubbleMap key={v} data={sampleData} variant={v} title={v} />
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
