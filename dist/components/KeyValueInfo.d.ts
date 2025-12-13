import React from 'react';
export type KeyValueItem = {
    key: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    copyable?: boolean;
};
export type KeyValueInfoVariant = 'default' | 'card' | 'inline' | 'grid';
export type KeyValueInfoSize = 'sm' | 'md' | 'lg';
export interface KeyValueInfoProps extends React.HTMLAttributes<HTMLDivElement> {
    items: KeyValueItem[];
    variant?: KeyValueInfoVariant;
    size?: KeyValueInfoSize;
    columns?: 1 | 2 | 3 | 4;
    hoverable?: boolean;
    divider?: boolean;
}
export declare const KeyValueInfo: React.ForwardRefExoticComponent<KeyValueInfoProps & React.RefAttributes<HTMLDivElement>>;
export interface CompactKeyValueInfoProps extends Omit<KeyValueInfoProps, 'size'> {
    variant?: KeyValueInfoVariant;
}
export declare const CompactKeyValueInfo: React.ForwardRefExoticComponent<CompactKeyValueInfoProps & React.RefAttributes<HTMLDivElement>>;
export interface InlineKeyValueInfoProps extends Omit<KeyValueInfoProps, 'variant'> {
    size?: KeyValueInfoSize;
}
export declare const InlineKeyValueInfo: React.ForwardRefExoticComponent<InlineKeyValueInfoProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=KeyValueInfo.d.ts.map