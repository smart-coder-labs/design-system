import type { Meta, StoryObj } from '@storybook/react';
import { MessageReactions, ReactionPicker } from './MessageReactions';

const meta = {
    title: 'Components/MessageReactions',
    component: MessageReactions,
    tags: ['autodocs'],
} satisfies Meta<typeof MessageReactions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        reactions: [
            { type: 'like', count: 5, userReacted: false },
            { type: 'love', count: 3, userReacted: false },
            { type: 'laugh', count: 1, userReacted: false },
        ],
    },
};

export const WithUserReacted: Story = {
    args: {
        reactions: [
            { type: 'like', count: 8, userReacted: true },
            { type: 'love', count: 2, userReacted: false },
            { type: 'laugh', count: 4, userReacted: true },
        ],
    },
};

export const SingleReaction: Story = {
    args: {
        reactions: [
            { type: 'thumbs-up', count: 12, userReacted: false },
        ],
    },
};

export const AllReactions: Story = {
    args: {
        reactions: [
            { type: 'like', count: 10, userReacted: false },
            { type: 'love', count: 7, userReacted: false },
            { type: 'laugh', count: 3, userReacted: false },
            { type: 'angry', count: 1, userReacted: false },
            { type: 'thumbs-up', count: 15, userReacted: false },
            { type: 'thumbs-down', count: 2, userReacted: false },
        ],
    },
};

export const Empty: Story = {
    args: {
        reactions: [],
    },
};

export const WithUsersTooltip: Story = {
    args: {
        reactions: [
            {
                type: 'like',
                count: 5,
                userReacted: true,
                users: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'],
            },
            {
                type: 'love',
                count: 2,
                userReacted: false,
                users: ['Frank', 'Grace'],
            },
        ],
        showUsers: true,
    },
};

export const WithoutCount: Story = {
    args: {
        reactions: [
            { type: 'like', count: 5, userReacted: false },
            { type: 'love', count: 3, userReacted: true },
        ],
        showCount: false,
    },
};

/* ReactionPicker stories */

const reactionPickerMeta = {
    title: 'Components/ReactionPicker',
    component: ReactionPicker,
    tags: ['autodocs'],
} satisfies Meta<typeof ReactionPicker>;

export const ReactionPickerDefault: StoryObj<typeof ReactionPicker> = {
    render: () => <ReactionPicker onReactionSelect={(type) => console.log('Selected:', type)} />,
};
