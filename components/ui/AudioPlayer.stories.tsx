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

export const LongTitle: Story = {
    args: {
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        title: 'Very Long Song Title That Should Definitely Be Truncated When Displayed In The Audio Player Component',
        artist: 'Artist with an Extremely Long Name for Testing Purposes and Edge Cases',
    },
};

export const LongCoverArt: Story = {
    args: {
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
        title: 'Podcast Episode 247',
        artist: 'Tech Talks Daily',
        coverArt: 'https://picsum.photos/seed/podcast/400/400',
    },
};

export const DarkMode: Story = {
    args: {
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        title: 'Dark Mode Vibes',
        artist: 'Night Owl',
    },
    decorators: [
        (Story) => (
            <div className="dark p-4 bg-gray-900 rounded-lg max-w-md">
                <Story />
            </div>
        ),
    ],
};

export const MobilePlayer: Story = {
    args: {
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        title: 'Mobile Track',
        artist: 'Portable Beats',
        coverArt: 'https://picsum.photos/seed/mobile/200/200',
    },
    decorators: [
        (Story) => (
            <div className="max-w-sm mx-auto">
                <Story />
            </div>
        ),
    ],
};
