import type { Meta, StoryObj } from '@storybook/react';
import { MatrixChart } from '../../components/ui/charts/MatrixChart';

const sampleData = {
  rows: ['Sales', 'Marketing', 'Engineering', 'Design'],
  cols: ['Q1', 'Q2', 'Q3', 'Q4'],
  values: [
    [85, 90, 78, 92],
    [70, 82, 88, 75],
    [95, 88, 92, 85],
    [60, 75, 80, 90],
  ],
};

const meta: Meta<typeof MatrixChart> = {
  title: 'Charts/MatrixChart',
  component: MatrixChart,
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
type Story = StoryObj<typeof MatrixChart>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <MatrixChart key={v} data={sampleData} variant={v} title={v} />
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
