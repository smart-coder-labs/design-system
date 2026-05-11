import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

const meta = {
    title: 'Components/ThemeToggle',
    component: ThemeToggle,
    tags: ['autodocs'],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        defaultMode: 'system',
        label: 'Theme',
        allowSystem: true,
    },
};

export const WithoutSystem: Story = {
    args: {
        defaultMode: 'light',
        label: 'Appearance',
        allowSystem: false,
    },
};

export const CustomLabels: Story = {
    args: {
        defaultMode: 'system',
        label: 'Display Mode',
        description: 'Choose your preferred color scheme',
        allowSystem: true,
    },
};
