import type { Meta, StoryObj } from '@storybook/react';
import { RangePlot } from '../../components/ui/charts/RangePlot';

const sampleData = [
  { label: 'Jan', min: 5, max: 22 },
  { label: 'Feb', min: 3, max: 18 },
  { label: 'Mar', min: 8, max: 25 },
  { label: 'Apr', min: 12, max: 28 },
  { label: 'May', min: 16, max: 32 },
  { label: 'Jun', min: 20, max: 36 },
  { label: 'Jul', min: 22, max: 38 },
  { label: 'Aug', min: 21, max: 37 },
  { label: 'Sep', min: 17, max: 31 },
  { label: 'Oct', min: 12, max: 26 },
  { label: 'Nov', min: 7, max: 20 },
  { label: 'Dec', min: 4, max: 16 },
];

const meta: Meta<typeof RangePlot> = {
  title: 'Charts/RangePlot',
  component: RangePlot,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof RangePlot>;

export const Default: Story = { args: { data: sampleData, title: 'Monthly Temperature Range' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <RangePlot key={v} data={sampleData} variant={v} title={v} />
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
