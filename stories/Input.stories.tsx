import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        inputSize: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
    },
};

export const WithError: Story = {
    args: {
        label: 'Password',
        type: 'password',
        error: 'Password is required',
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Username',
        helperText: 'Choose a unique username',
    },
};

export const Small: Story = {
    args: {
        label: 'Small Input',
        inputSize: 'sm',
    },
};

export const Large: Story = {
    args: {
        label: 'Large Input',
        inputSize: 'lg',
    },
};
