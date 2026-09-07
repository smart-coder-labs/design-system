import type { AnchorHTMLAttributes, ElementType, HTMLAttributes, ReactNode } from 'react';

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

export interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * Link destination. When missing, empty or exactly `"#"` (and no `as`/`onClick`
     * is provided) the link renders as a non-navigating `<span aria-disabled="true">`
     * instead of an anchor, so placeholders never jump to the top of the page.
     */
    href?: string;
    /** Custom element type to render (default: `"a"`). */
    as?: ElementType;
    /** Opens the link in a new tab with `rel="noopener noreferrer"`. Only applies when an anchor is rendered. */
    external?: boolean;
}

export interface FooterBottomProps extends HTMLAttributes<HTMLDivElement> {}