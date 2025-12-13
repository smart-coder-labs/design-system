import React from 'react';
import { HTMLMotionProps } from 'framer-motion';
export type CardVariant = 'elevated' | 'glass' | 'outlined' | 'flat';
export interface CardProps extends HTMLMotionProps<'div'> {
    variant?: CardVariant;
    hoverable?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}
export declare const Card: React.ForwardRefExoticComponent<Omit<CardProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const CardHeader: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export declare const CardTitle: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export declare const CardDescription: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export declare const CardContent: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
export declare const CardFooter: React.FC<{
    children: React.ReactNode;
    className?: string;
}>;
//# sourceMappingURL=Card.d.ts.map