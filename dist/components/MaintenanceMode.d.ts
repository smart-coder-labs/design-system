import React from 'react';
export interface MaintenanceModeProps {
    /**
     * Title of the maintenance page
     * @default "We'll be back soon"
     */
    title?: string;
    /**
     * Description text explaining the maintenance
     * @default "We're currently performing some scheduled maintenance. We should be back shortly."
     */
    description?: string;
    /**
     * Estimated time when the service will be back
     */
    estimatedReturnTime?: string;
    /**
     * Whether to show a contact support button
     * @default true
     */
    showContactSupport?: boolean;
    /**
     * Custom action button or link
     */
    customAction?: React.ReactNode;
    /**
     * Full page mode centers the content in the viewport
     * @default true
     */
    fullPage?: boolean;
    /**
     * Custom class name
     */
    className?: string;
    /**
     * Callback for contact support button
     */
    onContactSupport?: () => void;
}
export declare const MaintenanceMode: React.FC<MaintenanceModeProps>;
//# sourceMappingURL=MaintenanceMode.d.ts.map