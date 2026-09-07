import type { ElementType, HTMLAttributes, ReactNode } from 'react';

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
    /**
     * Destination URL. When missing, empty or `"#"` — and no `as` prop was given — the link renders
     * as plain, non-interactive text.
     */
    href?: string;
    /**
     * Element/component to render as. Providing it opts out of the automatic no-destination
     * rendering, so `as="button"` or a router `Link` (using `to`) stays interactive.
     */
    as?: ElementType;
    /** Force the non-interactive (no destination) rendering, whatever `as`/`href` are. */
    disabled?: boolean;
    /** Anchor target, e.g. `"_blank"`. `rel` defaults to `"noopener noreferrer"` for `_blank`. */
    target?: string;
    /** Anchor rel attribute. */
    rel?: string;
}

export interface FooterBottomProps extends HTMLAttributes<HTMLDivElement> {}