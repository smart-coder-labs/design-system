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
    src: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
    poster: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop',
  },
};

export const AutoPlay: Story = {
  args: {
    src: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
    autoPlay: true,
    muted: true,
  },
};

export const Muted: Story = {
  args: {
    src: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
    muted: true,
    loop: true,
  },
};

export const Looping: Story = {
  args: {
    src: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
    loop: true,
    muted: true,
  },
};

export const NoPoster: Story = {
  args: {
    src: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
  },
};
