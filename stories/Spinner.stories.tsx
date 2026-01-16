import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../components/ui/Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'Feedback/Spinner',
    component: Spinner,
    tags: [],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        color: {
            control: 'select',
            options: ['default', 'white', 'blue'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
    args: {
        size: 'md',
        color: 'default',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
        </div>
    ),
};

export const Colors: Story = {
    render: () => (
        <div className="flex items-center gap-4 p-4 bg-surface-secondary rounded-lg">
            <Spinner color="default" />
            <Spinner color="blue" />
            <div className="bg-black p-2 rounded">
                <Spinner color="white" />
            </div>
        </div>
    ),
};
