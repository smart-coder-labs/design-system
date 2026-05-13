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
        poster: 'https://picsum.photos/seed/fintech/800/450',
        title: 'Investment Basics Guide',
    },
};

export const WithDescription: Story = {
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://picsum.photos/seed/learn/800/450',
        title: 'Portfolio Diversification',
        description: 'Learn how to build a diversified investment portfolio that balances risk and reward.',
    },
};

export const NoPoster: Story = {
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        title: 'Weekly Market Review',
    },
};

export const AutoPlay: Story = {
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://picsum.photos/seed/market/800/450',
        autoPlay: false,
        title: 'Market Update',
    },
};

export const ControlsHidden: Story = {
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://picsum.photos/seed/nocontrols/800/450',
        controls: false,
        title: 'Background Video',
    },
};

export const LoadingFallback: Story = {
    args: {
        src: 'https://example.com/slow-video.mp4',
        poster: undefined,
        title: 'Loading Example',
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        src: 'https://www.w3schools.com/html/mov_bbb.mp4',
        poster: 'https://picsum.photos/seed/darkvideo/800/450',
        title: 'Financial Education Series',
    },
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'VideoPlayer in a loading state, showing skeleton or placeholder UI while data is being fetched.',
      },
    },
  },
};
