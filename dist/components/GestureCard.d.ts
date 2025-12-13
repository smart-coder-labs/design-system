import React from 'react';
import { CardProps } from './Card';
export interface GestureCardProps extends Omit<CardProps, 'children'> {
    children: React.ReactNode;
    intensity?: number;
    perspective?: number;
    glowEffect?: boolean;
    glowColor?: string;
    className?: string;
}
export declare const GestureCard: React.ForwardRefExoticComponent<Omit<GestureCardProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=GestureCard.d.ts.map