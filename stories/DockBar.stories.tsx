import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DockBar, type DockBarItem } from '../components/DockBar';

// Simple placeholder icons using emojis
const HomeIcon = () => <span>🏠</span>;
const MailIcon = () => <span>✉️</span>;
const CalendarIcon = () => <span>📅</span>;
const PhotosIcon = () => <span>🖼️</span>;
const MusicIcon = () => <span>🎵</span>;
const VideosIcon = () => <span>🎬</span>;
const DocumentsIcon = () => <span>📄</span>;
const SettingsIcon = () => <span>⚙️</span>;
const MessagesIcon = () => <span>💬</span>;
const BrowserIcon = () => <span>🌐</span>;
const CodeIcon = () => <span>💻</span>;
const TerminalIcon = () => <span>⌨️</span>;

const meta: Meta<typeof DockBar> = {
    title: 'Navigation/DockBar',
    component: DockBar,
    tags: ['autodocs'],
    argTypes: {
        position: {
            control: 'select',
            options: ['bottom', 'left', 'right'],
            description: 'Position of the dock',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size of icons',
        },
        magnification: {
            control: 'boolean',
            description: 'Enable magnification effect',
        },
        className: { control: false },
    },
};

export default meta;

type Story = StoryObj<typeof DockBar>;

const sampleItems: DockBarItem[] = [
    { id: 'home', label: 'Home', icon: <HomeIcon />, active: true, onClick: () => console.log('Home') },
    { id: 'mail', label: 'Mail', icon: <MailIcon />, badge: 5, onClick: () => console.log('Mail') },
    { id: 'calendar', label: 'Calendar', icon: <CalendarIcon />, onClick: () => console.log('Calendar') },
    { id: 'photos', label: 'Photos', icon: <PhotosIcon />, onClick: () => console.log('Photos') },
    { id: 'music', label: 'Music', icon: <MusicIcon />, onClick: () => console.log('Music') },
    { id: 'videos', label: 'Videos', icon: <VideosIcon />, onClick: () => console.log('Videos') },
    { id: 'documents', label: 'Documents', icon: <DocumentsIcon />, onClick: () => console.log('Documents') },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon />, onClick: () => console.log('Settings') },
];

export const Default: Story = {
    args: {
        items: sampleItems,
        position: 'bottom',
        size: 'md',
        magnification: true,
    },
    render: (args) => (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8">
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-4xl font-bold mb-4">macOS-Style Dock Bar</h1>
                <p className="text-lg mb-8 text-white/90">
                    Hover over the dock icons at the bottom to see the magnification effect.
                    The icons scale up smoothly, just like macOS!
                </p>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Features</h3>
                    <ul className="space-y-2 text-white/90">
                        <li>• Magnification effect on hover</li>
                        <li>• Smooth scaling animations</li>
                        <li>• Tooltips showing app names</li>
                        <li>• Badge support for notifications</li>
                        <li>• Active indicator</li>
                        <li>• Glassmorphism design</li>
                    </ul>
                </div>
            </div>
            <DockBar {...args} />
        </div>
    ),
};

export const Small: Story = {
    args: {
        items: sampleItems,
        position: 'bottom',
        size: 'sm',
        magnification: true,
    },
    render: (args) => (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-3xl font-bold mb-4">Small Dock</h1>
                <p className="text-white/90">Compact version of the dock bar.</p>
            </div>
            <DockBar {...args} />
        </div>
    ),
};

export const Large: Story = {
    args: {
        items: sampleItems,
        position: 'bottom',
        size: 'lg',
        magnification: true,
    },
    render: (args) => (
        <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 p-8">
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-3xl font-bold mb-4">Large Dock</h1>
                <p className="text-white/90">Larger icons for better visibility.</p>
            </div>
            <DockBar {...args} />
        </div>
    ),
};

export const LeftPosition: Story = {
    args: {
        items: sampleItems.slice(0, 6),
        position: 'left',
        size: 'md',
        magnification: true,
    },
    render: (args) => (
        <div className="min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 p-8">
            <div className="max-w-4xl mx-auto ml-32 text-white">
                <h1 className="text-3xl font-bold mb-4">Left Positioned Dock</h1>
                <p className="text-white/90 mb-8">
                    The dock can be positioned on the left side of the screen.
                </p>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                    <p className="text-white/90">
                        Hover over the dock on the left to see the magnification effect working vertically.
                    </p>
                </div>
            </div>
            <DockBar {...args} />
        </div>
    ),
};

export const RightPosition: Story = {
    args: {
        items: sampleItems.slice(0, 6),
        position: 'right',
        size: 'md',
        magnification: true,
    },
    render: (args) => (
        <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-8">
            <div className="max-w-4xl mx-auto mr-32 text-white">
                <h1 className="text-3xl font-bold mb-4">Right Positioned Dock</h1>
                <p className="text-white/90 mb-8">
                    The dock can also be positioned on the right side.
                </p>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                    <p className="text-white/90">
                        Check out the dock on the right side of the screen!
                    </p>
                </div>
            </div>
            <DockBar {...args} />
        </div>
    ),
};

export const NoMagnification: Story = {
    args: {
        items: sampleItems,
        position: 'bottom',
        size: 'md',
        magnification: false,
    },
    render: (args) => (
        <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 p-8">
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-3xl font-bold mb-4">Without Magnification</h1>
                <p className="text-white/90">
                    The dock can be used without the magnification effect for a simpler look.
                </p>
            </div>
            <DockBar {...args} />
        </div>
    ),
};

export const WithNotifications: Story = {
    args: {
        items: [
            { id: 'browser', label: 'Browser', icon: <BrowserIcon />, active: true, onClick: () => { } },
            { id: 'messages', label: 'Messages', icon: <MessagesIcon />, badge: 12, onClick: () => { } },
            { id: 'mail', label: 'Mail', icon: <MailIcon />, badge: 99, onClick: () => { } },
            { id: 'code', label: 'Code Editor', icon: <CodeIcon />, onClick: () => { } },
            { id: 'terminal', label: 'Terminal', icon: <TerminalIcon />, onClick: () => { } },
            { id: 'calendar', label: 'Calendar', icon: <CalendarIcon />, badge: 3, onClick: () => { } },
        ],
        position: 'bottom',
        size: 'md',
        magnification: true,
    },
    render: (args) => (
        <div className="min-h-screen bg-gradient-to-br from-slate-700 via-gray-800 to-zinc-900 p-8">
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-3xl font-bold mb-4">With Notification Badges</h1>
                <p className="text-white/90">
                    Apps can show notification badges to indicate unread messages or pending items.
                </p>
            </div>
            <DockBar {...args} />
        </div>
    ),
};

export const MinimalDock: Story = {
    args: {
        items: [
            { id: 'home', label: 'Home', icon: <HomeIcon />, active: true, onClick: () => { } },
            { id: 'documents', label: 'Documents', icon: <DocumentsIcon />, onClick: () => { } },
            { id: 'settings', label: 'Settings', icon: <SettingsIcon />, onClick: () => { } },
        ],
        position: 'bottom',
        size: 'md',
        magnification: true,
    },
    render: (args) => (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-3xl font-bold mb-4">Minimal Dock</h1>
                <p className="text-white/90">
                    A simple dock with just a few essential apps.
                </p>
            </div>
            <DockBar {...args} />
        </div>
    ),
};
