import type { Meta, StoryObj } from '@storybook/react';
import { ScoreCard } from '../../components/ui/charts/ScoreCard';

const meta: Meta<typeof ScoreCard> = {
  title: 'Charts/ScoreCard',
  component: ScoreCard,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    value: { control: 'text' },
    label: { control: 'text' },
    delta: { control: { type: 'range', min: -50, max: 50, step: 0.1 } },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ScoreCard>;

export const Default: Story = {
  args: {
    value: 12847,
    label: 'Total Revenue',
    delta: 12.5,
    trend: [40, 42, 38, 45, 50, 48, 55, 60, 58, 65],
    prefix: '$',
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <ScoreCard key={v} value={12847} label="Revenue" delta={12.5} trend={[40, 45, 50, 48, 55]} prefix="$" variant={v} title={v} />
      ))}
    </div>
  ),
};

export const DashboardCards: Story = {
  name: '📊 Dashboard',
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <ScoreCard value={8420} label="Users" delta={8.2} trend={[100, 120, 115, 130, 145]} variant="bordered" />
      <ScoreCard value={342} label="Orders" delta={-3.1} trend={[50, 48, 45, 42, 40]} variant="bordered" />
      <ScoreCard value="99.9" label="Uptime" suffix="%" delta={0.1} variant="bordered" />
      <ScoreCard value={1.2} label="Avg Response" suffix="s" delta={-15} trend={[2, 1.8, 1.5, 1.3, 1.2]} variant="bordered" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { value: 5280, label: 'Active Users', delta: 5.3, trend: [30, 35, 40, 38, 45, 50], variant: 'bordered', title: 'Dark Mode' },
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { value: 1500, label: 'Metric', delta: 7.2, trend: [10, 15, 12, 18, 22], size: 'md', variant: 'default', animated: true, title: 'Playground' },
};
