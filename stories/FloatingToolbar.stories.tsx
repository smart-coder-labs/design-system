import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FloatingToolbar } from '../components/ui/FloatingToolbar';
import {
    Copy,
    Download,
    Share2,
    Edit,
    Trash2,
    Heart,
    Star,
    Bookmark,
    Send,
    MoreHorizontal,
    ZoomIn,
    ZoomOut,
    RotateCw,
    Maximize,
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Volume2,
    Settings,
    Filter,
    SortAsc,
    Grid,
    List,
} from 'lucide-react';

const meta: Meta<typeof FloatingToolbar> = {
    title: 'Navigation/FloatingToolbar',
    component: FloatingToolbar,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'A floating toolbar component that can be positioned anywhere on the screen. Perfect for contextual actions, media controls, or quick access tools. Features smooth animations, tooltips, and multiple variants.',
            },
        },
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof FloatingToolbar>;

const basicActions = [
    {
        id: 'copy',
        icon: <Copy className="w-5 h-5" />,
        tooltip: 'Copy',
        onClick: () => console.log('Copy clicked'),
    },
    {
        id: 'download',
        icon: <Download className="w-5 h-5" />,
        tooltip: 'Download',
        onClick: () => console.log('Download clicked'),
    },
    {
        id: 'share',
        icon: <Share2 className="w-5 h-5" />,
        tooltip: 'Share',
        onClick: () => console.log('Share clicked'),
    },
    {
        id: 'edit',
        icon: <Edit className="w-5 h-5" />,
        tooltip: 'Edit',
        onClick: () => console.log('Edit clicked'),
        variant: 'primary' as const,
    },
];

export const Default: Story = {
    args: {
        actions: basicActions,
        position: 'bottom',
    },
    render: (args) => (
        <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Floating Toolbar Demo
                </h2>
                <p className="text-text-secondary mb-8">
                    The toolbar is positioned at the bottom center of the viewport. Hover over
                    icons to see tooltips.
                </p>
                <div className="bg-surface-secondary rounded-xl p-8 border border-border-primary">
                    <p className="text-text-primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
    ),
};

export const WithLabels: Story = {
    args: {
        actions: [
            {
                id: 'copy',
                label: 'Copy',
                icon: <Copy className="w-5 h-5" />,
                onClick: () => console.log('Copy clicked'),
            },
            {
                id: 'download',
                label: 'Download',
                icon: <Download className="w-5 h-5" />,
                onClick: () => console.log('Download clicked'),
            },
            {
                id: 'share',
                label: 'Share',
                icon: <Share2 className="w-5 h-5" />,
                onClick: () => console.log('Share clicked'),
            },
        ],
        position: 'bottom',
        showLabels: true,
    },
    render: (args) => (
        <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Toolbar with Labels
                </h2>
                <p className="text-text-secondary">
                    Actions are displayed with text labels for better clarity.
                </p>
            </div>
            <FloatingToolbar {...args} />
        </div>
    ),
};

export const Dismissible: Story = {
    args: {
        actions: basicActions,
        position: 'bottom',
        dismissible: true,
        onDismiss: () => console.log('Toolbar collapsed'),
    },
    render: (args) => {
        const [key, setKey] = React.useState(0);

        return (
            <div className="min-h-screen bg-background-primary p-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-text-primary mb-4">
                        Dismissible Toolbar
                    </h2>
                    <p className="text-text-secondary mb-4">
                        Click the X button to collapse the toolbar. It will shrink to a small button that you can click to expand it again. Click the button below to reset the demo.
                    </p>
                    <button
                        onClick={() => setKey((k) => k + 1)}
                        className="px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue-hover transition-colors"
                    >
                        Reset Demo
                    </button>
                </div>
                <FloatingToolbar key={key} {...args} />
            </div>
        );
    },
};

export const TopPosition: Story = {
    args: {
        actions: basicActions,
        position: 'top',
    },
    render: (args) => (
        <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto mt-24">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Top Position</h2>
                <p className="text-text-secondary">
                    Toolbar positioned at the top center of the viewport.
                </p>
            </div>
            <FloatingToolbar {...args} />
        </div>
    ),
};

