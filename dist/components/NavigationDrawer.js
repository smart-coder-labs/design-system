import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
export const NavigationDrawer = React.forwardRef(({ isOpen, onClose, position = 'left', sections = [], header, footer, width = 'md', showBackdrop = true, closeOnBackdropClick = true, belowNavBar = false, navBarHeight = 56, className = '', ...props }, ref) => {
    const widthStyles = {
        sm: 'w-64',
        md: 'w-80',
        lg: 'w-96',
    };
    const slideVariants = {
        left: {
            hidden: { x: '-100%' },
            visible: { x: 0 },
            exit: { x: '-100%' },
        },
        right: {
            hidden: { x: '100%' },
            visible: { x: 0 },
            exit: { x: '100%' },
        },
    };
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };
    const baseDrawerStyles = `
            fixed ${position === 'left' ? 'left-0' : 'right-0'}
            ${widthStyles[width]}
            bg-surface-primary
            shadow-xl
            flex flex-col
            ${belowNavBar ? 'z-dropdown' : 'z-modal'}
        `;
    const backdropClass = cn('fixed bg-black/40 backdrop-blur-sm', belowNavBar ? 'z-dropdown' : 'z-modal', !belowNavBar && 'inset-0');
    const drawerStyle = belowNavBar
        ? {
            top: `${navBarHeight}px`,
            height: `calc(100vh - ${navBarHeight}px)`,
        }
        : {
            top: 0,
            height: '100vh',
        };
    const backdropStyle = belowNavBar
        ? {
            top: `${navBarHeight}px`,
            left: 0,
            right: 0,
            bottom: 0,
        }
        : {};
    const itemBase = `
            flex items-center justify-between gap-3 px-4 py-3 rounded-md text-sm font-medium
            transition-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
            cursor-pointer
        `;
    const itemActive = `text-text-primary bg-accent-blue/10 border-l-2 border-accent-blue`;
    const itemInactive = `text-text-secondary hover:bg-surface-secondary hover:text-text-primary`;
    const handleBackdropClick = () => {
        if (closeOnBackdropClick) {
            onClose();
        }
    };
    // Lock body scroll when drawer is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
    // Handle escape key
    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);
    return (_jsx(AnimatePresence, { children: isOpen && (_jsxs(_Fragment, { children: [showBackdrop && (_jsx(motion.div, { className: backdropClass, style: backdropStyle, variants: backdropVariants, initial: "hidden", animate: "visible", exit: "exit", transition: { duration: 0.2 }, onClick: handleBackdropClick, "aria-hidden": "true" })), _jsxs(motion.div, { ref: ref, className: cn(baseDrawerStyles, className), style: drawerStyle, variants: slideVariants[position], initial: "hidden", animate: "visible", exit: "exit", transition: { type: 'spring', stiffness: 300, damping: 30 }, role: "dialog", "aria-modal": "true", ...props, children: [header && (_jsx("div", { className: "flex-shrink-0 px-4 py-4 border-b border-border-primary", children: header })), _jsx("div", { className: "flex-1 overflow-y-auto px-2 py-4", children: sections.map((section, sectionIdx) => (_jsxs("div", { className: "mb-6 last:mb-0", children: [section.title && (_jsx("h3", { className: "px-4 mb-2 text-xs font-semibold text-text-tertiary uppercase tracking-wide", children: section.title })), _jsx("nav", { className: "space-y-1", children: section.items.map((item, itemIdx) => {
                                            const Component = item.href ? 'a' : 'button';
                                            const isActive = !!item.active;
                                            return (_jsxs(Component, { href: item.href, onClick: item.onClick, className: cn(itemBase, isActive ? itemActive : itemInactive), children: [_jsxs("div", { className: "flex items-center gap-3", children: [item.icon && (_jsx("span", { className: "inline-flex flex-shrink-0", children: item.icon })), _jsx("span", { children: item.label })] }), item.badge && (_jsx("span", { className: "inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full bg-accent-blue text-white", children: item.badge }))] }, itemIdx));
                                        }) })] }, sectionIdx))) }), footer && (_jsx("div", { className: "flex-shrink-0 px-4 py-4 border-t border-border-primary", children: footer }))] })] })) }));
});
NavigationDrawer.displayName = 'NavigationDrawer';
//# sourceMappingURL=NavigationDrawer.js.map