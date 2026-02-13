import type { Meta, StoryObj } from '@storybook/react';
import { SlopeChart } from '../../components/ui/charts/SlopeChart';

const sampleData = [
  { label: 'Engineering', startValue: 85, endValue: 92 },
  { label: 'Design', startValue: 78, endValue: 88 },
  { label: 'Marketing', startValue: 72, endValue: 65 },
  { label: 'Sales', startValue: 68, endValue: 82 },
  { label: 'Support', startValue: 90, endValue: 85 },
];

const meta: Meta<typeof SlopeChart> = {
  title: 'Charts/SlopeChart',
  component: SlopeChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof SlopeChart>;

export const Default: Story = { args: { data: sampleData, startLabel: '2023', endLabel: '2024' } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <SlopeChart key={v} data={sampleData} variant={v} title={v} startLabel="2023" endLabel="2024" />
      ))}
    </div>
  ),
};
export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', startLabel: '2023', endLabel: '2024', title: 'Score Changes' },
};
export const BeforeAfter: Story = {
  name: '📊 Caso de Uso: Before/After Comparison',
  args: {
    data: sampleData, startLabel: 'Before', endLabel: 'After',
    variant: 'glass', size: 'lg', showTooltip: true,
    title: 'Team Performance', subtitle: 'Before vs After Training Program',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};
export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, startLabel: '2023', endLabel: '2024', size: 'md', variant: 'default', animated: true, showTooltip: true, title: 'Playground' },
};
