import type { Meta, StoryObj } from '@storybook/react';
import { WaterfallChart } from '../../components/ui/charts/WaterfallChart';

const sampleData = [
  { label: 'Revenue', value: 500, type: 'total' as const },
  { label: 'Product Sales', value: 200, type: 'increase' as const },
  { label: 'Services', value: 150, type: 'increase' as const },
  { label: 'COGS', value: -180, type: 'decrease' as const },
  { label: 'Operating Exp', value: -120, type: 'decrease' as const },
  { label: 'Net Income', value: 550, type: 'total' as const },
];

const meta: Meta<typeof WaterfallChart> = {
  title: 'Charts/WaterfallChart',
  component: WaterfallChart,
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
type Story = StoryObj<typeof WaterfallChart>;

export const Default: Story = { args: { data: sampleData } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <WaterfallChart key={v} data={sampleData} variant={v} title={v} />
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
