import type { Meta, StoryObj } from '@storybook/react';
import { StainedGlass } from '../../components/ui/charts/StainedGlass';

const sampleData = [
  { label: 'Faith', value: 85, x: 0.2, y: 0.25 },
  { label: 'Hope', value: 65, x: 0.5, y: 0.15 },
  { label: 'Love', value: 95, x: 0.8, y: 0.25 },
  { label: 'Peace', value: 55, x: 0.15, y: 0.65 },
  { label: 'Joy', value: 75, x: 0.5, y: 0.55 },
  { label: 'Grace', value: 60, x: 0.85, y: 0.65 },
];

const meta: Meta<typeof StainedGlass> = {
  title: 'Charts/Innovative/StainedGlass',
  component: StainedGlass,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof StainedGlass>;

export const Default: Story = { args: { data: sampleData, title: 'Stained Glass' } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <StainedGlass key={v} data={sampleData} variant={v} title={v} />
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
