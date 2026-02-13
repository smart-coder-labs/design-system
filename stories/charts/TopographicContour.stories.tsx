import type { Meta, StoryObj } from '@storybook/react';
import { TopographicContour } from '../../components/ui/charts/TopographicContour';

const sampleData = [
  [10, 15, 20, 25, 30, 25, 20, 15],
  [15, 25, 35, 45, 50, 45, 35, 20],
  [20, 35, 55, 70, 80, 70, 50, 30],
  [25, 45, 70, 90, 100, 85, 65, 35],
  [20, 35, 55, 75, 85, 70, 50, 30],
  [15, 25, 35, 50, 55, 45, 35, 20],
  [10, 15, 20, 30, 35, 30, 20, 15],
];

const meta: Meta<typeof TopographicContour> = {
  title: 'Charts/Innovative/TopographicContour',
  component: TopographicContour,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof TopographicContour>;

export const Default: Story = { args: { data: sampleData, title: 'Topographic Contour' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <TopographicContour key={v} data={sampleData} variant={v} title={v} />
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
