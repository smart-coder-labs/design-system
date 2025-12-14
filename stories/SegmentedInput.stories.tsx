import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedInput } from '../components/SegmentedInput';
import { useState } from 'react';

const meta: Meta<typeof SegmentedInput> = {
    title: 'Forms/SegmentedInput',
    component: SegmentedInput,
    tags: [],
    argTypes: {
        length: {
            control: { type: 'number', min: 3, max: 8 },
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        type: {
            control: 'select',
            options: ['text', 'number', 'password'],
        },
        disabled: {
            control: 'boolean',
        },
        error: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof SegmentedInput>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <div className="flex flex-col gap-4">
                <SegmentedInput
                    {...args}
                    value={value}
                    onChange={setValue}
                    onComplete={(val) => console.log('Completed:', val)}
                />
                <div className="text-sm text-text-secondary">
                    Current value: {value}
                </div>
            </div>
        );
    },
    args: {
        length: 6,
    },
};

export const Numeric: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <SegmentedInput
                {...args}
                value={value}
                onChange={setValue}
                type="number"
            />
        );
    },
    args: {
        length: 4,
        placeholder: '0',
    },
};

export const Password: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <SegmentedInput
                {...args}
                value={value}
                onChange={setValue}
                type="password"
            />
        );
    },
    args: {
        length: 6,
    },
};

export const WithError: Story = {
    args: {
        length: 6,
        error: true,
        value: '123456',
    },
};

export const Disabled: Story = {
    args: {
        length: 6,
        disabled: true,
        value: '123456',
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-col gap-8">
            <div>
                <div className="mb-2 text-sm text-text-secondary">Small</div>
                <SegmentedInput length={4} size="sm" />
            </div>
            <div>
                <div className="mb-2 text-sm text-text-secondary">Medium</div>
                <SegmentedInput length={4} size="md" />
            </div>
            <div>
                <div className="mb-2 text-sm text-text-secondary">Large</div>
                <SegmentedInput length={4} size="lg" />
            </div>
        </div>
    ),
};
