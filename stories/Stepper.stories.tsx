import type { Meta, StoryObj } from '@storybook/react';
import { Step, Stepper } from '../components/ui/Stepper';
import { Button } from '../components/ui/Button';
import { useState } from 'react';

const meta: Meta<typeof Stepper> = {
    title: 'Navigation/Stepper',
    component: Stepper,
    parameters: {
        layout: 'centered',
    },
    tags: [],
    argTypes: {
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
        },
        variant: {
            control: 'select',
            options: ['default', 'simple', 'bullets'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const steps: Step[] = [
    { id: 1, title: 'Personal Info', description: 'Enter your details' },
    { id: 2, title: 'Account', description: 'Setup your account' },
    { id: 3, title: 'Review', description: 'Verify information' },
    { id: 4, title: 'Complete', description: 'Success!' },
];

/* ─── Wrapper genérico sin contenido ─────────────────────────── */
const StepperWrapper = (args: any) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const handleBack = () => {
        setActiveStep((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className="w-[600px] p-6">
            <Stepper
                {...args}
                steps={steps}
                activeStep={activeStep}
                onStepClick={args.onStepClick ? setActiveStep : undefined}
            />

            <div className="flex justify-between mt-12 pt-6 border-t border-border-secondary">
                <Button
                    variant="secondary"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                >
                    Back
                </Button>
                <Button
                    variant="primary"
                    onClick={handleNext}
                    disabled={activeStep === steps.length - 1}
                >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
    );
};

/* ─── Story: paso con contenido inline (step.content) ────────── */
const stepsWithContent: Step[] = [
    {
        id: 1,
        title: 'Personal Info',
        description: 'Enter your details',
        content: (
            <div className="rounded-lg border border-border-secondary p-6 space-y-4">
                <p className="text-sm text-text-secondary font-medium">Step 1 — Personal Info</p>
                <div className="space-y-2">
                    <label className="text-xs text-text-tertiary">Full name</label>
                    <input
                        className="w-full rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blue transition-colors"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs text-text-tertiary">Email</label>
                    <input
                        className="w-full rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blue transition-colors"
                        placeholder="john@example.com"
                        type="email"
                    />
                </div>
            </div>
        ),
    },
    {
        id: 2,
        title: 'Account',
        description: 'Setup your account',
        content: (
            <div className="rounded-lg border border-border-secondary p-6 space-y-4">
                <p className="text-sm text-text-secondary font-medium">Step 2 — Account Setup</p>
                <div className="space-y-2">
                    <label className="text-xs text-text-tertiary">Username</label>
                    <input
                        className="w-full rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blue transition-colors"
                        placeholder="@johndoe"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs text-text-tertiary">Password</label>
                    <input
                        className="w-full rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blue transition-colors"
                        placeholder="••••••••"
                        type="password"
                    />
                </div>
            </div>
        ),
    },
    {
        id: 3,
        title: 'Review',
        description: 'Verify information',
        content: (
            <div className="rounded-lg border border-border-secondary p-6 space-y-3">
                <p className="text-sm text-text-secondary font-medium">Step 3 — Review your info</p>
                <div className="text-sm text-text-primary space-y-1">
                    <p><span className="text-text-tertiary">Name:</span> John Doe</p>
                    <p><span className="text-text-tertiary">Email:</span> john@example.com</p>
                    <p><span className="text-text-tertiary">Username:</span> @johndoe</p>
                </div>
            </div>
        ),
    },
    {
        id: 4,
        title: 'Complete',
        description: 'Success!',
        content: (
            <div className="rounded-lg border border-accent-blue/30 bg-accent-blue/5 p-6 text-center space-y-2">
                <p className="text-2xl">🎉</p>
                <p className="text-sm font-medium text-text-primary">Account created successfully!</p>
                <p className="text-xs text-text-tertiary">You can now log in with your credentials.</p>
            </div>
        ),
    },
];

const WithStepContentWrapper = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="w-[600px] p-6 space-y-6">
            <Stepper
                steps={stepsWithContent}
                activeStep={activeStep}
                onStepClick={setActiveStep}
                contentClassName="mt-6"
            />
            <div className="flex justify-between pt-4 border-t border-border-secondary">
                <Button variant="secondary" onClick={() => setActiveStep((p) => Math.max(p - 1, 0))} disabled={activeStep === 0}>
                    Back
                </Button>
                <Button variant="primary" onClick={() => setActiveStep((p) => Math.min(p + 1, stepsWithContent.length - 1))} disabled={activeStep === stepsWithContent.length - 1}>
                    {activeStep === stepsWithContent.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
    );
};

/* ─── Story: compound-component con children ──────────────────── */
const WithChildrenWrapper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const simpleSteps: Step[] = [
        { id: 1, title: 'Shipping' },
        { id: 2, title: 'Payment' },
        { id: 3, title: 'Confirmation' },
    ];

    return (
        <div className="w-[560px] p-6 space-y-6">
            <Stepper
                steps={simpleSteps}
                activeStep={activeStep}
                onStepClick={setActiveStep}
                contentClassName="mt-6"
            >
                {/* child index 0 → step 0 */}
                <div className="rounded-lg border border-border-secondary p-5 space-y-3">
                    <h3 className="text-sm font-semibold text-text-primary">Shipping Address</h3>
                    <input className="w-full rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm" placeholder="Street address" />
                    <div className="flex gap-2">
                        <input className="flex-1 rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm" placeholder="City" />
                        <input className="w-24 rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm" placeholder="ZIP" />
                    </div>
                </div>

                {/* child index 1 → step 1 */}
                <div className="rounded-lg border border-border-secondary p-5 space-y-3">
                    <h3 className="text-sm font-semibold text-text-primary">Payment Details</h3>
                    <input className="w-full rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm" placeholder="Card number" />
                    <div className="flex gap-2">
                        <input className="flex-1 rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm" placeholder="MM/YY" />
                        <input className="w-24 rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm" placeholder="CVV" />
                    </div>
                </div>

                {/* child index 2 → step 2 */}
                <div className="rounded-lg border border-accent-blue/30 bg-accent-blue/5 p-5 text-center space-y-2">
                    <p className="text-2xl">✅</p>
                    <p className="text-sm font-medium text-text-primary">Order confirmed!</p>
                    <p className="text-xs text-text-tertiary">A receipt has been sent to your email.</p>
                </div>
            </Stepper>

            <div className="flex justify-between pt-4 border-t border-border-secondary">
                <Button variant="secondary" onClick={() => setActiveStep((p) => Math.max(p - 1, 0))} disabled={activeStep === 0}>
                    Back
                </Button>
                <Button variant="primary" onClick={() => setActiveStep((p) => Math.min(p + 1, simpleSteps.length - 1))} disabled={activeStep === simpleSteps.length - 1}>
                    {activeStep === simpleSteps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div>
        </div>
    );
};

/* ─── Exports ─────────────────────────────────────────────────── */

export const Default: Story = {
    render: (args) => <StepperWrapper {...args} />,
    args: {
        orientation: 'horizontal',
        variant: 'default',
    },
};

export const Vertical: Story = {
    render: (args) => <StepperWrapper {...args} />,
    args: {
        orientation: 'vertical',
        variant: 'default',
    },
};

export const Bullets: Story = {
    render: (args) => <StepperWrapper {...args} />,
    args: {
        orientation: 'horizontal',
        variant: 'bullets',
    },
};

export const Interactive: Story = {
    render: (args) => <StepperWrapper {...args} />,
    args: {
        orientation: 'horizontal',
        variant: 'default',
        onStepClick: () => {}, // Enables interactivity
    },
};

export const WithError: Story = {
    render: (args) => <StepperWrapper {...args} />,
    args: {
        orientation: 'horizontal',
        variant: 'default',
        activeStep: 1,
        isError: true,
    },
};

/** Usando step.content — cada Step lleva su propio contenido inline */
export const WithStepContent: Story = {
    render: () => <WithStepContentWrapper />,
};

/** Usando children — patron compound-component, un hijo por paso */
export const WithChildren: Story = {
    render: () => <WithChildrenWrapper />,
}