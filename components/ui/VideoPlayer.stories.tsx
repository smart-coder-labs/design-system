import type { Meta, StoryObj } from '@storybook/react';
import { VideoPlayer } from './VideoPlayer';

const meta = {
    title: 'Components/VideoPlayer',
    component: VideoPlayer,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A macOS/iOS-inspired video player with custom controls, progress bar, volume slider, fullscreen toggle, loading state, and auto-hiding controls. Supports autoplay, loop, and mute.',
            },
        },
    },
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
        muted: true,
    },
};

export const AutoPlay: Story = {
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
        autoPlay: true,
        muted: true,
        loop: true,
    },
};

export const Looping: Story = {
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
        loop: true,
        muted: true,
    },
};

export const WithoutPoster: Story = {
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        muted: true,
    },
};

export const WithCustomPoster: Story = {
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=600&q=80',
        muted: true,
    },
};

export const Silent: Story = {
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
        muted: true,
    },
};

export const WithSound: Story = {
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
        muted: false,
    },
};

export const MobileView: Story = {
    parameters: {
        viewport: { defaultViewport: 'mobile1' },
    },
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
        muted: true,
    },
};

export const DarkUI: Story = {
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
        muted: true,
    },
};

export const TallAspectRatio: Story = {
    decorators: [
        (Story) => (
            <div className="max-w-xs mx-auto">
                <Story />
            </div>
        ),
    ],
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
        muted: true,
    },
};

export const WideAspectRatio: Story = {
    decorators: [
        (Story) => (
            <div className="max-w-3xl mx-auto">
                <Story />
            </div>
        ),
    ],
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
        muted: true,
    },
};
