import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const BuggyComponent = () => {
  throw new Error('Something went wrong in this component!');
  return <div>This will never render</div>;
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
