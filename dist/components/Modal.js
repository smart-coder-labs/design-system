import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
/* ========================================
   STYLES
   ======================================== */
const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
};
const positionStyles = {
    center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    right: 'top-0 right-0 h-full rounded-l-2xl',
    left: 'top-0 left-0 h-full rounded-r-2xl',
    bottom: 'left-1/2 bottom-0 transform -translate-x-1/2 rounded-t-2xl',
    bottomFull: 'left-0 bottom-0 w-full rounded-t-2xl',
    fullscreen: 'inset-0 w-full h-full rounded-none',
};
/* ========================================
   COMPONENT
   ======================================== */
export const Modal = ({ open, onOpenChange, children, size = 'md', position = 'center', }) => {
    // Animation variants for different positions
    const variants = {
        center: {
            initial: { opacity: 0, scale: 0.96, x: '-50%', y: '-48%' },
            animate: { opacity: 1, scale: 1, x: '-50%', y: '-50%' },
            exit: { opacity: 0, scale: 0.96, x: '-50%', y: '-48%' },
        },
        right: {
            initial: { opacity: 0, x: '100%' },
            animate: { opacity: 1, x: '0%' },
            exit: { opacity: 0, x: '100%' },
        },
        left: {
            initial: { opacity: 0, x: '-100%' },
            animate: { opacity: 1, x: '0%' },
            exit: { opacity: 0, x: '-100%' },
        },
        bottom: {
            initial: { opacity: 0, y: '100%' },
            animate: { opacity: 1, y: '0%' },
            exit: { opacity: 0, y: '100%' },
        },
        fullscreen: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
        },
    };
    // Determine correct position style for bottom+full
    const positionKey = position === 'bottom' && size === 'full' ? 'bottomFull' : position;
    return (_jsx(Dialog.Root, { open: open, onOpenChange: onOpenChange, children: _jsx(Dialog.Portal, { children: _jsx(AnimatePresence, { children: open && (_jsxs(_Fragment, { children: [_jsx(Dialog.Overlay, { asChild: true, children: _jsx(motion.div, { className: "fixed inset-0 bg-black/40 backdrop-blur-md z-modal", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: {
                                    duration: 0.22,
                                    ease: [0.16, 1, 0.3, 1],
                                } }) }), _jsx(Dialog.Content, { asChild: true, children: _jsx(motion.div, { className: `fixed w-full ${sizeStyles[size]} bg-surface-primary shadow-xl p-6 z-modal focus:outline-none rounded-2xl ${positionStyles[positionKey]}`, initial: variants[position].initial, animate: variants[position].animate, exit: variants[position].exit, transition: {
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                    mass: 0.8,
                                }, children: children }) })] })) }) }) }));
};
/* ========================================
   SUB-COMPONENTS
   ======================================== */
export const ModalHeader = ({ children, className = '' }) => (_jsx("div", { className: `mb-4 ${className}`, children: children }));
export const ModalTitle = ({ children, className = '' }) => (_jsx(Dialog.Title, { asChild: true, children: _jsx("h2", { className: `text-2xl font-semibold text-text-primary ${className}`, children: children }) }));
export const ModalDescription = ({ children, className = '' }) => (_jsx(Dialog.Description, { asChild: true, children: _jsx("p", { className: `text-sm text-text-secondary mt-2 ${className}`, children: children }) }));
export const ModalContent = ({ children, className = '' }) => (_jsx("div", { className: `py-4 ${className}`, children: children }));
export const ModalFooter = ({ children, className = '' }) => (_jsx("div", { className: `mt-6 flex items-center justify-end gap-3 ${className}`, children: children }));
export const ModalClose = ({ children, className = '' }) => (_jsx(Dialog.Close, { asChild: true, children: _jsx("div", { className: className, children: children }) }));
/* ========================================
   CLOSE BUTTON ICON
   ======================================== */
export const ModalCloseButton = ({ className = '', }) => (_jsx(Dialog.Close, { asChild: true, children: _jsx(motion.button, { className: `
        absolute top-4 right-4
        w-8 h-8
        flex items-center justify-center
        rounded-full
        bg-surface-secondary
        text-text-secondary
        hover:bg-surface-primary
        hover:text-text-primary
        transition-apple
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-accent-blue
        ${className}
      `, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, "aria-label": "Close", children: _jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M1 1L13 13M1 13L13 1", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) }) }));
//# sourceMappingURL=Modal.js.map