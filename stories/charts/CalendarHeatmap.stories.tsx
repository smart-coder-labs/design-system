import type { Meta, StoryObj } from '@storybook/react';
import { CalendarHeatmap } from '../../components/ui/charts/CalendarHeatmap';

const generateActivityData = (days: number, seed: number) => {
  const data: Array<{ date: string; value: number }> = [];
  const startDate = new Date(2024, 0, 1);
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const baseLine = isWeekend ? 2 : 6;
    const seasonal = Math.sin((i + seed) * 0.05) * 3;
    const spike = (i % 14 < 3) ? 4 : 0;
    const noise = Math.abs(Math.sin(i * 1.7 + seed) * 5);
    const value = Math.max(0, Math.round(baseLine + seasonal + spike + noise));
    data.push({ date: `${yyyy}-${mm}-${dd}`, value: Math.min(value, 15) });
  }
  return data;
};

const ninetyDayData = generateActivityData(90, 42);

const meta: Meta<typeof CalendarHeatmap> = {
  title: 'Charts/CalendarHeatmap',
  component: CalendarHeatmap,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
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
type Story = StoryObj<typeof CalendarHeatmap>;

export const Default: Story = {
  args: {
    data: ninetyDayData,
    title: 'Activity Overview',
    subtitle: 'Jan – Mar 2024 — 90-Day Window',
    showTooltip: true,
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <CalendarHeatmap key={v} data={ninetyDayData} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      <CalendarHeatmap data={ninetyDayData} size="sm" title="Small" variant="bordered" />
      <CalendarHeatmap data={ninetyDayData} size="md" title="Medium" variant="bordered" />
      <CalendarHeatmap data={ninetyDayData} size="lg" title="Large" variant="bordered" />
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
    data: ninetyDayData,
    variant: 'bordered',
    title: 'Activity Overview',
    subtitle: 'Dark Mode Preview',
  },
};

export const GitHubContributionActivity: Story = {
  name: '💻 GitHub Contribution Activity',
  args: {
    data: generateActivityData(365, 17),
    variant: 'glass',
    size: 'lg',
    animated: true,
    interactive: true,
    showTooltip: true,
    title: 'GitHub Contribution Activity',
    subtitle: '2024 — 1,247 contributions in the last year',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: ninetyDayData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showTooltip: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
