import type { Meta, StoryObj } from '@storybook/react';
import { ConnectionMap } from '../../components/ui/charts/ConnectionMap';

const sampleData = {
  points: [
    { id: 'nyc', label: 'New York', x: 74, y: 41 },
    { id: 'la', label: 'Los Angeles', x: 118, y: 34 },
    { id: 'chi', label: 'Chicago', x: 88, y: 42 },
    { id: 'hou', label: 'Houston', x: 95, y: 30 },
    { id: 'sea', label: 'Seattle', x: 122, y: 48 },
    { id: 'mia', label: 'Miami', x: 80, y: 26 },
  ],
  connections: [
    { from: 'nyc', to: 'la', value: 950 },
    { from: 'nyc', to: 'chi', value: 720 },
    { from: 'nyc', to: 'mia', value: 680 },
    { from: 'la', to: 'sea', value: 540 },
    { from: 'chi', to: 'hou', value: 430 },
    { from: 'hou', to: 'mia', value: 380 },
    { from: 'sea', to: 'chi', value: 310 },
  ],
};

const meta: Meta<typeof ConnectionMap> = {
  title: 'Charts/ConnectionMap',
  component: ConnectionMap,
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
type Story = StoryObj<typeof ConnectionMap>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <ConnectionMap key={v} data={sampleData} variant={v} title={v} />
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
