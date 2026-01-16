import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundary } from '../components/ui/ErrorBoundary';
import { Button } from '../components/ui/Button';
import { useState, useEffect } from 'react';

const meta: Meta<typeof ErrorBoundary> = {
    title: 'Utils/ErrorBoundary',
    component: ErrorBoundary,
    parameters: {
        layout: 'centered',
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof ErrorBoundary>;

// A component that throws an error
const BuggyComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
    if (shouldThrow) {
        throw new Error('I crashed!');
    }
    return (
        <div className="p-6 bg-surface-success/10 border border-status-success rounded-xl text-center">
            <h3 className="text-status-success font-medium mb-2">Component Working</h3>
            <p className="text-sm text-text-secondary">No errors here.</p>
        </div>
    );
};

const ErrorBoundaryDemo = (args: any) => {
    const [shouldThrow, setShouldThrow] = useState(false);
    const [key, setKey] = useState(0); // Used to force re-mount

    const handleReset = () => {
        setShouldThrow(false);
        setKey(k => k + 1);
    };

    return (
        <div className="flex flex-col gap-6 items-center min-w-[400px]">
            <div className="flex gap-4">
                <Button 
                    variant={shouldThrow ? "secondary" : "destructive"}
                    onClick={() => setShouldThrow(true)}
                    disabled={shouldThrow}
                >
                    Trigger Error
                </Button>
                <Button 
                    variant="secondary"
                    onClick={handleReset}
                    disabled={!shouldThrow}
                >
                    Reset Demo
                </Button>
            </div>

            <div className="w-full">
                <ErrorBoundary 
                    key={key}
                    {...args}
                    onReset={() => setShouldThrow(false)}
                >
                    <BuggyComponent shouldThrow={shouldThrow} />
                </ErrorBoundary>
            </div>
        </div>
    );
};

export const Default: Story = {
    render: (args) => <ErrorBoundaryDemo {...args} />,
};

export const CustomFallback: Story = {
    render: (args) => <ErrorBoundaryDemo {...args} />,
    args: {
        fallback: (error: Error, reset: () => void) => (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <p className="font-bold">Custom Error Fallback</p>
                <p className="text-sm mb-4">{error.message}</p>
                <Button size="sm" variant="destructive" onClick={reset}>
                    Try Again
                </Button>
            </div>
        ),
    },
};