export const CornerPositions: Story = {
    render: () => (
        <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Corner Positions
                </h2>
                <p className="text-text-secondary">
                    Toolbars can be positioned in any corner of the viewport.
                </p>
            </div>

            <FloatingToolbar
                actions={[
                    {
                        id: 'tl',
                        icon: <Star className="w-5 h-5" />,
                        tooltip: 'Top Left',
                        onClick: () => { },
                    },
                ]}
                position="top-left"
            />

            <FloatingToolbar
                actions={[
                    {
                        id: 'tr',
                        icon: <Heart className="w-5 h-5" />,
                        tooltip: 'Top Right',
                        onClick: () => { },
                    },
                ]}
                position="top-right"
            />

            <FloatingToolbar
                actions={[
                    {
                        id: 'bl',
                        icon: <Bookmark className="w-5 h-5" />,
                        tooltip: 'Bottom Left',
                        onClick: () => { },
                    },
                ]}
                position="bottom-left"
            />

            <FloatingToolbar
                actions={[
                    {
                        id: 'br',
                        icon: <Send className="w-5 h-5" />,
                        tooltip: 'Bottom Right',
                        onClick: () => { },
                    },
                ]}
                position="bottom-right"
            />
        </div>
    ),
};

export const GlassVariant: Story = {
    args: {
        actions: basicActions,
        position: 'bottom',
        variant: 'glass',
    },
    render: (args) => (
        <div
            className="min-h-screen p-8"
            style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            }}
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-4">Glass Variant</h2>
                <p className="text-white/80 mb-8">
                    Glassmorphism effect with backdrop blur for a modern look.
                </p>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                    <p className="text-white">
                        The glass variant works beautifully over colorful backgrounds.
                    </p>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
    ),
};

export const CompactVariant: Story = {
    args: {
        actions: basicActions,
        position: 'bottom',
        variant: 'compact',
    },
    render: (args) => (
        <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Compact Variant
                </h2>
                <p className="text-text-secondary">
                    Smaller padding and spacing for a more condensed toolbar.
                </p>
            </div>
            <FloatingToolbar {...args} />
        </div>
    ),
};

export const ImageViewer: Story = {
    args: {
        actions: [
            {
                id: 'zoom-in',
                icon: <ZoomIn className="w-5 h-5" />,
                tooltip: 'Zoom In',
                onClick: () => console.log('Zoom in'),
            },
            {
                id: 'zoom-out',
                icon: <ZoomOut className="w-5 h-5" />,
                tooltip: 'Zoom Out',
                onClick: () => console.log('Zoom out'),
            },
            {
                id: 'rotate',
                icon: <RotateCw className="w-5 h-5" />,
                tooltip: 'Rotate',
                onClick: () => console.log('Rotate'),
            },
            {
                id: 'fullscreen',
                icon: <Maximize className="w-5 h-5" />,
                tooltip: 'Fullscreen',
                onClick: () => console.log('Fullscreen'),
            },
            {
                id: 'download',
                icon: <Download className="w-5 h-5" />,
                tooltip: 'Download',
                onClick: () => console.log('Download'),
                variant: 'primary' as const,
            },
        ],
        position: 'bottom',
        variant: 'glass',
    },
    render: (args) => (
        <div className="min-h-screen bg-background-secondary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Image Viewer Controls
                </h2>
                <div className="bg-background-tertiary rounded-xl aspect-video flex items-center justify-center border border-border-primary">
                    <p className="text-text-secondary">Image Preview Area</p>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
    ),
};

export const MediaPlayer: Story = {
    args: {
        actions: [
            {
                id: 'skip-back',
                icon: <SkipBack className="w-5 h-5" />,
                tooltip: 'Previous',
                onClick: () => console.log('Previous'),
            },
            {
                id: 'play',
                icon: <Play className="w-5 h-5" />,
                tooltip: 'Play',
                onClick: () => console.log('Play'),
                variant: 'primary' as const,
            },
            {
                id: 'skip-forward',
                icon: <SkipForward className="w-5 h-5" />,
                tooltip: 'Next',
                onClick: () => console.log('Next'),
            },
            {
                id: 'volume',
                icon: <Volume2 className="w-5 h-5" />,
                tooltip: 'Volume',
                onClick: () => console.log('Volume'),
            },
            {
                id: 'settings',
                icon: <Settings className="w-5 h-5" />,
                tooltip: 'Settings',
                onClick: () => console.log('Settings'),
            },
        ],
        position: 'bottom',
        showLabels: false,
    },
    render: (args) => (
        <div className="min-h-screen bg-black p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center">
                    <p className="text-white/60">Video Player</p>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
    ),
};

