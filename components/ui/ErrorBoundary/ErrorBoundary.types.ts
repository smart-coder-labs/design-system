import React, { ErrorInfo, ReactNode } from 'react';

export interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode | ((error: Error, resetErrorBoundary: () => void) => ReactNode);
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
    onReset?: () => void;
}

export interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}