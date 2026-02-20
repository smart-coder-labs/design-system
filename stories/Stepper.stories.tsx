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
            options: [
                'default', 'simple', 'bullets',
                'panel', 'tabs', 'progress',
                'accordion', 'timeline', 'chevron',
                'cards', 'inline', 'radial',
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

/* ─────────────────────────────────────────────────────────────────────────
   SHARED DATA
   ───────────────────────────────────────────────────────────────────────── */

const steps: Step[] = [
    { id: 1, title: 'Personal Info', description: 'Enter your details' },
    { id: 2, title: 'Account', description: 'Setup your account' },
    { id: 3, title: 'Review', description: 'Verify information' },
    { id: 4, title: 'Complete', description: 'Success!' },
];

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
                    <input className="w-full rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blue transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs text-text-tertiary">Email</label>
                    <input className="w-full rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blue transition-colors" placeholder="john@example.com" type="email" />
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
                    <input className="w-full rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blue transition-colors" placeholder="@johndoe" />
                </div>
                <div className="space-y-2">
                    <label className="text-xs text-text-tertiary">Password</label>
                    <input className="w-full rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm text-text-primary outline-none focus:border-accent-blue transition-colors" placeholder="••••••••" type="password" />
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

/* ─────────────────────────────────────────────────────────────────────────
   NAVIGATION BUTTONS — reusable helper
   ───────────────────────────────────────────────────────────────────────── */

const NavButtons = ({
    activeStep,
    total,
    onBack,
    onNext,
}: {
    activeStep: number;
    total: number;
    onBack: () => void;
    onNext: () => void;
}) => (
    <div className="flex justify-between pt-4 border-t border-border-secondary">
        <Button variant="secondary" onClick={onBack} disabled={activeStep === 0}>Back</Button>
        <Button variant="primary" onClick={onNext} disabled={activeStep === total - 1}>
            {activeStep === total - 1 ? 'Finish' : 'Next'}
        </Button>
    </div>
);

/* ─────────────────────────────────────────────────────────────────────────
   GENERIC WRAPPER — works for any variant
   ───────────────────────────────────────────────────────────────────────── */

const GenericWrapper = ({
    args,
    useContent = false,
    width = 620,
}: {
    args: any;
    useContent?: boolean;
    width?: number;
}) => {
    const [activeStep, setActiveStep] = useState(args.activeStep ?? 0);
    const data = useContent ? stepsWithContent : steps;

    return (
        <div className={`p-6 space-y-6`} style={{ width }}>
            <Stepper
                {...args}
                steps={data}
                activeStep={activeStep}
                onStepClick={args.onStepClick ? setActiveStep : undefined}
            />
            <NavButtons
                activeStep={activeStep}
                total={data.length}
                onBack={() => setActiveStep((p: number) => Math.max(p - 1, 0))}
                onNext={() => setActiveStep((p: number) => Math.min(p + 1, data.length - 1))}
            />
        </div>
    );
};

/** Wrapper with children (compound-component) */
const WithChildrenWrapper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const simpleSteps: Step[] = [
        { id: 1, title: 'Shipping' },
        { id: 2, title: 'Payment' },
        { id: 3, title: 'Confirmation' },
    ];

    return (
        <div className="w-[560px] p-6 space-y-6">
            <Stepper steps={simpleSteps} activeStep={activeStep} onStepClick={setActiveStep} contentClassName="mt-6">
                <div className="rounded-lg border border-border-secondary p-5 space-y-3">
                    <h3 className="text-sm font-semibold text-text-primary">Shipping Address</h3>
                    <input className="w-full rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm" placeholder="Street address" />
                    <div className="flex gap-2">
                        <input className="flex-1 rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm" placeholder="City" />
                        <input className="w-24 rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm" placeholder="ZIP" />
                    </div>
                </div>
                <div className="rounded-lg border border-border-secondary p-5 space-y-3">
                    <h3 className="text-sm font-semibold text-text-primary">Payment Details</h3>
                    <input className="w-full rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm" placeholder="Card number" />
                    <div className="flex gap-2">
                        <input className="flex-1 rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm" placeholder="MM/YY" />
                        <input className="w-24 rounded-md border border-border-secondary bg-surface-secondary px-3 py-2 text-sm" placeholder="CVV" />
                    </div>
                </div>
                <div className="rounded-lg border border-accent-blue/30 bg-accent-blue/5 p-5 text-center space-y-2">
                    <p className="text-2xl">✅</p>
                    <p className="text-sm font-medium text-text-primary">Order confirmed!</p>
                    <p className="text-xs text-text-tertiary">A receipt has been sent to your email.</p>
                </div>
            </Stepper>
            <NavButtons
                activeStep={activeStep}
                total={simpleSteps.length}
                onBack={() => setActiveStep((p) => Math.max(p - 1, 0))}
                onNext={() => setActiveStep((p) => Math.min(p + 1, simpleSteps.length - 1))}
            />
        </div>
    );
};

/* ─────────────────────────────────────────────────────────────────────────
   EXPORTS: Original variants
   ───────────────────────────────────────────────────────────────────────── */

export const Default: Story = {
    render: (args) => <GenericWrapper args={{ ...args, onStepClick: undefined }} />,
    args: { orientation: 'horizontal', variant: 'default' },
};

export const Vertical: Story = {
    render: (args) => <GenericWrapper args={{ ...args, onStepClick: undefined }} />,
    args: { orientation: 'vertical', variant: 'default' },
};

export const Bullets: Story = {
    render: (args) => <GenericWrapper args={{ ...args, onStepClick: undefined }} />,
    args: { orientation: 'horizontal', variant: 'bullets' },
};

