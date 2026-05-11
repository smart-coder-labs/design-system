import type { Meta, StoryObj } from '@storybook/react';
import { ScrollProgressBar } from './ScrollProgressBar';

const meta = {
  title: 'Components/ScrollProgressBar',
  component: ScrollProgressBar,
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className="h-96 overflow-y-auto border rounded-lg p-4">
        <div className="space-y-4">
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i} className="text-text-secondary">Scrollable content paragraph {i + 1}. This demonstrates the scroll progress indicator.</p>
          ))}
        </div>
        <Story />
      </div>
    ),
  ],
};
