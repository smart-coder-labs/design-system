import type { Meta, StoryObj } from '@storybook/react';
import { RadialBarChart } from '../../components/ui/charts/RadialBarChart';

const sampleData = [
  { label: 'React', value: 85 },
  { label: 'Vue', value: 70 },
  { label: 'Angular', value: 55 },
  { label: 'Svelte', value: 45 },
  { label: 'Solid', value: 30 },
];

const meta: Meta<typeof RadialBarChart> = {
  title: 'Charts/RadialBarChart',
  component: RadialBarChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLegend: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof RadialBarChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <RadialBarChart key={v} data={sampleData} variant={v} title={v} />
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
  args: { data: sampleData, size: 'md', variant: 'default', animated: true, showLegend: true, title: 'Playground' },
};
