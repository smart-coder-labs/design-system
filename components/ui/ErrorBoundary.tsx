import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './Button';
import { motion } from 'framer-motion';

/* ========================================
   TYPES
   ======================================== */

export interface ErrorBoundaryProps {
    /** The content to be rendered when no error occurs */
    children: ReactNode;
    /** Custom fallback UI. Can be a node or a function receiving the error and reset callback */
    fallback?: ReactNode | ((error: Error, resetErrorBoundary: () => void) => ReactNode);
    /** Callback fired when an error is caught */
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
    /** Callback fired when the error boundary is reset */
    onReset?: () => void;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

/* ========================================
   DEFAULT FALLBACK UI
   ======================================== */

const DefaultErrorFallback: React.FC<{ 
    error: Error | null; 
    resetErrorBoundary: () => void 
}> = ({ error, resetErrorBoundary }) => (
    <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center p-8 text-center bg-surface-primary rounded-2xl border border-border-primary shadow-sm max-w-md mx-auto my-8"
    >
        <div className="w-16 h-16 bg-status-error/10 text-status-error rounded-full flex items-center justify-center mb-6">
            <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        </div>
        
        <h3 className="text-xl font-semibold text-text-primary mb-2">
            Something went wrong
        </h3>
        
        <p className="text-text-secondary mb-6 text-sm leading-relaxed">
            {error?.message || 'An unexpected error occurred while rendering this component.'}
        </p>

        <div className="flex gap-3">
            <Button 
                variant="secondary" 
                onClick={() => window.location.reload()}
            >
                Reload Page
            </Button>
            <Button 
                variant="primary" 
                onClick={resetErrorBoundary}
            >
                Try Again
            </Button>
        </div>
        
        {process.env.NODE_ENV === 'development' && error && (
            <div className="mt-8 w-full text-left">
                <details className="text-xs text-text-tertiary cursor-pointer">
                    <summary className="hover:text-text-secondary transition-colors mb-2">
                        View Error Details
                    </summary>
                    <pre className="bg-surface-secondary p-4 rounded-lg overflow-auto max-h-40 font-mono border border-border-secondary">
                        {error.stack}
                    </pre>
                </details>
            </div>
        )}
    </motion.div>
);

/* ========================================
   COMPONENT
   ======================================== */

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return {
            hasError: true,
            error
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
        
        // You could also log the error to an error reporting service here
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    resetErrorBoundary = () => {
        if (this.props.onReset) {
            this.props.onReset();
        }
        this.setState({
            hasError: false,
            error: null
        });
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                if (typeof this.props.fallback === 'function') {
                    return this.props.fallback(this.state.error!, this.resetErrorBoundary);
                }
                return this.props.fallback;
            }

            return (
                <DefaultErrorFallback 
                    error={this.state.error} 
                    resetErrorBoundary={this.resetErrorBoundary} 
                />
            );
        }

        return this.props.children;
    }
}
