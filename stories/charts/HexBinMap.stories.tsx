import type { Meta, StoryObj } from '@storybook/react';
import { HexBinMap } from '../../components/ui/charts/HexBinMap';

const sampleData = [
  { x: 12, y: 45, value: 23 },
  { x: 28, y: 67, value: 41 },
  { x: 35, y: 12, value: 8 },
  { x: 42, y: 89, value: 37 },
  { x: 55, y: 34, value: 19 },
  { x: 61, y: 78, value: 44 },
  { x: 73, y: 23, value: 12 },
  { x: 80, y: 56, value: 33 },
  { x: 15, y: 91, value: 27 },
  { x: 48, y: 50, value: 50 },
  { x: 90, y: 15, value: 5 },
  { x: 22, y: 30, value: 16 },
  { x: 67, y: 82, value: 38 },
  { x: 95, y: 44, value: 29 },
  { x: 38, y: 71, value: 46 },
  { x: 5, y: 60, value: 11 },
  { x: 50, y: 10, value: 3 },
  { x: 77, y: 95, value: 48 },
  { x: 85, y: 38, value: 22 },
  { x: 33, y: 55, value: 35 },
];

const meta: Meta<typeof HexBinMap> = {
  title: 'Charts/HexBinMap',
  component: HexBinMap,
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
type Story = StoryObj<typeof HexBinMap>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <HexBinMap key={v} data={sampleData} variant={v} title={v} />
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
