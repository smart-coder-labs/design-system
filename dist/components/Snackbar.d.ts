import React from 'react';
export type SnackbarVariant = 'default' | 'success' | 'error' | 'warning' | 'info';
export interface SnackbarAction {
    label: string;
    onClick: () => void;
}
export interface SnackbarProps {
    message: string;
    variant?: SnackbarVariant;
    action?: SnackbarAction;
    duration?: number;
    onClose?: () => void;
    show?: boolean;
}
export declare const Snackbar: React.FC<SnackbarProps>;
//# sourceMappingURL=Snackbar.d.ts.map