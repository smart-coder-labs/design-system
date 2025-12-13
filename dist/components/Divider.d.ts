import React from 'react';
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The orientation of the divider.
     * @default "horizontal"
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Optional label to display within the divider (only for horizontal).
     */
    label?: React.ReactNode;
    /**
     * Position of the label.
     * @default "center"
     */
    labelPosition?: 'left' | 'center' | 'right';
    /**
     * The visual style of the divider.
     * @default "solid"
     */
    variant?: 'solid' | 'dashed' | 'dotted';
    /**
     * Custom class name for the line element specifically (if you want to style the line separately from the container).
     */
    lineClassName?: string;
}
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Divider.d.ts.map