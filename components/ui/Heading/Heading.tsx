import React from 'react';
import { Title, TitleProps } from './Title';

export interface HeadingProps extends TitleProps { }

export const Heading: React.FC<HeadingProps> = (props) => {
    return <Title {...props} />;
};

Heading.displayName = 'Heading';
