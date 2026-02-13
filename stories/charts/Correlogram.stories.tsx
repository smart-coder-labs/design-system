import type { Meta, StoryObj } from '@storybook/react';
import { Correlogram } from '../../components/ui/charts/Correlogram';

const sampleData = {
  labels: ['Height', 'Weight', 'Age', 'Income', 'Score'],
  matrix: [
    [1.0, 0.85, 0.32, 0.45, -0.12],
    [0.85, 1.0, 0.28, 0.38, -0.08],
    [0.32, 0.28, 1.0, 0.62, -0.35],
    [0.45, 0.38, 0.62, 1.0, -0.55],
    [-0.12, -0.08, -0.35, -0.55, 1.0],
  ],
};

const meta: Meta<typeof Correlogram> = {
  title: 'Charts/Correlogram',
  component: Correlogram,
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
type Story = StoryObj<typeof Correlogram>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <Correlogram key={v} data={sampleData} variant={v} title={v} />
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
