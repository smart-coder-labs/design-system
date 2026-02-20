import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';


/* ========================================
   TYPES
   ======================================== */

export interface Step {
    id: string | number;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    /** Optional content to render in the step panel when this step is active */
    content?: React.ReactNode;
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
    /**
     * Visual style of the steps.
     *
     * - `default`  — numbered circles with connector line
     * - `simple`   — numbered circles only (no labels)
     * - `bullets`  — small dot indicators
     * - `panel`    — card-style with left accent border and integrated step header
     * - `tabs`     — horizontal tab strip, each step is a clickable tab
     * - `progress` — linear progress bar showing step X of N
     */
    variant?: 'default' | 'simple' | 'bullets' | 'panel' | 'tabs' | 'progress';
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

/* ========================================
   STYLES
   ======================================== */

const orientationStyles = {
    horizontal: 'flex-row w-full items-start',
    vertical: 'flex-col h-full',
};

/* ========================================
   CONTENT HELPER
   ======================================== */

function resolveContent(
    steps: Step[],
    activeStep: number,
    children: React.ReactNode,
): React.ReactNode | null {
    const childrenArray = React.Children.toArray(children);
    const hasChildren = childrenArray.length > 0;
    return hasChildren
        ? childrenArray[activeStep] ?? null
        : steps[activeStep]?.content ?? null;
}

/* ========================================
   COMPONENT
   ======================================== */

export const Stepper: React.FC<StepperProps> = ({
    steps,
    activeStep,
    orientation = 'horizontal',
    onStepClick,
    variant = 'default',
    isError = false,
    className = '',
    contentClassName = '',
    children,
}) => {
    const activeContent = resolveContent(steps, activeStep, children);
    const hasContent = activeContent !== null && activeContent !== undefined;

    /* ── Variant: panel ─────────────────────────────────────── */
    if (variant === 'panel') {
        return (
            <StepperPanel
                steps={steps}
                activeStep={activeStep}
                onStepClick={onStepClick}
                isError={isError}
                className={className}
                contentClassName={contentClassName}
                activeContent={activeContent}
                hasContent={hasContent}
            />
        );
    }

    /* ── Variant: tabs ──────────────────────────────────────── */
    if (variant === 'tabs') {
        return (
            <StepperTabs
                steps={steps}
                activeStep={activeStep}
                onStepClick={onStepClick}
                isError={isError}
                className={className}
                contentClassName={contentClassName}
                activeContent={activeContent}
                hasContent={hasContent}
            />
        );
    }

    /* ── Variant: progress ──────────────────────────────────── */
    if (variant === 'progress') {
        return (
            <StepperProgress
                steps={steps}
                activeStep={activeStep}
                isError={isError}
                className={className}
                contentClassName={contentClassName}
                activeContent={activeContent}
                hasContent={hasContent}
            />
        );
    }

    /* ── Variants: default / simple / bullets ───────────────── */
    const isVertical = orientation === 'vertical';

    return (
        <div className={`flex flex-col w-full`}>
            {/* ── Step indicators bar ── */}
            <div className={`flex ${orientationStyles[orientation]} ${className}`}>
                {steps.map((step, index) => {
                    const isCompleted = index < activeStep;
                    const isCurrent = index === activeStep;
                    const isLast = index === steps.length - 1;
                    const isClickable = !!onStepClick;

                    let status: 'pending' | 'current' | 'completed' | 'error' = 'pending';
                    if (isCompleted) status = 'completed';
                    else if (isCurrent) status = isError ? 'error' : 'current';

                    const wrapperClasses = isVertical
                        ? 'flex-col'
                        : `flex-row items-center ${isLast ? 'flex-none' : 'flex-1'}`;

                    return (
                        <div key={step.id} className={`flex ${wrapperClasses} relative`}>
                            <StepItem
                                step={step}
                                index={index}
                                status={status}
                                orientation={orientation}
                                variant={variant as 'default' | 'simple' | 'bullets'}
                                isLast={isLast}
                                onClick={isClickable ? () => onStepClick(index) : undefined}
                            />
                            {!isLast && (
                                <StepConnector
                                    status={isCompleted ? 'completed' : 'pending'}
                                    orientation={orientation}
                                    variant={variant as 'default' | 'simple' | 'bullets'}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            {/* ── Active step content panel ── */}
            <AnimatePresence mode="wait">
                {hasContent && (
                    <motion.div
                        key={activeStep}
                        className={contentClassName}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                        {activeContent}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

/* ========================================
   VARIANT: PANEL
   Card with accent left border + step header built in
   ======================================== */

interface VariantSharedProps {
    steps: Step[];
    activeStep: number;
    onStepClick?: (index: number) => void;
    isError?: boolean;
    className?: string;
    contentClassName?: string;
    activeContent: React.ReactNode | null;
    hasContent: boolean;
}

const StepperPanel: React.FC<VariantSharedProps> = ({
    steps,
    activeStep,
    onStepClick,
    isError = false,
    className = '',
    contentClassName = '',
    activeContent,
    hasContent,
}) => {
    const currentStep = steps[activeStep];
    const progress = ((activeStep + 1) / steps.length) * 100;
    const status = isError ? 'error' : 'current';

    const accentColor = isError ? 'border-status-error' : 'border-accent-blue';
    const badgeBg = isError ? 'bg-status-error/10 text-status-error' : 'bg-accent-blue/10 text-accent-blue';

    return (
        <div className={`flex flex-col w-full gap-4 ${className}`}>
            {/* Breadcrumb step pills */}
            <div className="flex items-center gap-2 flex-wrap">
                {steps.map((step, index) => {
                    const isCompleted = index < activeStep;
                    const isCurrent = index === activeStep;
                    const isClickable = !!onStepClick;

                    let pillStyle = 'bg-surface-secondary text-text-tertiary border border-border-secondary';
                    if (isCompleted) pillStyle = 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20';
                    if (isCurrent && !isError) pillStyle = 'bg-accent-blue text-white border border-accent-blue';
                    if (isCurrent && isError) pillStyle = 'bg-status-error text-white border border-status-error';

                    return (
                        <React.Fragment key={step.id}>
                            <motion.button
                                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${pillStyle} ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                                onClick={isClickable ? () => onStepClick!(index) : undefined}
                                whileHover={isClickable ? { scale: 1.04 } : {}}
                                whileTap={isClickable ? { scale: 0.97 } : {}}
                            >
                                <span className={`flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-bold ${isCompleted ? 'bg-accent-blue text-white' : 'bg-white/20'}`}>
                                    {isCompleted ? <CheckIcon /> : index + 1}
                                </span>
                                {step.title}
                            </motion.button>
                            {index < steps.length - 1 && (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-border-secondary flex-shrink-0">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>

            {/* Panel card */}
            <motion.div
                key={activeStep}
                className={`rounded-xl border border-border-secondary bg-surface-secondary overflow-hidden`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
            >
                {/* Left accent border + header */}
                <div className={`flex items-start gap-4 p-5 border-l-4 ${accentColor}`}>
                    <div className={`flex items-center justify-center w-9 h-9 rounded-lg text-sm font-bold flex-shrink-0 ${badgeBg}`}>
                        {isError ? <ErrorIcon /> : activeStep + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-sm font-semibold text-text-primary">{currentStep?.title}</p>
                            <span className="text-xs text-text-tertiary whitespace-nowrap">
                                Step {activeStep + 1} of {steps.length}
                            </span>
                        </div>
                        {currentStep?.description && (
                            <p className="text-xs text-text-tertiary mt-0.5">{currentStep.description}</p>
                        )}
                        {/* Progress bar */}
                        <div className="mt-3 h-1 rounded-full bg-border-secondary overflow-hidden">
                            <motion.div
                                className={`h-full rounded-full ${isError ? 'bg-status-error' : 'bg-accent-blue'}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Content area */}
                {hasContent && (
                    <div className={`p-5 border-t border-border-secondary ${contentClassName}`}>
                        {activeContent}
                    </div>
                )}
            </motion.div>
        </div>
    );
};

/* ========================================
   VARIANT: TABS
   Horizontal tab strip — each step is a tab
   ======================================== */

const StepperTabs: React.FC<VariantSharedProps> = ({
    steps,
    activeStep,
    onStepClick,
    isError = false,
    className = '',
    contentClassName = '',
    activeContent,
    hasContent,
}) => {
    return (
        <div className={`flex flex-col w-full ${className}`}>
            {/* Tab strip */}
            <div className="relative flex border-b border-border-secondary">
                {steps.map((step, index) => {
                    const isCompleted = index < activeStep;
                    const isCurrent = index === activeStep;
                    const isClickable = !!onStepClick;

                    let labelColor = 'text-text-tertiary';
                    if (isCurrent && !isError) labelColor = 'text-accent-blue';
                    if (isCurrent && isError) labelColor = 'text-status-error';
                    if (isCompleted) labelColor = 'text-text-secondary';

                    return (
                        <button
                            key={step.id}
                            type="button"
                            onClick={isClickable ? () => onStepClick!(index) : undefined}
                            className={`relative flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap flex-1 justify-center ${labelColor} ${isClickable ? 'cursor-pointer hover:text-text-primary' : 'cursor-default'}`}
                        >
                            {/* Status icon */}
                            <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold flex-shrink-0 transition-colors duration-200
                                ${isCurrent && !isError ? 'bg-accent-blue text-white' : ''}
                                ${isCurrent && isError ? 'bg-status-error text-white' : ''}
                                ${isCompleted ? 'bg-accent-blue/15 text-accent-blue' : ''}
                                ${!isCurrent && !isCompleted ? 'bg-surface-tertiary text-text-tertiary' : ''}
                            `}>
                                {isCompleted ? <CheckIcon /> : index + 1}
                            </span>

                            {step.title}

                            {/* Active underline */}
                            {isCurrent && (
                                <motion.span
                                    layoutId="stepper-tab-underline"
                                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full ${isError ? 'bg-status-error' : 'bg-accent-blue'}`}
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
                {hasContent && (
                    <motion.div
                        key={activeStep}
                        className={`pt-5 ${contentClassName}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                        {activeContent}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

/* ========================================
   VARIANT: PROGRESS
   Linear progress bar with step count
   ======================================== */

interface StepperProgressProps {
    steps: Step[];
    activeStep: number;
    isError?: boolean;
    className?: string;
    contentClassName?: string;
    activeContent: React.ReactNode | null;
    hasContent: boolean;
}

const StepperProgress: React.FC<StepperProgressProps> = ({
    steps,
    activeStep,
    isError = false,
    className = '',
    contentClassName = '',
    activeContent,
    hasContent,
}) => {
    const percentage = Math.round(((activeStep + 1) / steps.length) * 100);
    const currentStep = steps[activeStep];

    const barColor = isError ? 'bg-status-error' : 'bg-accent-blue';
    const textAccent = isError ? 'text-status-error' : 'text-accent-blue';

    return (
        <div className={`flex flex-col w-full gap-4 ${className}`}>
            {/* Header row */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                    {/* Step badge */}
                    <div className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold flex-shrink-0 ${isError ? 'bg-status-error/10 text-status-error' : 'bg-accent-blue/10 text-accent-blue'}`}>
                        {isError ? <ErrorIcon /> : activeStep + 1}
                    </div>
                    <div className="min-w-0">
                        <p className="text-sm font-semibold text-text-primary truncate">{currentStep?.title}</p>
                        {currentStep?.description && (
                            <p className="text-xs text-text-tertiary truncate">{currentStep.description}</p>
                        )}
                    </div>
                </div>
                {/* Percentage */}
                <span className={`text-sm font-bold flex-shrink-0 tabular-nums ${textAccent}`}>
                    {percentage}%
                </span>
            </div>

            {/* Progress bar track */}
            <div className="relative h-2 rounded-full bg-surface-tertiary overflow-hidden">
                <motion.div
                    className={`absolute inset-y-0 left-0 rounded-full ${barColor}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
            </div>

            {/* Step dots marker row */}
            <div className="flex items-center justify-between px-0.5">
                {steps.map((step, index) => {
                    const isCompleted = index < activeStep;
                    const isCurrent = index === activeStep;

                    return (
                        <div key={step.id} className="flex flex-col items-center gap-1">
                            <motion.div
                                className={`w-2 h-2 rounded-full transition-colors duration-300
                                    ${isCompleted ? 'bg-accent-blue' : ''}
                                    ${isCurrent && !isError ? 'bg-accent-blue ring-2 ring-accent-blue/30' : ''}
                                    ${isCurrent && isError ? 'bg-status-error ring-2 ring-status-error/30' : ''}
                                    ${!isCompleted && !isCurrent ? 'bg-border-secondary' : ''}
                                `}
                                animate={{ scale: isCurrent ? 1.4 : 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            />
                            <span className={`text-[10px] font-medium hidden sm:block truncate max-w-[60px] text-center
                                ${isCurrent ? (isError ? 'text-status-error' : 'text-accent-blue') : isCompleted ? 'text-text-secondary' : 'text-text-tertiary'}
                            `}>
                                {step.title}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                {hasContent && (
                    <motion.div
                        key={activeStep}
                        className={contentClassName}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                        {activeContent}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

/* ========================================
   SUB-COMPONENTS  (default / simple / bullets)
   ======================================== */

interface StepItemProps {
    step: Step;
    index: number;
    status: 'pending' | 'current' | 'completed' | 'error';
    orientation: 'horizontal' | 'vertical';
    variant: 'default' | 'simple' | 'bullets';
    isLast: boolean;
    onClick?: () => void;
}

const StepItem: React.FC<StepItemProps> = ({
    step,
    index,
    status,
    orientation,
    variant,
    isLast,
    onClick,
}) => {
    const isVertical = orientation === 'vertical';
    const isClickable = !!onClick;

    const containerClasses = `
        group flex items-center relative
        ${isVertical ? 'mb-2' : ''}
        ${isClickable ? 'cursor-pointer' : ''}
    `;

    const getIconStyles = () => {
        const base = "flex items-center justify-center rounded-full transition-colors duration-300 z-10 border-2";

        if (variant === 'bullets') {
            const size = "w-3 h-3";
            if (status === 'completed' || status === 'current') return `${base} ${size} bg-accent-blue border-accent-blue`;
            if (status === 'error') return `${base} ${size} bg-status-error border-status-error`;
            return `${base} ${size} bg-surface-tertiary border-surface-tertiary`;
        }

        const size = "w-8 h-8 text-sm font-medium";
        if (status === 'completed') return `${base} ${size} bg-accent-blue border-accent-blue text-white`;
        if (status === 'error') return `${base} ${size} bg-status-error border-status-error text-white`;
        if (status === 'current') return `${base} ${size} border-accent-blue text-accent-blue bg-surface-primary`;
        return `${base} ${size} border-border-secondary text-text-tertiary bg-surface-primary`;
    };

    const getTextContainerStyles = () => {
        if (isVertical) return 'ml-4 pt-1 pb-8';
        return 'pl-4';
    };

    const titleColor = status === 'pending' ? 'text-text-secondary' : 'text-text-primary';
    const descriptionColor = 'text-text-tertiary';

    return (
        <div
            className={`${containerClasses} flex-row items-center`}
            onClick={onClick}
        >
            <motion.div
                className={getIconStyles()}
                initial={false}
                animate={{ scale: status === 'current' ? 1.1 : 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                {variant !== 'bullets' && (
                    <>
                        {status === 'completed' ? (
                            <CheckIcon />
                        ) : status === 'error' ? (
                            <ErrorIcon />
                        ) : (
                            <span>{step.icon || index + 1}</span>
                        )}
                    </>
                )}
            </motion.div>

            {variant !== 'simple' && (
                <div className={getTextContainerStyles()}>
                    <div className={`text-sm font-medium ${titleColor} transition-colors`}>
                        {step.title}
                    </div>
                    {step.description && (
                        <div className={`text-xs ${descriptionColor} mt-1`}>
                            {step.description}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

interface StepConnectorProps {
    status: 'pending' | 'completed';
    orientation: 'horizontal' | 'vertical';
    variant: 'default' | 'simple' | 'bullets';
}

const StepConnector: React.FC<StepConnectorProps> = ({ status, orientation, variant }) => {
    const isVertical = orientation === 'vertical';
    const isCompleted = status === 'completed';

    const containerClasses = isVertical
        ? 'absolute left-4 top-8 bottom-0 w-0.5 -ml-[1px]'
        : 'flex-1 h-0.5 mx-2';

    const bulletClasses = isVertical
        ? 'absolute left-[6px] top-3 bottom-0 w-0.5 -ml-[0.5px]'
        : 'flex-1 h-0.5 mx-2';

    const classes = variant === 'bullets' ? bulletClasses : containerClasses;

    return (
        <div className={`${classes} relative m-2`}>
            <div className="absolute inset-0 bg-border-secondary" />
            <motion.div
                className="absolute bg-accent-blue"
                style={{
                    top: 0,
                    left: 0,
                    [isVertical ? 'width' : 'height']: '100%',
                }}
                initial={{ [isVertical ? 'height' : 'width']: '0%' }}
                animate={{ [isVertical ? 'height' : 'width']: isCompleted ? '100%' : '0%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
        </div>
    );
};

/* ========================================
   ICONS
   ======================================== */

const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const ErrorIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);