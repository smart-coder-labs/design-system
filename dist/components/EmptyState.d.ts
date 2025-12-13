import React from 'react';
export interface EmptyStateProps {
    /**
     * The main title of the empty state
     */
    title: string;
    /**
     * A descriptive text explaining the empty state
     */
    description?: string;
    /**
     * An icon or illustration to display
     */
    icon?: React.ReactNode;
    /**
     * Optional action element (e.g., a Button)
     */
    action?: React.ReactNode;
    /**
     * Custom class name for the container
     */
    className?: string;
}
export declare const EmptyState: React.FC<EmptyStateProps>;
//# sourceMappingURL=EmptyState.d.ts.map