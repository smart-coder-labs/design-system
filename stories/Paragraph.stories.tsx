import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '../components/ui/Paragraph';

const meta: Meta<typeof Paragraph> = {
    title: 'Typography/Paragraph',
    component: Paragraph,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A semantic wrapper around the Text component for body paragraphs with default spacing.',
            },
        },
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
};

export const Lead: Story = {
    args: {
        variant: 'lead',
        children: 'This is a lead paragraph. It is typically used for the opening section of an article or page to grab the reader\'s attention.',
    },
};
