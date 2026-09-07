'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { HamburgerMenuIcon } from '../HamburgerMenuIcon';
import { useNavBarMobile } from './NavBar.context';

/* ========================================
   TYPES
   ======================================== */

export interface NavBarMobileTriggerProps {
  /** Size of the hamburger icon */
  size?: 'sm' | 'md' | 'lg';
  /** Visual variant of the hamburger icon */
  variant?: 'default' | 'primary' | 'ghost';
  className?: string;
  'aria-label'?: string;
}

export interface NavBarMobileMenuProps {
  children: React.ReactNode;
  /**
   * Surface of the panel. `solid` (default) is fully opaque so links can never
   * bleed into the page content behind the navbar.
   */
  variant?: 'solid' | 'glass';
  /** Close the menu when a link/button inside the panel is clicked */
  closeOnItemClick?: boolean;
  className?: string;
}

/* ========================================
   STYLES
   ======================================== */

const mobileMenuSurfaceStyles = {
  solid: 'bg-surface-primary',
  glass: 'bg-surface-glass backdrop-blur-xl',
};

/* ========================================
   COMPONENTS
   ======================================== */

/**
 * Hamburger button that toggles the NavBar mobile menu.
 * Only visible below the `md` breakpoint.
 */
export const NavBarMobileTrigger: React.FC<NavBarMobileTriggerProps> = ({
  size = 'md',
  variant = 'default',
  className = '',
  'aria-label': ariaLabel = 'Toggle navigation menu',
}) => {
  const { open, toggle, menuId } = useNavBarMobile('NavBarMobileTrigger');

  return (
    <HamburgerMenuIcon
      isOpen={open}
      onClick={toggle}
      size={size}
      variant={variant}
      className={cn('md:hidden', className)}
      aria-label={ariaLabel}
      aria-expanded={open}
      aria-controls={menuId}
    />
  );
};

/**
 * Mobile menu panel. Renders as an opaque overlay surface anchored to the
 * bottom edge of the NavBar, so its links are always readable over whatever
 * content sits underneath (hero sections, images, etc.).
 */
export const NavBarMobileMenu: React.FC<NavBarMobileMenuProps> = ({
  children,
  variant = 'solid',
  closeOnItemClick = true,
  className = '',
}) => {
  const { open, setOpen, menuId } = useNavBarMobile('NavBarMobileMenu');

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!closeOnItemClick) return;

    const target = event.target as HTMLElement | null;
    if (target?.closest?.('a, button')) {
      setOpen(false);
    }
  };

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="navbar-mobile-menu"
          id={menuId}
          className={cn(
            'absolute inset-x-0 top-full md:hidden z-50 border-b border-border-primary',
            mobileMenuSurfaceStyles[variant],
            'shadow-lg',
            className
          )}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleClick}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

NavBarMobileTrigger.displayName = 'NavBarMobileTrigger';
NavBarMobileMenu.displayName = 'NavBarMobileMenu';
