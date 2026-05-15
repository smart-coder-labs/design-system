import type { Meta, StoryObj } from '@storybook/react';
import { InteractiveCursor } from './InteractiveCursor';

const meta: Meta<typeof InteractiveCursor> = {
  title: 'Cyberpunk/InteractiveCursor',
  component: InteractiveCursor,
  tags: ['autodocs'],
  args: {
    size: 'md',
    tone: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <InteractiveCursor {...args}>
      <div className="h-64 w-96 bg-surface-secondary rounded-2xl border border-border-primary flex items-center justify-center interactive">
        Hover target
      </div>
    </InteractiveCursor>
  ),
};

export const Accent: Story = {
  args: { tone: 'accent', size: 'lg' },
  render: Default.render,
};

export const Playground: Story = {
  args: { tone: 'inverse', size: 'sm' },
  render: Default.render,
};
