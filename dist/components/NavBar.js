import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
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
export const NavBar = ({ children, variant = 'default', sticky = true, className = '', }) => {
    return (_jsx(motion.nav, { className: `
        ${sticky ? 'sticky top-0' : ''}
        ${variantStyles[variant]}
        z-sticky
        transition-apple
        ${className}
      `, initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
            mass: 0.8,
        }, children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "flex items-center justify-between h-16", children: children }) }) }));
};
export const NavBarBrand = ({ children, href = '/', className = '', }) => {
    const Component = href ? 'a' : 'div';
    return (_jsx(Component, { href: href, className: `
        flex items-center gap-2
        text-lg font-semibold
        text-text-primary
        transition-apple
        hover:opacity-80
        ${className}
      `, children: children }));
};
export const NavBarContent = ({ children, align = 'left', className = '', }) => {
    const alignStyles = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
    };
    return (_jsx("div", { className: `flex items-center gap-1 ${alignStyles[align]} ${className}`, children: children }));
};
export const NavBarItem = ({ children, active = false, href, onClick, className = '', }) => {
    const Component = href ? 'a' : 'button';
    return (_jsx(motion.div, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: _jsxs(Component, { href: href, onClick: onClick, className: `
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
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50'}
          ${className}
        `, children: [children, active && (_jsx(motion.div, { layoutId: "navbar-indicator", className: "absolute bottom-0 left-2 right-2 h-0.5 bg-accent-blue rounded-full", initial: false, transition: {
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                        mass: 0.6,
                    } }))] }) }));
};
export const NavBarSeparator = () => (_jsx("div", { className: "h-6 w-px bg-border-primary mx-2" }));
//# sourceMappingURL=NavBar.js.map