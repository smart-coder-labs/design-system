import React from 'react';
export type TextVariant = 'body' | 'small' | 'tiny' | 'lead';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextAlign = 'left' | 'center' | 'right' | 'justify';
export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'inverse' | 'accent' | 'success' | 'warning' | 'error';
export interface TextProps {
    variant?: TextVariant;
    weight?: TextWeight;
    align?: TextAlign;
    color?: TextColor;
    italic?: boolean;
    underline?: boolean;
    truncate?: boolean;
    lineClamp?: number;
    as?: 'p' | 'span' | 'div' | 'label';
    className?: string;
    children?: React.ReactNode;
}
export declare const Text: React.FC<TextProps>;
export default Text;
//# sourceMappingURL=Text.d.ts.map