import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from '../components/Alert';
import { Terminal } from 'lucide-react';

const meta: Meta<typeof Alert> = {
    title: 'Feedback/Alert',
    component: Alert,
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'success', 'warning', 'info'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    render: (args) => (
        <Alert {...args}>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the cli.
            </AlertDescription>
        </Alert>
    ),
};

export const Destructive: Story = {
    render: () => (
        <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please log in again.
            </AlertDescription>
        </Alert>
    ),
};

export const Success: Story = {
    render: () => (
        <Alert variant="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
                Your changes have been saved successfully.
            </AlertDescription>
        </Alert>
    ),
};

export const Warning: Story = {
    render: () => (
        <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
                This action cannot be undone.
            </AlertDescription>
        </Alert>
    ),
};

export const Info: Story = {
    render: () => (
        <Alert variant="info">
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
                Please read the documentation for more details.
            </AlertDescription>
        </Alert>
    ),
};
