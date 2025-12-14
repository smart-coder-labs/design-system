import type { Meta, StoryObj } from '@storybook/react';
import { AudioPlayer } from '../components/AudioPlayer';

const meta: Meta<typeof AudioPlayer> = {
    title: 'Data Display/AudioPlayer',
    component: AudioPlayer,
    parameters: {
        layout: 'centered',
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof AudioPlayer>;

const sampleAudio = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const sampleCover = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop";

export const Default: Story = {
    args: {
        src: sampleAudio,
        title: "Synthwave Mix",
        artist: "SoundHelix",
        coverArt: sampleCover,
    },
};

export const Minimal: Story = {
    args: {
        src: sampleAudio,
        title: "Podcast Episode 1",
        artist: "Tech Talk",
    },
};

export const AutoPlay: Story = {
    args: {
        src: sampleAudio,
        title: "AutoPlay Track",
        artist: "Demo Artist",
        coverArt: sampleCover,
        autoPlay: true,
    },
};
