import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Forms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select date',
    placeholder: 'Pick a date',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Start date',
    value: new Date(2026, 4, 15),
  },
};

export const WithError: Story = {
  args: {
    label: 'Expiration date',
    error: 'Date cannot be in the past',
    value: new Date(2024, 0, 1),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Locked date',
    disabled: true,
    value: new Date(2026, 5, 1),
  },
};

export const Small: Story = {
  args: {
    label: 'Birth date',
    size: 'sm',
    placeholder: 'DD/MM/YYYY',
  },
};

export const Large: Story = {
  args: {
    label: 'Appointment date',
    size: 'lg',
    placeholder: 'Pick an appointment date',
  },
};

export const LongFormat: Story = {
  args: {
    label: 'Event date',
    dateFormat: 'long',
    value: new Date(2026, 11, 25),
  },
};

export const WithMinMax: Story = {
  args: {
    label: 'Booking date',
    minDate: new Date(2026, 4, 1),
    maxDate: new Date(2026, 6, 31),
    placeholder: 'Select within range',
  },
};
