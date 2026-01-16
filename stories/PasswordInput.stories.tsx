import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '../components/ui/PasswordInput';
import { useState } from 'react';

const meta: Meta<typeof PasswordInput> = {
    title: 'Forms/PasswordInput',
    component: PasswordInput,
    tags: [],
    argTypes: {
        showStrengthMeter: {
            control: 'boolean',
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
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <div className="max-w-sm">
                <PasswordInput
                    {...args}
                    value={value}
                    onChange={setValue}
                />
            </div>
        );
    },
    args: {
        label: 'Password',
        placeholder: 'Enter your password',
    },
};

export const WithoutStrengthMeter: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <div className="max-w-sm">
                <PasswordInput
                    {...args}
                    value={value}
                    onChange={setValue}
                    showStrengthMeter={false}
                />
            </div>
        );
    },
    args: {
        label: 'Simple Password Field',
    },
};

export const CustomRequirements: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <div className="max-w-sm">
                <PasswordInput
                    {...args}
                    value={value}
                    onChange={setValue}
                    strengthRequirements={[
                        { regex: /.{12,}/, label: 'At least 12 characters' },
                        { regex: /[!@#$%^&*]/, label: 'Contains a special symbol (!@#$%^&*)' },
                        { regex: /[0-9]{2,}/, label: 'Contains at least 2 numbers' },
                    ]}
                />
            </div>
        );
    },
    args: {
        label: 'High Security Password',
    },
};

export const WithError: Story = {
    render: (args) => {
        const [value, setValue] = useState('weak');
        return (
            <div className="max-w-sm">
                <PasswordInput
                    {...args}
                    value={value}
                    onChange={setValue}
                />
            </div>
        );
    },
    args: {
        label: 'Login',
        error: 'Incorrect password',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Input',
        disabled: true,
        value: 'password123',
    },
};
