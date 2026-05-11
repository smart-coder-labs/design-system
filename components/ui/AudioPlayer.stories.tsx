import type { Meta, StoryObj } from '@storybook/react';
import { AudioPlayer } from './AudioPlayer';

const meta = {
    title: 'Components/AudioPlayer',
    component: AudioPlayer,
    tags: ['autodocs'],
} satisfies Meta<typeof AudioPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        title: 'Ambient Waves',
        artist: 'SoundHelix',
    },
};

export const WithCoverArt: Story = {
    args: {
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        title: 'Summer Vibes',
        artist: 'Synthwave Band',
        coverArt: 'https://picsum.photos/seed/audio/200/200',
    },
};

export const NoMetadata: Story = {
    args: {
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
};

export const AutoPlay: Story = {
    args: {
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
        title: 'Auto Play Track',
        artist: 'Test Artist',
        autoPlay: false, // keeps it from actually auto-playing in storybook
    },
};
