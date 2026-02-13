import type { Meta, StoryObj } from '@storybook/react';
import { CrystalCluster } from '../../components/ui/charts/CrystalCluster';

const sampleData = [
  { label: 'Ruby', value: 80 },
  { label: 'Sapphire', value: 65 },
  { label: 'Emerald', value: 90 },
  { label: 'Diamond', value: 100 },
  { label: 'Amethyst', value: 55 },
  { label: 'Topaz', value: 45 },
];

const meta: Meta<typeof CrystalCluster> = {
  title: 'Charts/Innovative/CrystalCluster',
  component: CrystalCluster,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof CrystalCluster>;

export const Default: Story = { args: { data: sampleData, title: 'Crystal Cluster' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <CrystalCluster key={v} data={sampleData} variant={v} title={v} />
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
