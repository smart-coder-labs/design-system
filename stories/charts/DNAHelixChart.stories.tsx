import type { Meta, StoryObj } from '@storybook/react';
import { DNAHelixChart } from '../../components/ui/charts/DNAHelixChart';

const sampleData = [
  { left: 80, right: 65, label: 'A-T' },
  { left: 55, right: 90, label: 'G-C' },
  { left: 70, right: 45, label: 'T-A' },
  { left: 90, right: 75, label: 'C-G' },
  { left: 40, right: 85, label: 'A-T' },
  { left: 75, right: 60, label: 'G-C' },
  { left: 60, right: 50, label: 'T-A' },
  { left: 85, right: 70, label: 'C-G' },
];

const meta: Meta<typeof DNAHelixChart> = {
  title: 'Charts/Innovative/DNAHelixChart',
  component: DNAHelixChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof DNAHelixChart>;

export const Default: Story = { args: { data: sampleData, title: 'DNA Helix' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <DNAHelixChart key={v} data={sampleData} variant={v} title={v} />
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
