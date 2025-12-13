import React from 'react';
export interface LoadingOverlayProps {
    /**
     * Whether the loading overlay is visible
     */
    isLoading: boolean;
    /**
     * Optional message to display below the spinner
     */
    message?: string;
    /**
     * Whether to cover the entire viewport (fixed) or just the parent container (absolute)
     * @default false
     */
    fullPage?: boolean;
    /**
     * Whether to apply a blur effect to the backdrop
     * @default true
     */
    blur?: boolean;
    /**
     * Custom class name for the container
     */
    className?: string;
    /**
     * Size of the spinner
     * @default "lg"
     */
    spinnerSize?: 'sm' | 'md' | 'lg';
}
export declare const LoadingOverlay: React.FC<LoadingOverlayProps>;
//# sourceMappingURL=LoadingOverlay.d.ts.map