import type { Meta, StoryObj } from '@storybook/react';
import { CommentThread } from './CommentThread';

const currentUser = { id: 'me', name: 'Cesar Ruiz', initials: 'CR' };
const otherUser = { id: 'alice', name: 'Alice Johnson', initials: 'AJ' };

const sampleComments = [
    {
        id: '1',
        author: otherUser,
        content: 'Great work on the new dashboard! The charts look much cleaner now.',
        timestamp: '2 hours ago',
        likes: 3,
        isLiked: false,
        replies: [
            {
                id: '1-1',
                author: currentUser,
                content: 'Thanks! I spent a lot of time on the animations.',
                timestamp: '1 hour ago',
                likes: 1,
                isLiked: false,
            },
        ],
    },
    {
        id: '2',
        author: { id: 'bob', name: 'Bob Smith', initials: 'BS' },
        content: 'Should we also add a dark mode toggle to the settings page?',
        timestamp: '30 min ago',
        likes: 5,
        isLiked: true,
    },
];

const meta = {
    title: 'Components/CommentThread',
    component: CommentThread,
    tags: ['autodocs'],
} satisfies Meta<typeof CommentThread>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        comments: sampleComments,
        currentUser,
    },
};

export const Empty: Story = {
    args: {
        comments: [],
        currentUser,
    },
};

export const SingleComment: Story = {
    args: {
        comments: [sampleComments[1]],
        currentUser,
    },
};

export const DeeplyNested: Story = {
    args: {
        comments: [
            {
                id: 'deep-1',
                author: otherUser,
                content: 'This needs review.',
                timestamp: '5 hours ago',
                likes: 2,
                replies: [
                    {
                        id: 'deep-1-1',
                        author: currentUser,
                        content: 'I\'ll take a look shortly.',
                        timestamp: '4 hours ago',
                        likes: 0,
                        replies: [
                            {
                                id: 'deep-1-1-1',
                                author: otherUser,
                                content: 'Any updates?',
                                timestamp: '3 hours ago',
                                likes: 0,
                            },
                        ],
                    },
                ],
            },
        ],
        currentUser,
    },
};
