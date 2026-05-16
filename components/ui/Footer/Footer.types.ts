import type { HTMLAttributes, ReactNode } from 'react';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
}

export interface FooterTopProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    icon?: ReactNode;
    socials?: ReactNode;
}

export interface FooterContentProps extends HTMLAttributes<HTMLDivElement> {}

export interface FooterColumnProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
}

export interface FooterLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    href?: string;
}

export interface FooterBottomProps extends HTMLAttributes<HTMLDivElement> {}