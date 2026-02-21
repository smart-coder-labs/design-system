import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollProgressBar } from '../components/ui/ScrollProgressBar';

const meta = {
  title: 'UI/ScrollProgressBar',
  component: ScrollProgressBar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="bg-neutral-50 min-h-[300vh] text-neutral-900 p-8 pt-20">
        <div className="max-w-2xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold">Scroll Down to View Progress</h1>
          <p className="text-lg text-gray-600">
            Notice the slim progress bar stuck to the top edge of the window. 
            As you scroll down through this tall container, the bar will fill up proportionally to your global scroll progress.
          </p>
          <div className="space-y-6 text-gray-500">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="h-64 bg-gray-200 rounded-xl animate-pulse" />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="h-64 bg-gray-200 rounded-xl animate-pulse" />
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className="h-64 bg-gray-200 rounded-xl animate-pulse" />
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>
            <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
          </div>
          <p className="text-xl font-semibold text-center mt-32">You reached the bottom!</p>
        </div>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Top is default
    color: '#3b82f6', // blue-500
    height: 'h-1.5',
  },
};

export const BottomPink: Story = {
  args: {
    position: 'bottom',
    color: '#ec4899', // pink-500
    height: 'h-2',
  },
};
