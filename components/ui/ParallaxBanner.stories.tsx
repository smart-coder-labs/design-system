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

/** Fintech-themed banner with stats */
export const FintechBanner: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&h=450&fit=crop',
    height: 450,
    children: (
      <div className="flex flex-col items-center justify-center h-full text-white">
        <p className="text-sm font-medium tracking-widest uppercase opacity-80">Portfolio Summary</p>
        <h2 className="text-4xl font-bold mt-2">$142,580.00</h2>
        <p className="text-lg mt-1 opacity-90">+12.4% this quarter</p>
      </div>
    ),
  },
};

/** No children — just image */
export const ImageOnly: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=350&fit=crop',
    height: 350,
  },
};

/** Short banner (hero strip) */
export const HeroStrip: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1400&h=100&fit=crop',
    height: 100,
    children: <div className="flex items-center justify-center h-full text-white text-sm font-semibold">Markets are open — Dow +1.2%</div>,
  },
};

/** Dark overlay for readability with long text */
export const DarkOverlayLongText: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1400&h=350&fit=crop',
    height: 350,
    children: (
      <div className="flex flex-col items-center justify-center h-full text-white px-8">
        <h2 className="text-2xl font-bold">Invest Early, Invest Smart</h2>
        <p className="text-base mt-2 max-w-lg opacity-90">
          Start building your financial future today with our AI-powered investment platform.
          Compound your returns and achieve your financial goals faster.
        </p>
        <button className="mt-4 px-8 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
    ),
  },
};

/** Mobile narrow container */
export const Mobile: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop',
    height: 250,
    children: <div className="flex items-center justify-center h-full text-white font-bold">Mobile View</div>,
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm mx-auto">
        <Story />
      </div>
    ),
  ],
};
