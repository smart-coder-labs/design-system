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
    title: 'Data Display/CommentThread',
    component: CommentThread,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div className="bg-bg-primary p-4 rounded-xl">
                <Story />
            </div>
        ),
    ],
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

export const ManyComments: Story = {
    args: {
        comments: Array.from({ length: 12 }, (_, i) => ({
            id: `many-${i}`,
            author: i % 2 === 0 ? otherUser : { id: `user-${i}`, name: `User ${i}`, initials: `U${i}` },
            content: `Comment number ${i + 1} — this simulates a thread with many comments to test scrolling and rendering performance.`,
            timestamp: `${i * 15} minutes ago`,
            likes: Math.floor(Math.random() * 10),
            isLiked: i % 3 === 0,
        })),
        currentUser,
    },
};

export const WithCallbacks: Story = {
    args: {
        comments: sampleComments,
        currentUser,
        onReply: (commentId, content) => console.log('Reply to', commentId, ':', content),
        onLike: (commentId) => console.log('Liked:', commentId),
        onEdit: (commentId, newContent) => console.log('Edit', commentId, ':', newContent),
        onDelete: (commentId) => console.log('Delete:', commentId),
    },
};

export const LongContent: Story = {
    args: {
        comments: [
            {
                id: 'long-1',
                author: otherUser,
                content: 'I\'ve been reviewing the latest pull request and noticed that the dynamic import pattern for lazy-loaded components could be optimized further. Specifically, if we use React.lazy with Suspense boundaries at the route level rather than the component level, we could reduce the initial bundle size by approximately 15-20%. Additionally, we should consider implementing code splitting for the charting library since it\'s only used on two pages.',
                timestamp: '1 hour ago',
                likes: 7,
                replies: [
                    {
                        id: 'long-1-1',
                        author: currentUser,
                        content: 'Great catch! I\'ll refactor the Suspense boundaries in the next sprint. The charting library split alone should save us ~200KB.',
                        timestamp: '45 min ago',
                        likes: 3,
                    },
                ],
            },
            {
                id: 'long-2',
                author: { id: 'bob', name: 'Bob Smith', initials: 'BS' },
                content: 'This is a short reply.',
                timestamp: '30 min ago',
                likes: 1,
            },
        ],
        currentUser,
    },
};

export const DarkMode: Story = {
    args: {
        comments: sampleComments,
        currentUser,
    },
    decorators: [
        (Story) => (
            <div className="dark p-4 bg-gray-900 rounded-lg">
                <Story />
            </div>
        ),
    ],
};
