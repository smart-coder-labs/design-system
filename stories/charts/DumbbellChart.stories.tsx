import type { Meta, StoryObj } from '@storybook/react';
import { DumbbellChart } from '../../components/ui/charts/DumbbellChart';

const sampleData = [
  { label: 'Math', start: 65, end: 88 },
  { label: 'Science', start: 72, end: 85 },
  { label: 'English', start: 80, end: 92 },
  { label: 'History', start: 55, end: 78 },
  { label: 'Art', start: 70, end: 95 },
  { label: 'PE', start: 85, end: 90 },
];

const meta: Meta<typeof DumbbellChart> = {
  title: 'Charts/DumbbellChart',
  component: DumbbellChart,
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
type Story = StoryObj<typeof DumbbellChart>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <DumbbellChart key={v} data={sampleData} variant={v} title={v} />
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
