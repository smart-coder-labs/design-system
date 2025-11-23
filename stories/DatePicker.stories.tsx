import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../components/DatePicker';

const meta: Meta<typeof DatePicker> = {
    title: 'Forms/DatePicker',
    component: DatePicker,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'date' },
        minDate: { control: 'date' },
        maxDate: { control: 'date' },
        onChange: { action: 'changed' },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        dateFormat: {
            control: 'select',
            options: ['short', 'medium', 'long'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
    args: {
        label: 'Select Date',
        placeholder: 'Choose a date',
    },
    render: (args) => {
        const [date, setDate] = React.useState<Date | null>(null);
        return (
            <div className="min-h-[400px] p-4">
                <DatePicker
                    {...args}
                    value={date || undefined}
                    onChange={setDate}
                />
            </div>
        );
    },
};

export const WithInitialValue: Story = {
    args: {
        label: 'Birth Date',
        value: new Date(),
    },
    render: (args) => {
        const [date, setDate] = React.useState<Date | null>(args.value || new Date());
        return (
            <div className="min-h-[400px] p-4">
                <DatePicker
                    {...args}
                    value={date || undefined}
                    onChange={setDate}
                />
            </div>
        );
    },
};

export const DateRange: Story = {
    args: {
        label: 'Appointment Date',
        helperText: 'Select a date within the next 30 days',
        minDate: new Date(),
        maxDate: new Date(new Date().setDate(new Date().getDate() + 30)),
    },
    render: (args) => {
        const [date, setDate] = React.useState<Date | null>(null);
        return (
            <div className="min-h-[400px] p-4">
                <DatePicker
                    {...args}
                    value={date || undefined}
                    onChange={setDate}
                />
            </div>
        );
    },
};

export const WithError: Story = {
    args: {
        label: 'Date',
        error: 'Please select a valid date',
    },
    render: (args) => {
        const [date, setDate] = React.useState<Date | null>(null);
        return (
            <div className="min-h-[400px] p-4">
                <DatePicker
                    {...args}
                    value={date || undefined}
                    onChange={setDate}
                />
            </div>
        );
    },
};

export const Sizes: Story = {
    render: () => {
        const [date, setDate] = React.useState<Date | null>(null);
        return (
            <div className="flex flex-col gap-8 min-h-[500px] p-4">
                <DatePicker
                    label="Small"
                    size="sm"
                    value={date || undefined}
                    onChange={setDate}
                />
                <DatePicker
                    label="Medium"
                    size="md"
                    value={date || undefined}
                    onChange={setDate}
                />
                <DatePicker
                    label="Large"
                    size="lg"
                    value={date || undefined}
                    onChange={setDate}
                />
            </div>
        );
    },
};

export const Formats: Story = {
    render: () => {
        const [date, setDate] = React.useState<Date | null>(new Date());
        return (
            <div className="flex flex-col gap-8 min-h-[500px] p-4">
                <DatePicker
                    label="Short Format"
                    dateFormat="short"
                    value={date || undefined}
                    onChange={setDate}
                />
                <DatePicker
                    label="Medium Format"
                    dateFormat="medium"
                    value={date || undefined}
                    onChange={setDate}
                />
                <DatePicker
                    label="Long Format"
                    dateFormat="long"
                    value={date || undefined}
                    onChange={setDate}
                />
            </div>
        );
    },
};
