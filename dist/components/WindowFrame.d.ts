import React from 'react';
export interface WindowFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    onClose?: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
    showControls?: boolean;
    variant?: 'default' | 'dark';
}
export declare const WindowFrame: React.ForwardRefExoticComponent<WindowFrameProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=WindowFrame.d.ts.map