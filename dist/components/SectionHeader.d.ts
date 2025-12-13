import React from 'react';
export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * The main title of the section.
     */
    title: React.ReactNode;
    /**
     * Optional description or subtitle.
     */
    description?: React.ReactNode;
    /**
     * Optional actions to display on the right side (e.g., Buttons).
     */
    actions?: React.ReactNode;
    /**
     * Size of the header, affecting typography.
     * @default "md"
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Whether to show a divider line at the bottom.
     * @default false
     */
    divider?: boolean;
}
export declare const SectionHeader: React.ForwardRefExoticComponent<SectionHeaderProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SectionHeader.d.ts.map