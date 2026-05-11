import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta = {
    title: 'Components/Switch',
    component: Switch,
    tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        checked: false,
        label: 'Enable notifications',
    },
};

export const Checked: Story = {
    args: {
        checked: true,
        label: 'Dark mode',
        description: 'Toggle between light and dark themes',
    },
};

export const WithDescription: Story = {
    args: {
        checked: true,
        label: 'Two-factor authentication',
        description: 'Add an extra layer of security to your account',
    },
};

export const Disabled: Story = {
    args: {
        checked: false,
        disabled: true,
        label: 'Biometric login',
        description: 'Not available on this device',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4">
            <Switch size="sm" label="Small switch" defaultChecked />
            <Switch size="md" label="Medium switch (default)" defaultChecked />
            <Switch size="lg" label="Large switch" defaultChecked />
        </div>
    ),
};
