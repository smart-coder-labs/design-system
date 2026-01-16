import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from '../components/ui/DateRangePicker';
import { useState } from 'react';

const meta: Meta<typeof DateRangePicker> = {
    title: 'Forms/DateRangePicker',
    component: DateRangePicker,
    tags: [],
    argTypes: {
        dateFormat: {
            control: 'select',
            options: ['short', 'medium', 'long'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
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
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState<{ from: Date | null; to: Date | null }>({
            from: null,
            to: null,
        });
        return (
            <div className="h-[400px]">
                <DateRangePicker
                    {...args}
                    value={value}
                    onChange={setValue}
                />
            </div>
        );
    },
    args: {
        label: 'Select Date Range',
        placeholder: 'Pick a range',
    },
};

export const WithInitialValue: Story = {
    render: (args) => {
        const today = new Date();
        const nextWeek = new Date(today);
        nextWeek.setDate(today.getDate() + 7);

        const [value, setValue] = useState<{ from: Date | null; to: Date | null }>({
            from: today,
            to: nextWeek,
        });

        return (
            <div className="h-[400px]">
                <DateRangePicker
                    {...args}
                    value={value}
                    onChange={setValue}
                />
            </div>
        );
    },
    args: {
        label: 'Trip Dates',
    },
};

export const WithConstraints: Story = {
    render: (args) => {
        const [value, setValue] = useState<{ from: Date | null; to: Date | null }>({
            from: null,
            to: null,
        });
        const minDate = new Date();
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 2);

        return (
            <div className="h-[400px]">
                <DateRangePicker
                    {...args}
                    value={value}
                    onChange={setValue}
                    minDate={minDate}
                    maxDate={maxDate}
                    helperText="Select a range within the next 2 months"
                />
            </div>
        );
    },
    args: {
        label: 'Booking Period',
    },
};

export const WithError: Story = {
    args: {
        label: 'Invalid Range',
        error: 'Please select a valid date range',
        value: { from: null, to: null },
    },
};

export const Small: Story = {
    render: (args) => {
        const [value, setValue] = useState<{ from: Date | null; to: Date | null }>({
            from: null,
            to: null,
        });
        return (
            <div className="h-[400px]">
                <DateRangePicker
                    {...args}
                    value={value}
                    onChange={setValue}
                    size="sm"
                />
            </div>
        );
    },
    args: {
        label: 'Small Picker',
    },
};

export const Large: Story = {
    render: (args) => {
        const [value, setValue] = useState<{ from: Date | null; to: Date | null }>({
            from: null,
            to: null,
        });
        return (
            <div className="h-[400px]">
                <DateRangePicker
                    {...args}
                    value={value}
                    onChange={setValue}
                    size="lg"
                />
            </div>
        );
    },
    args: {
        label: 'Large Picker',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Picker',
        disabled: true,
        value: { from: new Date(), to: new Date() },
    },
};
