import type { Meta, StoryObj } from '@storybook/react';
import { OTPInput } from '../components/OTPInput';
import { useState } from 'react';

const meta: Meta<typeof OTPInput> = {
    title: 'Forms/OTPInput',
    component: OTPInput,
    tags: ['autodocs'],
    argTypes: {
        length: {
            control: { type: 'number', min: 4, max: 8 },
        },
        groupSize: {
            control: { type: 'number', min: 0, max: 8 },
        },
        disabled: {
            control: 'boolean',
        },
        error: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof OTPInput>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <div className="flex flex-col items-center gap-4">
                <OTPInput
                    {...args}
                    value={value}
                    onChange={setValue}
                    onComplete={(val) => alert(`Completed: ${val}`)}
                />
                <p className="text-sm text-text-tertiary">
                    Current value: {value}
                </p>
            </div>
        );
    },
    args: {
        length: 6,
        groupSize: 3,
    },
};

export const FourDigits: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <OTPInput
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    },
    args: {
        length: 4,
        groupSize: 2,
    },
};

export const NoSeparator: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <OTPInput
                {...args}
                value={value}
                onChange={setValue}
            />
        );
    },
    args: {
        length: 6,
        groupSize: 0, // Disable grouping
    },
};

export const WithError: Story = {
    args: {
        length: 6,
        error: true,
        value: '123',
    },
};

export const Disabled: Story = {
    args: {
        length: 6,
        disabled: true,
        value: '123456',
    },
};
