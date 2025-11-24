import type { Meta, StoryObj } from '@storybook/react';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { Button } from '../components/Button';
import { useState, useEffect } from 'react';

const meta: Meta<typeof LoadingOverlay> = {
    title: 'Surfaces/LoadingOverlay',
    component: LoadingOverlay,
    tags: ['autodocs'],
    argTypes: {
        isLoading: { control: 'boolean' },
        message: { control: 'text' },
        fullPage: { control: 'boolean' },
        blur: { control: 'boolean' },
        spinnerSize: { control: 'radio', options: ['sm', 'md', 'lg'] },
    },
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

export const Default: Story = {
    render: (args) => (
        <div className="relative w-[400px] h-[300px] border border-border-primary rounded-xl overflow-hidden bg-surface-primary">
            <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold">Content Title</h3>
                <p className="text-text-secondary">
                    This is some content that is being covered by the loading overlay.
                    The overlay sits on top of this content to indicate a loading state.
                </p>
                <div className="h-20 bg-surface-secondary rounded-lg" />
            </div>
            <LoadingOverlay {...args} />
        </div>
    ),
    args: {
        isLoading: true,
        message: 'Loading content...',
        fullPage: false,
    },
};

export const FullPage: Story = {
    render: (args) => {
        const [show, setShow] = useState(false);

        useEffect(() => {
            if (show) {
                const timer = setTimeout(() => setShow(false), 3000);
                return () => clearTimeout(timer);
            }
        }, [show]);

        return (
            <div>
                <Button onClick={() => setShow(true)}>Show Full Page Loader (3s)</Button>
                <LoadingOverlay {...args} isLoading={show} />
            </div>
        );
    },
    args: {
        isLoading: false,
        fullPage: true,
        message: 'Loading application...',
    },
};

export const InsideCard: Story = {
    render: (args) => (
        <Card className="w-[400px] relative overflow-hidden">
            <CardHeader>
                <CardTitle>Data Processing</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-text-secondary mb-4">
                    We are currently processing your data. This might take a few moments.
                </p>
                <div className="space-y-2">
                    <div className="h-4 bg-surface-secondary rounded w-3/4" />
                    <div className="h-4 bg-surface-secondary rounded w-1/2" />
                    <div className="h-4 bg-surface-secondary rounded w-5/6" />
                </div>
            </CardContent>
            <LoadingOverlay {...args} />
        </Card>
    ),
    args: {
        isLoading: true,
        message: 'Processing...',
        blur: true,
    },
};

export const NoBlur: Story = {
    render: (args) => (
        <div className="relative w-[300px] h-[200px] border border-border-primary rounded-xl overflow-hidden bg-surface-primary p-4">
            <p>Content without blur effect on overlay.</p>
            <LoadingOverlay {...args} />
        </div>
    ),
    args: {
        isLoading: true,
        blur: false,
        message: 'Loading...',
    },
};
