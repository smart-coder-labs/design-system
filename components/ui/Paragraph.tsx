import React from 'react';
import { Text, TextProps } from './Text';

export interface ParagraphProps extends TextProps { }

export const Paragraph: React.FC<ParagraphProps> = ({
    children,
    className = '',
    variant = 'body',
    color = 'secondary',
    ...props
}) => {
    return (
        <Text
            as="p"
            variant={variant}
            color={color}
            className={`mb-4 ${className}`}
            {...props}
        >
            {children}
        </Text>
    );
};

Paragraph.displayName = 'Paragraph';
