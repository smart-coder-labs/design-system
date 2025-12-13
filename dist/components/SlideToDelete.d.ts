import React from 'react';
import { type LucideIcon } from 'lucide-react';
export interface SlideToDeleteProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    onDelete: () => void | Promise<void>;
    onCancel?: () => void;
    deleteLabel?: string;
    cancelLabel?: string;
    deleteIcon?: LucideIcon;
    cancelIcon?: LucideIcon;
    threshold?: number;
    disabled?: boolean;
    confirmDelete?: boolean;
    confirmMessage?: string;
    variant?: 'default' | 'danger' | 'warning';
    className?: string;
}
export declare const SlideToDelete: React.ForwardRefExoticComponent<SlideToDeleteProps & React.RefAttributes<HTMLDivElement>>;
export interface SlideToDeleteItemProps extends SlideToDeleteProps {
    title?: string;
    subtitle?: string;
    avatar?: React.ReactNode;
    actions?: React.ReactNode;
}
export declare const SlideToDeleteItem: React.ForwardRefExoticComponent<SlideToDeleteItemProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=SlideToDelete.d.ts.map