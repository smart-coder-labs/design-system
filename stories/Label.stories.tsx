import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../components/ui/Label';
import { Input } from '../components/ui/Input';

const meta: Meta<typeof Label> = {
    title: 'Typography/Label',
    component: Label,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A semantic wrapper around the Text component for form labels.',
            },
        },
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
    args: {
        children: 'Email Address',
        htmlFor: 'email',
    },
};

export const Required: Story = {
    args: {
        children: 'Password',
        htmlFor: 'password',
        required: true,
    },
};

export const WithInput: Story = {
    render: () => (
        <div className="w-72">
            <Label htmlFor="username" required>Username</Label>
            <Input id="username" placeholder="Enter username" />
        </div>
    ),
};
