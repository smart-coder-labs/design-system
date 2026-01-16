import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '../components/ui/SearchInput';
import { useState } from 'react';

const meta: Meta<typeof SearchInput> = {
    title: 'Forms/SearchInput',
    component: SearchInput,
    tags: [],
    argTypes: {
        isLoading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        placeholder: {
            control: 'text',
        },
    },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <div className="max-w-sm">
                <SearchInput
                    {...args}
                    value={value}
                    onChange={setValue}
                    onSearch={(val) => console.log('Searching for:', val)}
                />
            </div>
        );
    },
    args: {
        placeholder: 'Search users...',
    },
};

export const Loading: Story = {
    render: (args) => {
        const [value, setValue] = useState('Searching...');
        return (
            <div className="max-w-sm">
                <SearchInput
                    {...args}
                    value={value}
                    onChange={setValue}
                    isLoading={true}
                />
            </div>
        );
    },
    args: {
        placeholder: 'Search...',
    },
};

export const Disabled: Story = {
    args: {
        value: 'Cannot search',
        disabled: true,
    },
};
