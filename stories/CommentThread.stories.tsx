import type { Meta, StoryObj } from '@storybook/react';
import { CommentThread, CommentData, CommentUser } from '../components/ui/CommentThread';
import { useState } from 'react';

const meta = {
    title: 'Data Display/CommentThread',
    component: CommentThread,
    parameters: {
        layout: 'padded',
    },
    tags: [],
} satisfies Meta<typeof CommentThread>;

export default meta;
type Story = StoryObj<typeof meta>;

const currentUser: CommentUser = {
    id: 'u1',
    name: 'Alex Chen',
    initials: 'AC',
};

const initialComments: CommentData[] = [
    {
        id: 'c1',
        author: { id: 'u2', name: 'Sarah Miller', initials: 'SM' },
        content: 'Has anyone tested this with the new React 19 RC? I heard there might be some hydration issues with the suspense boundaries.',
        timestamp: '2 hours ago',
        likes: 12,
        isLiked: true,
        replies: [
            {
                id: 'c2',
                author: { id: 'u3', name: 'Mike Ross', initials: 'MR' },
                content: 'Yes, I ran the test suite yesterday. The hydration warnings are gone in the latest canary build.',
                timestamp: '1 hour ago',
                likes: 4,
                replies: [
                    {
                        id: 'c3',
                        author: { id: 'u1', name: 'Alex Chen', initials: 'AC' },
                        content: 'Great news! I will update the dependencies in the next PR.',
                        timestamp: '15 mins ago',
                        likes: 1,
                    }
                ]
            }
        ]
    },
    {
        id: 'c4',
        author: { id: 'u4', name: 'David Kim', initials: 'DK' },
        content: 'Could we add a screenshot of the new layout? It would help with the design review.',
        timestamp: '3 hours ago',
        likes: 0,
    }
];

// Wrapper to handle state for interactive stories
const InteractiveThread = (props: any) => {
    const [comments, setComments] = useState<CommentData[]>(props.comments || initialComments);

    const handleReply = (commentId: string, content: string) => {
        const newReply: CommentData = {
            id: `new-${Date.now()}`,
            author: currentUser,
            content,
            timestamp: 'Just now',
            likes: 0,
        };

        if (commentId === 'root') {
            setComments([newReply, ...comments]);
            return;
        }

        const addReplyToComment = (items: CommentData[]): CommentData[] => {
            return items.map(item => {
                if (item.id === commentId) {
                    return {
                        ...item,
                        replies: [...(item.replies || []), newReply]
                    };
                }
                if (item.replies) {
                    return {
                        ...item,
                        replies: addReplyToComment(item.replies)
                    };
                }
                return item;
            });
        };

        setComments(addReplyToComment(comments));
    };

    const handleLike = (commentId: string) => {
        const toggleLike = (items: CommentData[]): CommentData[] => {
            return items.map(item => {
                if (item.id === commentId) {
                    return {
                        ...item,
                        isLiked: !item.isLiked,
                        likes: (item.likes || 0) + (item.isLiked ? -1 : 1)
                    };
                }
                if (item.replies) {
                    return {
                        ...item,
                        replies: toggleLike(item.replies)
                    };
                }
                return item;
            });
        };
        setComments(toggleLike(comments));
    };

    const handleDelete = (commentId: string) => {
        const deleteComment = (items: CommentData[]): CommentData[] => {
            return items.filter(item => item.id !== commentId).map(item => ({
                ...item,
                replies: item.replies ? deleteComment(item.replies) : undefined
            }));
        };
        setComments(deleteComment(comments));
    };

    return (
        <div className="max-w-2xl mx-auto">
            <CommentThread
                {...props}
                comments={comments}
                currentUser={currentUser}
                onReply={handleReply}
                onLike={handleLike}
                onDelete={handleDelete}
            />
        </div>
    );
};

export const Default: Story = {
    args: {
        comments: initialComments,
        currentUser: currentUser,
    },
    render: (args) => <InteractiveThread {...args} />
};

export const CodeReview: Story = {
    name: '💻 Use Case: Code Review',
    args: {
        currentUser: currentUser,
        comments: [
            {
                id: 'cr1',
                author: { id: 'u5', name: 'Senior Dev', initials: 'SD' },
                content: (
                    <div className="space-y-2">
                        <p>This logic seems a bit fragile. What happens if `user.preferences` is undefined?</p>
                        <div className="bg-surface-secondary p-2 rounded text-xs font-mono border border-border-primary">
                            const theme = user.preferences.theme || 'light';
                        </div>
                        <p>Consider using optional chaining:</p>
                        <div className="bg-surface-secondary p-2 rounded text-xs font-mono border border-border-primary">
                            const theme = user?.preferences?.theme ?? 'light';
                        </div>
                    </div>
                ),
                timestamp: '1 day ago',
                likes: 3,
                replies: [
                    {
                        id: 'cr2',
                        author: { id: 'u1', name: 'Alex Chen', initials: 'AC' },
                        content: 'Good catch! I missed that edge case. Updating now.',
                        timestamp: '20 hours ago',
                        likes: 1,
                    }
                ]
            }
        ]
    },
    render: (args) => <InteractiveThread {...args} />
};

export const SocialFeed: Story = {
    name: '📱 Use Case: Social Feed',
    args: {
        currentUser: currentUser,
        comments: [
            {
                id: 's1',
                author: { id: 'u6', name: 'Emma Watson', initials: 'EW' },
                content: 'Just launched our new design system! 🚀 Check it out at design.example.com. Huge thanks to the team for the hard work.',
                timestamp: '5 mins ago',
                likes: 89,
                isLiked: true,
                replies: [
                    {
                        id: 's2',
                        author: { id: 'u7', name: 'John Doe', initials: 'JD' },
                        content: 'Looks amazing! Love the dark mode implementation.',
                        timestamp: '2 mins ago',
                        likes: 5,
                    }
                ]
            }
        ]
    },
    render: (args) => <InteractiveThread {...args} />
};

export const DeeplyNested: Story = {
    name: '↳ Deeply Nested',
    args: {
        currentUser: currentUser,
        comments: [
            {
                id: 'n1',
                author: { id: 'u1', name: 'User 1', initials: 'U1' },
                content: 'Level 1: Root comment',
                timestamp: '1h',
                replies: [
                    {
                        id: 'n2',
                        author: { id: 'u2', name: 'User 2', initials: 'U2' },
                        content: 'Level 2: First reply',
                        timestamp: '50m',
                        replies: [
                            {
                                id: 'n3',
                                author: { id: 'u3', name: 'User 3', initials: 'U3' },
                                content: 'Level 3: Nested reply',
                                timestamp: '40m',
                                replies: [
                                    {
                                        id: 'n4',
                                        author: { id: 'u4', name: 'User 4', initials: 'U4' },
                                        content: 'Level 4: Deeply nested (should stop indenting visually)',
                                        timestamp: '30m',
                                        replies: [
                                            {
                                                id: 'n5',
                                                author: { id: 'u5', name: 'User 5', initials: 'U5' },
                                                content: 'Level 5: Still readable without excessive indentation',
                                                timestamp: '20m',
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    render: (args) => <InteractiveThread {...args} />
};
