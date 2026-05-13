import type { Meta, StoryObj } from '@storybook/react';
import { SecurityOTPInput } from './SecurityOTPInput';
import { useState } from 'react';

const meta = {
    title: 'Components/SecurityOTPInput',
    component: SecurityOTPInput,
    tags: ['autodocs'],
} satisfies Meta<typeof SecurityOTPInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        length: 6,
        onChange: (value) => console.log('OTP:', value),
    },
};

export const FourDigits: Story = {
    args: {
        length: 4,
        onChange: (value) => console.log('OTP:', value),
    },
};

export const WithError: Story = {
    args: {
        length: 6,
        error: true,
        onChange: (value) => console.log('OTP:', value),
    },
};

export const WithLabel: Story = {
    args: {
        length: 6,
        label: 'Enter the code sent to your phone',
        onChange: (value) => console.log('OTP:', value),
    },
};

export const Disabled: Story = {
    args: {
        length: 6,
        disabled: true,
        value: '123456',
        onChange: (value) => console.log('OTP:', value),
    },
};

export const CompleteState: Story = {
    args: {
        length: 6,
        value: '849201',
        onChange: (value) => console.log('OTP:', value),
    },
};

export const InteractiveOTP: Story = {
    render: () => {
        const [otp, setOtp] = useState('');
        const [status, setStatus] = useState<'idle' | 'verifying' | 'success' | 'error'>('idle');
        const [attempts, setAttempts] = useState(0);

        const handleChange = (value: string) => {
            setOtp(value);
            if (value.length === 6) {
                setStatus('verifying');
                setTimeout(() => {
                    if (value === '123456') {
                        setStatus('success');
                    } else {
                        setStatus('error');
                        setAttempts(prev => prev + 1);
                    }
                }, 1000);
            } else {
                setStatus('idle');
            }
        };

        return (
            <div className="space-y-4 max-w-md">
                <SecurityOTPInput
                    length={6}
                    value={status !== 'idle' && status !== 'error' ? otp : otp}
                    onChange={handleChange}
                    label={status === 'error' ? 'Invalid code. Try again.' : 'Enter 2FA code'}
                    error={status === 'error'}
                    disabled={status === 'verifying' || status === 'success'}
                />
                {status === 'error' && (
                    <p className="text-xs text-red-500 text-center">
                        Incorrect code. {3 - attempts} attempts remaining.
                    </p>
                )}
                {status === 'success' && (
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">
                        <p className="text-sm text-green-600 font-semibold">✓ Verified successfully</p>
                    </div>
                )}
                {otp.length < 6 && otp.length > 0 && (
                    <p className="text-xs text-text-secondary text-center">
                        {otp.length}/{6} digits entered
                    </p>
                )}
                <p className="text-xs text-text-tertiary text-center">Hint: Use 123456 for success</p>
            </div>
        );
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        length: 6,
        label: 'Two-Factor Authentication Code',
        onChange: (value) => console.log('OTP:', value),
    },
};

export const LargeSize: Story = {
    args: {
        length: 8,
        size: 'lg',
        label: 'Backup Recovery Code (8 digits)',
        onChange: (value) => console.log('OTP:', value),
    },
};
