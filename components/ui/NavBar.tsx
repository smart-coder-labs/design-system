import React from 'react';
import { motion } from 'framer-motion';

/* ========================================
   TYPES
   ======================================== */

export interface NavBarProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'transparent';
  sticky?: boolean;
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
  className = '',
}) => {
  return (
    <motion.nav
      className={`
        ${sticky ? 'sticky top-0' : ''}
        ${variantStyles[variant]}
        z-sticky
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

// Non-sticky navbar
<NavBar sticky={false}>
  <NavBarBrand>Brand</NavBarBrand>
  <NavBarContent>
    <NavBarItem>Item 1</NavBarItem>
    <NavBarItem>Item 2</NavBarItem>
  </NavBarContent>
</NavBar>
*/
