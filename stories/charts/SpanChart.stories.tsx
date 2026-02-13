import type { Meta, StoryObj } from '@storybook/react';
import { SpanChart } from '../../components/ui/charts/SpanChart';

const sampleData = [
  { label: 'Morning Shift', start: 6, end: 14 },
  { label: 'Day Shift', start: 9, end: 17 },
  { label: 'Evening Shift', start: 14, end: 22 },
  { label: 'Night Shift', start: 22, end: 30 },
  { label: 'On Call', start: 0, end: 8 },
];

const meta: Meta<typeof SpanChart> = {
  title: 'Charts/SpanChart',
  component: SpanChart,
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
type Story = StoryObj<typeof SpanChart>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <SpanChart key={v} data={sampleData} variant={v} title={v} />
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
