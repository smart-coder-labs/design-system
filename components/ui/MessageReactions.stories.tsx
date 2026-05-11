import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MessageReactions } from './MessageReactions';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof MessageReactions> = {
  title: 'Components/MessageReactions',
  component: MessageReactions,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reactions: [
      { emoji: '👍', count: 5, reacted: false },
      { emoji: '❤️', count: 3, reacted: true },
      { emoji: '😄', count: 2, reacted: false },
      { emoji: '🎉', count: 1, reacted: false },
    ],
    onReact: action('react'),
  },
};

export const SingleReaction: Story = {
  args: {
    reactions: [{ emoji: '👍', count: 12, reacted: false }],
    onReact: action('react'),
  },
};

export const ManyReactions: Story = {
  args: {
    reactions: [
      { emoji: '👍', count: 42, reacted: false },
      { emoji: '❤️', count: 28, reacted: true },
      { emoji: '🔥', count: 15, reacted: false },
      { emoji: '🎉', count: 12, reacted: false },
      { emoji: '🚀', count: 8, reacted: false },
      { emoji: '💯', count: 5, reacted: false },
      { emoji: '👏', count: 3, reacted: false },
    ],
    onReact: action('react'),
  },
};

export const AllReacted: Story = {
  args: {
    reactions: [
      { emoji: '👍', count: 10, reacted: true },
      { emoji: '❤️', count: 7, reacted: true },
      { emoji: '😂', count: 4, reacted: true },
    ],
    onReact: action('react'),
  },
};

export const FinanceReactions: Story = {
  args: {
    reactions: [
      { emoji: '💪', count: 24, reacted: false },
      { emoji: '🎯', count: 18, reacted: true },
      { emoji: '💰', count: 12, reacted: false },
      { emoji: '🔥', count: 9, reacted: false },
    ],
    onReact: action('react'),
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'MessageReactions used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};
