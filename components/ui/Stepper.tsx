import React from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';


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

/* ========================================
   STYLES
   ======================================== */

const orientationStyles = {
    horizontal: 'flex-row w-full items-start',
    vertical: 'flex-col h-full',
};

/* ========================================
   CONTENT HELPERS
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

function resolveContentForIndex(
    steps: Step[],
    index: number,
    children: React.ReactNode,
): React.ReactNode | null {
    const childrenArray = React.Children.toArray(children);
    const hasChildren = childrenArray.length > 0;
    return hasChildren
        ? childrenArray[index] ?? null
        : steps[index]?.content ?? null;
}

/* ========================================
   MAIN COMPONENT
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

    const sharedProps: VariantSharedProps = {
        steps,
        activeStep,
        onStepClick,
        isError,
        className,
        contentClassName,
        activeContent,
        hasContent,
    };

    /* ── Delegate to variant sub-components ── */
    switch (variant) {
        case 'panel':
            return <StepperPanel {...sharedProps} />;
        case 'tabs':
            return <StepperTabs {...sharedProps} />;
        case 'progress':
            return <StepperProgress {...sharedProps} />;
        case 'accordion':
            return <StepperAccordion {...sharedProps} childrenProp={children} />;
        case 'timeline':
            return <StepperTimeline {...sharedProps} childrenProp={children} />;
        case 'chevron':
            return <StepperChevron {...sharedProps} />;
        case 'cards':
            return <StepperCards {...sharedProps} childrenProp={children} />;
        case 'inline':
            return <StepperInline {...sharedProps} />;
        case 'radial':
            return <StepperRadial {...sharedProps} />;
        default:
            break;
    }

    /* ── Variants: default / simple / bullets ───────────────── */
    const isVertical = orientation === 'vertical';

    return (
        <div className={`flex flex-col w-full`}>
            <div className={`flex ${orientationStyles[orientation]} ${className}`}>
                {steps.map((step, index) => {
                    const isCompleted = index < activeStep;
                    const isCurrent = index === activeStep;
                    const isLast = index === steps.length - 1;
                    const isClickable = !!onStepClick;

                    let status: StepStatus = 'pending';
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
   SHARED TYPES
   ======================================== */

type StepStatus = 'pending' | 'current' | 'completed' | 'error';

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

interface VariantWithChildrenProps extends VariantSharedProps {
    childrenProp?: React.ReactNode;
}

/* ========================================
   VARIANT: PANEL
   Card with accent left border + breadcrumb pills
   ======================================== */

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

    const accentColor = isError ? 'border-status-error' : 'border-accent-blue';
    const badgeBg = isError ? 'bg-status-error/10 text-status-error' : 'bg-accent-blue/10 text-accent-blue';

    return (
        <div className={`flex flex-col w-full gap-4 ${className}`}>
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

            <motion.div
                key={activeStep}
                className="rounded-xl border border-border-secondary bg-surface-secondary overflow-hidden"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
            >
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
   Horizontal tab strip with animated underline
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
        <LayoutGroup>
            <div className={`flex flex-col w-full ${className}`}>
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
                                <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[11px] font-bold flex-shrink-0 transition-colors duration-200
                                    ${isCurrent && !isError ? 'bg-accent-blue text-white' : ''}
                                    ${isCurrent && isError ? 'bg-status-error text-white' : ''}
                                    ${isCompleted ? 'bg-accent-blue/15 text-accent-blue' : ''}
                                    ${!isCurrent && !isCompleted ? 'bg-surface-tertiary text-text-tertiary' : ''}
                                `}>
                                    {isCompleted ? <CheckIcon /> : index + 1}
                                </span>
                                {step.title}
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
        </LayoutGroup>
    );
};

/* ========================================
   VARIANT: PROGRESS
   Linear progress bar with percentage
   ======================================== */

const StepperProgress: React.FC<VariantSharedProps> = ({
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
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
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
                <span className={`text-sm font-bold flex-shrink-0 tabular-nums ${textAccent}`}>
                    {percentage}%
                </span>
            </div>

            <div className="relative h-2 rounded-full bg-surface-tertiary overflow-hidden">
                <motion.div
                    className={`absolute inset-y-0 left-0 rounded-full ${barColor}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
            </div>

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
   VARIANT: ACCORDION
   Collapsible sections — active step expanded
   ======================================== */

const StepperAccordion: React.FC<VariantWithChildrenProps> = ({
    steps,
    activeStep,
    onStepClick,
    isError = false,
    className = '',
    contentClassName = '',
    childrenProp,
}) => {
    return (
        <div className={`flex flex-col w-full gap-2 ${className}`}>
            {steps.map((step, index) => {
                const isCompleted = index < activeStep;
                const isCurrent = index === activeStep;
                const isClickable = !!onStepClick;
                const itemContent = resolveContentForIndex(steps, index, childrenProp);
                const hasItemContent = itemContent !== null && itemContent !== undefined;

                let status: StepStatus = 'pending';
                if (isCompleted) status = 'completed';
                else if (isCurrent) status = isError ? 'error' : 'current';

                const borderColor =
                    status === 'error' ? 'border-status-error/40' :
                    status === 'current' ? 'border-accent-blue/40' :
                    status === 'completed' ? 'border-accent-blue/20' :
                    'border-border-secondary';

                const headerBg =
                    status === 'current' ? 'bg-accent-blue/5' :
                    status === 'error' ? 'bg-status-error/5' :
                    'bg-surface-secondary';

                return (
                    <div
                        key={step.id}
                        className={`rounded-xl border ${borderColor} overflow-hidden transition-colors duration-200`}
                    >
                        {/* Header */}
                        <button
                            type="button"
                            className={`flex items-center gap-3 w-full px-4 py-3 text-left transition-colors ${headerBg} ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
                            onClick={isClickable ? () => onStepClick!(index) : undefined}
                        >
                            {/* Circle indicator */}
                            <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold flex-shrink-0 border-2 transition-colors duration-200
                                ${status === 'completed' ? 'bg-accent-blue border-accent-blue text-white' : ''}
                                ${status === 'current' ? 'border-accent-blue text-accent-blue bg-transparent' : ''}
                                ${status === 'error' ? 'bg-status-error border-status-error text-white' : ''}
                                ${status === 'pending' ? 'border-border-secondary text-text-tertiary bg-transparent' : ''}
                            `}>
                                {status === 'completed' ? <CheckIcon /> : status === 'error' ? <ErrorIcon /> : index + 1}
                            </div>

                            {/* Title + description */}
                            <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium ${status === 'pending' ? 'text-text-tertiary' : 'text-text-primary'}`}>
                                    {step.title}
                                </p>
                                {step.description && !isCurrent && (
                                    <p className="text-xs text-text-tertiary truncate">{step.description}</p>
                                )}
                            </div>

                            {/* Chevron */}
                            <motion.div
                                animate={{ rotate: isCurrent ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex-shrink-0 text-text-tertiary"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </motion.div>
                        </button>

                        {/* Collapsible content */}
                        <AnimatePresence initial={false}>
                            {isCurrent && hasItemContent && (
                                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                                >
                                    <div className={`px-4 pb-4 pt-1 ${contentClassName}`}>
                                        {step.description && (
                                            <p className="text-xs text-text-tertiary mb-3">{step.description}</p>
                                        )}
                                        {itemContent}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

/* ========================================
   VARIANT: TIMELINE
   Vertical timeline with alternating cards
   ======================================== */

const StepperTimeline: React.FC<VariantWithChildrenProps> = ({
    steps,
    activeStep,
    onStepClick,
    isError = false,
    className = '',
    contentClassName = '',
    childrenProp,
}) => {
    return (
        <div className={`relative flex flex-col w-full ${className}`}>
            {/* Vertical line — centered on the dot column */}
            <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-border-secondary" />

            {steps.map((step, index) => {
                const isCompleted = index < activeStep;
                const isCurrent = index === activeStep;
                const isClickable = !!onStepClick;
                const isLast = index === steps.length - 1;
                const itemContent = resolveContentForIndex(steps, index, childrenProp);
                const hasItemContent = itemContent !== null && itemContent !== undefined;

                let status: StepStatus = 'pending';
                if (isCompleted) status = 'completed';
                else if (isCurrent) status = isError ? 'error' : 'current';

                const dotColor =
                    status === 'completed' ? 'bg-accent-blue border-accent-blue' :
                    status === 'current' ? 'border-accent-blue bg-surface-primary' :
                    status === 'error' ? 'bg-status-error border-status-error' :
                    'border-border-secondary bg-surface-primary';

                // Animated connector segment (fills on completed)
                const showConnector = !isLast;

                return (
                    <div key={step.id} className="relative flex items-start gap-4 group">
                        {/* Dot + connector */}
                        <div className="relative flex flex-col items-center flex-shrink-0 z-10" style={{ width: 30 }}>
                            <motion.div
                                className={`w-[14px] h-[14px] rounded-full border-2 mt-1 ${dotColor} flex items-center justify-center`}
                                animate={{ scale: isCurrent ? 1.3 : 1 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                {status === 'completed' && (
                                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                )}
                            </motion.div>

                            {showConnector && (
                                <div className="relative w-0.5 flex-1 min-h-[24px] bg-border-secondary">
                                    <motion.div
                                        className="absolute inset-x-0 top-0 bg-accent-blue"
                                        initial={{ height: '0%' }}
                                        animate={{ height: isCompleted ? '100%' : '0%' }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Content card */}
                        <div
                            className={`flex-1 pb-6 ${isClickable ? 'cursor-pointer' : ''}`}
                            onClick={isClickable ? () => onStepClick!(index) : undefined}
                        >
                            <div className={`rounded-lg border p-4 transition-all duration-200
                                ${isCurrent && !isError ? 'border-accent-blue/30 bg-accent-blue/5 shadow-sm' : ''}
                                ${isCurrent && isError ? 'border-status-error/30 bg-status-error/5 shadow-sm' : ''}
                                ${isCompleted ? 'border-border-secondary bg-surface-secondary' : ''}
                                ${status === 'pending' ? 'border-border-secondary bg-surface-secondary opacity-60' : ''}
                            `}>
                                <div className="flex items-center gap-2">
                                    <span className={`text-xs font-mono tabular-nums px-1.5 py-0.5 rounded
                                        ${isCurrent ? (isError ? 'bg-status-error/10 text-status-error' : 'bg-accent-blue/10 text-accent-blue') : 'bg-surface-tertiary text-text-tertiary'}
                                    `}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h4 className={`text-sm font-semibold ${status === 'pending' ? 'text-text-tertiary' : 'text-text-primary'}`}>
                                        {step.title}
                                    </h4>
                                </div>
                                {step.description && (
                                    <p className="text-xs text-text-tertiary mt-1 ml-8">{step.description}</p>
                                )}

                                {/* Inline content */}
                                <AnimatePresence>
                                    {isCurrent && hasItemContent && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className={`mt-3 overflow-hidden ${contentClassName}`}
                                        >
                                            {itemContent}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

/* ========================================
   VARIANT: CHEVRON
   Arrow / chevron shapes (pipeline / checkout)
   ======================================== */

const StepperChevron: React.FC<VariantSharedProps> = ({
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
        <div className={`flex flex-col w-full gap-4 ${className}`}>
            {/* Chevron bar */}
            <div className="flex items-stretch w-full overflow-hidden rounded-lg border border-border-secondary">
                {steps.map((step, index) => {
                    const isCompleted = index < activeStep;
                    const isCurrent = index === activeStep;
                    const isFirst = index === 0;
                    const isLast = index === steps.length - 1;
                    const isClickable = !!onStepClick;

                    let bg = 'bg-surface-secondary text-text-tertiary';
                    if (isCompleted) bg = 'bg-accent-blue/10 text-accent-blue';
                    if (isCurrent && !isError) bg = 'bg-accent-blue text-white';
                    if (isCurrent && isError) bg = 'bg-status-error text-white';

                    return (
                        <div
                            key={step.id}
                            className={`relative flex items-center flex-1 ${isClickable ? 'cursor-pointer' : ''}`}
                            onClick={isClickable ? () => onStepClick!(index) : undefined}
                        >
                            <motion.div
                                className={`flex items-center gap-2 w-full px-4 py-3 ${bg} transition-colors duration-200`}
                                style={{
                                    clipPath: isLast
                                        ? (isFirst ? undefined : 'polygon(8px 0, 100% 0, 100% 100%, 8px 100%, 0 50%)')
                                        : isFirst
                                            ? 'polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%)'
                                            : 'polygon(8px 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0 50%)',
                                }}
                                whileHover={isClickable ? { filter: 'brightness(1.08)' } : {}}
                            >
                                {/* Step number / icon */}
                                <span className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold flex-shrink-0
                                    ${isCurrent ? 'bg-white/20' : isCompleted ? 'bg-accent-blue/20' : 'bg-surface-tertiary'}
                                `}>
                                    {isCompleted ? <CheckIcon /> : index + 1}
                                </span>
                                <span className="text-xs font-medium whitespace-nowrap truncate">
                                    {step.title}
                                </span>
                            </motion.div>
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
   VARIANT: CARDS
   Grid of cards, active elevated
   ======================================== */

const StepperCards: React.FC<VariantWithChildrenProps> = ({
    steps,
    activeStep,
    onStepClick,
    isError = false,
    className = '',
    contentClassName = '',
    activeContent,
    hasContent,
    childrenProp,
}) => {
    return (
        <div className={`flex flex-col w-full gap-5 ${className}`}>
            {/* Cards row */}
            <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
                {steps.map((step, index) => {
                    const isCompleted = index < activeStep;
                    const isCurrent = index === activeStep;
                    const isClickable = !!onStepClick;

                    let status: StepStatus = 'pending';
                    if (isCompleted) status = 'completed';
                    else if (isCurrent) status = isError ? 'error' : 'current';

                    const cardBorder =
                        status === 'current' ? 'border-accent-blue shadow-md shadow-accent-blue/10' :
                        status === 'error' ? 'border-status-error shadow-md shadow-status-error/10' :
                        status === 'completed' ? 'border-accent-blue/30' :
                        'border-border-secondary';

                    return (
                        <motion.div
                            key={step.id}
                            className={`relative rounded-xl border-2 p-4 transition-colors duration-200 ${cardBorder} ${isClickable ? 'cursor-pointer' : ''}
                                ${status === 'pending' ? 'opacity-50' : ''}
                            `}
                            onClick={isClickable ? () => onStepClick!(index) : undefined}
                            animate={{
                                y: isCurrent ? -4 : 0,
                                scale: isCurrent ? 1.02 : 1,
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            whileHover={isClickable ? { y: -2, scale: 1.01 } : {}}
                        >
                            {/* Completed overlay */}
                            {isCompleted && (
                                <div className="absolute top-2 right-2">
                                    <div className="w-5 h-5 rounded-full bg-accent-blue flex items-center justify-center">
                                        <CheckIcon />
                                    </div>
                                </div>
                            )}

                            {/* Error icon */}
                            {status === 'error' && (
                                <div className="absolute top-2 right-2">
                                    <div className="w-5 h-5 rounded-full bg-status-error flex items-center justify-center">
                                        <ErrorIcon />
                                    </div>
                                </div>
                            )}

                            <div className={`text-2xl font-bold tabular-nums mb-2
                                ${isCurrent && !isError ? 'text-accent-blue' : ''}
                                ${isCurrent && isError ? 'text-status-error' : ''}
                                ${isCompleted ? 'text-accent-blue/50' : ''}
                                ${status === 'pending' ? 'text-text-tertiary' : ''}
                            `}>
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <p className={`text-sm font-semibold ${status === 'pending' ? 'text-text-tertiary' : 'text-text-primary'}`}>
                                {step.title}
                            </p>
                            {step.description && (
                                <p className="text-xs text-text-tertiary mt-1 line-clamp-2">{step.description}</p>
                            )}
                        </motion.div>
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
   VARIANT: INLINE
   Ultra-compact single-line indicator
   ======================================== */

const StepperInline: React.FC<VariantSharedProps> = ({
    steps,
    activeStep,
    isError = false,
    className = '',
    contentClassName = '',
    activeContent,
    hasContent,
}) => {
    const currentStep = steps[activeStep];
    const percentage = Math.round(((activeStep + 1) / steps.length) * 100);
    const accentColor = isError ? 'text-status-error' : 'text-accent-blue';
    const barColor = isError ? 'bg-status-error' : 'bg-accent-blue';

    return (
        <div className={`flex flex-col w-full gap-3 ${className}`}>
            {/* Single-line indicator */}
            <div className="flex items-center gap-3">
                {/* Badge */}
                <span className={`text-xs font-bold tabular-nums ${accentColor}`}>
                    {activeStep + 1}/{steps.length}
                </span>

                {/* Dots */}
                <div className="flex items-center gap-1.5">
                    {steps.map((step, index) => {
                        const isCompleted = index < activeStep;
                        const isCurrent = index === activeStep;

                        return (
                            <motion.div
                                key={step.id}
                                className={`rounded-full transition-colors duration-200
                                    ${isCompleted ? 'bg-accent-blue' : ''}
                                    ${isCurrent && !isError ? 'bg-accent-blue' : ''}
                                    ${isCurrent && isError ? 'bg-status-error' : ''}
                                    ${!isCompleted && !isCurrent ? 'bg-border-secondary' : ''}
                                `}
                                animate={{
                                    width: isCurrent ? 20 : 6,
                                    height: 6,
                                }}
                                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                            />
                        );
                    })}
                </div>

                {/* Separator */}
                <span className="text-border-secondary">·</span>

                {/* Step title */}
                <motion.span
                    key={activeStep}
                    className="text-sm font-medium text-text-primary truncate"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {currentStep?.title}
                </motion.span>
            </div>

            {/* Thin progress bar */}
            <div className="h-0.5 rounded-full bg-surface-tertiary overflow-hidden">
                <motion.div
                    className={`h-full rounded-full ${barColor}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                {hasContent && (
                    <motion.div
                        key={activeStep}
                        className={contentClassName}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                        {activeContent}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

/* ========================================
   VARIANT: RADIAL
   Circular SVG ring with step info in center
   ======================================== */

const StepperRadial: React.FC<VariantSharedProps> = ({
    steps,
    activeStep,
    onStepClick,
    isError = false,
    className = '',
    contentClassName = '',
    activeContent,
    hasContent,
}) => {
    const size = 140;
    const strokeWidth = 6;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const percentage = ((activeStep + 1) / steps.length) * 100;
    const dashOffset = circumference - (circumference * percentage) / 100;

    const currentStep = steps[activeStep];
    const accentColor = isError ? '#ef4444' : '#3b82f6'; // status-error / accent-blue approximate
    const accentText = isError ? 'text-status-error' : 'text-accent-blue';

    return (
        <div className={`flex flex-col items-center w-full gap-5 ${className}`}>
            {/* Ring + center info */}
            <div className="relative" style={{ width: size, height: size }}>
                <svg
                    width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}
                    className="transform -rotate-90"
                >
                    {/* Background ring */}
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        strokeWidth={strokeWidth}
                        className="stroke-surface-tertiary"
                    />
                    {/* Progress ring */}
                    <motion.circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        strokeWidth={strokeWidth}
                        stroke={accentColor}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: dashOffset }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    />

                    {/* Step dots on the ring */}
                    {steps.map((step, index) => {
                        const angle = (index / steps.length) * 360 - 90;
                        const rad = (angle * Math.PI) / 180;
                        const cx = size / 2 + radius * Math.cos(rad);
                        const cy = size / 2 + radius * Math.sin(rad);
                        const isCompleted = index < activeStep;
                        const isCurrent = index === activeStep;

                        return (
                            <circle
                                key={step.id}
                                cx={cx}
                                cy={cy}
                                r={isCurrent ? 5 : 3}
                                fill={isCompleted || isCurrent ? accentColor : 'var(--color-border-secondary, #4b5563)'}
                                className="transition-all duration-300"
                            />
                        );
                    })}
                </svg>

                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                        key={activeStep}
                        className={`text-2xl font-bold tabular-nums ${accentText}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        {activeStep + 1}/{steps.length}
                    </motion.span>
                    <motion.span
                        key={`title-${activeStep}`}
                        className="text-[11px] font-medium text-text-tertiary text-center px-4 truncate max-w-full"
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                    >
                        {currentStep?.title}
                    </motion.span>
                </div>
            </div>

            {/* Step labels below */}
            <div className="flex items-center gap-3 flex-wrap justify-center">
                {steps.map((step, index) => {
                    const isCompleted = index < activeStep;
                    const isCurrent = index === activeStep;
                    const isClickable = !!onStepClick;

                    return (
                        <button
                            key={step.id}
                            type="button"
                            onClick={isClickable ? () => onStepClick!(index) : undefined}
                            className={`flex items-center gap-1.5 text-xs font-medium transition-colors
                                ${isCurrent && !isError ? 'text-accent-blue' : ''}
                                ${isCurrent && isError ? 'text-status-error' : ''}
                                ${isCompleted ? 'text-text-secondary' : ''}
                                ${!isCurrent && !isCompleted ? 'text-text-tertiary' : ''}
                                ${isClickable ? 'cursor-pointer hover:text-text-primary' : 'cursor-default'}
                            `}
                        >
                            <div className={`w-2 h-2 rounded-full
                                ${isCompleted ? 'bg-accent-blue' : ''}
                                ${isCurrent && !isError ? 'bg-accent-blue' : ''}
                                ${isCurrent && isError ? 'bg-status-error' : ''}
                                ${!isCurrent && !isCompleted ? 'bg-border-secondary' : ''}
                            `} />
                            {step.title}
                        </button>
                    );
                })}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                {hasContent && (
                    <motion.div
                        key={activeStep}
                        className={`w-full ${contentClassName}`}
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
    status: StepStatus;
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