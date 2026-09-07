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
    as?: React.ElementType;
    /** Opens the link in a new tab with `rel="noopener noreferrer"`. Only applies when an anchor is rendered. */
    external?: boolean;
}

/** A link is a placeholder when it has no real destination ("", undefined or "#"). */
const isPlaceholderHref = (href?: string) =>
    href === undefined || href.trim() === '' || href.trim() === '#';

export const FooterLink = React.forwardRef<
    HTMLAnchorElement,
    FooterLinkProps
>(({ className, as: Component, external, children, href, target, rel, onClick, ...props }, ref) => {
    // Shared typography so placeholders keep the exact same layout as real links.
    const baseClassName = 'text-sm w-fit';

    // No destination and no custom element/handler → render a non-navigating element,
    // so a placeholder can never hijack the URL or scroll the page to the top.
    if (!Component && isPlaceholderHref(href) && !onClick) {
        return (
            <span
                ref={ref as unknown as React.Ref<HTMLSpanElement>}
                aria-disabled="true"
                className={cn(baseClassName, 'text-text-secondary', className)}
                {...(props as React.HTMLAttributes<HTMLSpanElement>)}
            >
                {children}
            </span>
        );
    }

    const Comp: React.ElementType = Component ?? 'a';
    const isAnchor = Comp === 'a';

    return (
        <Comp
            ref={ref}
            href={href}
            onClick={onClick}
            target={isAnchor && external ? (target ?? '_blank') : target}
            rel={isAnchor && external ? (rel ?? 'noopener noreferrer') : rel}
            className={cn(
                baseClassName,
                'text-text-secondary hover:text-text-primary transition-colors',
                className
            )}
            {...props}
        >
            {children}
        </Comp>
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
