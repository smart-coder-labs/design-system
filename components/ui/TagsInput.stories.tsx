import type { Meta, StoryObj } from '@storybook/react';
import { TagsInput } from './TagsInput';
import { useState } from 'react';

const meta = {
    title: 'Components/TagsInput',
    component: TagsInput,
    tags: ['autodocs'],
} satisfies Meta<typeof TagsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Add a tag...',
        onChange: (tags) => console.log('Tags:', tags),
    },
};

export const WithTags: Story = {
    args: {
        value: ['investment', 'savings', 'budget'],
        placeholder: 'Add more...',
        onChange: (tags) => console.log('Tags:', tags),
    },
};

export const WithLabel: Story = {
    args: {
        value: ['crypto', 'stocks', 'etf'],
        label: 'Investment Categories',
        placeholder: 'Add category...',
        onChange: (tags) => console.log('Tags:', tags),
    },
};

export const WithError: Story = {
    args: {
        value: ['invalid-tag'],
        label: 'Categories',
        error: 'Invalid category name',
        onChange: (tags) => console.log('Tags:', tags),
    },
};

export const WithHelperText: Story = {
    args: {
        value: ['stocks', 'bonds'],
        label: 'Portfolio Tags',
        placeholder: 'Add tag...',
        helperText: 'Press Enter or comma to add a tag. Max 10 tags.',
        onChange: (tags) => console.log('Tags:', tags),
    },
};

export const Disabled: Story = {
    args: {
        value: ['stocks', 'etf', 'crypto'],
        disabled: true,
        onChange: (tags) => console.log('Tags:', tags),
    },
};

export const MaxTags: Story = {
    args: {
        value: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'],
        label: 'Limited Tags (Max 5)',
        placeholder: 'Max tags reached',
        maxTags: 5,
        onChange: (tags) => console.log('Tags:', tags),
    },
};

export const InteractiveTags: Story = {
    render: () => {
        const [tags, setTags] = useState<string[]>(['savings', 'investment']);
        const [message, setMessage] = useState('');
        const handleSubmit = () => {
            if (tags.length === 0) {
                setMessage('Please add at least one tag');
                return;
            }
            setMessage(`Filters applied: ${tags.join(', ')}`);
            alert(`Searching transactions with tags: ${tags.join(', ')}`);
        };
        return (
            <div className="space-y-4 max-w-md">
                <TagsInput
                    value={tags}
                    onChange={(t) => { setTags(t); setMessage(''); }}
                    label="Filter Transactions"
                    placeholder="Add category filter..."
                    helperText="Filter by category (e.g., shopping, dining, bills)"
                />
                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 w-full"
                >
                    Apply Filters
                </button>
                {message && (
                    <p className="text-sm text-green-600 text-center">{message}</p>
                )}
            </div>
        );
    },
};

export const Empty: Story = {
    args: {
        value: [],
        label: 'No Tags Yet',
        placeholder: 'Start typing to add tags...',
        onChange: (tags) => console.log('Tags:', tags),
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        value: ['dark', 'mode', 'theme'],
        label: 'Theme Tags',
        onChange: (tags) => console.log('Tags:', tags),
    },
};
