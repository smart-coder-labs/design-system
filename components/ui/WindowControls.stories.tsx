import type { Meta, StoryObj } from '@storybook/react';
import { WindowControls } from './WindowControls';
import { useState } from 'react';

const meta = {
    title: 'Components/WindowControls',
    component: WindowControls,
    tags: ['autodocs'],
} satisfies Meta<typeof WindowControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        onClose: () => alert('Close window'),
        onMinimize: () => alert('Minimize window'),
        onMaximize: () => alert('Maximize window'),
    },
};

export const MinimizeOnly: Story = {
    args: {
        showClose: false,
        showMaximize: false,
        onMinimize: () => alert('Minimize window'),
    },
};

export const CloseOnly: Story = {
    args: {
        showMinimize: false,
        showMaximize: false,
        onClose: () => alert('Close window'),
    },
};

export const NoTitleBar: Story = {
    render: () => (
        <div className="border border-border-primary rounded-xl overflow-hidden">
            <WindowControls
                onClose={() => alert('Close')}
                onMinimize={() => alert('Minimize')}
                onMaximize={() => alert('Maximize')}
            />
            <div className="p-4">
                <h3 className="text-sm font-semibold">Transaction Details</h3>
                <p className="text-xs text-text-secondary mt-1">$5,000 to Alice Johnson</p>
            </div>
        </div>
    ),
};

export const InteractiveWindow: Story = {
    render: () => {
        const [state, setState] = useState<'open' | 'minimized' | 'maximized' | 'closed'>('open');
        if (state === 'closed') {
            return (
                <div className="p-8 text-center text-sm text-text-secondary space-y-2">
                    <p>Window was closed.</p>
                    <button onClick={() => setState('open')} className="text-blue-500 hover:underline">Reopen</button>
                </div>
            );
        }
        return (
            <div className={`border border-border-primary rounded-xl overflow-hidden transition-all ${state === 'maximized' ? 'fixed inset-4 z-50' : 'max-w-md'}`}>
                <WindowControls
                    onClose={() => setState('closed')}
                    onMinimize={() => setState('minimized')}
                    onMaximize={() => setState(state === 'maximized' ? 'open' : 'maximized')}
                />
                {state === 'minimized' ? (
                    <div className="p-4 text-sm text-text-secondary text-center">Window minimized</div>
                ) : (
                    <div className="p-4 space-y-3">
                        <h3 className="text-sm font-semibold">Account Settings</h3>
                        <div className="space-y-2 text-sm">
                            <div className="p-2 bg-surface-secondary rounded-lg">Profile Settings</div>
                            <div className="p-2 bg-surface-secondary rounded-lg">Security & Privacy</div>
                            <div className="p-2 bg-surface-secondary rounded-lg">Notifications</div>
                        </div>
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
        onClose: () => alert('Close'),
        onMinimize: () => alert('Minimize'),
        onMaximize: () => alert('Maximize'),
    },
};

export const WindowFrameIntegration: Story = {
    render: () => (
        <div className="border border-border-primary rounded-xl overflow-hidden shadow-lg max-w-lg">
            <div className="flex items-center justify-between px-4 py-3 bg-surface-secondary border-b border-border-primary">
                <span className="text-sm font-semibold">Portfolio Manager</span>
                <WindowControls
                    onClose={() => alert('Close')}
                    onMinimize={() => alert('Minimize')}
                    onMaximize={() => alert('Maximize')}
                />
            </div>
            <div className="p-4 space-y-3">
                <div className="flex justify-between"><span className="text-xs text-text-secondary">Balance</span><span className="text-sm font-bold">$124,532</span></div>
                <div className="flex justify-between"><span className="text-xs text-text-secondary">Investments</span><span className="text-sm font-bold">18</span></div>
            </div>
        </div>
    ),
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'WindowControls in a disabled/loading state, showing the controls greyed out during a blocking operation.',
      },
    },
  },
};
