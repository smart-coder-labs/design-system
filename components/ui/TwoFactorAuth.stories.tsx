import type { Meta, StoryObj } from '@storybook/react';
import { TwoFactorAuth } from './TwoFactorAuth';
import { useState } from 'react';

const meta = {
    title: 'Components/TwoFactorAuth',
    component: TwoFactorAuth,
    tags: ['autodocs'],
} satisfies Meta<typeof TwoFactorAuth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onVerify: (code) => {
            console.log('Verifying:', code);
            return code === '123456';
        },
    },
};

export const WithBackupCodes: Story = {
    args: {
        backupCodes: ['ABCD-EFGH', 'IJKL-MNOP', 'QRST-UVWX', 'YZ12-3456'],
        onVerify: (code) => {
            console.log('Verifying:', code);
            return code === '123456';
        },
    },
};

export const WithError: Story = {
    args: {
        errorMessage: 'Invalid or expired code. Please try again.',
        onVerify: (code) => {
            console.log('Verifying:', code);
            return false;
        },
    },
};

export const Interactive2FA: Story = {
    render: () => {
        const [attempts, setAttempts] = useState(0);
        const [locked, setLocked] = useState(false);
        const [success, setSuccess] = useState(false);
        const handleVerify = (code: string) => {
            if (code === '000000') {
                setSuccess(true);
                return true;
            }
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            if (newAttempts >= 3) {
                setLocked(true);
            }
            return false;
        };
        if (success) {
            return (
                <div className="p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-center space-y-3">
                    <p className="text-3xl">✓</p>
                    <h3 className="text-lg font-bold text-green-700 dark:text-green-300">2FA Verified</h3>
                    <p className="text-sm text-green-600">You have been authenticated successfully.</p>
                    <button onClick={() => { setSuccess(false); setAttempts(0); setLocked(false); }} className="text-xs text-blue-500">Reset</button>
                </div>
            );
        }
        return (
            <div className="space-y-4">
                <TwoFactorAuth
                    onVerify={handleVerify}
                    errorMessage={locked ? 'Account locked. Please use a backup code or contact support.' : attempts > 0 ? `Invalid code (${attempts}/3 attempts)` : undefined}
                    backupCodes={locked ? ['ABCD-EFGH', 'IJKL-MNOP'] : undefined}
                />
                {locked && (
                    <p className="text-xs text-text-secondary text-center">
                        Hint: Use backup code ABCD-EFGH
                    </p>
                )}
                {!locked && (
                    <p className="text-xs text-text-tertiary text-center">Hint: Use code 000000 for success</p>
                )}
            </div>
        );
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        onVerify: (code) => {
            console.log('Verifying:', code);
            return true;
        },
    },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'TwoFactorAuth in a loading state, showing skeleton or placeholder UI while data is being fetched.',
      },
    },
  },
};
