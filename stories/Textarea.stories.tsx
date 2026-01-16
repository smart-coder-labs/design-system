import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../components/ui/Input';

const meta: Meta<typeof Textarea> = {
    title: 'Forms/Textarea',
    component: Textarea,
    tags: [],
    argTypes: {
        resize: {
            control: 'select',
            options: ['none', 'vertical', 'horizontal', 'both'],
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    args: {
        label: 'Description',
        placeholder: 'Enter description...',
        rows: 4,
    },
};

export const WithError: Story = {
    args: {
        label: 'Comment',
        error: 'Comment cannot be empty',
    },
};
