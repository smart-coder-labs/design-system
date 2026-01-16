import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '../components/ui/Stepper';
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

const steps = [
    { id: 1, title: 'Personal Info', description: 'Enter your details' },
    { id: 2, title: 'Account', description: 'Setup your account' },
    { id: 3, title: 'Review', description: 'Verify information' },
    { id: 4, title: 'Complete', description: 'Success!' },
];

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
