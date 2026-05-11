import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { useState } from 'react';

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
        onCheckedChange: (checked) => console.log('Switch:', checked),
    },
};

export const Checked: Story = {
    args: {
        checked: true,
        onCheckedChange: (checked) => console.log('Switch:', checked),
    },
};

export const WithLabel: Story = {
    args: {
        checked: false,
        label: 'Enable notifications',
        onCheckedChange: (checked) => console.log('Switch:', checked),
    },
};

export const WithDescription: Story = {
    args: {
        checked: true,
        label: 'Two-Factor Authentication',
        description: 'Add an extra layer of security to your account',
        onCheckedChange: (checked) => console.log('2FA:', checked),
    },
};

export const Disabled: Story = {
    args: {
        checked: false,
        disabled: true,
        label: 'Unavailable option',
        description: 'This feature requires a premium plan',
        onCheckedChange: (checked) => console.log('Switch:', checked),
    },
};

export const DisabledChecked: Story = {
    args: {
        checked: true,
        disabled: true,
        label: 'Auto-invest (active)',
        description: 'This setting is locked while investing is active',
        onCheckedChange: (checked) => console.log('Switch:', checked),
    },
};

export const InteractiveSettings: Story = {
    render: () => {
        const [settings, setSettings] = useState({
            notifications: true,
            darkMode: false,
            twoFactor: true,
            autoInvest: false,
            roundUp: true,
        });
        return (
            <div className="max-w-md space-y-2 border border-border-primary rounded-xl p-4">
                <h3 className="text-sm font-semibold mb-3">Account Settings</h3>
                <Switch
                    checked={settings.notifications}
                    label="Push Notifications"
                    description="Get alerts for transactions and updates"
                    onCheckedChange={(v) => setSettings(s => ({ ...s, notifications: v }))}
                />
                <Switch
                    checked={settings.darkMode}
                    label="Dark Mode"
                    description="Use dark theme across the app"
                    onCheckedChange={(v) => setSettings(s => ({ ...s, darkMode: v }))}
                />
                <Switch
                    checked={settings.twoFactor}
                    label="Two-Factor Auth"
                    description="Extra security for your account"
                    onCheckedChange={(v) => setSettings(s => ({ ...s, twoFactor: v }))}
                />
                <Switch
                    checked={settings.autoInvest}
                    label="Auto-Invest"
                    description="Automatically invest spare cash"
                    onCheckedChange={(v) => setSettings(s => ({ ...s, autoInvest: v }))}
                />
                <Switch
                    checked={settings.roundUp}
                    label="Round-Up Savings"
                    description="Save spare change from purchases"
                    onCheckedChange={(v) => setSettings(s => ({ ...s, roundUp: v }))}
                />
            </div>
        );
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-4">
            <Switch size="sm" checked={true} label="Small" onCheckedChange={() => {}} />
            <Switch size="md" checked={true} label="Medium" onCheckedChange={() => {}} />
            <Switch size="lg" checked={true} label="Large" onCheckedChange={() => {}} />
        </div>
    ),
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        checked: true,
        label: 'Dark Mode Toggle',
        description: 'Switch themes effortlessly',
        onCheckedChange: (checked) => console.log('Switch:', checked),
    },
};

export const BankingToggles: Story = {
    render: () => (
        <div className="space-y-4 max-w-sm">
            <Switch checked={true} label="Freeze Card" description="Temporarily block all card transactions" size="md" />
            <Switch checked={false} label="International Payments" description="Allow transactions from foreign merchants" size="md" />
            <Switch checked={true} label="Online Purchases" description="Enable card for online transactions" size="md" />
            <Switch checked={true} label="Transaction Alerts" description="Get notified of all transactions over $50" size="md" />
            <Switch checked={false} disabled={true} label="Biometric Login" description="Not available on this device" size="md" />
        </div>
    ),
};

export const NotificationPreferences: Story = {
    render: () => (
        <div className="space-y-4 max-w-sm p-4 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Notification Preferences</h3>
            <Switch checked={true} label="Push Notifications" />
            <Switch checked={false} label="SMS Alerts" />
            <Switch checked={true} label="Email Summary" />
            <Switch checked={true} label="Fraud Alerts" />
            <Switch checked={false} label="Marketing Emails" />
        </div>
    ),
};
