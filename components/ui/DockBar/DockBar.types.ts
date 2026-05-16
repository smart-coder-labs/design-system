import React from 'react';

export interface DockBarItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    onClick?: () => void;
    badge?: string | number;
    active?: boolean;
}

export interface DockBarProps {
    items: DockBarItem[];
    position?: 'bottom' | 'left' | 'right';
    size?: 'sm' | 'md' | 'lg';
    magnification?: boolean;
    className?: string;
}