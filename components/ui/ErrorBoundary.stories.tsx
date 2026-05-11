import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const BuggyComponent = () => {
    throw new Error('Something went wrong in this component!');
    return <div>This will never render</div>;
};

const BuggyAsyncComponent = () => {
    // Simulate an issue that would trigger a boundary
    throw new TypeError('Cannot read properties of undefined (reading \'balance\')');
    return <div>Broken</div>;
};

const NetworkErrorComponent = () => {
    throw new Error('NetworkError: Failed to fetch transaction history. Status: 503');
};

const meta: Meta<typeof ErrorBoundary> = {
    title: 'Components/ErrorBoundary',
    component: ErrorBoundary,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <div className="p-8 text-center text-text-primary">This renders normally.</div>,
    },
};

export const WithError: Story = {
    args: {
        children: <BuggyComponent />,
    },
};

export const WithCustomFallback: Story = {
    args: {
        children: <BuggyComponent />,
        fallback: (error, reset) => (
            <div className="flex flex-col items-center justify-center p-12 bg-surface-primary rounded-2xl m-8">
                <div className="w-16 h-16 bg-status-error/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Custom Error UI</h3>
                <p className="text-sm text-text-secondary mb-4">{error?.message || 'An error occurred'}</p>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-accent-blue text-white rounded-xl text-sm font-semibold"
                >
                    Try Again
                </button>
            </div>
        ),
    },
};

export const FintechCustomFallback: Story = {
    args: {
        children: <BuggyAsyncComponent />,
        fallback: (error, reset) => (
            <div className="flex flex-col items-center justify-center p-10 bg-surface-primary rounded-2xl m-8 max-w-md mx-auto">
                <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl">💳</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Transaction Unavailable</h3>
                <p className="text-sm text-text-secondary mb-2 text-center">
                    We're having trouble loading your recent transactions.
                </p>
                <p className="text-xs text-text-tertiary mb-6 text-center font-mono bg-surface-secondary px-3 py-1 rounded-lg">
                    {error?.message || 'Unknown error'}
                </p>
                <div className="flex gap-3">
                    <button
                        onClick={reset}
                        className="px-5 py-2.5 bg-accent-blue text-white rounded-xl text-sm font-semibold hover:bg-accent-blueHover transition-colors"
                    >
                        Retry
                    </button>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-5 py-2.5 bg-surface-secondary text-text-primary rounded-xl text-sm font-semibold border border-border-primary hover:bg-surface-tertiary transition-colors"
                    >
                        Refresh Page
                    </button>
                </div>
            </div>
        ),
    },
};

export const NetworkErrorFintech: Story = {
    args: {
        children: <NetworkErrorComponent />,
    },
};

export const LoadingSkeletonThenError: Story = {
    args: {
        children: <BuggyComponent />,
        fallback: (
            <div className="flex flex-col items-center justify-center p-12 bg-surface-primary rounded-2xl m-8">
                <div className="animate-spin w-10 h-10 border-4 border-accent-blue border-t-transparent rounded-full mb-4" />
                <p className="text-sm text-text-secondary">Recovering connection...</p>
            </div>
        ),
    },
};

export const MinimalistFallback: Story = {
    args: {
        children: <BuggyComponent />,
        fallback: (error, reset) => (
            <div className="flex flex-col items-center gap-4 p-8">
                <span className="text-3xl">😵</span>
                <p className="text-sm text-text-secondary">{error?.message}</p>
                <button
                    onClick={reset}
                    className="text-sm text-accent-blue underline underline-offset-2"
                >
                    Try again
                </button>
            </div>
        ),
    },
};

export const WithOnErrorCallback: Story = {
    args: {
        children: <BuggyComponent />,
        onError: (error) => {
            console.log('[Storybook] Error logged:', error.message);
            alert(`Error caught: ${error.message}`);
        },
    },
};

export const ResetAfterError: Story = {
    args: {
        children: <BuggyComponent />,
        fallback: (error, reset) => (
            <div className="flex flex-col items-center gap-4 p-12">
                <span className="text-6xl">🔁</span>
                <p className="text-text-secondary text-sm">Hit reset to recover (this component will re-render and throw again)</p>
                <button
                    onClick={reset}
                    className="px-6 py-2 bg-accent-blue text-white rounded-xl text-sm font-semibold"
                >
                    Reset
                </button>
            </div>
        ),
    },
};
