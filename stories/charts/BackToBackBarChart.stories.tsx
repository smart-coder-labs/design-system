import type { Meta, StoryObj } from '@storybook/react';
import { BackToBackBarChart } from '../../components/ui/charts/BackToBackBarChart';

const sampleData = [
  { label: '0-9', leftValue: 2100, rightValue: 2000 },
  { label: '10-19', leftValue: 2800, rightValue: 2700 },
  { label: '20-29', leftValue: 3500, rightValue: 3200 },
  { label: '30-39', leftValue: 3200, rightValue: 3100 },
  { label: '40-49', leftValue: 2900, rightValue: 2800 },
  { label: '50-59', leftValue: 2300, rightValue: 2400 },
  { label: '60-69', leftValue: 1800, rightValue: 2000 },
  { label: '70+', leftValue: 1200, rightValue: 1500 },
];

const meta: Meta<typeof BackToBackBarChart> = {
  title: 'Charts/BackToBackBarChart',
  component: BackToBackBarChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  decorators: [(Story) => <div className="w-full max-w-2xl p-6"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof BackToBackBarChart>;

export const Default: Story = { args: { data: sampleData, leftLabel: 'Male', rightLabel: 'Female' } };

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      <BackToBackBarChart data={sampleData} variant="default" title="Default" leftLabel="Male" rightLabel="Female" />
      <BackToBackBarChart data={sampleData} variant="glass" title="Glass" leftLabel="Male" rightLabel="Female" />
      <BackToBackBarChart data={sampleData} variant="bordered" title="Bordered" leftLabel="Male" rightLabel="Female" />
      <BackToBackBarChart data={sampleData} variant="elevated" title="Elevated" leftLabel="Male" rightLabel="Female" />
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <BackToBackBarChart data={sampleData} size="sm" title="Small" variant="bordered" leftLabel="Male" rightLabel="Female" />
      <BackToBackBarChart data={sampleData} size="md" title="Medium" variant="bordered" leftLabel="Male" rightLabel="Female" />
      <BackToBackBarChart data={sampleData} size="lg" title="Large" variant="bordered" leftLabel="Male" rightLabel="Female" />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [(Story) => <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-2xl"><Story /></div>],
  args: { data: sampleData, variant: 'bordered', title: 'Population Pyramid', leftLabel: 'Male', rightLabel: 'Female' },
};

export const PopulationPyramid: Story = {
  name: '👥 Caso de Uso: Population Pyramid',
  args: {
    data: sampleData,
    leftLabel: 'Male', rightLabel: 'Female',
    variant: 'glass', size: 'lg', animated: true, showTooltip: true,
    title: 'Population by Age Group', subtitle: 'Census 2024',
  },
  decorators: [(Story) => <div className="w-full max-w-2xl bg-[var(--color-bg-secondary)] p-6 rounded-2xl"><Story /></div>],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: { data: sampleData, leftLabel: 'Male', rightLabel: 'Female', size: 'md', variant: 'default', animated: true, interactive: true, showTooltip: true, showLabels: true, title: 'Playground' },
};
