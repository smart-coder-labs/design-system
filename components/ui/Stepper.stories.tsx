import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta = {
    title: 'Components/Stepper',
    component: Stepper,
    tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const checkoutSteps = [
    { id: 1, title: 'Cart', description: 'Review your items' },
    { id: 2, title: 'Shipping', description: 'Enter delivery details' },
    { id: 3, title: 'Payment', description: 'Choose payment method' },
    { id: 4, title: 'Confirm', description: 'Review and place order' },
];

export const Default: Story = {
    args: {
        steps: checkoutSteps,
        activeStep: 1,
        orientation: 'horizontal',
        variant: 'default',
    },
};

export const Vertical: Story = {
    args: {
        steps: checkoutSteps,
        activeStep: 2,
        orientation: 'vertical',
        variant: 'default',
    },
};

export const ChevronPipeline: Story = {
    args: {
        steps: checkoutSteps,
        activeStep: 2,
        orientation: 'horizontal',
        variant: 'chevron',
    },
};

const onboardingSteps = [
    { id: 'personal', title: 'Personal Info', description: 'Your name and contact details' },
    { id: 'verify', title: 'Verify Identity', description: 'Upload your ID document' },
    { id: 'financial', title: 'Financial Profile', description: 'Income and investment goals' },
    { id: 'done', title: 'All Set', description: 'Start using your account' },
];

export const Panel: Story = {
    args: {
        steps: onboardingSteps,
        activeStep: 1,
        orientation: 'vertical',
        variant: 'panel',
    },
};

export const Progress: Story = {
    args: {
        steps: [
            { id: 1, title: 'Application Received' },
            { id: 2, title: 'Under Review' },
            { id: 3, title: 'Approved' },
            { id: 4, title: 'Disbursed' },
        ],
        activeStep: 2,
        orientation: 'horizontal',
        variant: 'progress',
    },
};

export const Timeline: Story = {
    args: {
        steps: [
            { id: 1, title: 'Order Placed', description: 'Your order has been placed' },
            { id: 2, title: 'Processing', description: 'Payment confirmed, preparing shipment' },
            { id: 3, title: 'Shipped', description: 'Package is on its way' },
            { id: 4, title: 'Delivered', description: 'Package delivered successfully' },
        ],
        activeStep: 3,
        orientation: 'vertical',
        variant: 'timeline',
    },
};
