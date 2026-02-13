import type { Meta, StoryObj } from '@storybook/react';
import { OrbitChart } from '../../components/ui/charts/OrbitChart';

const sampleData = [
  { label: 'Mercury', value: 8, orbit: 1 },
  { label: 'Venus', value: 12, orbit: 2 },
  { label: 'Earth', value: 14, orbit: 3 },
  { label: 'Mars', value: 10, orbit: 4 },
  { label: 'Jupiter', value: 24, orbit: 5.5 },
];

const meta: Meta<typeof OrbitChart> = {
  title: 'Charts/Innovative/OrbitChart',
  component: OrbitChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof OrbitChart>;

export const Default: Story = { args: { data: sampleData, title: 'Orbit Chart' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <OrbitChart key={v} data={sampleData} variant={v} title={v} />
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
