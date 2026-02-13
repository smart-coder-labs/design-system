import type { Meta, StoryObj } from '@storybook/react';
import { ConstellationChart } from '../../components/ui/charts/ConstellationChart';

const sampleData = {
  stars: [
    { x: 20, y: 80, label: 'Sirius', brightness: 1 },
    { x: 35, y: 30, label: 'Vega', brightness: 0.9 },
    { x: 55, y: 60, label: 'Altair', brightness: 0.85 },
    { x: 70, y: 20, label: 'Deneb', brightness: 0.95 },
    { x: 85, y: 70, label: 'Polaris', brightness: 0.8 },
    { x: 45, y: 85, label: 'Rigel', brightness: 0.75 },
    { x: 15, y: 45, label: 'Betelgeuse', brightness: 0.9 },
  ],
  connections: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [0, 6], [6, 1]] as Array<[number, number]>,
};

const meta: Meta<typeof ConstellationChart> = {
  title: 'Charts/Innovative/ConstellationChart',
  component: ConstellationChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof ConstellationChart>;

export const Default: Story = { args: { data: sampleData, title: 'Constellation Chart' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <ConstellationChart key={v} data={sampleData} variant={v} title={v} />
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
