import type { Meta, StoryObj } from '@storybook/react';
import { CircularPacking } from '../../components/ui/charts/CircularPacking';

const sampleData = [
  { label: 'Technology', value: 100, children: [{ label: 'AI', value: 40 }, { label: 'Cloud', value: 35 }, { label: 'IoT', value: 25 }] },
  { label: 'Finance', value: 80, children: [{ label: 'Banking', value: 45 }, { label: 'Insurance', value: 35 }] },
  { label: 'Health', value: 60 },
  { label: 'Education', value: 45 },
  { label: 'Energy', value: 35 },
];

const meta: Meta<typeof CircularPacking> = {
  title: 'Charts/CircularPacking',
  component: CircularPacking,
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
type Story = StoryObj<typeof CircularPacking>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <CircularPacking key={v} data={sampleData} variant={v} title={v} />
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
