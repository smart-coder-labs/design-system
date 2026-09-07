import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { HamburgerMenuIcon } from '../HamburgerMenuIcon';

/* ========================================
   TYPES
   ======================================== */

export interface NavBarProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'transparent';
  sticky?: boolean;
  /** Controlled open state of the mobile menu */
  open?: boolean;
  /** Initial open state of the mobile menu (uncontrolled) */
  defaultOpen?: boolean;
  /** Called whenever the mobile menu open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Override the generated id used to link the toggle with the panel */
  mobileMenuId?: string;
  className?: string;
}

export interface NavBarBrandProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export interface NavBarContentProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export interface NavBarItemProps {
  children: React.ReactNode;
  active?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface NavBarMobileToggleProps {
  /** Icon size */
  size?: 'sm' | 'md' | 'lg';
  /** Icon color variant */
  variant?: 'default' | 'primary' | 'ghost';
  /** Accessible label for the toggle button */
  'aria-label'?: string;
  className?: string;
}

export interface NavBarMobileMenuProps {
  children: React.ReactNode;
  /** Renders a dimmed scrim behind the panel */
  showBackdrop?: boolean;
  /** Clicking the backdrop closes the menu */
  closeOnBackdropClick?: boolean;
  /** Escape key closes the menu */
  closeOnEscape?: boolean;
  /** Locks body scroll while the menu is open */
  lockScroll?: boolean;
  className?: string;
}

export interface NavBarMobileMenuItemProps {
  children: React.ReactNode;
  active?: boolean;
  href?: string;
  onClick?: () => void;
  /** Closes the menu after the item is activated */
  closeOnClick?: boolean;
  className?: string;
}

/* ========================================
   CONTEXT
   ======================================== */

interface NavBarContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
  menuId: string;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const NavBarContext = React.createContext<NavBarContextValue | null>(null);

function useNavBarContext(component: string): NavBarContextValue {
  const context = React.useContext(NavBarContext);
  if (!context) {
    throw new Error(`<${component}> must be used within <NavBar>`);
  }
  return context;
}

/* ========================================
   STYLES
   ======================================== */

const variantStyles = {
  default: `
    bg-surface-primary
    border-b border-border-primary
    shadow-sm
  `,
  glass: `
    glass
    border-b border-border-secondary
    shadow-sm
  `,
  transparent: `
    bg-transparent
  `,
};

/* ========================================
   COMPONENTS
   ======================================== */

export const NavBar: React.FC<NavBarProps> = ({
  children,
  variant = 'default',
  sticky = true,
  open,
  defaultOpen = false,
  onOpenChange,
  mobileMenuId,
  className = '',
}) => {
  const generatedId = React.useId();
  const menuId = mobileMenuId ?? `navbar-mobile-menu-${generatedId}`;
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);

  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : uncontrolledOpen;

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const toggle = React.useCallback(() => setOpen(!isOpen), [isOpen, setOpen]);

  // Keep the latest open state available to the (stable) media query listener
  const isOpenRef = React.useRef(isOpen);
  React.useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Close the mobile menu when the viewport reaches the desktop breakpoint,
  // so the panel/backdrop never linger behind the desktop navigation.
  React.useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleChange = (event: MediaQueryList | MediaQueryListEvent) => {
      if (event.matches && isOpenRef.current) setOpen(false);
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setOpen]);

  const contextValue = React.useMemo<NavBarContextValue>(
    () => ({ open: isOpen, setOpen, toggle, menuId, triggerRef }),
    [isOpen, setOpen, toggle, menuId]
  );

  return (
    <NavBarContext.Provider value={contextValue}>
      <motion.nav
        className={`
        relative
        ${sticky ? 'sticky top-0' : ''}
        ${variantStyles[variant]}
        z-50
        transition-apple
        ${className}
      `}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {children}
          </div>
        </div>
      </motion.nav>
    </NavBarContext.Provider>
  );
};

export const NavBarBrand: React.FC<NavBarBrandProps> = ({
  children,
  href = '/',
  className = '',
}) => {
  const Component = href ? 'a' : 'div';

  return (
    <Component
      href={href}
      className={`
        flex items-center gap-2
        text-lg font-semibold
        text-text-primary
        transition-apple
        hover:opacity-80
        ${className}
      `}
    >
      {children}
    </Component>
  );
};

export const NavBarContent: React.FC<NavBarContentProps> = ({
  children,
  align = 'left',
  className = '',
}) => {
  const alignStyles = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <div className={`flex items-center gap-1 ${alignStyles[align]} ${className}`}>
      {children}
    </div>
  );
};

export const NavBarItem: React.FC<NavBarItemProps> = ({
  children,
  active = false,
  href,
  onClick,
  className = '',
}) => {
  const Component = href ? 'a' : 'button';

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Component
        href={href}
        onClick={onClick}
        className={`
          relative
          px-4 py-2
          text-sm font-medium
          rounded-lg
          transition-apple
          outline-none
          focus-visible:ring-2
          focus-visible:ring-accent-blue
          ${active
            ? 'text-text-primary bg-surface-secondary'
            : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50'
          }
          ${className}
        `}
      >
        {children}
        {active && (
          <motion.div
            layoutId="navbar-indicator"
            className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent-blue rounded-full"
            initial={false}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 30,
              mass: 0.6,
            }}
          />
        )}
      </Component>
    </motion.div>
  );
};

export const NavBarSeparator: React.FC = () => (
  <div className="h-6 w-px bg-border-primary mx-2" />
);

