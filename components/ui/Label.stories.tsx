import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta = {
    title: 'Components/Label',
    component: Label,
    tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Email Address',
    },
};

export const Required: Story = {
    args: {
        children: 'Email Address',
        required: true,
    },
};

export const WithHtmlFor: Story = {
    args: {
        children: 'Full Name',
        htmlFor: 'full-name-input',
        required: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled Field',
        color: 'tertiary',
    },
};
