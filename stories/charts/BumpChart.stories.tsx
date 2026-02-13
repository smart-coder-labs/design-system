import type { Meta, StoryObj } from '@storybook/react';
import { BumpChart } from '../../components/ui/charts/BumpChart';

const sampleData = [
  { label: 'Q1', rankings: [1, 3, 2, 4] },
  { label: 'Q2', rankings: [2, 1, 3, 4] },
  { label: 'Q3', rankings: [1, 2, 4, 3] },
  { label: 'Q4', rankings: [3, 1, 2, 4] },
];
const sampleSeries = [{ name: 'Apple' }, { name: 'Google' }, { name: 'Microsoft' }, { name: 'Amazon' }];

const meta: Meta<typeof BumpChart> = {
  title: 'Charts/BumpChart',
  component: BumpChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof BumpChart>;

export const Default: Story = { args: { data: sampleData, series: sampleSeries } };
export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map(v => (
        <BumpChart key={v} data={sampleData} series={sampleSeries} variant={v} title={v} showLegend />
      ))}
    </div>
  ),
};
export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, series: sampleSeries, variant: 'bordered', showLegend: true, title: 'Brand Rankings' },
};
export const CompanyRankings: Story = {
  name: '🏆 Caso de Uso: Company Rankings',
  args: {
    data: sampleData, series: sampleSeries,
    variant: 'glass', size: 'lg', showLegend: true, showTooltip: true,
    title: 'Tech Company Rankings', subtitle: 'Quarterly position changes',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};
export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, series: sampleSeries, size: 'md', variant: 'default', animated: true, showLegend: true, showTooltip: true, title: 'Playground' },
};
