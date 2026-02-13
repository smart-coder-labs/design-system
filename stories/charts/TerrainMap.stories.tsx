import type { Meta, StoryObj } from '@storybook/react';
import { TerrainMap } from '../../components/ui/charts/TerrainMap';

const sampleData = [
  [10, 20, 35, 50, 55, 60, 45, 30],
  [15, 30, 45, 65, 75, 70, 55, 35],
  [20, 40, 60, 80, 90, 85, 65, 40],
  [25, 45, 70, 95, 100, 90, 70, 45],
  [20, 40, 55, 80, 85, 75, 60, 35],
  [15, 30, 40, 60, 65, 55, 45, 25],
];

const meta: Meta<typeof TerrainMap> = {
  title: 'Charts/Innovative/TerrainMap',
  component: TerrainMap,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof TerrainMap>;

export const Default: Story = { args: { data: sampleData, title: 'Terrain Map' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <TerrainMap key={v} data={sampleData} variant={v} title={v} />
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
