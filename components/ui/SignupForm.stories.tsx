import type { Meta, StoryObj } from '@storybook/react';
import { SignupForm } from './SignupForm';

const meta = {
    title: 'Components/SignupForm',
    component: SignupForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onSubmit: async (data) => {
            console.log('Signup submitted:', data);
            await new Promise(resolve => setTimeout(resolve, 1000));
        },
    },
};

export const WithError: Story = {
    args: {
        error: 'This email is already registered. Please use a different email or sign in.',
        onSubmit: async (data) => {
            console.log('Signup submitted:', data);
        },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
        onSubmit: async (data) => {
            console.log('Signup submitted:', data);
        },
    },
};

export const Interactive: Story = {
    render: () => {
        const handleSubmit = async (data: {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
            acceptTerms: boolean
        }) => {
            console.log('Signup data:', data);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            alert(`Account created for ${data.name} (${data.email})`);
        };

        return (
            <SignupForm onSubmit={handleSubmit} />
        );
    },
};

export const WithValidationError: Story = {
    render: () => {
        const handleSubmit = async (data: {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
            acceptTerms: boolean
        }) => {
            // Simulate validation error
            if (data.email.includes('test')) {
                throw new Error('Email domain not allowed for registration');
            }
            alert('Account created successfully!');
        };

        return (
            <SignupForm onSubmit={handleSubmit} />
        );
    },
};

export const PasswordMismatch: Story = {
    render: () => {
        const handleSubmit = async (data: {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
            acceptTerms: boolean
        }) => {
            console.log('This should not be called if passwords mismatch');
        };

        return (
            <SignupForm
                onSubmit={handleSubmit}
                error="Passwords do not match"
            />
        );
    },
};

export const WeakPassword: Story = {
    render: () => {
        const handleSubmit = async (data: {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
            acceptTerms: boolean
        }) => {
            console.log('This should not be called with weak password');
        };

        return (
            <SignupForm
                onSubmit={handleSubmit}
                error="Password must be at least 8 characters"
            />
        );
    },
};
