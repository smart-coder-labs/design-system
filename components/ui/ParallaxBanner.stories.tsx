import type { Meta, StoryObj } from '@storybook/react';
import { ParallaxBanner } from './ParallaxBanner';

const meta = {
  title: 'Components/ParallaxBanner',
  component: ParallaxBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof ParallaxBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=400&fit=crop',
    height: 300,
    children: <div className="flex items-center justify-center h-full text-white text-2xl font-bold">Crypto Dashboard</div>,
  },
};

export const WithOverlay: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=400&fit=crop',
    height: 400,
    overlay: true,
    overlayOpacity: 0.5,
    children: <div className="flex flex-col items-center justify-center h-full text-white"><h2 className="text-3xl font-bold">Welcome Back</h2><p className="text-lg opacity-90">Your portfolio is up 8.2% today</p></div>,
  },
};

export const Small: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=200&fit=crop',
    height: 150,
    children: <div className="flex items-center justify-center h-full text-white font-semibold">Markets Overview</div>,
  },
};

export const FullWidth: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&h=500&fit=crop',
    height: 500,
    fullWidth: true,
    children: <div className="flex items-center justify-center h-full text-white text-4xl font-bold tracking-tight">Invest in Your Future</div>,
  },
};
