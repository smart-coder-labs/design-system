import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'Components/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onSubmit: async (data) => {
            console.log('Login submitted:', data);
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
    },
};

export const WithError: Story = {
    args: {
        error: 'Invalid email or password. Please try again.',
        onSubmit: async (data) => {
            console.log('Login submitted:', data);
        },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
        onSubmit: async (data) => {
            console.log('Login submitted:', data);
        },
    },
};

export const WithForgotPassword: Story = {
    args: {
        onSubmit: async (data) => {
            console.log('Login submitted:', data);
        },
        onForgotPassword: () => {
            console.log('Forgot password clicked');
        },
    },
};

export const Interactive: Story = {
    render: () => {
        const handleSubmit = async (data: { email: string; password: string; rememberMe: boolean }) => {
            console.log('Login data:', data);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            alert(`Logged in as ${data.email}`);
        };

        const handleForgotPassword = () => {
            alert('Password reset link sent to your email');
        };

        return (
            <LoginForm
                onSubmit={handleSubmit}
                onForgotPassword={handleForgotPassword}
            />
        );
    },
};

export const WithValidationError: Story = {
    render: () => {
        const handleSubmit = async (data: { email: string; password: string; rememberMe: boolean }) => {
            // Simulate validation error
            throw new Error('Account locked. Please contact support.');
        };

        return (
            <LoginForm
                onSubmit={handleSubmit}
                onForgotPassword={() => console.log('Forgot password')}
            />
        );
    },
};
