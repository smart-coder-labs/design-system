import React from 'react';
export type PanelVariant = 'default' | 'elevated' | 'outlined' | 'glass';
export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: PanelVariant;
    title?: string;
    subtitle?: string;
    headerActions?: React.ReactNode;
    footer?: React.ReactNode;
    collapsible?: boolean;
    defaultCollapsed?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}
export declare const Panel: React.ForwardRefExoticComponent<PanelProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Panel.d.ts.map