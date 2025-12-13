import React from 'react';
export interface OfflineStateProps {
    /**
     * Title of the offline state
     * @default "No Internet Connection"
     */
    title?: string;
    /**
     * Description text
     * @default "Please check your network settings and try again."
     */
    description?: string;
    /**
     * Callback function when the retry button is clicked
     */
    onRetry?: () => void;
    /**
     * Whether the retry action is currently in progress
     */
    isRetrying?: boolean;
    /**
     * Whether to display as a full page overlay
     * @default false
     */
    fullPage?: boolean;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * Custom icon to display
     */
    icon?: React.ReactNode;
}
export declare const OfflineState: React.FC<OfflineStateProps>;
//# sourceMappingURL=OfflineState.d.ts.map