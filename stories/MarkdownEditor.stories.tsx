import type { Meta, StoryObj } from '@storybook/react';
import { MarkdownEditor } from '../components/MarkdownEditor';
import { useState } from 'react';

const meta: Meta<typeof MarkdownEditor> = {
    title: 'Forms/MarkdownEditor',
    component: MarkdownEditor,
    tags: [],
    argTypes: {
        disabled: {
            control: 'boolean',
        },
        error: {
            control: 'text',
        },
        minHeight: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof MarkdownEditor>;

export const Default: Story = {
    render: (args) => {
        const [content, setContent] = useState('# Hello World\nThis is **markdown**.');
        return (
            <div className="max-w-2xl">
                <MarkdownEditor
                    {...args}
                    value={content}
                    onChange={setContent}
                />
            </div>
        );
    },
    args: {
        label: 'Readme.md',
        placeholder: 'Type your markdown...',
    },
};

export const WithError: Story = {
    render: (args) => {
        const [content, setContent] = useState('');
        return (
            <div className="max-w-2xl">
                <MarkdownEditor
                    {...args}
                    value={content}
                    onChange={setContent}
                />
            </div>
        );
    },
    args: {
        label: 'Description',
        error: 'Description is required',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Locked File',
        value: 'This file is locked.',
        disabled: true,
    },
};
