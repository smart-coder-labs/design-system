import type { Meta, StoryObj } from '@storybook/react';
import { TagsInput } from '../components/TagsInput';
import { useState } from 'react';

const meta: Meta<typeof TagsInput> = {
    title: 'Forms/TagsInput',
    component: TagsInput,
    tags: ['autodocs'],
    argTypes: {
        disabled: {
            control: 'boolean',
        },
        error: {
            control: 'text',
        },
        helperText: {
            control: 'text',
        },
        maxTags: {
            control: 'number',
        },
    },
};

export default meta;
type Story = StoryObj<typeof TagsInput>;

export const Default: Story = {
    render: (args) => {
        const [tags, setTags] = useState<string[]>(['React', 'TypeScript']);
        return (
            <div className="max-w-md">
                <TagsInput
                    {...args}
                    value={tags}
                    onChange={setTags}
                />
            </div>
        );
    },
    args: {
        label: 'Skills',
        placeholder: 'Add a skill...',
        helperText: 'Press Enter or Comma to add',
    },
};

export const WithMaxTags: Story = {
    render: (args) => {
        const [tags, setTags] = useState<string[]>(['Design', 'Development']);
        return (
            <div className="max-w-md">
                <TagsInput
                    {...args}
                    value={tags}
                    onChange={setTags}
                    maxTags={5}
                />
            </div>
        );
    },
    args: {
        label: 'Interests (Max 5)',
        placeholder: 'Add interest...',
    },
};

export const WithError: Story = {
    render: (args) => {
        const [tags, setTags] = useState<string[]>([]);
        return (
            <div className="max-w-md">
                <TagsInput
                    {...args}
                    value={tags}
                    onChange={setTags}
                />
            </div>
        );
    },
    args: {
        label: 'Required Tags',
        error: 'At least one tag is required',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Read Only Tags',
        value: ['Locked', 'Immutable'],
        disabled: true,
    },
};
