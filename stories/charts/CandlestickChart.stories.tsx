import type { Meta, StoryObj } from '@storybook/react';
import { CandlestickChart } from '../../components/ui/charts/CandlestickChart';

const sampleData = [
  { label: 'Mon', open: 150, high: 158, low: 148, close: 155 },
  { label: 'Tue', open: 155, high: 162, low: 153, close: 160 },
  { label: 'Wed', open: 160, high: 165, low: 155, close: 157 },
  { label: 'Thu', open: 157, high: 163, low: 152, close: 161 },
  { label: 'Fri', open: 161, high: 168, low: 159, close: 166 },
  { label: 'Mon2', open: 166, high: 170, low: 160, close: 163 },
  { label: 'Tue2', open: 163, high: 167, low: 158, close: 165 },
  { label: 'Wed2', open: 165, high: 172, low: 164, close: 170 },
  { label: 'Thu2', open: 170, high: 175, low: 168, close: 169 },
  { label: 'Fri2', open: 169, high: 174, low: 165, close: 172 },
];

const meta: Meta<typeof CandlestickChart> = {
  title: 'Charts/CandlestickChart',
  component: CandlestickChart,
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
type Story = StoryObj<typeof CandlestickChart>;

export const Default: Story = { args: { data: sampleData } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <CandlestickChart key={v} data={sampleData} variant={v} title={v} />
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
