import React from 'react';
export type DefinitionItem = {
    term: React.ReactNode;
    description: React.ReactNode;
};
export type DefinitionListVariant = 'default' | 'bordered' | 'striped' | 'compact';
export type DefinitionListOrientation = 'horizontal' | 'vertical';
export interface DefinitionListProps extends React.HTMLAttributes<HTMLDListElement> {
    items: DefinitionItem[];
    variant?: DefinitionListVariant;
    orientation?: DefinitionListOrientation;
    divider?: boolean;
    hoverable?: boolean;
    density?: 'comfortable' | 'compact';
}
export declare const DefinitionList: React.ForwardRefExoticComponent<DefinitionListProps & React.RefAttributes<HTMLDListElement>>;
export interface CompactDefinitionListProps extends Omit<DefinitionListProps, 'density' | 'variant'> {
    variant?: Exclude<DefinitionListVariant, 'compact'>;
}
export declare const CompactDefinitionList: React.ForwardRefExoticComponent<CompactDefinitionListProps & React.RefAttributes<HTMLDListElement>>;
//# sourceMappingURL=DefinitionList.d.ts.map