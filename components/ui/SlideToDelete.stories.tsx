import type { Meta, StoryObj } from '@storybook/react';
import { SlideToDelete } from './SlideToDelete';

const meta = {
  title: 'Components/SlideToDelete',
  component: SlideToDelete,
  tags: ['autodocs'],
} satisfies Meta<typeof SlideToDelete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onDelete: () => alert('Deleted!'),
    children: <div className="p-4 bg-surface-primary rounded-lg border border-border-primary"><p className="text-text-primary">Swipe or slide to delete this item</p></div>,
  },
};

export const WithCustomLabel: Story = {
  args: {
    onDelete: () => alert('Deleted!'),
    label: 'Slide to remove',
    children: <div className="p-4 bg-surface-primary rounded-lg border border-border-primary"><p className="text-text-primary">Transaction #12345</p></div>,
  },
};

export const SmallContent: Story = {
  args: {
    onDelete: () => alert('Deleted!'),
    children: <div className="p-3 bg-surface-primary rounded-lg border border-border-primary text-sm text-text-primary">Small item</div>,
  },
};
