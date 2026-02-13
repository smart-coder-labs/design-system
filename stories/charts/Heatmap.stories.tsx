import type { Meta, StoryObj } from '@storybook/react';
import { Heatmap } from '../../components/ui/charts/Heatmap';

const weeklyActivityData = {
  rows: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  cols: [
    '12AM', '1AM', '2AM', '3AM', '4AM', '5AM',
    '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
    '12PM', '1PM', '2PM', '3PM', '4PM', '5PM',
    '6PM', '7PM', '8PM', '9PM', '10PM', '11PM',
  ],
  values: [
    [2, 1, 0, 0, 1, 3, 8, 18, 42, 65, 78, 82, 71, 68, 72, 79, 74, 58, 35, 22, 15, 10, 6, 3],
    [3, 1, 1, 0, 0, 2, 7, 19, 45, 68, 81, 85, 74, 71, 75, 82, 77, 62, 38, 24, 16, 11, 7, 4],
    [2, 1, 0, 0, 1, 2, 9, 21, 48, 72, 84, 88, 76, 73, 78, 85, 80, 64, 40, 26, 18, 12, 8, 4],
    [3, 2, 1, 0, 0, 3, 8, 20, 44, 67, 80, 84, 73, 70, 74, 81, 76, 60, 37, 23, 17, 11, 7, 3],
    [2, 1, 0, 0, 1, 2, 7, 17, 40, 62, 75, 80, 70, 66, 68, 72, 65, 52, 42, 35, 28, 18, 10, 5],
    [5, 3, 2, 1, 0, 1, 3, 8, 15, 25, 35, 42, 48, 52, 50, 45, 38, 32, 38, 45, 42, 32, 20, 10],
    [4, 3, 2, 1, 0, 0, 2, 5, 10, 18, 28, 35, 40, 45, 42, 38, 32, 28, 35, 40, 38, 28, 18, 8],
  ],
};

const meta: Meta<typeof Heatmap> = {
  title: 'Charts/Heatmap',
  component: Heatmap,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
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
type Story = StoryObj<typeof Heatmap>;

export const Default: Story = {
  args: {
    data: weeklyActivityData,
    showTooltip: true,
    showLabels: true,
    title: 'User Activity by Hour',
    subtitle: 'Weekly Pattern — Active Sessions',
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <Heatmap key={v} data={weeklyActivityData} variant={v} title={v} />
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
    data: weeklyActivityData,
    variant: 'bordered',
    showTooltip: true,
    title: 'Activity Heatmap',
    subtitle: 'Dark Mode Preview',
  },
};

export const EmailOpenRates: Story = {
  name: '📧 Email Open Rates',
  args: {
    data: {
      rows: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      cols: [
        '12AM', '1AM', '2AM', '3AM', '4AM', '5AM',
        '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
        '12PM', '1PM', '2PM', '3PM', '4PM', '5PM',
        '6PM', '7PM', '8PM', '9PM', '10PM', '11PM',
      ],
      values: [
        [1.2, 0.8, 0.4, 0.2, 0.3, 1.5, 5.8, 12.4, 22.1, 28.5, 31.2, 29.8, 25.4, 23.1, 24.8, 26.2, 22.5, 18.3, 14.2, 10.8, 8.2, 5.5, 3.2, 1.8],
        [1.4, 0.9, 0.5, 0.3, 0.2, 1.3, 6.2, 13.1, 23.5, 30.2, 33.8, 32.1, 27.5, 25.2, 26.8, 28.4, 24.2, 19.8, 15.5, 11.2, 8.8, 6.1, 3.8, 2.1],
        [1.5, 1.0, 0.5, 0.2, 0.3, 1.4, 6.5, 13.8, 24.2, 31.5, 35.2, 33.8, 28.8, 26.5, 28.2, 29.8, 25.5, 20.5, 16.2, 12.1, 9.2, 6.5, 4.1, 2.2],
        [1.3, 0.8, 0.4, 0.3, 0.2, 1.2, 5.5, 12.8, 22.8, 29.2, 32.5, 31.2, 26.8, 24.5, 25.8, 27.5, 23.5, 19.2, 15.1, 11.5, 8.5, 5.8, 3.5, 1.9],
        [1.1, 0.7, 0.3, 0.2, 0.2, 1.1, 4.8, 11.2, 20.5, 26.8, 29.5, 28.2, 24.2, 22.1, 23.2, 24.5, 21.2, 17.5, 15.8, 13.2, 10.5, 7.2, 4.5, 2.5],
        [2.5, 1.8, 1.2, 0.8, 0.5, 0.8, 2.2, 5.5, 10.2, 15.8, 18.5, 20.2, 22.1, 23.5, 22.8, 20.5, 17.2, 14.8, 16.5, 18.2, 17.5, 14.2, 9.8, 5.2],
        [2.2, 1.5, 1.0, 0.6, 0.4, 0.5, 1.8, 4.2, 8.5, 12.5, 15.2, 17.5, 19.8, 21.2, 20.5, 18.2, 15.5, 13.2, 15.8, 17.5, 16.8, 13.5, 8.5, 4.5],
      ],
    },
    showTooltip: true,
    showLabels: true,
    variant: 'glass',
    size: 'lg',
    animated: true,
    title: 'Email Open Rates by Time',
    subtitle: 'Percentage of Opens — Weekly Pattern',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const StorePerformance: Story = {
  name: '🏪 Store Performance',
  args: {
    data: {
      rows: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      cols: ['Downtown', 'Mall West', 'Airport', 'Suburb N', 'Suburb S', 'University', 'Harbor', 'Tech Park'],
      values: [
        [82, 71, 88, 65, 58, 72, 78, 69],
        [85, 74, 91, 68, 61, 75, 80, 72],
        [88, 78, 94, 72, 65, 79, 84, 76],
        [91, 82, 89, 75, 68, 82, 87, 80],
        [94, 85, 92, 78, 72, 85, 90, 83],
        [89, 80, 95, 82, 75, 78, 86, 79],
        [86, 76, 97, 85, 78, 68, 83, 75],
        [84, 73, 96, 83, 76, 65, 81, 73],
        [90, 79, 93, 76, 70, 82, 85, 78],
        [93, 83, 90, 74, 67, 86, 88, 81],
        [96, 88, 87, 71, 64, 89, 92, 85],
        [98, 92, 95, 68, 62, 75, 95, 88],
      ],
    },
    showTooltip: true,
    showLabels: true,
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    title: 'Store Performance Index',
    subtitle: 'Monthly Score by Location (0–100)',
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
    data: weeklyActivityData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showTooltip: true,
    showGrid: true,
    showLabels: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
