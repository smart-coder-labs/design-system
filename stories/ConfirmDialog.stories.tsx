import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmDialog } from '../components/ConfirmDialog';
import { Button } from '../components/Button';
import { useState } from 'react';

const meta: Meta<typeof ConfirmDialog> = {
    title: 'Feedback/ConfirmDialog',
    component: ConfirmDialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'warning', 'info'],
        },
        isLoading: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof ConfirmDialog>;

const ConfirmDialogWrapper = (args: any) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleConfirm = () => {
        if (args.isLoading !== undefined) {
            args.onConfirm();
            return;
        }
        
        setLoading(true);
        // Simulate async action
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
            console.log('Confirmed!');
        }, 2000);
    };

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Confirm Dialog</Button>
            <ConfirmDialog
                {...args}
                open={open}
                onOpenChange={setOpen}
                onConfirm={handleConfirm}
                isLoading={args.isLoading || loading}
            />
        </>
    );
};

export const Default: Story = {
    render: (args) => <ConfirmDialogWrapper {...args} />,
    args: {
        title: 'Confirm Action',
        description: 'Are you sure you want to proceed with this action? This cannot be undone.',
        confirmLabel: 'Confirm',
        cancelLabel: 'Cancel',
        variant: 'default',
    },
};

export const Destructive: Story = {
    render: (args) => <ConfirmDialogWrapper {...args} />,
    args: {
        title: 'Delete Account',
        description: 'Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.',
        confirmLabel: 'Delete Account',
        cancelLabel: 'Cancel',
        variant: 'destructive',
    },
};

export const Warning: Story = {
    render: (args) => <ConfirmDialogWrapper {...args} />,
    args: {
        title: 'Unsaved Changes',
        description: 'You have unsaved changes. Are you sure you want to leave this page? Your changes will be lost.',
        confirmLabel: 'Leave Page',
        cancelLabel: 'Stay',
        variant: 'warning',
    },
};

export const Info: Story = {
    render: (args) => <ConfirmDialogWrapper {...args} />,
    args: {
        title: 'Update Available',
        description: 'A new version of the application is available. Would you like to update now?',
        confirmLabel: 'Update Now',
        cancelLabel: 'Later',
        variant: 'info',
    },
};
