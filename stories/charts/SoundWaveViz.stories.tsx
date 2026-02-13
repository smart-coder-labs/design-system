import type { Meta, StoryObj } from '@storybook/react';
import { SoundWaveViz } from '../../components/ui/charts/SoundWaveViz';

const sampleData = [20, 45, 80, 55, 90, 35, 70, 60, 85, 40, 95, 25, 65, 50, 75, 30, 88, 42, 72, 58];

const meta: Meta<typeof SoundWaveViz> = {
  title: 'Charts/Innovative/SoundWaveViz',
  component: SoundWaveViz,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof SoundWaveViz>;

export const Default: Story = { args: { data: sampleData, title: 'Sound Wave' } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <SoundWaveViz key={v} data={sampleData} variant={v} title={v} />
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
