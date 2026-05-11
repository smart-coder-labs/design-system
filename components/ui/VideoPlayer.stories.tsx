import type { Meta, StoryObj } from '@storybook/react';
import { VideoPlayer } from './VideoPlayer';

const meta = {
    title: 'Components/VideoPlayer',
    component: VideoPlayer,
    tags: ['autodocs'],
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
