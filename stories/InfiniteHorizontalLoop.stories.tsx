import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InfiniteHorizontalLoop } from '../components/ui/InfiniteHorizontalLoop';

const meta = {
  title: 'UI/InfiniteHorizontalLoop',
  component: InfiniteHorizontalLoop,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InfiniteHorizontalLoop>;

export default meta;
type Story = StoryObj<typeof meta>;

const techStack = [
  'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Next.js', 
  'Vite', 'Storybook', 'Radix UI', 'Zod', 'Jest'
];

const TextItems = techStack.map(item => (
  <div key={item} className="px-6 py-3 bg-neutral-900 text-zinc-900 dark:text-zinc-50 rounded-full font-medium text-lg shadow-sm border border-neutral-800">
    {item}
  </div>
));

export const Default: Story = {
  decorators: [
    (Story) => (
      <div className="bg-neutral-950 p-20 rounded-xl overflow-hidden">
        <Story />
      </div>
    )
  ],
  args: {
    items: TextItems,
    speed: 30,
    gap: 'gap-6',
  },
};

export const OppositeDirection: Story = {
  decorators: [
    (Story) => (
      <div className="bg-white p-20 rounded-xl overflow-hidden border">
        <Story />
      </div>
    )
  ],
  args: {
    items: techStack.map(item => (
      <div key={item} className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-semibold border">
        {item}
      </div>
    )),
    speed: 25,
    direction: 'right',
    gap: 'gap-4',
  },
};
