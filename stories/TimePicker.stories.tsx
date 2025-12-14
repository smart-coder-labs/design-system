import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from '../components/TimePicker';
import { useState } from 'react';

const meta: Meta<typeof TimePicker> = {
    title: 'Forms/TimePicker',
    component: TimePicker,
    tags: [],
    argTypes: {
        format: {
            control: 'radio',
            options: ['12h', '24h'],
        },
        step: {
            control: 'select',
            options: [1, 5, 15, 30, 60],
        },
        disabled: {
            control: 'boolean',
        },
        error: {
            control: 'text',
        },
        helperText: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
    render: (args) => {
        const [time, setTime] = useState<string | null>(null);
        return (
            <div className="h-[300px]">
                <TimePicker
                    {...args}
                    value={time || undefined}
                    onChange={setTime}
                />
            </div>
        );
    },
    args: {
        label: 'Select Time',
        placeholder: 'Pick a time',
    },
};

export const Format24h: Story = {
    render: (args) => {
        const [time, setTime] = useState<string | null>('14:30');
        return (
            <div className="h-[300px]">
                <TimePicker
                    {...args}
                    value={time || undefined}
                    onChange={setTime}
                    format="24h"
                />
            </div>
        );
    },
    args: {
        label: 'Meeting Time (24h)',
    },
};

export const CustomStep: Story = {
    render: (args) => {
        const [time, setTime] = useState<string | null>(null);
        return (
            <div className="h-[300px]">
                <TimePicker
                    {...args}
                    value={time || undefined}
                    onChange={setTime}
                    step={5}
                    helperText="Select time in 5-minute increments"
                />
            </div>
        );
    },
    args: {
        label: 'Precise Time',
    },
};

export const WithError: Story = {
    args: {
        label: 'Invalid Time',
        error: 'Please select a valid time',
        value: '99:99',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Picker',
        disabled: true,
        value: '10:00',
    },
};
