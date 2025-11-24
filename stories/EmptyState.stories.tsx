import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '../components/EmptyState';
import { Button } from '../components/Button';
import { FolderOpen, Search, Inbox, FileQuestion, Plus } from 'lucide-react';

const meta: Meta<typeof EmptyState> = {
    title: 'Surfaces/EmptyState',
    component: EmptyState,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
    },
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
    args: {
        icon: <FolderOpen />,
        title: 'No items found',
        description: 'There are no items to display at this time. Create a new item to get started.',
    },
};

export const WithAction: Story = {
    args: {
        icon: <Inbox />,
        title: 'Your inbox is empty',
        description: 'All caught up! You have no new messages.',
        action: (
            <Button variant="primary" leftIcon={<Plus size={16} />}>
                Compose Message
            </Button>
        ),
    },
};

export const SearchResults: Story = {
    args: {
        icon: <Search />,
        title: 'No results found',
        description: 'We couldn\'t find anything matching your search. Try adjusting your filters.',
        action: (
            <Button variant="secondary">
                Clear Filters
            </Button>
        ),
    },
};

export const Minimal: Story = {
    args: {
        title: 'No Data',
        description: 'Data is not available yet.',
    },
};

export const CustomIcon: Story = {
    args: {
        icon: <FileQuestion />,
        title: 'File not found',
        description: 'The file you are looking for has been moved or deleted.',
        action: (
            <div className="flex gap-2">
                <Button variant="secondary">Go Back</Button>
                <Button variant="primary">Home</Button>
            </div>
        ),
    },
};
