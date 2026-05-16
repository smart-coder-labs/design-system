import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedInput } from './SegmentedInput';
import { useState } from 'react';

const meta = {
    title: 'Forms/SegmentedInput',
    component: SegmentedInput,
    tags: ['autodocs'],
} satisfies Meta<typeof SegmentedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        length: 6,
        onChange: (value) => console.log('Value:', value),
    },
};

export const FourSegments: Story = {
    args: {
        length: 4,
        onChange: (value) => console.log('Value:', value),
    },
};

export const CodeEntry: Story = {
    args: {
        length: 6,
        type: 'text',
        placeholder: '0',
        onChange: (value) => console.log('Verification code:', value),
    },
};

export const WithError: Story = {
    args: {
        length: 6,
        error: true,
        value: '12345',
        onChange: (value) => console.log('Value:', value),
    },
};

export const Disabled: Story = {
    args: {
        length: 6,
        disabled: true,
        value: '123456',
        onChange: (value) => console.log('Value:', value),
    },
};

export const Complete: Story = {
    args: {
        length: 6,
        value: '849201',
        onChange: (value) => console.log('Value:', value),
    },
};

export const InteractiveVerification: Story = {
    render: () => {
        const [value, setValue] = useState('');
        const [isVerified, setIsVerified] = useState(false);
        const [isError, setIsError] = useState(false);
        const handleChange = (v: string) => {
            setValue(v);
            setIsError(false);
            if (v.length === 6) {
                if (v === '000000') {
                    setIsVerified(true);
                } else {
                    setIsError(true);
                }
            }
        };
        return (
            <div className="space-y-4 max-w-md">
                {!isVerified ? (
                    <>
                        <SegmentedInput
                            length={6}
                            value={value}
                            onChange={handleChange}
                            error={isError}
                        />
                        {isError && (
                            <p className="text-xs text-red-500 text-center">Invalid code. Try 000000 to verify.</p>
                        )}
                    </>
                ) : (
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center space-y-2">
                        <p className="text-2xl">✓</p>
                        <p className="text-sm font-semibold text-green-600">Identity Verified</p>
                        <button
                            onClick={() => { setValue(''); setIsVerified(false); setIsError(false); }}
                            className="text-xs text-blue-500 hover:text-blue-600"
                        >
                            Reset
                        </button>
                    </div>
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
        length: 6,
        onChange: (value) => console.log('Value:', value),
    },
};
