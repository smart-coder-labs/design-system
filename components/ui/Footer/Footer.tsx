import React from 'react';
import { cn } from '../../../lib/utils';
import { Col, GridContainer, Row } from '../GridSystem';
import { Text } from '../Text';
import { Title } from '../Title';

/* ========================================
   FOOTER ROOT
   ======================================== */

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <footer
                ref={ref}
                className={cn(
                    'w-full bg-surface-secondary border-t border-border-primary pt-12 pb-10',
                    className
                )}
                {...props}
            >
                {children}
            </footer>
        );
    }
);
Footer.displayName = 'Footer';


/* ========================================
   FOOTER TOP (Optional: Logo, Description, Socials)
   ======================================== */

export interface FooterTopProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    socials?: React.ReactNode;
}

export const FooterTop = React.forwardRef<HTMLDivElement, FooterTopProps>(
    ({ className, title = "Acme Inc.", description, icon, socials, ...props }, ref) => {
        return (
            <GridContainer
                ref={ref}
                className={cn(
                    "max-w-3xl flex flex-col items-center text-center mb-12",
                    className
                )}
                {...props}
            >
                {/* Logo / Icon */}
                {icon ? (
                    icon
                ) : (
                    <></>
                )}

                {/* Title */}
                <Title level={5} weight="semibold" className="mt-4">{title}</Title>

                {/* Description */}
                {description && (
                    <Text variant="small" color="secondary" className="mt-2 max-w-prose">
                        {description}
                    </Text>
                )}

                {/* Socials */}
                {socials && (
                    <div className="flex items-center gap-4 mt-4 text-text-secondary">
                        {socials}
                    </div>
                )}
            </GridContainer>
        );
    }
);
FooterTop.displayName = "FooterTop";


/* ========================================
   FOOTER CONTENT (Grid Wrapper)
   ======================================== */

export interface FooterContentProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const FooterContent = React.forwardRef<
    HTMLDivElement,
    FooterContentProps
>(({ className, children, ...props }, ref) => {
    return (
        <GridContainer
            as={"div"}
            ref={ref}
            className={cn(
                className
            )}
            {...props}
        >
            <Row className="justify-between w-full">
                {children}
            </Row>
        </GridContainer>
    );
});
FooterContent.displayName = 'FooterContent';


/* ========================================
   FOOTER COLUMN
   ======================================== */

export interface FooterColumnProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    children: React.ReactNode;
    /** Number of columns to span (out of 12). Defaults to auto-sizing (equal width) */
    span?: number;
}

export const FooterColumn = React.forwardRef<
    HTMLDivElement,
    FooterColumnProps
>(({ className, title, children, span, ...props }, ref) => {
    return (
        <Col
            ref={ref}
            xs={12}
            md={span || true}
            className={cn(
                'flex flex-col gap-3 mb-8 md:mb-0',
                // Reset width on desktop if using auto-layout (flex-1), so w-full from xs doesn't persist
                !span && 'md:w-auto md:flex-1',
                className
            )}
            {...props}
        >
            {title && (
                <Title as="h3" level={6} weight="semibold" className="text-sm tracking-wide uppercase mb-1">
                    {title}
                </Title>
            )}
            <div className="flex flex-col gap-2">{children}</div>
        </Col>
    );
});
FooterColumn.displayName = 'FooterColumn';

/* ========================================
   FOOTER LINK
   ======================================== */

export interface FooterLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * Element/component to render as. Defaults to `"a"` (or `"span"` when `as` is omitted and there
     * is no destination). Passing `as` opts out of the automatic no-destination degradation, so
     * custom elements such as `as="button"` or a router `Link` (using `to`) stay interactive.
     */
    as?: React.ElementType;
    /**
     * Force the link into its non-interactive state, whatever `as`/`href` are.
     * The same state is applied automatically when `as` is omitted and `href` is missing, empty or `"#"`.
     */
    disabled?: boolean;
}

/** Shared typography/spacing so interactive and non-interactive links keep the same layout. */
const footerLinkBaseClasses = 'text-sm w-fit';

/** `true` when `href` points somewhere real (not missing, empty or a bare `"#"`). */
const hasFooterLinkDestination = (href?: string): boolean => {
    if (typeof href !== 'string') return false;
    const trimmed = href.trim();
    return trimmed !== '' && trimmed !== '#';
};

/**
 * A single link in a footer column.
 *
 * Rendering rules:
 * - `disabled` — always renders the inactive, non-focusable element (a `<span>`, or the element
 *   given via `as`) with `aria-disabled="true"` and muted styling.
 * - No `as` and no destination (`href` undefined, empty or `"#"`) — degrades to a non-interactive,
 *   non-focusable `<span aria-disabled="true">`, so placeholder destinations are never presented to
 *   users as real links.
 * - `as` provided (and not `disabled`) — renders that element as an active link with every prop
 *   spread through, so `as="button"` with `onClick` or a router `Link` using `to` keeps working
 *   even though there is no `href`.
 *
 * Anchors opened with `target="_blank"` get `rel="noopener noreferrer"` by default.
 */
export const FooterLink = React.forwardRef<
    HTMLAnchorElement,
    FooterLinkProps
>(({ className, as: Component, disabled = false, href, target, rel, children, ...props }, ref) => {
    // The no-destination degradation only applies when the caller did not choose an element itself.
    const isInactive = disabled || (Component === undefined && !hasFooterLinkDestination(href));

    if (isInactive) {
        const InactiveComponent: React.ElementType = Component ?? 'span';
        return (
            <InactiveComponent
                ref={ref}
                aria-disabled="true"
                className={cn(
                    footerLinkBaseClasses,
                    'text-text-tertiary cursor-default select-none',
                    className
                )}
                {...props}
            >
                {children}
            </InactiveComponent>
        );
    }

    const LinkComponent: React.ElementType = Component ?? 'a';

    return (
        <LinkComponent
            ref={ref}
            href={href}
            target={target}
            rel={target === '_blank' && rel === undefined ? 'noopener noreferrer' : rel}
            className={cn(
                footerLinkBaseClasses,
                'text-text-secondary hover:text-text-primary transition-colors',
                className
            )}
            {...props}
        >
            {children}
        </LinkComponent>
    );
});
FooterLink.displayName = 'FooterLink';

/* ========================================
   FOOTER BOTTOM
   ======================================== */

export interface FooterBottomProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const FooterBottom = React.forwardRef<
    HTMLDivElement,
    FooterBottomProps
>(({ className, children, ...props }, ref) => {
    return (
        <GridContainer
            ref={ref}
            className={cn(
                'pt-8 mt-8 border-t border-border-primary flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-tertiary',
                className
            )}
            {...props}
        >
            {children}
        </GridContainer>
    );
});
FooterBottom.displayName = 'FooterBottom';
