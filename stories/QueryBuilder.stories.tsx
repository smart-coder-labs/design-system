import type { Meta, StoryObj } from '@storybook/react';
import { QueryBuilder, Field, RuleGroup } from '../components/ui/QueryBuilder';
import { useState } from 'react';

const meta: Meta<typeof QueryBuilder> = {
    title: 'Forms/QueryBuilder',
    component: QueryBuilder,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: `
# Query Builder

A component for constructing complex filtering logic with nested groups and various field types.

## Features

- 🌳 **Nested Logic**: Supports nested AND/OR groups.
- 📝 **Dynamic Fields**: Handles text, number, date, and select fields.
- 🔄 **Interactive**: Add, remove, and update rules and groups.
- 🎨 **Styled**: Consistent with the design system.
`,
            },
        },
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof QueryBuilder>;

const fields: Field[] = [
    { id: 'firstName', label: 'First Name', type: 'text' },
    { id: 'lastName', label: 'Last Name', type: 'text' },
    { id: 'age', label: 'Age', type: 'number' },
    { id: 'birthDate', label: 'Birth Date', type: 'date' },
    {
        id: 'category',
        label: 'Category',
        type: 'select',
        options: [
            { label: 'Electronics', value: 'electronics' },
            { label: 'Clothing', value: 'clothing' },
            { label: 'Home', value: 'home' },
        ],
    },
    {
        id: 'status',
        label: 'Status',
        type: 'select',
        options: [
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
            { label: 'Pending', value: 'pending' },
        ],
    },
];

const QueryBuilderWithState = (args: any) => {
    const [query, setQuery] = useState<RuleGroup | undefined>(args.value);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <QueryBuilder
                {...args}
                value={query}
                onChange={setQuery}
            />
            <div style={{ padding: '10px', background: 'var(--color-background-secondary)', borderRadius: '12px' }}>
                <strong>Current Query:</strong>
                <pre style={{ fontSize: '12px', marginTop: '10px' }}>
                    {JSON.stringify(query, null, 2)}
                </pre>
            </div>
        </div>
    );
};

export const Default: Story = {
    render: (args) => <QueryBuilderWithState {...args} />,
    args: {
        fields: fields,
    },
};

export const Prepopulated: Story = {
    render: (args) => <QueryBuilderWithState {...args} />,
    args: {
        fields: fields,
        value: {
            id: 'root',
            combinator: 'and',
            rules: [
                {
                    id: 'r1',
                    fieldId: 'firstName',
                    operator: 'starts_with',
                    value: 'John',
                },
                {
                    id: 'g1',
                    combinator: 'or',
                    rules: [
                        {
                            id: 'r2',
                            fieldId: 'age',
                            operator: 'gt',
                            value: 18,
                        },
                        {
                            id: 'r3',
                            fieldId: 'status',
                            operator: 'equals',
                            value: 'active',
                        },
                    ],
                },
            ],
        },
    },
};
