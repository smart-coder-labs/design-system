import type { Meta, StoryObj } from '@storybook/react';
import { StickyImageTextSwap } from './StickyImageTextSwap';

const meta = {
  title: 'Data Display/StickyImageTextSwap',
  component: StickyImageTextSwap,
  tags: ['autodocs'],
  args: {
    size: 'md',
  },
} satisfies Meta<typeof StickyImageTextSwap>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { id: 1, title: 'Title 1', description: 'Description 1', image: 'https://picsum.photos/seed/one/800/600' },
  { id: 2, title: 'Title 2', description: 'Description 2', image: 'https://picsum.photos/seed/two/800/600' },
  { id: 3, title: 'Title 3', description: 'Description 3', image: 'https://picsum.photos/seed/three/800/600' },
];

export const Default: Story = {
  args: { items },
};

export const Large: Story = {
  args: { items, size: 'lg' },
};

export const Playground: Story = {
  args: { items, size: 'sm' },
};
