import React from 'react';
export type CalloutVariant = 'info' | 'success' | 'warning' | 'error' | 'neutral';
export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CalloutVariant;
    title?: string;
    icon?: React.ElementType;
    dismissible?: boolean;
    onDismiss?: () => void;
}
export declare const Callout: React.ForwardRefExoticComponent<CalloutProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Callout.d.ts.map