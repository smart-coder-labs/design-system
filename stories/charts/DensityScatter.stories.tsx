import type { Meta, StoryObj } from '@storybook/react';
import { DensityScatter } from '../../components/ui/charts/DensityScatter';

// Generate clustered data for density visualization
const sampleData = [
  // Cluster 1
  ...Array.from({ length: 20 }, (_, i) => ({ x: 20 + (i % 5) * 2 + i * 0.3, y: 30 + Math.floor(i / 5) * 3 + i * 0.2 })),
  // Cluster 2
  ...Array.from({ length: 15 }, (_, i) => ({ x: 60 + (i % 4) * 2.5 + i * 0.2, y: 65 + Math.floor(i / 4) * 3 + i * 0.3 })),
  // Scattered points
  ...Array.from({ length: 10 }, (_, i) => ({ x: 10 + i * 8, y: 10 + i * 7 })),
];

const meta: Meta<typeof DensityScatter> = {
  title: 'Charts/DensityScatter',
  component: DensityScatter,
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
type Story = StoryObj<typeof DensityScatter>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <DensityScatter key={v} data={sampleData} variant={v} title={v} />
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
