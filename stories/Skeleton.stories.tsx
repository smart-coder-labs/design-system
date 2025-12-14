import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../components/Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Feedback/Skeleton',
    component: Skeleton,
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    render: () => (
        <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    ),
};

export const CardExample: Story = {
    render: () => (
        <div className="flex flex-col space-y-3 w-[300px]">
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
            </div>
        </div>
    ),
};
