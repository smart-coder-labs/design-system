import type { Meta, StoryObj } from '@storybook/react';
import { JsonViewer } from '../components/ui/JsonViewer';

const meta = {
    title: 'Data Display/JsonViewer',
    component: JsonViewer,
    parameters: {
        layout: 'padded',
    },
    tags: [],
} satisfies Meta<typeof JsonViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

const simpleData = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    isActive: true,
    role: "admin",
    lastLogin: null
};

const complexData = {
    users: [
        {
            id: 1,
            name: "Alice Smith",
            contact: {
                email: "alice@example.com",
                phone: "+1 (555) 123-4567"
            },
            preferences: {
                theme: "dark",
                notifications: {
                    email: true,
                    push: false,
                    sms: true
                }
            },
            tags: ["developer", "lead", "frontend"]
        },
        {
            id: 2,
            name: "Bob Jones",
            contact: {
                email: "bob@example.com",
                phone: null
            },
            preferences: {
                theme: "light",
                notifications: {
                    email: false,
                    push: true
                }
            },
            tags: ["designer", "ui/ux"]
        }
    ],
    meta: {
        page: 1,
        perPage: 20,
        total: 45,
        timestamp: "2024-03-20T10:30:00Z"
    }
};

const deepData = {
    level1: {
        level2: {
            level3: {
                level4: {
                    level5: {
                        message: "Deeply nested value",
                        value: 42
                    }
                }
            }
        }
    }
};

export const Default: Story = {
    args: {
        data: simpleData,
    },
};

export const Complex: Story = {
    args: {
        data: complexData,
        initiallyExpanded: true,
    },
};

export const CollapsedByDefault: Story = {
    args: {
        data: complexData,
        initiallyExpanded: false,
    },
};

export const DeeplyNested: Story = {
    args: {
        data: deepData,
        initiallyExpanded: true,
    },
};

export const Scrollable: Story = {
    args: {
        data: complexData,
        initiallyExpanded: true,
        maxHeight: 300,
    },
    render: (args) => (
        <div className="max-w-xl">
            <JsonViewer {...args} />
        </div>
    )
};

export const CustomIndentation: Story = {
    args: {
        data: deepData,
        initiallyExpanded: true,
        indentSize: 40,
    },
};
