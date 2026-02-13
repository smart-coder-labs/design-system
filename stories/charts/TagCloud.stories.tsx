import type { Meta, StoryObj } from '@storybook/react';
import { TagCloud } from '../../components/ui/charts/TagCloud';

const sampleData = [
  { text: 'Design System', value: 95 },
  { text: 'React', value: 90 },
  { text: 'TypeScript', value: 85 },
  { text: 'Accessibility', value: 78 },
  { text: 'Animation', value: 72 },
  { text: 'Tailwind CSS', value: 68 },
  { text: 'Dark Mode', value: 62 },
  { text: 'Components', value: 58 },
  { text: 'Tokens', value: 50 },
  { text: 'SVG', value: 45 },
  { text: 'Charts', value: 40 },
  { text: 'Radix UI', value: 35 },
  { text: 'Framer', value: 30 },
  { text: 'Storybook', value: 25 },
];

const meta: Meta<typeof TagCloud> = {
  title: 'Charts/TagCloud',
  component: TagCloud,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof TagCloud>;

export const Default: Story = { args: { data: sampleData, title: 'Popular Topics' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <TagCloud key={v} data={sampleData} variant={v} title={v} />
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
