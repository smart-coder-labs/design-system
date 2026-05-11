import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';

const meta = {
    title: 'Components/TimePicker',
    component: TimePicker,
    tags: ['autodocs'],
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Meeting time',
        placeholder: 'Select time',
        format: '12h',
        step: 15,
    },
};

export const TwentyFourHour: Story = {
    args: {
        label: 'Departure time',
        placeholder: 'HH:mm',
        format: '24h',
        step: 5,
    },
};

export const WithValue: Story = {
    args: {
        label: 'Schedule payment',
        value: '14:30',
        format: '24h',
        step: 30,
    },
};

export const WithError: Story = {
    args: {
        label: 'Time',
        value: '25:00',
        error: 'Invalid time format',
        format: '24h',
        step: 15,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Start time',
        value: '09:00',
        disabled: true,
        format: '12h',
        step: 15,
    },
};
