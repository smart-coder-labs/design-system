import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw } from 'lucide-react';
import { Button } from './Button';
export const OfflineState = ({ title = "No Internet Connection", description = "Please check your network settings and try again.", onRetry, isRetrying = false, fullPage = false, className = '', icon, }) => {
    const containerClasses = `
    flex flex-col items-center justify-center text-center p-8
    ${fullPage ? 'fixed inset-0 z-50 bg-background-primary/95 backdrop-blur-sm' : 'w-full h-full bg-surface-primary rounded-2xl'}
    ${className}
  `.trim().replace(/\s+/g, ' ');
    return (_jsx("div", { className: containerClasses, children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }, className: "max-w-md mx-auto flex flex-col items-center", children: [_jsxs("div", { className: "mb-6 relative", children: [_jsx(motion.div, { className: "absolute inset-0 bg-status-error/10 rounded-full blur-xl", animate: {
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.1, 1]
                            }, transition: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            } }), _jsx("div", { className: "relative bg-surface-secondary p-5 rounded-full", children: icon || _jsx(WifiOff, { className: "w-10 h-10 text-text-secondary", strokeWidth: 1.5 }) })] }), _jsx("h3", { className: "text-xl font-semibold text-text-primary mb-2", children: title }), _jsx("p", { className: "text-text-secondary mb-8 leading-relaxed", children: description }), onRetry && (_jsx(Button, { variant: "primary", onClick: onRetry, loading: isRetrying, leftIcon: !isRetrying ? _jsx(RefreshCw, { size: 16 }) : undefined, children: "Try Again" }))] }) }));
};
OfflineState.displayName = 'OfflineState';
//# sourceMappingURL=OfflineState.js.map