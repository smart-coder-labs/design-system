import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Caption } from '../components/Caption';

const meta: Meta<typeof Caption> = {
    title: 'Typography/Caption',
    component: Caption,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A semantic wrapper around the Text component for captions and helper text.',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Caption>;

export const Default: Story = {
    args: {
        children: 'Figure 1: Monthly revenue growth over the last quarter.',
    },
};

export const UnderImage: Story = {
    render: () => (
        <div className="w-64">
            <div className="w-full h-40 bg-background-tertiary rounded-lg mb-2 flex items-center justify-center text-text-tertiary">
                Image Placeholder
            </div>
            <Caption align="center">
                A placeholder image demonstrating the caption placement.
            </Caption>
        </div>
    ),
};
