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

const levelStyles: Record<TitleLevel, string> = {
    1: 'text-5xl md:text-6xl leading-tight tracking-tight',
    2: 'text-4xl md:text-5xl leading-tight tracking-tight',
    3: 'text-3xl md:text-4xl leading-snug',
    4: 'text-2xl md:text-3xl leading-snug',
    5: 'text-xl md:text-2xl leading-normal',
    6: 'text-lg md:text-xl leading-normal',
};

const weightStyles: Record<TitleWeight, string> = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    black: 'font-black',
};

const alignStyles: Record<TitleAlign, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
};

const colorStyles: Record<TitleColor, string> = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    tertiary: 'text-text-tertiary',
    inverse: 'text-text-inverse',
    accent: 'text-accent-blue',
    success: 'text-status-success',
    warning: 'text-status-warning',
    error: 'text-status-error',
};

export const Title: React.FC<TitleProps> = ({
    level = 1,
    weight = 'bold',
    align = 'left',
    color = 'primary',
    gradient = false,
    truncate = false,
    as,
    className = '',
    children,
    ...props
}) => {
    const Component = as || (`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6');

    const combinedClassName = `
    ${levelStyles[level]}
    ${weightStyles[weight]}
    ${alignStyles[align]}
    ${gradient ? 'bg-gradient-to-r from-accent-blue to-purple-600 text-white px-3 py-1 rounded-lg inline-block' : colorStyles[color]}
    ${truncate ? 'truncate' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

    return (
        <Component className={combinedClassName} {...props}>
            {children}
        </Component>
    );
};

Title.displayName = 'Title';

export default Title;
