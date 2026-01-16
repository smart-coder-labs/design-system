import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from '../components/ui/Snackbar';
import { useState } from 'react';
import { Button } from '../components/ui/Button';

const meta: Meta<typeof Snackbar> = {
    title: 'Surfaces/Snackbar',
    component: Snackbar,
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'success', 'error', 'warning', 'info'],
        },
        duration: {
            control: 'number',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);
        return (
            <div className="p-8">
                <Button onClick={() => setShow(true)}>Show Snackbar</Button>
                <Snackbar
                    {...args}
                    show={show}
                    onClose={() => setShow(false)}
                />
            </div>
        );
    },
    args: {
        message: 'This is a default snackbar message',
        duration: 5000,
    },
};

export const WithAction: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);
        return (
            <div className="p-8">
                <Button onClick={() => setShow(true)}>Show Snackbar with Action</Button>
                <Snackbar
                    {...args}
                    show={show}
                    onClose={() => setShow(false)}
                />
            </div>
        );
    },
    args: {
        message: 'File deleted successfully',
        action: {
            label: 'UNDO',
            onClick: () => alert('Undo action triggered'),
        },
        duration: 5000,
    },
};

export const Success: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);
        return (
            <div className="p-8">
                <Button onClick={() => setShow(true)}>Show Success</Button>
                <Snackbar
                    {...args}
                    show={show}
                    onClose={() => setShow(false)}
                />
            </div>
        );
    },
    args: {
        message: 'Changes saved successfully',
        variant: 'success',
        duration: 3000,
    },
};

export const Error: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);
        return (
            <div className="p-8">
                <Button onClick={() => setShow(true)}>Show Error</Button>
                <Snackbar
                    {...args}
                    show={show}
                    onClose={() => setShow(false)}
                />
            </div>
        );
    },
    args: {
        message: 'Failed to save changes',
        variant: 'error',
        duration: 5000,
    },
};

export const NoDismiss: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);
        return (
            <div className="p-8">
                <Button onClick={() => setShow(true)}>Show Persistent Snackbar</Button>
                <Snackbar
                    {...args}
                    show={show}
                    onClose={() => setShow(false)}
                />
            </div>
        );
    },
    args: {
        message: 'This snackbar will not auto-dismiss',
        duration: 0,
    },
};
