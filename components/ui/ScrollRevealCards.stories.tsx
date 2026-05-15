import type { Meta, StoryObj } from '@storybook/react';
import { ScrollRevealCards } from './ScrollRevealCards';

const meta = {
  title: 'Data Display/ScrollRevealCards',
  component: ScrollRevealCards,
  tags: ['autodocs'],
  args: {
    columns: 3,
  },
} satisfies Meta<typeof ScrollRevealCards>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { id: '1', title: 'Card 1', description: 'Description 1', icon: 'A' },
  { id: '2', title: 'Card 2', description: 'Description 2', icon: 'B' },
  { id: '3', title: 'Card 3', description: 'Description 3', icon: 'C' },
];

export const Default: Story = {
  args: { items },
};

export const TwoColumns: Story = {
  args: { items, columns: 2 },
};

export const Playground: Story = {
  args: { items, columns: 4 },
};
