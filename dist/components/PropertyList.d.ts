import React from 'react';
export type PropertyItem = {
    label: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
    editable?: boolean;
    onChange?: (value: string) => void;
};
export type PropertySection = {
    id: string;
    title?: string;
    items: PropertyItem[];
    defaultExpanded?: boolean;
};
export type PropertyListVariant = 'default' | 'bordered' | 'inset';
export type PropertyListSize = 'sm' | 'md' | 'lg';
export interface PropertyListProps extends React.HTMLAttributes<HTMLDivElement> {
    sections: PropertySection[];
    variant?: PropertyListVariant;
    size?: PropertyListSize;
    collapsible?: boolean;
    dividers?: boolean;
}
export declare const PropertyList: React.ForwardRefExoticComponent<PropertyListProps & React.RefAttributes<HTMLDivElement>>;
export interface CompactPropertyListProps extends Omit<PropertyListProps, 'size'> {
    variant?: PropertyListVariant;
}
export declare const CompactPropertyList: React.ForwardRefExoticComponent<CompactPropertyListProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=PropertyList.d.ts.map