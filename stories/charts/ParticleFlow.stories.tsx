import type { Meta, StoryObj } from '@storybook/react';
import { ParticleFlow } from '../../components/ui/charts/ParticleFlow';

const sampleData = [
  { from: 'Source A', to: 'Target X', value: 80 },
  { from: 'Source A', to: 'Target Y', value: 45 },
  { from: 'Source B', to: 'Target X', value: 60 },
  { from: 'Source B', to: 'Target Z', value: 35 },
  { from: 'Source C', to: 'Target Y', value: 70 },
  { from: 'Source C', to: 'Target Z', value: 50 },
];

const meta: Meta<typeof ParticleFlow> = {
  title: 'Charts/Innovative/ParticleFlow',
  component: ParticleFlow,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof ParticleFlow>;

export const Default: Story = { args: { data: sampleData, title: 'Particle Flow' } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <ParticleFlow key={v} data={sampleData} variant={v} title={v} />
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
