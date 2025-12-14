import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../components/Switch';
import React, { useState } from 'react';

const meta: Meta<typeof Switch> = {
    title: 'Forms/Switch',
    component: Switch,
    tags: [],
    argTypes: {
        size: {
            control: 'radio',
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    render: (args) => {
        const [checked, setChecked] = useState(false);
        return <Switch {...args} checked={checked} onCheckedChange={setChecked} />;
    },
    args: {
        label: 'Enable notifications',
    },
};

export const WithDescription: Story = {
    render: (args) => {
        const [checked, setChecked] = useState(false);
        return <Switch {...args} checked={checked} onCheckedChange={setChecked} />;
    },
    args: {
        label: 'Dark Mode',
        description: 'Toggle between light and dark theme',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Switch',
        disabled: true,
        checked: true,
    },
};
