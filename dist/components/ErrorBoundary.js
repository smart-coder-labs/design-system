import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';
/* ========================================
   DEFAULT FALLBACK UI
   ======================================== */
const DefaultErrorFallback = ({ error, resetErrorBoundary }) => (_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: "flex flex-col items-center justify-center p-8 text-center bg-surface-primary rounded-2xl border border-border-primary shadow-sm max-w-md mx-auto my-8", children: [_jsx("div", { className: "w-16 h-16 bg-status-error/10 text-status-error rounded-full flex items-center justify-center mb-6", children: _jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }), _jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })] }) }), _jsx("h3", { className: "text-xl font-semibold text-text-primary mb-2", children: "Something went wrong" }), _jsx("p", { className: "text-text-secondary mb-6 text-sm leading-relaxed", children: error?.message || 'An unexpected error occurred while rendering this component.' }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { variant: "secondary", onClick: () => window.location.reload(), children: "Reload Page" }), _jsx(Button, { variant: "primary", onClick: resetErrorBoundary, children: "Try Again" })] }), process.env.NODE_ENV === 'development' && error && (_jsx("div", { className: "mt-8 w-full text-left", children: _jsxs("details", { className: "text-xs text-text-tertiary cursor-pointer", children: [_jsx("summary", { className: "hover:text-text-secondary transition-colors mb-2", children: "View Error Details" }), _jsx("pre", { className: "bg-surface-secondary p-4 rounded-lg overflow-auto max-h-40 font-mono border border-border-secondary", children: error.stack })] }) }))] }));
/* ========================================
   COMPONENT
   ======================================== */
export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.resetErrorBoundary = () => {
            if (this.props.onReset) {
                this.props.onReset();
            }
            this.setState({
                hasError: false,
                error: null
            });
        };
        this.state = {
            hasError: false,
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
        // You could also log the error to an error reporting service here
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                if (typeof this.props.fallback === 'function') {
                    return this.props.fallback(this.state.error, this.resetErrorBoundary);
                }
                return this.props.fallback;
            }
            return (_jsx(DefaultErrorFallback, { error: this.state.error, resetErrorBoundary: this.resetErrorBoundary }));
        }
        return this.props.children;
    }
}
//# sourceMappingURL=ErrorBoundary.js.map