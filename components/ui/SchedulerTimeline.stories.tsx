import type { Meta, StoryObj } from '@storybook/react';
import { SchedulerTimeline } from './SchedulerTimeline';

const meta = {
  title: 'Components/SchedulerTimeline',
  component: SchedulerTimeline,
  tags: ['autodocs'],
} satisfies Meta<typeof SchedulerTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    events: [
      { id: '1', title: 'BTC Purchase', start: '2024-01-15T09:00', end: '2024-01-15T09:30', type: 'buy' },
      { id: '2', title: 'ETH Swap', start: '2024-01-15T10:00', end: '2024-01-15T10:15', type: 'swap' },
      { id: '3', title: 'Portfolio Review', start: '2024-01-15T14:00', end: '2024-01-15T15:00', type: 'review' },
    ],
    startDate: '2024-01-15',
    endDate: '2024-01-15',
  },
};

export const MultiDay: Story = {
  args: {
    events: [
      { id: '1', title: 'DCA BTC', start: '2024-01-15T08:00', end: '2024-01-15T08:00', type: 'buy' },
      { id: '2', title: 'DCA ETH', start: '2024-01-16T08:00', end: '2024-01-16T08:00', type: 'buy' },
      { id: '3', title: 'Report Due', start: '2024-01-17T12:00', end: '2024-01-17T13:00', type: 'review' },
      { id: '4', title: 'Tax Filing', start: '2024-01-16T09:00', end: '2024-01-16T11:00', type: 'review' },
    ],
    startDate: '2024-01-15',
    endDate: '2024-01-17',
    view: 'day',
  },
};

export const WeeklyView: Story = {
  args: {
    events: [
      { id: '1', title: 'Marketing Q1', start: '2024-02-05T09:00', end: '2024-02-09T17:00', type: 'project' },
      { id: '2', title: 'Standup', start: '2024-02-05T09:30', end: '2024-02-05T10:00', type: 'meeting' },
    ],
    startDate: '2024-02-05',
    endDate: '2024-02-11',
    view: 'week',
  },
};

export const Empty: Story = {
  args: {
    events: [],
    startDate: '2024-01-15',
    endDate: '2024-01-15',
  },
};
