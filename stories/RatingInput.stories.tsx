import type { Meta, StoryObj } from '@storybook/react';
import { RatingInput } from '../components/ui/RatingInput';
import { useState } from 'react';

const meta: Meta<typeof RatingInput> = {
    title: 'Forms/RatingInput',
    component: RatingInput,
    tags: [],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        disabled: {
            control: 'boolean',
        },
        readOnly: {
            control: 'boolean',
        },
        max: {
            control: 'number',
        },
    },
};

export default meta;
type Story = StoryObj<typeof RatingInput>;

export const Default: Story = {
    render: (args) => {
        const [rating, setRating] = useState(3);
        return (
            <RatingInput
                {...args}
                value={rating}
                onChange={setRating}
            />
        );
    },
    args: {
        label: 'Rate your experience',
    },
};

export const ReadOnly: Story = {
    args: {
        label: 'Average Rating',
        value: 4,
        readOnly: true,
    },
};

export const Large: Story = {
    render: (args) => {
        const [rating, setRating] = useState(0);
        return (
            <RatingInput
                {...args}
                value={rating}
                onChange={setRating}
            />
        );
    },
    args: {
        label: 'Big Stars',
        size: 'lg',
    },
};

export const WithError: Story = {
    args: {
        label: 'Rating',
        error: 'Please select a rating',
        value: 0,
    },
};
