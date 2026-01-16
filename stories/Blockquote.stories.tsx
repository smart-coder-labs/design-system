import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Blockquote } from '../components/ui/Blockquote';

const meta: Meta<typeof Blockquote> = {
    title: 'Typography/Blockquote',
    component: Blockquote,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A component for displaying quotes with optional author and source citation.',
            },
        },
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
    args: {
        children: 'Design is not just what it looks like and feels like. Design is how it works.',
        author: 'Steve Jobs',
    },
};

export const WithSource: Story = {
    args: {
        children: 'Simplicity is the ultimate sophistication.',
        author: 'Leonardo da Vinci',
        source: 'Notebooks',
    },
};

export const LongQuote: Story = {
    render: () => (
        <div className="max-w-xl">
            <Blockquote author="Dieter Rams" source="Ten Principles for Good Design">
                Good design is innovative. Good design makes a product useful. Good design is aesthetic. Good design makes a product understandable. Good design is unobtrusive. Good design is honest. Good design is long-lasting. Good design is thorough down to the last detail. Good design is environmentally friendly. Good design is as little design as possible.
            </Blockquote>
        </div>
    ),
};
