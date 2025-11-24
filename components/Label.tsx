import React from 'react';
import { Text, TextProps } from './Text';

export interface LabelProps extends Omit<TextProps, 'as'> {
    htmlFor?: string;
    required?: boolean;
}

export const Label: React.FC<LabelProps> = ({
    children,
    className = '',
    htmlFor,
    required,
    ...props
}) => {
    return (
        <Text
            as="label"
            variant="small"
            weight="medium"
            color="primary"
            className={`block mb-1.5 select-none ${className}`}
            {...props}
            // @ts-ignore - htmlFor is valid for label element
            htmlFor={htmlFor}
        >
            {children}
            {required && <span className="text-status-error ml-1">*</span>}
        </Text>
    );
};

Label.displayName = 'Label';
