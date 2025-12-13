import React from 'react';
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}
export declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;
export interface FooterTopProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    socials?: React.ReactNode;
}
export declare const FooterTop: React.ForwardRefExoticComponent<FooterTopProps & React.RefAttributes<HTMLDivElement>>;
export interface FooterContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const FooterContent: React.ForwardRefExoticComponent<FooterContentProps & React.RefAttributes<HTMLDivElement>>;
export interface FooterColumnProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    children: React.ReactNode;
    /** Number of columns to span (out of 12). Defaults to auto-sizing (equal width) */
    span?: number;
}
export declare const FooterColumn: React.ForwardRefExoticComponent<FooterColumnProps & React.RefAttributes<HTMLDivElement>>;
export interface FooterLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    as?: React.ElementType;
}
export declare const FooterLink: React.ForwardRefExoticComponent<FooterLinkProps & React.RefAttributes<HTMLAnchorElement>>;
export interface FooterBottomProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const FooterBottom: React.ForwardRefExoticComponent<FooterBottomProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Footer.d.ts.map