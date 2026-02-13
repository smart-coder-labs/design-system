import type { Meta, StoryObj } from '@storybook/react';
import { GlassPrismChart } from '../../components/ui/charts/GlassPrismChart';

const sampleData = [
  { label: 'Red', value: 30, color: '#FF3B30' },
  { label: 'Orange', value: 20, color: '#FF9500' },
  { label: 'Yellow', value: 15, color: '#FFCC00' },
  { label: 'Green', value: 18, color: '#34C759' },
  { label: 'Blue', value: 25, color: '#007AFF' },
  { label: 'Violet', value: 12, color: '#AF52DE' },
];

const meta: Meta<typeof GlassPrismChart> = {
  title: 'Charts/Innovative/GlassPrismChart',
  component: GlassPrismChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof GlassPrismChart>;

export const Default: Story = { args: { data: sampleData, title: 'Glass Prism' } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <GlassPrismChart key={v} data={sampleData} variant={v} title={v} />
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
