import React from 'react';
export interface ConfirmDialogProps {
    /** Controls visibility of the dialog */
    open: boolean;
    /** Callback when visibility changes */
    onOpenChange: (open: boolean) => void;
    /** Title of the confirmation dialog */
    title: string;
    /** Description or body text */
    description?: React.ReactNode;
    /** Label for the confirm button */
    confirmLabel?: string;
    /** Label for the cancel button */
    cancelLabel?: string;
    /** Callback when confirm button is clicked */
    onConfirm: () => void;
    /** Callback when cancel button is clicked */
    onCancel?: () => void;
    /** Visual variant of the dialog */
    variant?: 'default' | 'destructive' | 'warning' | 'info';
    /** Whether the confirm action is loading */
    isLoading?: boolean;
    /** Custom icon to override the default variant icon */
    icon?: React.ReactNode;
}
export declare const ConfirmDialog: React.FC<ConfirmDialogProps>;
//# sourceMappingURL=ConfirmDialog.d.ts.map