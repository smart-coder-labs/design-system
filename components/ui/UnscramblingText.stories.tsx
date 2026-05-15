import type { Meta, StoryObj } from '@storybook/react';
import { UnscramblingText } from './UnscramblingText';

const meta = {
  title: 'Cyberpunk/UnscramblingText',
  component: UnscramblingText,
  tags: ['autodocs'],
  args: {
    text: 'Sample output',
    size: 'md',
    tone: 'default',
  },
} satisfies Meta<typeof UnscramblingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Accent: Story = {
  args: { tone: 'accent', size: 'lg' },
};

export const Playground: Story = {
  args: { tone: 'muted', size: 'sm', intervalMs: 20, revealStep: 0.5 },
};