/* ========================================
   MOBILE MENU
   ======================================== */

/**
 * Hamburger button that controls <NavBarMobileMenu>.
 * Visible only below the `md` breakpoint.
 */
export const NavBarMobileToggle: React.FC<NavBarMobileToggleProps> = ({
  size = 'md',
  variant = 'default',
  'aria-label': ariaLabel = 'Toggle menu',
  className = '',
}) => {
  const { open, toggle, menuId, triggerRef } = useNavBarContext('NavBarMobileToggle');

  return (
    <HamburgerMenuIcon
      ref={triggerRef}
      isOpen={open}
      onClick={toggle}
      size={size}
      variant={variant}
      aria-label={ariaLabel}
      aria-controls={menuId}
      className={cn('md:hidden', className)}
    />
  );
};

/**
 * Dropdown panel rendered below the navbar on mobile.
 *
 * The panel is always opaque (`bg-surface-primary`) so navigation links can
 * never blend into the page content behind them.
 */
export const NavBarMobileMenu: React.FC<NavBarMobileMenuProps> = ({
  children,
  showBackdrop = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  lockScroll = true,
  className = '',
}) => {
  const { open, setOpen, menuId, triggerRef } = useNavBarContext('NavBarMobileMenu');

  const close = React.useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, [setOpen, triggerRef]);

  // Escape closes the menu and restores focus to the toggle
  React.useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, closeOnEscape, close]);

  // Lock body scroll while the menu covers the page
  React.useEffect(() => {
    if (!open || !lockScroll || typeof document === 'undefined') return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open, lockScroll]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {showBackdrop && (
            <motion.div
              key="navbar-mobile-backdrop"
              className="fixed inset-0 top-16 z-30 bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={closeOnBackdropClick ? close : undefined}
              aria-hidden="true"
            />
          )}

          <motion.div
            key="navbar-mobile-panel"
            id={menuId}
            data-state={open ? 'open' : 'closed'}
            className={cn(
              'absolute left-0 right-0 top-full z-40 origin-top overflow-hidden md:hidden',
              'bg-surface-primary border-b border-border-primary shadow-lg',
              className
            )}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-1">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

/** Full-width navigation link inside <NavBarMobileMenu>. */
export const NavBarMobileMenuItem: React.FC<NavBarMobileMenuItemProps> = ({
  children,
  active = false,
  href,
  onClick,
  closeOnClick = true,
  className = '',
}) => {
  const { setOpen } = useNavBarContext('NavBarMobileMenuItem');

  const handleClick = () => {
    onClick?.();
    if (closeOnClick) setOpen(false);
  };

  const itemClassName = cn(
    'w-full flex items-center gap-3',
    'px-4 py-3 rounded-lg',
    'text-base font-medium text-left',
    'transition-apple outline-none',
    'focus-visible:ring-2 focus-visible:ring-accent-blue',
    active
      ? 'text-text-primary bg-surface-secondary'
      : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary/60',
    className
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        aria-current={active ? 'page' : undefined}
        className={itemClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-current={active ? 'page' : undefined}
      className={itemClassName}
    >
      {children}
    </button>
  );
};

/* ========================================
   USAGE EXAMPLES
   ======================================== */

/*
<NavBar variant="glass" sticky>
  <NavBarBrand href="/">
    <Logo />
    <span>Brand</span>
  </NavBarBrand>
  
  <NavBarContent align="center">
    <NavBarItem active href="/">
      Home
    </NavBarItem>
    <NavBarItem href="/products">
      Products
    </NavBarItem>
    <NavBarItem href="/about">
      About
    </NavBarItem>
    <NavBarItem href="/contact">
      Contact
    </NavBarItem>
  </NavBarContent>
  
  <NavBarContent align="right">
    <NavBarSeparator />
    <Button variant="ghost">Sign In</Button>
    <Button variant="primary">Sign Up</Button>
  </NavBarContent>
</NavBar>

// Transparent navbar
<NavBar variant="transparent">
  <NavBarBrand>Brand</NavBarBrand>
  <NavBarContent>
    <NavBarItem active>Home</NavBarItem>
    <NavBarItem>About</NavBarItem>
  </NavBarContent>
</NavBar>

// Responsive navbar with mobile menu
<NavBar>
  <NavBarBrand href="/">Brand</NavBarBrand>

  <NavBarContent align="center" className="hidden md:flex">
    <NavBarItem active href="/">Home</NavBarItem>
    <NavBarItem href="/pricing">Pricing</NavBarItem>
  </NavBarContent>

  <NavBarMobileToggle />

  <NavBarMobileMenu>
    <NavBarMobileMenuItem active href="/">Home</NavBarMobileMenuItem>
    <NavBarMobileMenuItem href="/pricing">Pricing</NavBarMobileMenuItem>
  </NavBarMobileMenu>
</NavBar>

// Controlled mobile menu
<NavBar open={open} onOpenChange={setOpen}>
  <NavBarBrand>Brand</NavBarBrand>
  <NavBarMobileToggle />
  <NavBarMobileMenu>
    <NavBarMobileMenuItem href="/">Home</NavBarMobileMenuItem>
  </NavBarMobileMenu>
</NavBar>

// Non-sticky navbar
<NavBar sticky={false}>
  <NavBarBrand>Brand</NavBarBrand>
  <NavBarContent>
    <NavBarItem>Item 1</NavBarItem>
    <NavBarItem>Item 2</NavBarItem>
  </NavBarContent>
</NavBar>
*/
