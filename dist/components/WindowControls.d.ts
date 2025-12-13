import React from 'react';
export interface WindowControlsProps extends React.HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
    variant?: 'macos' | 'windows';
    className?: string;
}
export declare const WindowControls: React.ForwardRefExoticComponent<WindowControlsProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=WindowControls.d.ts.map