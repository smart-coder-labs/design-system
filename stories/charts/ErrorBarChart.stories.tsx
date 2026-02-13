import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBarChart } from '../../components/ui/charts/ErrorBarChart';

const sampleData = [
  { label: 'Control', value: 42, error: 5 },
  { label: 'Treatment A', value: 58, error: 8 },
  { label: 'Treatment B', value: 51, error: 6 },
  { label: 'Treatment C', value: 67, error: 10 },
  { label: 'Treatment D', value: 45, error: 4 },
];

const meta: Meta<typeof ErrorBarChart> = {
  title: 'Charts/ErrorBarChart',
  component: ErrorBarChart,
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
type Story = StoryObj<typeof ErrorBarChart>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <ErrorBarChart key={v} data={sampleData} variant={v} title={v} />
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