export const Interactive: Story = {
    render: (args) => <GenericWrapper args={args} />,
    args: { orientation: 'horizontal', variant: 'default', onStepClick: () => {} },
};

export const WithError: Story = {
    render: (args) => <GenericWrapper args={args} />,
    args: { orientation: 'horizontal', variant: 'default', activeStep: 1, isError: true },
};

export const WithStepContent: Story = {
    render: () => <GenericWrapper args={{ variant: 'default', onStepClick: () => {}, contentClassName: 'mt-6' }} useContent />,
};

export const WithChildren: Story = {
    render: () => <WithChildrenWrapper />,
};

/* ─────────────────────────────────────────────────────────────────────────
   EXPORTS: Panel
   ───────────────────────────────────────────────────────────────────────── */

/** Card with left accent border + breadcrumb pills + progress bar */
export const Panel: Story = {
    render: () => <GenericWrapper args={{ variant: 'panel', onStepClick: () => {} }} useContent width={640} />,
};

export const PanelError: Story = {
    name: 'Panel (Error)',
    render: () => <GenericWrapper args={{ variant: 'panel', onStepClick: () => {}, isError: true }} useContent width={640} />,
};

/* ─────────────────────────────────────────────────────────────────────────
   EXPORTS: Tabs
   ───────────────────────────────────────────────────────────────────────── */

/** Horizontal tab strip with animated underline indicator */
export const Tabs: Story = {
    render: () => <GenericWrapper args={{ variant: 'tabs', onStepClick: () => {} }} useContent width={640} />,
};

export const TabsError: Story = {
    name: 'Tabs (Error)',
    render: () => <GenericWrapper args={{ variant: 'tabs', onStepClick: () => {}, isError: true }} useContent width={640} />,
};

/* ─────────────────────────────────────────────────────────────────────────
   EXPORTS: Progress
   ───────────────────────────────────────────────────────────────────────── */

/** Linear progress bar with percentage and step markers */
export const Progress: Story = {
    render: () => <GenericWrapper args={{ variant: 'progress' }} useContent width={540} />,
};

export const ProgressError: Story = {
    name: 'Progress (Error)',
    render: () => <GenericWrapper args={{ variant: 'progress', isError: true }} useContent width={540} />,
};

/* ─────────────────────────────────────────────────────────────────────────
   EXPORTS: Accordion
   ───────────────────────────────────────────────────────────────────────── */

/** Collapsible sections — active step expanded, others collapsed */
export const Accordion: Story = {
    render: () => <GenericWrapper args={{ variant: 'accordion', onStepClick: () => {} }} useContent width={560} />,
};

export const AccordionError: Story = {
    name: 'Accordion (Error)',
    render: () => <GenericWrapper args={{ variant: 'accordion', onStepClick: () => {}, isError: true }} useContent width={560} />,
};

/* ─────────────────────────────────────────────────────────────────────────
   EXPORTS: Timeline
   ───────────────────────────────────────────────────────────────────────── */

/** Vertical timeline with dot markers and content cards */
export const Timeline: Story = {
    render: () => <GenericWrapper args={{ variant: 'timeline', onStepClick: () => {} }} useContent width={520} />,
};

export const TimelineError: Story = {
    name: 'Timeline (Error)',
    render: () => <GenericWrapper args={{ variant: 'timeline', onStepClick: () => {}, isError: true }} useContent width={520} />,
};

/* ─────────────────────────────────────────────────────────────────────────
   EXPORTS: Chevron
   ───────────────────────────────────────────────────────────────────────── */

/** Arrow / pipeline-shaped steps (e-commerce checkout style) */
export const Chevron: Story = {
    render: () => <GenericWrapper args={{ variant: 'chevron', onStepClick: () => {} }} useContent width={660} />,
};

export const ChevronError: Story = {
    name: 'Chevron (Error)',
    render: () => <GenericWrapper args={{ variant: 'chevron', onStepClick: () => {}, isError: true }} useContent width={660} />,
};

/* ─────────────────────────────────────────────────────────────────────────
   EXPORTS: Cards
   ───────────────────────────────────────────────────────────────────────── */

/** Grid of cards — active card elevated, completed dimmed */
export const Cards: Story = {
    render: () => <GenericWrapper args={{ variant: 'cards', onStepClick: () => {} }} useContent width={700} />,
};

export const CardsError: Story = {
    name: 'Cards (Error)',
    render: () => <GenericWrapper args={{ variant: 'cards', onStepClick: () => {}, isError: true }} useContent width={700} />,
};

/* ─────────────────────────────────────────────────────────────────────────
   EXPORTS: Inline
   ───────────────────────────────────────────────────────────────────────── */

/** Ultra-compact single-line indicator. Perfect for modals / mobile. */
export const Inline: Story = {
    render: () => <GenericWrapper args={{ variant: 'inline' }} useContent width={500} />,
};

export const InlineError: Story = {
    name: 'Inline (Error)',
    render: () => <GenericWrapper args={{ variant: 'inline', isError: true }} useContent width={500} />,
};

/* ─────────────────────────────────────────────────────────────────────────
   EXPORTS: Radial
   ───────────────────────────────────────────────────────────────────────── */

/** Circular SVG ring progress with step dots and center info */
export const Radial: Story = {
    render: () => <GenericWrapper args={{ variant: 'radial', onStepClick: () => {} }} useContent width={480} />,
};

export const RadialError: Story = {
    name: 'Radial (Error)',
    render: () => <GenericWrapper args={{ variant: 'radial', onStepClick: () => {}, isError: true }} useContent width={480} />,
};