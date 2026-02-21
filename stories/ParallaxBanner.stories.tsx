import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ParallaxBanner } from '../components/ui/ParallaxBanner';

const meta = {
  title: 'UI/ParallaxBanner',
  component: ParallaxBanner,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-neutral-900 min-h-[150vh] text-zinc-900 dark:text-zinc-50">
        <div className="h-[60vh] flex items-center justify-center p-8 text-center text-zinc-500 dark:text-zinc-400">
          <p className="max-w-md">Scroll down to see the parallax banner effect in action. Notice how the image moves at a slightly different speed than the document flow.</p>
        </div>
        <Story />
        <div className="h-[60vh] flex items-center justify-center p-8 text-center text-zinc-500 dark:text-zinc-400">
          <p className="max-w-md">The banner creates a subtle depth effect.</p>
        </div>
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ParallaxBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop',
    children: (
      <div className="py-20">
        <h2 className="text-5xl font-bold mb-4">Discover The Universe</h2>
        <p className="text-xl text-zinc-900 dark:text-zinc-50/80 max-w-xl mx-auto">Explore the unknown with tools designed to take you further.</p>
      </div>
    )
  },
};

export const SmallHeight: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    height: 'h-[40vh]',
    children: (
      <h2 className="text-4xl font-semibold tracking-tight">Seamless Integration</h2>
    )
  },
};
