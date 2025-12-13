import React from 'react';
import { type LucideIcon } from 'lucide-react';
export interface BottomNavigationItem {
    id: string;
    label: string;
    icon: LucideIcon;
    href?: string;
    onClick?: () => void;
    active?: boolean;
    badge?: string | number;
    disabled?: boolean;
}
export interface BottomNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
    items: BottomNavigationItem[];
    variant?: 'default' | 'glass' | 'elevated';
    showLabels?: boolean;
    size?: 'sm' | 'md' | 'lg';
    onItemClick?: (item: BottomNavigationItem) => void;
}
export declare const BottomNavigation: React.ForwardRefExoticComponent<BottomNavigationProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=BottomNavigation.d.ts.map