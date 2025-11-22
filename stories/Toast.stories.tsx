import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastAction, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastClose } from '../components/Toast';
import { Button } from '../components/Button';
import { useToast } from '../hooks/use-toast'; // Assuming a hook exists or we simulate usage
import { useState } from 'react';

// Since Toast usually requires a Provider and state management, we'll create a wrapper for the story
const ToastDemo = (args: any) => {
    const [open, setOpen] = useState(false);

    return (
        <ToastProvider>
            <Button onClick={() => setOpen(true)}>Show Toast</Button>
            <Toast open={open} onOpenChange={setOpen} {...args}>
                <div className="grid gap-1">
                    <ToastTitle>Scheduled: Catch up</ToastTitle>
                    <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
                </div>
                <ToastAction altText="Goto schedule">Undo</ToastAction>
                <ToastClose />
            </Toast>
            <ToastViewport />
        </ToastProvider>
    );
};

const meta: Meta<typeof Toast> = {
    title: 'Feedback/Toast',
    component: Toast,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive', 'success'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
    render: (args) => <ToastDemo {...args} />,
};

export const Destructive: Story = {
    render: (args) => <ToastDemo variant="destructive" {...args} />,
};

export const Success: Story = {
    render: (args) => <ToastDemo variant="success" {...args} />,
};
