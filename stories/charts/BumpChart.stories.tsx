import type { Meta, StoryObj } from '@storybook/react';
import { BumpChart } from '../../components/ui/charts/BumpChart';

const competitorData = [
  { label: 'Jan', rankings: [1, 3, 2, 4, 5] },
  { label: 'Feb', rankings: [1, 2, 3, 5, 4] },
  { label: 'Mar', rankings: [2, 1, 3, 4, 5] },
  { label: 'Apr', rankings: [2, 1, 4, 3, 5] },
  { label: 'May', rankings: [3, 1, 2, 4, 5] },
  { label: 'Jun', rankings: [1, 3, 2, 5, 4] },
];

const competitorSeries = [
  { name: 'Acme Corp', color: '#007AFF' },
  { name: 'Globex', color: '#FF9500' },
  { name: 'Initech', color: '#34C759' },
  { name: 'Umbrella', color: '#FF2D55' },
  { name: 'Cyberdyne', color: '#5856D6' },
];

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
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BumpChart>;

export const Default: Story = {
  args: {
    data: competitorData,
    series: competitorSeries,
    title: 'Market Position Rankings',
    subtitle: 'H1 2024 — Top 5 Competitors',
    showLegend: true,
    showTooltip: true,
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <BumpChart key={v} data={competitorData} series={competitorSeries} variant={v} title={v} showLegend />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <BumpChart data={competitorData} series={competitorSeries} size="sm" title="Small" variant="bordered" showLegend />
      <BumpChart data={competitorData} series={competitorSeries} size="md" title="Medium" variant="bordered" showLegend />
      <BumpChart data={competitorData} series={competitorSeries} size="lg" title="Large" variant="bordered" showLegend />
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [
    (Story) => (
      <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
  args: {
    data: competitorData,
    series: competitorSeries,
    variant: 'bordered',
    title: 'Market Position Rankings',
    subtitle: 'Dark Mode Preview',
    showLegend: true,
  },
};

export const F1SeasonChampionship: Story = {
  name: '🏎️ F1 Season Championship',
  args: {
    data: [
      { label: 'Bahrain', rankings: [1, 2, 3, 4, 5, 6, 7, 8] },
      { label: 'Saudi', rankings: [1, 3, 2, 5, 4, 6, 8, 7] },
      { label: 'Australia', rankings: [2, 1, 3, 4, 6, 5, 7, 8] },
      { label: 'Japan', rankings: [1, 2, 4, 3, 5, 7, 6, 8] },
      { label: 'China', rankings: [1, 3, 2, 5, 4, 6, 8, 7] },
      { label: 'Miami', rankings: [2, 1, 3, 4, 6, 5, 7, 8] },
      { label: 'Imola', rankings: [1, 2, 4, 3, 5, 7, 8, 6] },
      { label: 'Monaco', rankings: [3, 1, 2, 4, 5, 6, 7, 8] },
      { label: 'Canada', rankings: [2, 1, 3, 5, 4, 7, 6, 8] },
      { label: 'Spain', rankings: [1, 2, 3, 4, 6, 5, 8, 7] },
    ],
    series: [
      { name: 'Verstappen', color: '#1E41FF' },
      { name: 'Norris', color: '#FF8700' },
      { name: 'Leclerc', color: '#DC0000' },
      { name: 'Sainz', color: '#FF2800' },
      { name: 'Piastri', color: '#FF8700' },
      { name: 'Hamilton', color: '#27F4D2' },
      { name: 'Russell', color: '#00D2BE' },
      { name: 'Alonso', color: '#006F62' },
    ],
    variant: 'elevated',
    size: 'lg',
    animated: true,
    showLegend: true,
    showTooltip: true,
    showLabels: true,
    title: 'F1 Season Championship',
    subtitle: '2024 — Driver Standings After Each Race',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: competitorData,
    series: competitorSeries,
    size: 'md',
    variant: 'default',
    animated: true,
    showLegend: true,
    showTooltip: true,
    showLabels: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
