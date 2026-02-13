import type { Meta, StoryObj } from '@storybook/react';
import { DependencyWheel } from '../../components/ui/charts/DependencyWheel';

const sampleData = {
  labels: ['Frontend', 'Backend', 'Database', 'Auth', 'Cache'],
  matrix: [
    [0, 30, 5, 20, 10],
    [10, 0, 25, 15, 20],
    [0, 15, 0, 5, 10],
    [15, 20, 5, 0, 0],
    [5, 10, 15, 0, 0],
  ],
};

const meta: Meta<typeof DependencyWheel> = {
  title: 'Charts/DependencyWheel',
  component: DependencyWheel,
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
type Story = StoryObj<typeof DependencyWheel>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <DependencyWheel key={v} data={sampleData} variant={v} title={v} />
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
