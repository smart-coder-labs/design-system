import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Data Display/Avatar',
    component: Avatar,
    tags: [],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        shape: {
            control: 'select',
            options: ['circle', 'square'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    render: (args) => (
        <Avatar {...args}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    ),
    args: {
        size: 'md',
        shape: 'circle',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar size="xs">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>XS</AvatarFallback>
            </Avatar>
            <Avatar size="sm">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar size="md">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>LG</AvatarFallback>
            </Avatar>
            <Avatar size="xl">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>XL</AvatarFallback>
            </Avatar>
            <Avatar size="2xl">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>2XL</AvatarFallback>
            </Avatar>
        </div>
    ),
};

export const Shapes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar shape="circle">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <Avatar shape="square">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>S</AvatarFallback>
            </Avatar>
        </div>
    ),
};

export const Fallback: Story = {
    render: (args) => (
        <Avatar {...args}>
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    ),
};
