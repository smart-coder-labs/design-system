import { HTMLMotionProps } from 'framer-motion';

export type FABVariant = 'primary' | 'secondary' | 'tertiary';
export type FABSize = 'sm' | 'md' | 'lg';
export type FABPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'none';

export interface FABProps extends Omit<HTMLMotionProps<"button">, "children"> {
    icon?: React.ElementType;
    label?: string;
    variant?: FABVariant;
    size?: FABSize;
    position?: FABPosition;
    show?: boolean;
}