import type { Meta, StoryObj } from '@storybook/react';
import { InfiniteHorizontalLoop } from './InfiniteHorizontalLoop';

const meta: Meta<typeof InfiniteHorizontalLoop> = {
  title: 'Data Display/InfiniteHorizontalLoop',
  component: InfiniteHorizontalLoop,
  tags: ['autodocs'],
  args: {
    direction: 'left',
    speed: 20,
    gap: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = ['One', 'Two', 'Three', 'Four'].map((label) => (
  <div key={label} className="px-6 py-3 bg-surface-secondary rounded-xl border border-border-primary">
    {label}
  </div>
));

export const Default: Story = {
  args: { items },
};

export const RightDirection: Story = {
  args: { items, direction: 'right', speed: 14 },
};

export const Playground: Story = {
  args: { items, gap: 'lg', speed: 10 },
};
