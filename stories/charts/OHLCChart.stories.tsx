import type { Meta, StoryObj } from '@storybook/react';
import { OHLCChart } from '../../components/ui/charts/OHLCChart';

const sampleData = [
  { label: 'Mon', open: 142, high: 150, low: 140, close: 148 },
  { label: 'Tue', open: 148, high: 155, low: 146, close: 152 },
  { label: 'Wed', open: 152, high: 158, low: 149, close: 150 },
  { label: 'Thu', open: 150, high: 156, low: 145, close: 154 },
  { label: 'Fri', open: 154, high: 162, low: 151, close: 159 },
  { label: 'Mon2', open: 159, high: 164, low: 155, close: 157 },
  { label: 'Tue2', open: 157, high: 161, low: 153, close: 160 },
  { label: 'Wed2', open: 160, high: 168, low: 158, close: 165 },
  { label: 'Thu2', open: 165, high: 170, low: 162, close: 164 },
  { label: 'Fri2', open: 164, high: 169, low: 160, close: 167 },
];

const meta: Meta<typeof OHLCChart> = {
  title: 'Charts/OHLCChart',
  component: OHLCChart,
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
type Story = StoryObj<typeof OHLCChart>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <OHLCChart key={v} data={sampleData} variant={v} title={v} />
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
