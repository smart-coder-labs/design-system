import type { Meta, StoryObj } from '@storybook/react';
import { SecurityActivityLog } from './SecurityActivityLog';
import { useState } from 'react';

const meta = {
    title: 'Data Display/SecurityActivityLog',
    component: SecurityActivityLog,
    tags: ['autodocs'],
} satisfies Meta<typeof SecurityActivityLog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        activities: [
            { id: '1', type: 'login', description: 'Login from Chrome on macOS', timestamp: '2 minutes ago', ip: '192.168.1.100', location: 'New York, US', status: 'success' },
            { id: '2', type: 'login', description: 'Login from Safari on iOS', timestamp: '1 hour ago', ip: '203.0.113.45', location: 'San Francisco, US', status: 'success' },
            { id: '3', type: 'login_attempt', description: 'Failed login attempt', timestamp: '3 hours ago', ip: '198.51.100.22', location: 'Moscow, RU', status: 'failed' },
            { id: '4', type: 'password_change', description: 'Password changed', timestamp: '1 day ago', ip: '192.168.1.100', location: 'New York, US', status: 'success' },
            { id: '5', type: 'two_factor', description: '2FA enabled', timestamp: '3 days ago', ip: '192.168.1.100', location: 'New York, US', status: 'success' },
        ],
    },
};

export const WithDeviceInfo: Story = {
    args: {
        activities: [
            { id: '1', type: 'login', description: 'Chrome on Windows 11', timestamp: '5m ago', ip: '192.168.1.100', device: 'Windows Desktop', location: 'Austin, TX', status: 'success' },
            { id: '2', type: 'login', description: 'Safari on iPhone 15', timestamp: '2h ago', ip: '203.0.113.50', device: 'iPhone 15 Pro', location: 'Austin, TX', status: 'success' },
            { id: '3', type: 'api_access', description: 'API key: trading-bot-v2', timestamp: '4h ago', ip: '10.0.0.5', device: 'API Server', location: 'AWS us-east-1', status: 'success' },
            { id: '4', type: 'logout', description: 'Session ended (timeout)', timestamp: '6h ago', ip: '192.168.1.100', device: 'Windows Desktop', location: 'Austin, TX', status: 'warning' },
            { id: '5', type: 'login_attempt', description: 'Suspicious login attempt - wrong password 3x', timestamp: '12h ago', ip: '45.33.32.156', device: 'Unknown', location: 'Beijing, CN', status: 'failed' },
            { id: '6', type: 'security_question', description: 'Security questions updated', timestamp: '2d ago', ip: '192.168.1.100', device: 'Windows Desktop', location: 'Austin, TX', status: 'success' },
            { id: '7', type: 'two_factor', description: '2FA method added: Authenticator App', timestamp: '5d ago', ip: '192.168.1.100', device: 'Chrome', location: 'Austin, TX', status: 'success' },
        ],
    },
};

export const SuspicousActivity: Story = {
    args: {
        activities: [
            { id: '1', type: 'login_attempt', description: 'Brute force attempt blocked', timestamp: '1m ago', ip: '185.220.101.45', location: 'Tor Exit Node', status: 'failed' },
            { id: '2', type: 'login_attempt', description: 'Failed login from unknown device', timestamp: '5m ago', ip: '89.45.67.123', location: 'Moscow, RU', status: 'failed' },
            { id: '3', type: 'login_attempt', description: 'Failed login attempt', timestamp: '10m ago', ip: '89.45.67.123', location: 'Moscow, RU', status: 'failed' },
            { id: '4', type: 'password_change', description: 'Password reset requested', timestamp: '30m ago', ip: '192.168.1.100', location: 'New York, US', status: 'warning' },
            { id: '5', type: 'settings_change', description: 'Notification preferences changed', timestamp: '1h ago', ip: '192.168.1.100', location: 'New York, US', status: 'success' },
        ],
    },
};

export const InteractiveLog: Story = {
    render: () => {
        const [activities, setActivities] = useState([
            { id: '1', type: 'login' as const, description: 'Login from Chrome', timestamp: '2m ago', ip: '192.168.1.100', location: 'New York, US', status: 'success' as const },
        ]);
        const logTypes = [
            { type: 'login' as const, desc: 'Login from Safari', status: 'success' as const },
            { type: 'login_attempt' as const, desc: 'Failed login attempt', status: 'failed' as const },
            { type: 'password_change' as const, desc: 'Password changed', status: 'success' as const },
        ];
        return (
            <div className="space-y-4">
                <SecurityActivityLog activities={activities} />
                <div className="flex gap-2">
                    {logTypes.map((log, i) => (
                        <button
                            key={i}
                            onClick={() => setActivities(prev => [{
                                id: String(Date.now() + i),
                                type: log.type,
                                description: log.desc,
                                timestamp: 'Just now',
                                ip: '192.168.1.' + (100 + i),
                                location: 'New York, US',
                                status: log.status,
                            }, ...prev])}
                            className="px-3 py-1.5 text-xs bg-surface-secondary rounded-lg hover:bg-surface-tertiary"
                        >
                            + {log.desc.split(' ').slice(0, 2).join(' ')}
                        </button>
                    ))}
                </div>
            </div>
        );
    },
};

export const Empty: Story = {
    args: {
        activities: [],
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        activities: [
            { id: '1', type: 'login', description: 'Login from Firefox on Linux', timestamp: '5m ago', ip: '192.168.1.100', location: 'Berlin, DE', status: 'success' },
            { id: '2', type: 'login_attempt', description: 'Failed login from unknown IP', timestamp: '1h ago', ip: '78.46.89.12', location: 'Warsaw, PL', status: 'failed' },
            { id: '3', type: 'two_factor', description: '2FA backup code used', timestamp: '3h ago', ip: '192.168.1.100', location: 'Berlin, DE', status: 'warning' },
        ],
    },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'SecurityActivityLog used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};
