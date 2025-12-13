import React from 'react';
import { TextProps } from './Text';
export interface LabelProps extends Omit<TextProps, 'as'> {
    htmlFor?: string;
    required?: boolean;
}
export declare const Label: React.FC<LabelProps>;
//# sourceMappingURL=Label.d.ts.map