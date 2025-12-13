import React from 'react';
export interface Step {
    id: string | number;
    title: string;
    description?: string;
    icon?: React.ReactNode;
}
export interface StepperProps {
    /** Array of steps to display */
    steps: Step[];
    /** The index of the currently active step (0-based) */
    activeStep: number;
    /** Layout orientation of the stepper */
    orientation?: 'horizontal' | 'vertical';
    /** Callback when a step is clicked. If provided, steps become interactive. */
    onStepClick?: (index: number) => void;
    /** Visual style of the steps */
    variant?: 'default' | 'simple' | 'bullets';
    /** Whether to show error state on the current step */
    isError?: boolean;
    className?: string;
}
export declare const Stepper: React.FC<StepperProps>;
//# sourceMappingURL=Stepper.d.ts.map