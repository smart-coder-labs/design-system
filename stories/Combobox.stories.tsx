import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from '../components/Combobox';
import React from 'react';

const meta: Meta<typeof Combobox> = {
    title: 'Forms/Combobox',
    component: Combobox,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
    },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const frameworks = [
    { value: 'next.js', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt.js', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
    { value: 'wordpress', label: 'WordPress' },
    { value: 'express.js', label: 'Express.js' },
    { value: 'nest.js', label: 'Nest.js' },
];

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = React.useState('');
        return (
            <div className="w-[300px] p-4">
                <Combobox
                    {...args}
                    items={frameworks}
                    value={value}
                    onChange={setValue}
                />
            </div>
        );
    },
};

export const WithPreselection: Story = {
    render: (args) => {
        const [value, setValue] = React.useState('next.js');
        return (
            <div className="w-[300px] p-4">
                <Combobox
                    {...args}
                    items={frameworks}
                    value={value}
                    onChange={setValue}
                />
            </div>
        );
    },
};

export const Disabled: Story = {
    render: (args) => {
        return (
            <div className="w-[300px] p-4">
                <Combobox
                    {...args}
                    items={frameworks}
                    disabled
                />
            </div>
        );
    },
};

export const CustomPlaceholder: Story = {
    render: (args) => {
        const [value, setValue] = React.useState('');
        return (
            <div className="w-[300px] p-4">
                <Combobox
                    {...args}
                    items={frameworks}
                    value={value}
                    onChange={setValue}
                    placeholder="Select a framework..."
                    searchPlaceholder="Filter frameworks..."
                />
            </div>
        );
    },
};

export const EmptyState: Story = {
    render: (args) => {
        const [value, setValue] = React.useState('');
        return (
            <div className="w-[300px] p-4">
                <Combobox
                    {...args}
                    items={[]}
                    value={value}
                    onChange={setValue}
                    emptyMessage="No frameworks found."
                />
            </div>
        );
    },
};
