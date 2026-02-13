import type { Meta, StoryObj } from '@storybook/react';
import { GanttChart } from '../../components/ui/charts/GanttChart';

const sampleData = [
  { label: 'Research', start: 0, end: 3, progress: 100 },
  { label: 'Design', start: 2, end: 5, progress: 80 },
  { label: 'Development', start: 4, end: 9, progress: 45 },
  { label: 'Testing', start: 8, end: 11, progress: 10 },
  { label: 'Deployment', start: 10, end: 12, progress: 0 },
];

const meta: Meta<typeof GanttChart> = {
  title: 'Charts/GanttChart',
  component: GanttChart,
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
type Story = StoryObj<typeof GanttChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <GanttChart key={v} data={sampleData} variant={v} title={v} />
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
