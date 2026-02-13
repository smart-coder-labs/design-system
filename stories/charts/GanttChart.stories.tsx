import type { Meta, StoryObj } from '@storybook/react';
import { GanttChart } from '../../components/ui/charts/GanttChart';

const projectData = [
  { label: 'Requirements Gathering', start: 0, end: 3, progress: 100, color: '#007AFF' },
  { label: 'System Architecture', start: 2, end: 5, progress: 100, color: '#007AFF' },
  { label: 'UI/UX Design', start: 3, end: 7, progress: 85, color: '#5856D6' },
  { label: 'Database Design', start: 4, end: 6, progress: 90, color: '#007AFF' },
  { label: 'Backend Development', start: 5, end: 11, progress: 60, color: '#34C759' },
  { label: 'Frontend Development', start: 6, end: 12, progress: 45, color: '#34C759' },
  { label: 'API Integration', start: 9, end: 13, progress: 25, color: '#FF9500' },
  { label: 'QA & Testing', start: 11, end: 15, progress: 10, color: '#FF2D55' },
];

const meta: Meta<typeof GanttChart> = {
  title: 'Charts/GanttChart',
  component: GanttChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
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
type Story = StoryObj<typeof GanttChart>;

export const Default: Story = {
  args: {
    data: projectData,
    showTooltip: true,
    showLabels: true,
    title: 'Software Development Project',
    subtitle: 'Sprint Timeline — 15 Weeks',
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <GanttChart key={v} data={projectData} variant={v} title={v} />
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
    data: projectData,
    variant: 'bordered',
    showTooltip: true,
    showLabels: true,
    title: 'Project Timeline',
    subtitle: 'Dark Mode Preview',
  },
};

export const ProductLaunchTimeline: Story = {
  name: '🚀 Product Launch Timeline',
  args: {
    data: [
      { label: 'Market Research', start: 0, end: 4, progress: 100, color: '#007AFF' },
      { label: 'Competitive Analysis', start: 1, end: 3, progress: 100, color: '#007AFF' },
      { label: 'Product Strategy', start: 3, end: 6, progress: 100, color: '#007AFF' },
      { label: 'Wireframing', start: 4, end: 7, progress: 95, color: '#5856D6' },
      { label: 'Visual Design', start: 6, end: 10, progress: 80, color: '#5856D6' },
      { label: 'Prototype Build', start: 8, end: 12, progress: 65, color: '#5856D6' },
      { label: 'Core Development', start: 9, end: 18, progress: 45, color: '#34C759' },
      { label: 'API Development', start: 10, end: 16, progress: 40, color: '#34C759' },
      { label: 'Mobile App Dev', start: 12, end: 19, progress: 30, color: '#34C759' },
      { label: 'QA Testing', start: 16, end: 21, progress: 15, color: '#FF9500' },
      { label: 'Beta Program', start: 18, end: 22, progress: 10, color: '#FF9500' },
      { label: 'Bug Fixes', start: 19, end: 23, progress: 5, color: '#FF9500' },
      { label: 'Marketing Campaign', start: 15, end: 24, progress: 20, color: '#FF2D55' },
      { label: 'Launch Preparation', start: 21, end: 24, progress: 0, color: '#FF2D55' },
      { label: 'Public Launch', start: 23, end: 24, progress: 0, color: '#FF2D55' },
    ],
    showTooltip: true,
    showLabels: true,
    variant: 'glass',
    size: 'lg',
    animated: true,
    interactive: true,
    title: 'Product Launch Timeline',
    subtitle: '24-Week Plan — Discovery → Launch',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const ConstructionProject: Story = {
  name: '🏗️ Construction Project',
  args: {
    data: [
      { label: 'Site Survey', start: 0, end: 2, progress: 100, color: '#8E8E93' },
      { label: 'Permits & Approvals', start: 1, end: 5, progress: 100, color: '#8E8E93' },
      { label: 'Foundation Work', start: 4, end: 8, progress: 90, color: '#AC8E68' },
      { label: 'Structural Framing', start: 7, end: 12, progress: 70, color: '#AC8E68' },
      { label: 'Roofing', start: 11, end: 14, progress: 40, color: '#AC8E68' },
      { label: 'Electrical Rough-in', start: 10, end: 15, progress: 35, color: '#FF9500' },
      { label: 'Plumbing Rough-in', start: 10, end: 14, progress: 45, color: '#007AFF' },
      { label: 'HVAC Installation', start: 12, end: 16, progress: 20, color: '#00C7BE' },
      { label: 'Insulation & Drywall', start: 14, end: 18, progress: 10, color: '#AF52DE' },
      { label: 'Interior Finishes', start: 16, end: 21, progress: 5, color: '#5856D6' },
      { label: 'Exterior Finishes', start: 15, end: 20, progress: 8, color: '#34C759' },
      { label: 'Final Inspections', start: 20, end: 22, progress: 0, color: '#FF2D55' },
    ],
    showTooltip: true,
    showLabels: true,
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    title: 'Residential Construction Schedule',
    subtitle: '22-Week Build — Foundation to Completion',
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
    data: projectData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showTooltip: true,
    showLabels: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
