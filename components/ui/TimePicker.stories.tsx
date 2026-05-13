import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';
import { useState } from 'react';

const meta = {
    title: 'Components/TimePicker',
    component: TimePicker,
    tags: ['autodocs'],
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onChange: (time) => console.log('Time:', time),
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Meeting Time',
        placeholder: 'Select time...',
        onChange: (time) => console.log('Time:', time),
    },
};

export const WithValue: Story = {
    args: {
        label: 'Scheduled Transfer',
        value: '14:30',
        onChange: (time) => console.log('Time:', time),
    },
};

export const TwelveHourFormat: Story = {
    args: {
        label: 'Appointment Time',
        value: '15:00',
        format: '12h',
        onChange: (time) => console.log('Time:', time),
    },
};

export const FifteenMinuteSteps: Story = {
    args: {
        label: 'Time Slot',
        value: '09:00',
        step: 15,
        onChange: (time) => console.log('Time:', time),
    },
};

export const WithError: Story = {
    args: {
        label: 'Departure Time',
        value: '25:00',
        error: 'Invalid time format',
        onChange: (time) => console.log('Time:', time),
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Delivery Time',
        helperText: 'Business hours: Mon-Fri, 9AM-6PM',
        onChange: (time) => console.log('Time:', time),
    },
};

export const Disabled: Story = {
    args: {
        label: 'Locked Time',
        value: '12:00',
        disabled: true,
        onChange: (time) => console.log('Time:', time),
    },
};

export const InteractiveTimeSelection: Story = {
    render: () => {
        const [time, setTime] = useState<string | null>(null);
        const [submitted, setSubmitted] = useState(false);
        return (
            <div className="space-y-4 max-w-sm">
                {!submitted ? (
                    <>
                        <TimePicker
                            label="Schedule Transfer"
                            value={time || undefined}
                            onChange={setTime}
                            step={15}
                            format="12h"
                            helperText="Transfers are processed within 2 hours"
                        />
                        <button
                            disabled={!time}
                            onClick={() => setSubmitted(true)}
                            className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50"
                        >
                            Schedule Transfer
                        </button>
                    </>
                ) : (
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center space-y-2">
                        <p className="text-2xl">✓</p>
                        <p className="text-sm font-semibold text-green-600">Transfer Scheduled</p>
                        <p className="text-xs text-text-secondary">Your transfer is scheduled for {time}</p>
                        <button onClick={() => { setSubmitted(false); setTime(null); }} className="text-xs text-blue-500 hover:underline">Reschedule</button>
                    </div>
                )}
            </div>
        );
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        label: 'Dark Mode Time Picker',
        value: '22:00',
        format: '24h',
        onChange: (time) => console.log('Time:', time),
    },
};
