import type { Meta, StoryObj } from '@storybook/react';
import { WordCloud } from '../../components/ui/charts/WordCloud';

const sampleData = [
  { text: 'React', value: 95 },
  { text: 'TypeScript', value: 88 },
  { text: 'JavaScript', value: 82 },
  { text: 'Tailwind', value: 75 },
  { text: 'Next.js', value: 70 },
  { text: 'Node.js', value: 65 },
  { text: 'GraphQL', value: 55 },
  { text: 'Python', value: 50 },
  { text: 'Docker', value: 45 },
  { text: 'Rust', value: 40 },
  { text: 'Go', value: 38 },
  { text: 'Swift', value: 35 },
  { text: 'Kotlin', value: 30 },
  { text: 'Vue', value: 28 },
  { text: 'Svelte', value: 22 },
];

const meta: Meta<typeof WordCloud> = {
  title: 'Charts/WordCloud',
  component: WordCloud,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof WordCloud>;

export const Default: Story = { args: { data: sampleData, title: 'Tech Stack' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <WordCloud key={v} data={sampleData} variant={v} title={v} />
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
