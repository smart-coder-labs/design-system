import React from 'react';
export interface RecoveryCodeDisplayProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onCopy'> {
    codes: string[];
    onCopy?: (code: string) => void;
    onDownload?: () => void;
    title?: string;
    description?: string;
    showWarning?: boolean;
    className?: string;
}
export declare const RecoveryCodeDisplay: React.ForwardRefExoticComponent<RecoveryCodeDisplayProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=RecoveryCodeDisplay.d.ts.map