export const TextEditor: Story = {
    args: {
        actions: [
            {
                id: 'edit',
                label: 'Edit',
                icon: <Edit className="w-5 h-5" />,
                onClick: () => console.log('Edit'),
                variant: 'primary' as const,
            },
            {
                id: 'copy',
                label: 'Copy',
                icon: <Copy className="w-5 h-5" />,
                onClick: () => console.log('Copy'),
            },
            {
                id: 'share',
                label: 'Share',
                icon: <Share2 className="w-5 h-5" />,
                onClick: () => console.log('Share'),
            },
            {
                id: 'delete',
                label: 'Delete',
                icon: <Trash2 className="w-5 h-5" />,
                onClick: () => console.log('Delete'),
                variant: 'danger' as const,
            },
        ],
        position: 'top',
        showLabels: true,
        dismissible: true,
    },
    render: (args) => (
        <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto mt-24">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Text Editor Actions
                </h2>
                <div className="bg-surface-secondary rounded-xl p-6 border border-border-primary">
                    <p className="text-text-primary mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <p className="text-text-primary">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
    ),
};

export const DataTable: Story = {
    args: {
        actions: [
            {
                id: 'filter',
                icon: <Filter className="w-5 h-5" />,
                tooltip: 'Filter',
                onClick: () => console.log('Filter'),
            },
            {
                id: 'sort',
                icon: <SortAsc className="w-5 h-5" />,
                tooltip: 'Sort',
                onClick: () => console.log('Sort'),
            },
            {
                id: 'grid',
                icon: <Grid className="w-5 h-5" />,
                tooltip: 'Grid View',
                onClick: () => console.log('Grid view'),
            },
            {
                id: 'list',
                icon: <List className="w-5 h-5" />,
                tooltip: 'List View',
                onClick: () => console.log('List view'),
                variant: 'primary' as const,
            },
            {
                id: 'more',
                icon: <MoreHorizontal className="w-5 h-5" />,
                tooltip: 'More Options',
                onClick: () => console.log('More'),
            },
        ],
        position: 'top-right',
        variant: 'compact',
    },
    render: (args) => (
        <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Data Table</h2>
                <div className="bg-surface-secondary rounded-xl p-6 border border-border-primary">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border-primary">
                                <th className="text-left py-3 text-text-primary font-semibold">Name</th>
                                <th className="text-left py-3 text-text-primary font-semibold">
                                    Status
                                </th>
                                <th className="text-left py-3 text-text-primary font-semibold">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <tr key={i} className="border-b border-border-primary">
                                    <td className="py-3 text-text-primary">Item {i}</td>
                                    <td className="py-3 text-text-secondary">Active</td>
                                    <td className="py-3 text-text-secondary">2024-01-{i}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
    ),
};

export const DarkMode: Story = {
    args: {
        actions: basicActions,
        position: 'bottom',
        dismissible: true,
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
    decorators: [
        (Story) => (
            <div className="dark">
                <Story />
            </div>
        ),
    ],
    render: (args) => (
        <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Dark Mode</h2>
                <p className="text-text-secondary mb-8">
                    The toolbar adapts beautifully to dark mode.
                </p>
                <div className="bg-surface-secondary rounded-xl p-8 border border-border-primary">
                    <p className="text-text-primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
    ),
};

export const AllPositions: Story = {
    render: () => (
        <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4 text-center">
                    All Toolbar Positions
                </h2>
                <p className="text-text-secondary text-center mb-8">
                    Toolbars positioned in all available locations
                </p>
            </div>

            {/* Top */}
            <FloatingToolbar
                actions={[
                    {
                        id: 'top',
                        label: 'Top',
                        icon: <Star className="w-5 h-5" />,
                        onClick: () => { },
                    },
                ]}
                position="top"
                showLabels
                variant="compact"
            />

            {/* Bottom */}
            <FloatingToolbar
                actions={[
                    {
                        id: 'bottom',
                        label: 'Bottom',
                        icon: <Heart className="w-5 h-5" />,
                        onClick: () => { },
                    },
                ]}
                position="bottom"
                showLabels
                variant="compact"
            />

            {/* Corners */}
            <FloatingToolbar
                actions={[
                    { id: 'tl', icon: <Grid className="w-5 h-5" />, onClick: () => { } },
                ]}
                position="top-left"
                variant="compact"
            />

            <FloatingToolbar
                actions={[
                    { id: 'tr', icon: <List className="w-5 h-5" />, onClick: () => { } },
                ]}
                position="top-right"
                variant="compact"
            />

            <FloatingToolbar
                actions={[
                    { id: 'bl', icon: <Filter className="w-5 h-5" />, onClick: () => { } },
                ]}
                position="bottom-left"
                variant="compact"
            />

            <FloatingToolbar
                actions={[
                    { id: 'br', icon: <Settings className="w-5 h-5" />, onClick: () => { } },
                ]}
                position="bottom-right"
                variant="compact"
            />
        </div>
    ),
};
