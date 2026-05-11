import type { Meta, StoryObj } from '@storybook/react';
import { UnscramblingText } from './UnscramblingText';

const meta = {
  title: 'Components/UnscramblingText',
  component: UnscramblingText,
  tags: ['autodocs'],
} satisfies Meta<typeof UnscramblingText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello, World!',
  },
};

export const CryptoPhrase: Story = {
  args: {
    text: 'Bitcoin to the moon 🚀',
  },
};

export const LongText: Story = {
  args: {
    text: 'Secure your digital assets with cold storage.',
  },
};

export const Numbers: Story = {
  args: {
    text: 'Total: $45,230.50 BTC',
  },
};

export const ShortText: Story = {
  args: {
    text: 'HODL',
  },
};
