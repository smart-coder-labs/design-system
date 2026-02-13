import type { Meta, StoryObj } from '@storybook/react';
import { MagneticFieldChart } from '../../components/ui/charts/MagneticFieldChart';

const sampleData = [
  { x: 0.2, y: 0.5, strength: 80, polarity: 'positive' as const },
  { x: 0.8, y: 0.5, strength: 70, polarity: 'negative' as const },
  { x: 0.5, y: 0.2, strength: 50, polarity: 'positive' as const },
  { x: 0.5, y: 0.8, strength: 60, polarity: 'negative' as const },
];

const meta: Meta<typeof MagneticFieldChart> = {
  title: 'Charts/Innovative/MagneticFieldChart',
  component: MagneticFieldChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof MagneticFieldChart>;

export const Default: Story = { args: { data: sampleData, title: 'Magnetic Field' } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <MagneticFieldChart key={v} data={sampleData} variant={v} title={v} />
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
