import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../components/ui/Heading';

const meta: Meta<typeof Heading> = {
    title: 'Typography/Heading',
    component: Heading,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A semantic wrapper around the Title component, used for section headings.',
            },
        },
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
    args: {
        children: 'Section Heading',
        level: 2,
    },
};

export const WithGradient: Story = {
    args: {
        children: 'Featured Section',
        level: 2,
        gradient: true,
    },
};
