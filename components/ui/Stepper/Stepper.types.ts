interface Step {
    id: string | number;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    /** Optional content to render in the step panel when this step is active */
    content?: React.ReactNode;
}


interface StepperProps {
    /** Array of steps to display */
    steps: Step[];
    /** The index of the currently active step (0-based) */
    activeStep: number;
    /** Layout orientation of the stepper (applies to default / simple / bullets) */
    orientation?: 'horizontal' | 'vertical';
    /** Callback when a step is clicked. If provided, steps become interactive. */
    onStepClick?: (index: number) => void;
    /**
     * Visual style of the steps.
     *
     * - `default`   — numbered circles with connector line
     * - `simple`    — numbered circles only (no labels)
     * - `bullets`   — small dot indicators
     * - `panel`     — card-style with left accent border + breadcrumb pills
     * - `tabs`      — horizontal tab strip with animated underline
     * - `progress`  — linear progress bar with percentage
     * - `accordion` — collapsible sections, active one expanded
     * - `timeline`  — vertical timeline with alternating content cards
     * - `chevron`   — arrow/chevron shaped steps (pipeline / checkout)
     * - `cards`     — grid of cards, active elevated, completed dimmed
     * - `inline`    — ultra-compact single-line indicator
     * - `radial`    — circular SVG ring with step info in center
     */
    variant?:
        | 'default'
        | 'simple'
        | 'bullets'
        | 'panel'
        | 'tabs'
        | 'progress'
        | 'accordion'
        | 'timeline'
        | 'chevron'
        | 'cards'
        | 'inline'
        | 'radial';
    /** Whether to show error state on the current step */
    isError?: boolean;
    className?: string;
    /**
     * Content panel className wrapper.
     * Applied to the animated div that wraps step content.
     */
    contentClassName?: string;
    /**
     * Children to render as step content (compound-component pattern).
     * Provide one child per step — only the child at activeStep index is shown.
     * Takes precedence over step.content if both are provided.
     *
     * @example
     * <Stepper steps={steps} activeStep={activeStep}>
     *   <div>Content for step 1</div>
     *   <div>Content for step 2</div>
     *   <div>Content for step 3</div>
     * </Stepper>
     */
    children?: React.ReactNode;
}
