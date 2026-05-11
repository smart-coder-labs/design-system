import type { Meta, StoryObj } from '@storybook/react';
import { Blockquote } from './Blockquote';

const meta = {
    title: 'Components/Blockquote',
    component: Blockquote,
    tags: ['autodocs'],
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'The secret of getting ahead is getting started.',
        author: 'Mark Twain',
    },
};

export const WithSource: Story = {
    args: {
        children: 'In the middle of difficulty lies opportunity.',
        author: 'Albert Einstein',
        source: 'The World As I See It',
    },
};

export const AuthorOnly: Story = {
    args: {
        children: 'The best time to plant a tree was 20 years ago. The second best time is now.',
        author: 'Chinese Proverb',
    },
};

export const LongQuote: Story = {
    args: {
        children: 'Success is not final, failure is not fatal: it is the courage to continue that counts. Success is not final, failure is not fatal: it is the courage to continue that counts.',
        author: 'Winston Churchill',
        source: 'Speech, 1941',
    },
};

export const WithoutAttribution: Story = {
    args: {
        children: 'Simplicity is the ultimate sophistication.',
    },
};
