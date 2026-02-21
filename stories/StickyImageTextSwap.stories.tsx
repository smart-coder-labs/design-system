import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StickyImageTextSwap } from '../components/ui/StickyImageTextSwap';

const meta = {
  title: 'UI/StickyImageTextSwap',
  component: StickyImageTextSwap,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-neutral-950 min-h-screen text-zinc-900 dark:text-zinc-50">
        <div className="h-[40vh] flex items-center justify-center">
          <h1 className="text-4xl font-bold">Scroll narrative ↓</h1>
        </div>
        <Story />
        <div className="h-[40vh]" />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof StickyImageTextSwap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Breathtaking Displays',
        description: 'Immerse yourself in vibrant colors and incredible contrast with the new OLED display architecture. Every pixel is individually illuminated to deliver true blacks and stunning highlights across all your content.',
        image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2670&auto=format&fit=crop'
      },
      {
        id: '2',
        title: 'Unprecedented Power',
        description: 'The revolutionary M-series chip brings desktop-class performance to the palm of your hand. Effortlessly edit 4K video, render 3D scenes, or play console-quality games without breaking a sweat.',
        image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2642&auto=format&fit=crop'
      },
      {
        id: '3',
        title: 'All-Day Battery',
        description: 'An advanced thermal design combined with exceptional power efficiency means you can keep pushing boundaries from sunrise to sunset on a single charge.',
        image: 'https://images.unsplash.com/photo-1601053077395-64d6dbbc07a6?q=80&w=2670&auto=format&fit=crop'
      }
    ]
  },
};
