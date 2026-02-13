import type { Meta, StoryObj } from '@storybook/react';
import { RadarChart } from '../../components/ui/charts/RadarChart';

const skillData = [
  { label: 'Speed', values: [88, 72] },
  { label: 'Strength', values: [75, 90] },
  { label: 'Defense', values: [82, 65] },
  { label: 'Technique', values: [91, 78] },
  { label: 'Stamina', values: [79, 85] },
  { label: 'Intelligence', values: [85, 70] },
];

const skillSeries = [
  { name: 'Player A', color: '#007AFF' },
  { name: 'Player B', color: '#FF9500' },
];

const meta: Meta<typeof RadarChart> = {
  title: 'Charts/RadarChart',
  component: RadarChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLegend: { control: 'boolean' },
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
type Story = StoryObj<typeof RadarChart>;

export const Default: Story = {
  args: {
    data: skillData,
    series: skillSeries,
    showLegend: true,
    showTooltip: true,
    title: 'Player Comparison',
    subtitle: 'Skill Ratings (0–100)',
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <RadarChart key={v} data={skillData} series={skillSeries} variant={v} title={v} showLegend />
      ))}
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
    data: skillData,
    series: skillSeries,
    variant: 'bordered',
    showLegend: true,
    title: 'Player Comparison',
    subtitle: 'Dark Mode Preview',
  },
};

export const AthleteComparison: Story = {
  name: '🏋️ Athlete Comparison',
  args: {
    data: [
      { label: 'Speed', values: [92, 78, 85] },
      { label: 'Strength', values: [68, 95, 82] },
      { label: 'Agility', values: [88, 72, 90] },
      { label: 'Endurance', values: [75, 88, 92] },
      { label: 'Flexibility', values: [82, 65, 78] },
      { label: 'Power', values: [71, 93, 86] },
      { label: 'Reaction Time', values: [95, 70, 82] },
      { label: 'Recovery', values: [78, 82, 88] },
    ],
    series: [
      { name: 'Sprinter', color: '#FF2D55' },
      { name: 'Powerlifter', color: '#007AFF' },
      { name: 'Decathlete', color: '#34C759' },
    ],
    showLegend: true,
    showTooltip: true,
    variant: 'glass',
    size: 'lg',
    animated: true,
    title: 'Athlete Performance Profile',
    subtitle: '8 Physical Attributes — 3 Athletes',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const CompanySkillsMatrix: Story = {
  name: '🏢 Company Skills Matrix',
  args: {
    data: [
      { label: 'JavaScript', values: [92, 65, 78, 55] },
      { label: 'Python', values: [68, 88, 72, 45] },
      { label: 'Cloud/DevOps', values: [75, 82, 90, 60] },
      { label: 'Data Science', values: [42, 95, 68, 38] },
      { label: 'UI/UX Design', values: [58, 35, 45, 92] },
      { label: 'Project Mgmt', values: [70, 72, 85, 88] },
      { label: 'Communication', values: [78, 68, 82, 95] },
    ],
    series: [
      { name: 'Engineering', color: '#007AFF' },
      { name: 'Data Team', color: '#34C759' },
      { name: 'Platform/Ops', color: '#FF9500' },
      { name: 'Product/Design', color: '#AF52DE' },
    ],
    showLegend: true,
    showTooltip: true,
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    title: 'Department Skills Matrix',
    subtitle: 'Competency Scores by Team (0–100)',
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
    data: skillData,
    series: skillSeries,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showLegend: true,
    showTooltip: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
