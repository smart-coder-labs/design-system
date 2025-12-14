import type { Meta, StoryObj } from '@storybook/react';
import { VideoPlayer } from '../components/VideoPlayer';

const meta: Meta<typeof VideoPlayer> = {
    title: 'Data Display/VideoPlayer',
    component: VideoPlayer,
    parameters: {
        layout: 'centered',
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

const sampleVideo = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const samplePoster = "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg";

export const Default: Story = {
    args: {
        src: sampleVideo,
        poster: samplePoster,
        className: "w-[800px]",
    },
};

export const AutoPlayMuted: Story = {
    args: {
        src: sampleVideo,
        autoPlay: true,
        muted: true,
        className: "w-[800px]",
    },
};

export const Loop: Story = {
    args: {
        src: sampleVideo,
        loop: true,
        className: "w-[800px]",
    },
};

export const Small: Story = {
    args: {
        src: sampleVideo,
        className: "w-[400px]",
    },
};
