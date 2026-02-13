import type { Meta, StoryObj } from '@storybook/react';
import { ChordDiagram } from '../../components/ui/charts/ChordDiagram';

const sampleData = {
  labels: ['Email', 'Social', 'Search', 'Direct', 'Referral'],
  matrix: [
    [0, 25, 15, 10, 5],
    [20, 0, 30, 8, 12],
    [10, 18, 0, 22, 7],
    [8, 5, 14, 0, 20],
    [3, 10, 9, 15, 0],
  ],
};

const meta: Meta<typeof ChordDiagram> = {
  title: 'Charts/ChordDiagram',
  component: ChordDiagram,
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
type Story = StoryObj<typeof ChordDiagram>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <ChordDiagram key={v} data={sampleData} variant={v} title={v} />
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
