import React from 'react';
export interface FloatingToolbarAction {
    id: string;
    label?: string;
    icon: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    tooltip?: string;
    variant?: 'default' | 'primary' | 'danger';
}
export interface FloatingToolbarProps {
    actions: FloatingToolbarAction[];
    position?: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    variant?: 'default' | 'compact' | 'glass';
    showLabels?: boolean;
    dismissible?: boolean;
    onDismiss?: () => void;
    className?: string;
    offset?: number;
    defaultActiveId?: string;
}
export declare const FloatingToolbar: React.FC<FloatingToolbarProps>;
export default FloatingToolbar;
//# sourceMappingURL=FloatingToolbar.d.ts.map