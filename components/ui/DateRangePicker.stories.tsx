import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DateRangePicker } from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select date range',
    placeholder: 'Start — End',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Trip dates',
    value: { from: new Date(2026, 5, 10), to: new Date(2026, 5, 20) },
  },
};

export const WithError: Story = {
  args: {
    label: 'Booking period',
    error: 'End date must be after start date',
    value: { from: new Date(2026, 5, 20), to: new Date(2026, 5, 15) },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Range (disabled)',
    disabled: true,
  },
};

export const WithMinMax: Story = {
  args: {
    label: 'Quarter range',
    minDate: new Date(2026, 0, 1),
    maxDate: new Date(2026, 11, 31),
    placeholder: 'Select within 2026',
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Compact',
    size: 'sm',
    placeholder: 'From — To',
  },
};

export const ShortFormat: Story = {
  args: {
    label: 'Short format',
    dateFormat: 'short',
    value: { from: new Date(2026, 3, 1), to: new Date(2026, 3, 15) },
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
