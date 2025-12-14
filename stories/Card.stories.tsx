import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/Card';
import { Button } from '../components/Button';

const meta: Meta<typeof Card> = {
    title: 'Data Display/Card',
    component: Card,
    tags: [],
    argTypes: {
        variant: {
            control: 'select',
            options: ['elevated', 'glass', 'outlined', 'flat'],
        },
        hoverable: {
            control: 'boolean',
        },
        padding: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card content...</p>
                </CardContent>
                <CardFooter>
                    <Button>Action</Button>
                </CardFooter>
            </>
        ),
        variant: 'elevated',
    },
};

export const Glass: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle>Glass Card</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>This is a glass card.</p>
                </CardContent>
            </>
        ),
        variant: 'glass',
        hoverable: true,
    },
};

export const Outlined: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle>Outlined Card</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>This is an outlined card.</p>
                </CardContent>
            </>
        ),
        variant: 'outlined',
    },
};

export const Flat: Story = {
    args: {
        children: (
            <>
                <CardHeader>
                    <CardTitle>Flat Card</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>This is a flat card.</p>
                </CardContent>
            </>
        ),
        variant: 'flat',
    },
};
