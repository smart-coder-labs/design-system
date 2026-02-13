import type { Meta, StoryObj } from '@storybook/react';
import { AlluvialDiagram } from '../../components/ui/charts/AlluvialDiagram';

const sampleData = {
  nodes: [
    { id: 'js', label: 'JavaScript' },
    { id: 'py', label: 'Python' },
    { id: 'rb', label: 'Ruby' },
    { id: 'web', label: 'Web Dev' },
    { id: 'data', label: 'Data Science' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'sr', label: 'Senior' },
    { id: 'mid', label: 'Mid-Level' },
  ],
  links: [
    { source: 'js', target: 'web', value: 40 },
    { source: 'js', target: 'mobile', value: 15 },
    { source: 'py', target: 'data', value: 35 },
    { source: 'py', target: 'web', value: 10 },
    { source: 'rb', target: 'web', value: 20 },
    { source: 'web', target: 'sr', value: 40 },
    { source: 'web', target: 'mid', value: 30 },
    { source: 'data', target: 'sr', value: 25 },
    { source: 'data', target: 'mid', value: 10 },
    { source: 'mobile', target: 'sr', value: 10 },
    { source: 'mobile', target: 'mid', value: 5 },
  ],
};

const meta: Meta<typeof AlluvialDiagram> = {
  title: 'Charts/AlluvialDiagram',
  component: AlluvialDiagram,
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
type Story = StoryObj<typeof AlluvialDiagram>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <AlluvialDiagram key={v} data={sampleData} variant={v} title={v} />
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
