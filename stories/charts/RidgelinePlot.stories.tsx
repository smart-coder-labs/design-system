import type { Meta, StoryObj } from '@storybook/react';
import { RidgelinePlot } from '../../components/ui/charts/RidgelinePlot';

const sampleData = [
  { label: 'January', values: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 10, 12, 14, 8, 6] },
  { label: 'February', values: [5, 8, 12, 15, 18, 20, 22, 25, 20, 18, 15, 12, 10, 8, 6] },
  { label: 'March', values: [10, 14, 18, 22, 26, 30, 28, 25, 22, 18, 14, 10, 8, 6, 4] },
  { label: 'April', values: [15, 18, 22, 25, 28, 32, 35, 30, 28, 25, 22, 18, 15, 12, 10] },
  { label: 'May', values: [20, 24, 28, 32, 36, 38, 40, 36, 32, 28, 24, 20, 18, 16, 14] },
];

const meta: Meta<typeof RidgelinePlot> = {
  title: 'Charts/RidgelinePlot',
  component: RidgelinePlot,
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
type Story = StoryObj<typeof RidgelinePlot>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <RidgelinePlot key={v} data={sampleData} variant={v} title={v} />
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
