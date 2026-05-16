import React from 'react';
import { Text, TextProps } from './Text';

export interface CaptionProps extends TextProps { }

export const Caption: React.FC<CaptionProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <Text
            as="p"
            variant="tiny"
            color="tertiary"
            className={className}
            {...props}
        >
            {children}
        </Text>
    );
};

Caption.displayName = 'Caption';
