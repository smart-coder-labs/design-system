/* ========================================
   BOTTOM NAVIGATION - TYPES
   ======================================== */

import type { LucideIcon } from 'lucide-react';
import type { HTMLAttributes } from 'react';

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

export interface BottomNavigationProps extends HTMLAttributes<HTMLDivElement> {
    items: BottomNavigationItem[];
    variant?: 'default' | 'glass' | 'elevated';
    showLabels?: boolean;
    size?: 'sm' | 'md' | 'lg';
    onItemClick?: (item: BottomNavigationItem) => void;
}