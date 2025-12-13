import React from 'react';
export interface AIThinkingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'dots' | 'pulse' | 'wave';
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    message?: string;
    className?: string;
}
export declare const AIThinkingIndicator: React.ForwardRefExoticComponent<AIThinkingIndicatorProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=AIThinkingIndicator.d.ts.map