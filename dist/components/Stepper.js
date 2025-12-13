import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from 'framer-motion';
/* ========================================
   STYLES
   ======================================== */
const styles = {
    horizontal: 'flex-row w-full items-start',
    vertical: 'flex-col h-full',
};
/* ========================================
   COMPONENT
   ======================================== */
export const Stepper = ({ steps, activeStep, orientation = 'horizontal', onStepClick, variant = 'default', isError = false, className = '', }) => {
    const isVertical = orientation === 'vertical';
    return (_jsx("div", { className: `flex ${styles[orientation]} ${className}`, children: steps.map((step, index) => {
            const isCompleted = index < activeStep;
            const isCurrent = index === activeStep;
            const isLast = index === steps.length - 1;
            const isClickable = !!onStepClick;
            // Status determination
            let status = 'pending';
            if (isCompleted)
                status = 'completed';
            else if (isCurrent)
                status = isError ? 'error' : 'current';
            // Wrapper classes
            // Horizontal: flex-1 for all except last item to ensure equal spacing
            // Vertical: flex-col
            const wrapperClasses = isVertical
                ? 'flex-col'
                : `flex-row items-center ${isLast ? 'flex-none' : 'flex-1'}`;
            return (_jsxs("div", { className: `flex ${wrapperClasses} relative`, children: [_jsx(StepItem, { step: step, index: index, status: status, orientation: orientation, variant: variant, isLast: isLast, onClick: isClickable ? () => onStepClick(index) : undefined }), !isLast && (_jsx(StepConnector, { status: isCompleted ? 'completed' : 'pending', orientation: orientation, variant: variant }))] }, step.id));
        }) }));
};
const StepItem = ({ step, index, status, orientation, variant, isLast, onClick, }) => {
    const isVertical = orientation === 'vertical';
    const isClickable = !!onClick;
    // Base classes for the container
    const containerClasses = `
        group flex items-center relative
        ${isVertical ? 'mb-2' : ''}
        ${isClickable ? 'cursor-pointer' : ''}
    `;
    // Circle/Icon styles
    const getIconStyles = () => {
        const base = "flex items-center justify-center rounded-full transition-colors duration-300 z-10 border-2";
        if (variant === 'bullets') {
            const size = "w-3 h-3";
            if (status === 'completed' || status === 'current')
                return `${base} ${size} bg-accent-blue border-accent-blue`;
            if (status === 'error')
                return `${base} ${size} bg-status-error border-status-error`;
            return `${base} ${size} bg-surface-tertiary border-surface-tertiary`;
        }
        const size = "w-8 h-8 text-sm font-medium";
        if (status === 'completed')
            return `${base} ${size} bg-accent-blue border-accent-blue text-white`;
        if (status === 'error')
            return `${base} ${size} bg-status-error border-status-error text-white`;
        if (status === 'current')
            return `${base} ${size} border-accent-blue text-accent-blue bg-surface-primary`;
        return `${base} ${size} border-border-secondary text-text-tertiary bg-surface-primary`;
    };
    // Text styles
    const getTextContainerStyles = () => {
        if (isVertical)
            return 'ml-4 pt-1 pb-8';
        return 'pl-4';
    };
    const titleColor = status === 'pending' ? 'text-text-secondary' : 'text-text-primary';
    const descriptionColor = 'text-text-tertiary';
    return (_jsxs("div", { className: `${containerClasses} flex-row items-center`, onClick: onClick, children: [_jsx(motion.div, { className: getIconStyles(), initial: false, animate: { scale: status === 'current' ? 1.1 : 1 }, transition: { type: 'spring', stiffness: 300, damping: 20 }, children: variant !== 'bullets' && (_jsx(_Fragment, { children: status === 'completed' ? (_jsx(CheckIcon, {})) : status === 'error' ? (_jsx(ErrorIcon, {})) : (_jsx("span", { children: step.icon || index + 1 })) })) }), variant !== 'simple' && (_jsxs("div", { className: getTextContainerStyles(), children: [_jsx("div", { className: `text-sm font-medium ${titleColor} transition-colors`, children: step.title }), step.description && (_jsx("div", { className: `text-xs ${descriptionColor} mt-1`, children: step.description }))] }))] }));
};
const StepConnector = ({ status, orientation, variant }) => {
    const isVertical = orientation === 'vertical';
    const isCompleted = status === 'completed';
    // Base classes for the container
    // Horizontal: Line spans full width between items
    // Vertical: Line spans full height between items
    const containerClasses = isVertical
        ? 'absolute left-4 top-8 bottom-0 w-0.5 -ml-[1px]'
        : 'flex-1 h-0.5 mx-2';
    // Adjust connector position for bullets
    const bulletClasses = isVertical
        ? 'absolute left-[6px] top-3 bottom-0 w-0.5 -ml-[0.5px]'
        : 'flex-1 h-0.5 mx-2';
    const classes = variant === 'bullets' ? bulletClasses : containerClasses;
    return (_jsxs("div", { className: `${classes} relative m-2`, children: [_jsx("div", { className: "absolute inset-0 bg-border-secondary" }), _jsx(motion.div, { className: "absolute bg-accent-blue", style: {
                    top: 0,
                    left: 0,
                    [isVertical ? 'width' : 'height']: '100%',
                }, initial: { [isVertical ? 'height' : 'width']: '0%' }, animate: { [isVertical ? 'height' : 'width']: isCompleted ? '100%' : '0%' }, transition: { duration: 0.4, ease: 'easeInOut' } })] }));
};
/* ========================================
   ICONS
   ======================================== */
const CheckIcon = () => (_jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
const ErrorIcon = () => (_jsxs("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
//# sourceMappingURL=Stepper.js.map