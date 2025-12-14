import type { Meta, StoryObj } from '@storybook/react';
import { WindowFrame } from '../components/WindowFrame';

const meta: Meta<typeof WindowFrame> = {
    title: 'Surfaces/WindowFrame',
    component: WindowFrame,
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'dark'],
        },
        showControls: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof WindowFrame>;

export const Default: Story = {
    args: {
        title: 'Document.txt',
        onClose: () => alert('Close clicked'),
        onMinimize: () => alert('Minimize clicked'),
        onMaximize: () => alert('Maximize clicked'),
        children: (
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4 text-text-primary">Welcome to macOS Window</h2>
                <p className="text-text-secondary mb-4">
                    This window frame mimics the classic macOS window style with traffic light controls.
                </p>
                <p className="text-text-secondary">
                    Hover over the control buttons to see the icons appear, just like in macOS.
                </p>
            </div>
        ),
    },
};

export const Dark: Story = {
    args: {
        title: 'Terminal',
        variant: 'dark',
        onClose: () => alert('Close clicked'),
        onMinimize: () => alert('Minimize clicked'),
        onMaximize: () => alert('Maximize clicked'),
        children: (
            <div className="p-6 bg-gray-900">
                <div className="font-mono text-green-400 space-y-2">
                    <p>$ npm run dev</p>
                    <p className="text-gray-500">Starting development server...</p>
                    <p className="text-gray-500">Server running at http://localhost:3000</p>
                    <p className="flex">
                        <span>$</span>
                        <span className="animate-pulse ml-1">_</span>
                    </p>
                </div>
            </div>
        ),
    },
};

export const WithoutControls: Story = {
    args: {
        title: 'Settings',
        showControls: false,
        children: (
            <div className="p-6">
                <h2 className="text-xl font-bold mb-4 text-text-primary">Settings</h2>
                <p className="text-text-secondary">
                    This window has no control buttons.
                </p>
            </div>
        ),
    },
};

export const LargeContent: Story = {
    args: {
        title: 'Long Document',
        onClose: () => alert('Close clicked'),
        children: (
            <div className="p-6 space-y-4">
                {Array.from({ length: 20 }).map((_, i) => (
                    <p key={i} className="text-text-secondary">
                        Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                ))}
            </div>
        ),
    },
};
