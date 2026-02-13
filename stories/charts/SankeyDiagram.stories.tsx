import type { Meta, StoryObj } from '@storybook/react';
import { SankeyDiagram } from '../../components/ui/charts/SankeyDiagram';

const sampleData = {
  nodes: [
    { id: 'a', label: 'Source A' },
    { id: 'b', label: 'Source B' },
    { id: 'c', label: 'Process X' },
    { id: 'd', label: 'Process Y' },
    { id: 'e', label: 'Output 1' },
    { id: 'f', label: 'Output 2' },
  ],
  links: [
    { source: 'a', target: 'c', value: 30 },
    { source: 'a', target: 'd', value: 20 },
    { source: 'b', target: 'c', value: 15 },
    { source: 'b', target: 'd', value: 35 },
    { source: 'c', target: 'e', value: 25 },
    { source: 'c', target: 'f', value: 20 },
    { source: 'd', target: 'e', value: 30 },
    { source: 'd', target: 'f', value: 25 },
  ],
};

const meta: Meta<typeof SankeyDiagram> = {
  title: 'Charts/SankeyDiagram',
  component: SankeyDiagram,
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
type Story = StoryObj<typeof SankeyDiagram>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <SankeyDiagram key={v} data={sampleData} variant={v} title={v} />
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
