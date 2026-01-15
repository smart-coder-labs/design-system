import type { Meta, StoryObj } from '@storybook/react';
import { WindowControls } from './WindowControls';

const meta = {
    title: 'Components/WindowControls',
    component: WindowControls,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof WindowControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MacOS: Story = {
    args: {
        variant: 'macos',
        onClose: () => console.log('Close'),
        onMinimize: () => console.log('Minimize'),
        onMaximize: () => console.log('Maximize'),
    },
};

export const Windows: Story = {
    args: {
        variant: 'windows',
        onClose: () => console.log('Close'),
        onMinimize: () => console.log('Minimize'),
        onMaximize: () => console.log('Maximize'),
    },
};

export const MacOSCloseOnly: Story = {
    args: {
        variant: 'macos',
        onClose: () => console.log('Close'),
    },
};

export const WindowsCloseOnly: Story = {
    args: {
        variant: 'windows',
        onClose: () => console.log('Close'),
    },
};

export const MacOSMinimizeMaximize: Story = {
    args: {
        variant: 'macos',
        onMinimize: () => console.log('Minimize'),
        onMaximize: () => console.log('Maximize'),
    },
};

export const WindowsMinimizeMaximize: Story = {
    args: {
        variant: 'windows',
        onMinimize: () => console.log('Minimize'),
        onMaximize: () => console.log('Maximize'),
    },
};

export const Interactive: Story = {
    render: () => {
        const handleClose = () => {
            if (confirm('Are you sure you want to close this window?')) {
                alert('Window closed');
            }
        };

        const handleMinimize = () => {
            alert('Window minimized');
        };

        const handleMaximize = () => {
            alert('Window maximized');
        };

        return (
            <div className="space-y-8">
                <div>
                    <h3 className="text-sm font-medium mb-4">macOS Style</h3>
                    <WindowControls
                        variant="macos"
                        onClose={handleClose}
                        onMinimize={handleMinimize}
                        onMaximize={handleMaximize}
                    />
                </div>
                <div>
                    <h3 className="text-sm font-medium mb-4">Windows Style</h3>
                    <WindowControls
                        variant="windows"
                        onClose={handleClose}
                        onMinimize={handleMinimize}
                        onMaximize={handleMaximize}
                    />
                </div>
            </div>
        );
    },
};

export const InWindowHeader: Story = {
    render: () => {
        return (
            <div className="w-[600px] bg-surface-primary border border-border-primary rounded-xl overflow-hidden">
                {/* macOS Window */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border-primary">
                    <WindowControls
                        variant="macos"
                        onClose={() => console.log('Close')}
                        onMinimize={() => console.log('Minimize')}
                        onMaximize={() => console.log('Maximize')}
                    />
                    <h3 className="text-sm font-semibold text-text-primary">Document.pdf</h3>
                    <div className="w-[52px]" /> {/* Spacer for centering */}
                </div>
                <div className="p-8 text-center text-text-secondary">
                    Window content goes here
                </div>
            </div>
        );
    },
};

export const WindowsWindowHeader: Story = {
    render: () => {
        return (
            <div className="w-[600px] bg-surface-primary border border-border-primary rounded-xl overflow-hidden">
                {/* Windows Window */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-border-primary">
                    <h3 className="text-sm font-semibold text-text-primary">Document.pdf</h3>
                    <WindowControls
                        variant="windows"
                        onClose={() => console.log('Close')}
                        onMinimize={() => console.log('Minimize')}
                        onMaximize={() => console.log('Maximize')}
                    />
                </div>
                <div className="p-8 text-center text-text-secondary">
                    Window content goes here
                </div>
            </div>
        );
    },
};
