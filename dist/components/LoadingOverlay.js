import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from 'framer-motion';
import { Spinner } from './Spinner';
import { cn } from '../lib/utils';
export const LoadingOverlay = ({ isLoading, message, fullPage = false, blur = true, className, spinnerSize = 'lg', }) => {
    return (_jsx(AnimatePresence, { children: isLoading && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, className: cn('flex flex-col items-center justify-center z-50', fullPage ? 'fixed inset-0' : 'absolute inset-0 rounded-inherit', blur ? 'backdrop-blur-sm' : '', 'bg-surface-primary/80', // Semi-transparent background
            className), children: _jsxs("div", { className: cn("flex flex-col items-center gap-4", !blur ? "p-6 bg-surface-elevated rounded-xl shadow-lg border border-border-primary" : "p-4"), children: [_jsx(Spinner, { size: spinnerSize }), message && (_jsx(motion.p, { initial: { opacity: 0, y: 5 }, animate: { opacity: 1, y: 0 }, className: "text-sm font-medium text-text-secondary", children: message }))] }) })) }));
};
LoadingOverlay.displayName = 'LoadingOverlay';
//# sourceMappingURL=LoadingOverlay.js.map