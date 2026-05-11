import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from './Spacer';

const meta = {
  title: 'Components/Spacer',
  component: Spacer,
  tags: ['autodocs'],
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'md',
  },
  decorators: [
    (Story) => (
      <div className="border border-dashed border-border-primary rounded-lg p-4">
        <div className="bg-accent-blue/10 p-2 rounded text-sm">Content above</div>
        <Story />
        <div className="bg-accent-blue/10 p-2 rounded text-sm">Content below</div>
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  decorators: [
    (Story) => (
      <div className="border border-dashed border-border-primary rounded-lg p-4">
        <div className="bg-accent-blue/10 p-2 rounded text-sm">Above</div>
        <Story />
        <div className="bg-accent-blue/10 p-2 rounded text-sm">Below</div>
      </div>
    ),
  ],
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  decorators: [
    (Story) => (
      <div className="border border-dashed border-border-primary rounded-lg p-4">
        <div className="bg-accent-blue/10 p-2 rounded text-sm">Above</div>
        <Story />
        <div className="bg-accent-blue/10 p-2 rounded text-sm">Below</div>
      </div>
    ),
  ],
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
  decorators: [
    (Story) => (
      <div className="border border-dashed border-border-primary rounded-lg p-4">
        <div className="bg-accent-blue/10 p-2 rounded text-sm">Above</div>
        <Story />
        <div className="bg-accent-blue/10 p-2 rounded text-sm">Below</div>
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: {
    size: 'md',
    orientation: 'vertical',
  },
  decorators: [
    (Story) => (
      <div className="border border-dashed border-border-primary rounded-lg p-4 flex items-center">
        <div className="bg-accent-blue/10 p-2 rounded text-sm">Left</div>
        <Story />
        <div className="bg-accent-blue/10 p-2 rounded text-sm">Right</div>
      </div>
    ),
  ],
};
