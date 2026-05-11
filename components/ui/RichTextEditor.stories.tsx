import type { Meta, StoryObj } from '@storybook/react';
import { RichTextEditor } from './RichTextEditor';
import { useState } from 'react';

const meta = {
    title: 'Components/RichTextEditor',
    component: RichTextEditor,
    tags: ['autodocs'],
} satisfies Meta<typeof RichTextEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Start typing...',
        onChange: (html) => console.log('Content:', html),
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Transaction Note',
        placeholder: 'Add a note to this transaction...',
        onChange: (html) => console.log('Content:', html),
    },
};

export const WithContent: Story = {
    args: {
        label: 'Investment Notes',
        value: '<p>This investment is part of my <strong>retirement portfolio</strong> for long-term growth.</p><p><em>Target allocation:</em> 60% stocks, 30% bonds, 10% crypto.</p>',
        onChange: (html) => console.log('Content:', html),
    },
};

export const WithError: Story = {
    args: {
        label: 'Support Message',
        value: '<p>My transaction was not processed...</p>',
        error: 'Message exceeds 500 characters',
        onChange: (html) => console.log('Content:', html),
    },
};

export const Disabled: Story = {
    args: {
        label: 'Read-Only Notes',
        value: '<p>This is a <strong>signed</strong> agreement that cannot be modified.</p>',
        disabled: true,
        onChange: (html) => console.log('Content:', html),
    },
};

export const WithHelperText: Story = {
    args: {
        label: 'Transfer Description',
        placeholder: 'Describe the purpose of this transfer...',
        helperText: 'This note will be visible to the recipient.',
        onChange: (html) => console.log('Content:', html),
    },
};

export const InteractiveEditor: Story = {
    render: () => {
        const [content, setContent] = useState('<p>Write your financial report here...</p>');
        return (
            <div className="space-y-4">
                <RichTextEditor
                    label="Quarterly Report"
                    value={content}
                    onChange={setContent}
                    minHeight="200px"
                />
                <div className="p-3 bg-surface-secondary rounded-lg border border-border-primary">
                    <h4 className="text-xs font-semibold text-text-secondary mb-2">HTML Output Preview</h4>
                    <pre className="text-xs font-mono text-text-secondary whitespace-pre-wrap break-all overflow-auto max-h-32">
                        {content}
                    </pre>
                </div>
            </div>
        );
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        label: 'Notes (Dark Mode)',
        value: '<p><strong>Portfolio Review:</strong> Performance improved by 12% this quarter.</p>',
        onChange: (html) => console.log('Content:', html),
    },
};
