import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
import { Col, GridContainer, Row } from './GridSystem';
export const Footer = React.forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("footer", { ref: ref, className: cn('w-full bg-surface-secondary border-t border-border-primary pt-12 pb-10', className), ...props, children: children }));
});
Footer.displayName = 'Footer';
export const FooterTop = React.forwardRef(({ className, title = "Acme Inc.", description, icon, socials, ...props }, ref) => {
    return (_jsxs(GridContainer, { ref: ref, className: cn("max-w-3xl flex flex-col items-center text-center mb-12", className), ...props, children: [icon ? (icon) : (_jsx("div", { className: "w-14 h-14 rounded-full bg-text-primary text-background flex items-center justify-center text-lg font-bold", children: "A" })), _jsx("h2", { className: "text-xl font-semibold mt-4", children: title }), description && (_jsx("p", { className: "mt-2 text-sm text-text-secondary max-w-prose", children: description })), socials && (_jsx("div", { className: "flex items-center gap-4 mt-4 text-text-secondary", children: socials }))] }));
});
FooterTop.displayName = "FooterTop";
export const FooterContent = React.forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx(GridContainer, { as: "div", ref: ref, className: cn(className), ...props, children: _jsx(Row, { className: "justify-between w-full", children: children }) }));
});
FooterContent.displayName = 'FooterContent';
export const FooterColumn = React.forwardRef(({ className, title, children, span, ...props }, ref) => {
    return (_jsxs(Col, { ref: ref, xs: 12, md: span || true, className: cn('flex flex-col gap-3 mb-8 md:mb-0', 
        // Reset width on desktop if using auto-layout (flex-1), so w-full from xs doesn't persist
        !span && 'md:w-auto md:flex-1', className), ...props, children: [title && (_jsx("h3", { className: "font-semibold text-text-primary text-sm tracking-wide uppercase mb-1", children: title })), _jsx("div", { className: "flex flex-col gap-2", children: children })] }));
});
FooterColumn.displayName = 'FooterColumn';
export const FooterLink = React.forwardRef(({ className, as: Component = 'a', children, ...props }, ref) => {
    return (_jsx(Component, { ref: ref, className: cn('text-sm text-text-secondary hover:text-text-primary transition-colors w-fit', className), ...props, children: children }));
});
FooterLink.displayName = 'FooterLink';
export const FooterBottom = React.forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx(GridContainer, { ref: ref, className: cn('pt-8 mt-8 border-t border-border-primary flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-tertiary', className), ...props, children: children }));
});
FooterBottom.displayName = 'FooterBottom';
//# sourceMappingURL=Footer.js.map