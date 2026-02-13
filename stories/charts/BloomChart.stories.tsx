import type { Meta, StoryObj } from '@storybook/react';
import { BloomChart } from '../../components/ui/charts/BloomChart';

const sampleData = [
  { label: 'Growth', value: 85 },
  { label: 'Revenue', value: 70 },
  { label: 'Users', value: 95 },
  { label: 'Engagement', value: 60 },
  { label: 'Retention', value: 75 },
  { label: 'Satisfaction', value: 88 },
];

const meta: Meta<typeof BloomChart> = {
  title: 'Charts/Innovative/BloomChart',
  component: BloomChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof BloomChart>;

export const Default: Story = { args: { data: sampleData, title: 'Bloom Chart' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <BloomChart key={v} data={sampleData} variant={v} title={v} />
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
