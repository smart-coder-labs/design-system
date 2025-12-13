import React from 'react';
export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The size of the space. Can be a preset or a custom number (pixels).
     * @default "md"
     */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | number;
    /**
     * The axis of the spacer.
     * @default "vertical"
     */
    axis?: 'vertical' | 'horizontal';
    /**
     * Whether the spacer should expand to fill available space (flex-grow).
     * If true, size is ignored.
     * @default false
     */
    flex?: boolean;
}
export declare const Spacer: React.ForwardRefExoticComponent<SpacerProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Spacer.d.ts.map