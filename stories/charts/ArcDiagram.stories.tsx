import type { Meta, StoryObj } from '@storybook/react';
import { ArcDiagram } from '../../components/ui/charts/ArcDiagram';

const sampleData = {
  nodes: [
    { id: 'react', label: 'React' },
    { id: 'vue', label: 'Vue' },
    { id: 'angular', label: 'Angular' },
    { id: 'svelte', label: 'Svelte' },
    { id: 'next', label: 'Next.js' },
    { id: 'nuxt', label: 'Nuxt' },
  ],
  links: [
    { source: 'react', target: 'next', value: 40 },
    { source: 'react', target: 'vue', value: 15 },
    { source: 'vue', target: 'nuxt', value: 30 },
    { source: 'vue', target: 'svelte', value: 10 },
    { source: 'angular', target: 'react', value: 20 },
    { source: 'angular', target: 'svelte', value: 8 },
    { source: 'svelte', target: 'next', value: 12 },
    { source: 'next', target: 'nuxt', value: 5 },
  ],
};

const meta: Meta<typeof ArcDiagram> = {
  title: 'Charts/ArcDiagram',
  component: ArcDiagram,
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
type Story = StoryObj<typeof ArcDiagram>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <ArcDiagram key={v} data={sampleData} variant={v} title={v} />
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
