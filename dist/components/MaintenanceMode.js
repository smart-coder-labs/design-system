import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Construction, Clock, ArrowRight } from 'lucide-react';
import { Button } from './Button';
export const MaintenanceMode = ({ title = "We'll be back soon", description = "We're currently performing some scheduled maintenance. We should be back shortly.", estimatedReturnTime, showContactSupport = true, customAction, fullPage = true, className = '', onContactSupport, }) => {
    const containerClasses = `
    flex flex-col items-center justify-center text-center p-8
    ${fullPage ? 'min-h-screen w-full bg-background-secondary' : 'w-full h-full bg-surface-primary rounded-2xl'}
    ${className}
  `.trim().replace(/\s+/g, ' ');
    return (_jsx("div", { className: containerClasses, children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }, className: "max-w-md mx-auto", children: [_jsxs("div", { className: "relative mb-8 inline-flex items-center justify-center", children: [_jsx(motion.div, { className: "absolute inset-0 bg-accent-blue/10 rounded-full blur-xl", animate: {
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }, transition: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            } }), _jsx("div", { className: "relative bg-surface-primary p-6 rounded-full shadow-lg border border-border-primary", children: _jsx(Construction, { className: "w-12 h-12 text-accent-blue", strokeWidth: 1.5 }) })] }), _jsx("h1", { className: "text-3xl font-bold text-text-primary mb-4 tracking-tight", children: title }), _jsx("p", { className: "text-text-secondary text-lg mb-8 leading-relaxed", children: description }), estimatedReturnTime && (_jsxs("div", { className: "flex items-center justify-center gap-2 text-text-tertiary mb-8 bg-surface-tertiary/50 py-2 px-4 rounded-full inline-flex", children: [_jsx(Clock, { size: 16 }), _jsxs("span", { className: "text-sm font-medium", children: ["Expected return: ", estimatedReturnTime] })] })), _jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [customAction, showContactSupport && !customAction && (_jsx(Button, { variant: "outline", onClick: onContactSupport, rightIcon: _jsx(ArrowRight, { size: 16 }), children: "Contact Support" }))] }), _jsx("div", { className: "mt-12 text-sm text-text-quaternary", children: _jsxs("p", { children: ["System Status: ", _jsx("span", { className: "text-status-warning font-medium", children: "Maintenance" })] }) })] }) }));
};
MaintenanceMode.displayName = 'MaintenanceMode';
//# sourceMappingURL=MaintenanceMode.js.map