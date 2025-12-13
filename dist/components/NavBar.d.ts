import React from 'react';
export interface NavBarProps {
    children: React.ReactNode;
    variant?: 'default' | 'glass' | 'transparent';
    sticky?: boolean;
    className?: string;
}
export interface NavBarBrandProps {
    children: React.ReactNode;
    href?: string;
    className?: string;
}
export interface NavBarContentProps {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    className?: string;
}
export interface NavBarItemProps {
    children: React.ReactNode;
    active?: boolean;
    href?: string;
    onClick?: () => void;
    className?: string;
}
export declare const NavBar: React.FC<NavBarProps>;
export declare const NavBarBrand: React.FC<NavBarBrandProps>;
export declare const NavBarContent: React.FC<NavBarContentProps>;
export declare const NavBarItem: React.FC<NavBarItemProps>;
export declare const NavBarSeparator: React.FC;
//# sourceMappingURL=NavBar.d.ts.map