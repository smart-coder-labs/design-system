import React from 'react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { cn } from '../lib/utils';

/**
 * Navigation Drawer component – Slide-in navigation panel.
 *
 * Apple-style drawer that slides in from the left or right.
 * Features backdrop blur, smooth animations, and responsive design.
 */

export interface NavigationDrawerItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
    badge?: string | number;
}

export interface NavigationDrawerSection {
    title?: string;
    items: NavigationDrawerItem[];
}

export interface NavigationDrawerProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    /** Whether the drawer is open */
    isOpen: boolean;
    /** Callback when drawer should close */
    onClose: () => void;
    /** Drawer position */
    position?: 'left' | 'right';
    /** Navigation sections */
    sections?: NavigationDrawerSection[];
    /** Optional header content */
    header?: React.ReactNode;
    /** Optional footer content */
    footer?: React.ReactNode;
    /** Drawer width */
    width?: 'sm' | 'md' | 'lg';
    /** Whether to show backdrop */
    showBackdrop?: boolean;
    /** Whether clicking backdrop closes drawer */
    closeOnBackdropClick?: boolean;
    /** Whether drawer should be positioned below navbar (default: false for full screen) */
    belowNavBar?: boolean;
    /** NavBar height in pixels (default: 56) */
    navBarHeight?: number;
    /** Optional className for custom styling */
    className?: string;
}

export const NavigationDrawer = React.forwardRef<HTMLDivElement, NavigationDrawerProps>(
    (
        {
            isOpen,
            onClose,
            position = 'left',
            sections = [],
            header,
            footer,
            width = 'md',
            showBackdrop = true,
            closeOnBackdropClick = true,
            belowNavBar = false,
            navBarHeight = 56,
            className = '',
            ...props
        },
        ref
    ) => {
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

        const backdropClass = cn(
            'fixed bg-black/40 backdrop-blur-sm',
            belowNavBar ? 'z-dropdown' : 'z-modal',
            !belowNavBar && 'inset-0'
        );

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
            } else {
                document.body.style.overflow = '';
            }

            return () => {
                document.body.style.overflow = '';
            };
        }, [isOpen]);

        // Handle escape key
        React.useEffect(() => {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape' && isOpen) {
                    onClose();
                }
            };

            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }, [isOpen, onClose]);

        return (
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        {showBackdrop && (
                            <motion.div
                                className={backdropClass}
                                style={backdropStyle}
                                variants={backdropVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.2 }}
                                onClick={handleBackdropClick}
                                aria-hidden="true"
                            />
                        )}

                        {/* Drawer */}
                        <motion.div
                            ref={ref}
                            className={cn(baseDrawerStyles, className)}
                            style={drawerStyle}
                            variants={slideVariants[position]}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            role="dialog"
                            aria-modal="true"
                            {...props}
                        >
                            {/* Header */}
                            {header && (
                                <div className="flex-shrink-0 px-4 py-4 border-b border-border-primary">
                                    {header}
                                </div>
                            )}

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto px-2 py-4">
                                {sections.map((section, sectionIdx) => (
                                    <div key={sectionIdx} className="mb-6 last:mb-0">
                                        {section.title && (
                                            <h3 className="px-4 mb-2 text-xs font-semibold text-text-tertiary uppercase tracking-wide">
                                                {section.title}
                                            </h3>
                                        )}
                                        <nav className="space-y-1">
                                            {section.items.map((item, itemIdx) => {
                                                const Component = item.href ? 'a' : 'button';
                                                const isActive = !!item.active;

                                                return (
                                                    <Component
                                                        key={itemIdx}
                                                        href={item.href}
                                                        onClick={item.onClick}
                                                        className={cn(
                                                            itemBase,
                                                            isActive ? itemActive : itemInactive
                                                        )}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            {item.icon && (
                                                                <span className="inline-flex flex-shrink-0">
                                                                    {item.icon}
                                                                </span>
                                                            )}
                                                            <span>{item.label}</span>
                                                        </div>
                                                        {item.badge && (
                                                            <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full bg-accent-blue text-white">
                                                                {item.badge}
                                                            </span>
                                                        )}
                                                    </Component>
                                                );
                                            })}
                                        </nav>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            {footer && (
                                <div className="flex-shrink-0 px-4 py-4 border-t border-border-primary">
                                    {footer}
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        );
    }
);

NavigationDrawer.displayName = 'NavigationDrawer';
