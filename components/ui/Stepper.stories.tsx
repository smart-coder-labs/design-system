import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';
import { useState } from 'react';

const meta = {
    title: 'Components/Stepper',
    component: Stepper,
    tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
    { id: 1, title: 'Account Setup', description: 'Create your account and verify your identity' },
    { id: 2, title: 'Funding', description: 'Add funds to your account' },
    { id: 3, title: 'Portfolio Selection', description: 'Choose your investment strategy' },
    { id: 4, title: 'Confirmation', description: 'Review and confirm your setup' },
];

const content = [
    <div key="1" className="p-4 bg-surface-secondary rounded-lg text-sm">Account setup form with name, email, and ID verification</div>,
    <div key="2" className="p-4 bg-surface-secondary rounded-lg text-sm">Fund your account via bank transfer or credit card</div>,
    <div key="3" className="p-4 bg-surface-secondary rounded-lg text-sm">Select from 3 portfolio options: Conservative, Balanced, Aggressive</div>,
    <div key="4" className="p-4 bg-surface-secondary rounded-lg text-sm">Review all details and confirm your investment account</div>,
];

export const Default: Story = {
    render: () => {
        const [active, setActive] = useState(1);
        return (
            <div className="space-y-6">
                <Stepper steps={steps} activeStep={active} onStepClick={setActive}>
                    {content[active]}
                </Stepper>
                <div className="flex gap-3">
                    <button disabled={active === 0} onClick={() => setActive(Math.max(0, active - 1))} className="px-4 py-2 bg-surface-secondary rounded-lg text-sm hover:bg-surface-tertiary disabled:opacity-50">Back</button>
                    <button disabled={active === steps.length - 1} onClick={() => setActive(Math.min(steps.length - 1, active + 1))} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 disabled:opacity-50">Next</button>
                </div>
            </div>
        );
    },
};

export const Vertical: Story = {
    args: {
        steps: steps,
        activeStep: 1,
        orientation: 'vertical',
        onStepClick: (i) => console.log('Step:', i),
    },
};

export const Simple: Story = {
    render: () => {
        const [active, setActive] = useState(1);
        return (
            <div className="space-y-6">
                <Stepper steps={steps} activeStep={active} variant="simple" onStepClick={setActive} />
                {content[active]}
                <div className="flex gap-3">
                    <button disabled={active === 0} onClick={() => setActive(active - 1)} className="px-4 py-2 bg-surface-secondary rounded-lg text-sm">Back</button>
                    <button disabled={active === 3} onClick={() => setActive(active + 1)} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Next</button>
                </div>
            </div>
        );
    },
};

export const TabsVariant: Story = {
    render: () => {
        const [active, setActive] = useState(0);
        return (
            <div className="space-y-4">
                <Stepper steps={steps} activeStep={active} variant="tabs" onStepClick={setActive} />
                {content[active]}
            </div>
        );
    },
};

export const ProgressVariant: Story = {
    args: {
        steps: steps,
        activeStep: 2,
        variant: 'progress',
    },
};

export const ChevronVariant: Story = {
    args: {
        steps: [
            { id: 1, title: 'Cart' },
            { id: 2, title: 'Payment' },
            { id: 3, title: 'Confirm' },
        ],
        activeStep: 1,
        variant: 'chevron',
    },
};

export const TimelineVariant: Story = {
    args: {
        steps: steps,
        activeStep: 2,
        variant: 'timeline',
    },
};

export const WithError: Story = {
    args: {
        steps: steps,
        activeStep: 2,
        isError: true,
        onStepClick: (i) => console.log('Step:', i),
    },
};

export const CardVariant: Story = {
    args: {
        steps: steps,
        activeStep: 1,
        variant: 'cards',
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        steps: steps,
        activeStep: 1,
        onStepClick: (i) => console.log('Step:', i),
    },
};
