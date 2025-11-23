import type { Meta, StoryObj } from '@storybook/react';
import { RichTextEditor } from '../components/RichTextEditor';
import { useState } from 'react';

const meta: Meta<typeof RichTextEditor> = {
    title: 'Forms/RichTextEditor',
    component: RichTextEditor,
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
        minHeight: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = {
    render: (args) => {
        const [content, setContent] = useState('<p>Hello <b>World</b>!</p>');
        return (
            <div className="max-w-2xl">
                <RichTextEditor
                    {...args}
                    value={content}
                    onChange={setContent}
                />
                <div className="mt-4 p-4 bg-surface-secondary rounded-lg">
                    <h4 className="text-xs font-bold text-text-tertiary uppercase mb-2">HTML Output:</h4>
                    <code className="text-xs text-text-secondary break-all">{content}</code>
                </div>
            </div>
        );
    },
    args: {
        label: 'Description',
        placeholder: 'Write something amazing...',
    },
};

export const WithError: Story = {
    render: (args) => {
        const [content, setContent] = useState('');
        return (
            <div className="max-w-2xl">
                <RichTextEditor
                    {...args}
                    value={content}
                    onChange={setContent}
                />
            </div>
        );
    },
    args: {
        label: 'Bio',
        error: 'Bio cannot be empty',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Read Only Editor',
        value: '<p>This content is <u>read-only</u>.</p>',
        disabled: true,
    },
};
