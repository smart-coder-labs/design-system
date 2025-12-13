import React, { Component, ErrorInfo, ReactNode } from 'react';
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
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    resetErrorBoundary: () => void;
    render(): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | import("react/jsx-runtime").JSX.Element | null | undefined;
}
export {};
//# sourceMappingURL=ErrorBoundary.d.ts.map