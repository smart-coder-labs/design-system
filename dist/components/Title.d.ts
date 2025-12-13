import React from 'react';
export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type TitleWeight = 'normal' | 'medium' | 'semibold' | 'bold' | 'black';
export type TitleAlign = 'left' | 'center' | 'right';
export type TitleColor = 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'accent' | 'success' | 'warning' | 'error';
export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: TitleLevel;
    weight?: TitleWeight;
    align?: TitleAlign;
    color?: TitleColor;
    gradient?: boolean;
    truncate?: boolean;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export declare const Title: React.FC<TitleProps>;
export default Title;
//# sourceMappingURL=Title.d.ts.map