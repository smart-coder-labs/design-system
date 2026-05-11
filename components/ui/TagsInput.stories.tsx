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
        label: 'Categories',
    },
};

export const WithTags: Story = {
    args: {
        value: ['investment', 'savings', 'retirement'],
        placeholder: 'Add a tag...',
        label: 'Investment Categories',
    },
};

export const MaxTags: Story = {
    args: {
        value: ['tech', 'finance'],
        placeholder: 'Add a tag...',
        label: 'Interests',
        maxTags: 5,
        helperText: 'You can add up to 5 tags',
    },
};

export const WithError: Story = {
    args: {
        value: ['invalid-tag-with-very-long-name-that-exceeds-limit'],
        placeholder: 'Add a tag...',
        label: 'Categories',
        error: 'Tag name too long',
    },
};

export const Disabled: Story = {
    args: {
        value: ['stocks', 'bonds', 'etfs'],
        placeholder: 'Add a tag...',
        label: 'Portfolio Tags',
        disabled: true,
    },
};
