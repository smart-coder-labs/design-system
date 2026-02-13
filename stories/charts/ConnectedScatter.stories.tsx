import type { Meta, StoryObj } from '@storybook/react';
import { ConnectedScatter } from '../../components/ui/charts/ConnectedScatter';

const sampleData = [
  { x: 10, y: 20, label: 'Jan' },
  { x: 20, y: 35, label: 'Feb' },
  { x: 30, y: 25, label: 'Mar' },
  { x: 40, y: 50, label: 'Apr' },
  { x: 50, y: 45, label: 'May' },
  { x: 60, y: 60, label: 'Jun' },
  { x: 70, y: 55, label: 'Jul' },
  { x: 80, y: 75, label: 'Aug' },
  { x: 90, y: 65, label: 'Sep' },
  { x: 100, y: 85, label: 'Oct' },
];

const meta: Meta<typeof ConnectedScatter> = {
  title: 'Charts/ConnectedScatter',
  component: ConnectedScatter,
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
type Story = StoryObj<typeof ConnectedScatter>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <ConnectedScatter key={v} data={sampleData} variant={v} title={v} />
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
