import React from 'react';
export type DescriptionHighlightTrend = 'up' | 'down' | 'neutral';
export interface DescriptionHighlightProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    value: React.ReactNode;
    change?: React.ReactNode;
    trend?: DescriptionHighlightTrend;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    helper?: React.ReactNode;
    emphasis?: 'default' | 'soft';
    compact?: boolean;
}
export type DescriptionMetadataItem = {
    label: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
    hint?: React.ReactNode;
};
export interface DescriptionBlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    eyebrow?: React.ReactNode;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    description?: React.ReactNode;
    badges?: React.ReactNode[];
    metadata?: DescriptionMetadataItem[];
    metadataColumns?: 1 | 2 | 3;
    media?: React.ReactNode;
    actions?: React.ReactNode;
    footer?: React.ReactNode;
    layout?: 'stacked' | 'split';
    variant?: 'default' | 'soft' | 'panel' | 'glass';
    align?: 'start' | 'center';
}
export declare const DescriptionBlock: React.ForwardRefExoticComponent<DescriptionBlockProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=DescriptionBlock.d.ts.map