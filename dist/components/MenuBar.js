import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
export const MenuBar = React.forwardRef(({ menus, leftContent, rightContent, className = '' }, ref) => {
    const [activeMenu, setActiveMenu] = React.useState(null);
    const [hoveredMenu, setHoveredMenu] = React.useState(null);
    const menuRefs = React.useRef({});
    // Close menu on outside click
    React.useEffect(() => {
        const handleClickOutside = (e) => {
            if (activeMenu) {
                setActiveMenu(null);
                setHoveredMenu(null);
            }
        };
        if (activeMenu) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [activeMenu]);
    // Handle escape key
    React.useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && activeMenu) {
                setActiveMenu(null);
                setHoveredMenu(null);
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [activeMenu]);
    const handleMenuClick = (menuId) => {
        if (activeMenu === menuId) {
            setActiveMenu(null);
            setHoveredMenu(null);
        }
        else {
            setActiveMenu(menuId);
            setHoveredMenu(menuId);
        }
    };
    const handleMenuHover = (menuId) => {
        if (activeMenu) {
            setActiveMenu(menuId);
            setHoveredMenu(menuId);
        }
        else {
            setHoveredMenu(menuId);
        }
    };
    const handleItemClick = (item) => {
        if (!item.disabled && item.onSelect) {
            item.onSelect();
            setActiveMenu(null);
            setHoveredMenu(null);
        }
    };
    return (_jsxs("div", { ref: ref, className: cn('flex items-center h-14 px-6 bg-surface-primary border-b border-border-primary', className), children: [leftContent && _jsx("div", { className: "flex items-center mr-6", children: leftContent }), _jsx("div", { className: "flex items-center gap-2 flex-1", children: menus.map((menu) => (_jsxs("div", { className: "relative", children: [_jsx("button", { ref: (el) => { menuRefs.current[menu.id] = el; }, onClick: () => handleMenuClick(menu.id), onMouseEnter: () => handleMenuHover(menu.id), className: cn('px-4 py-2 text-sm font-medium rounded-md transition-colors', activeMenu === menu.id || hoveredMenu === menu.id
                                ? 'bg-accent-blue/10 text-text-primary'
                                : 'text-text-secondary hover:bg-surface-secondary hover:text-text-primary'), children: menu.label }), _jsx(AnimatePresence, { children: activeMenu === menu.id && (_jsx(motion.div, { initial: { opacity: 0, y: -8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.15 }, className: "absolute left-0 top-full mt-1 min-w-[240px] bg-surface-primary rounded-lg shadow-xl border border-border-primary overflow-hidden z-dropdown", onClick: (e) => e.stopPropagation(), children: _jsx("div", { className: "py-2", children: menu.items.map((item, idx) => (_jsx(React.Fragment, { children: item.divider ? (_jsx("div", { className: "my-2 h-px bg-border-primary" })) : (_jsxs("button", { onClick: () => handleItemClick(item), disabled: item.disabled, className: cn('w-full flex items-center justify-between gap-6 px-4 py-3 text-sm transition-colors', item.disabled
                                                ? 'text-text-tertiary cursor-not-allowed'
                                                : 'text-text-secondary hover:bg-accent-blue/10 hover:text-text-primary cursor-pointer'), children: [_jsxs("div", { className: "flex items-center gap-3", children: [item.icon && (_jsx("span", { className: "flex-shrink-0 text-lg", children: item.icon })), _jsx("span", { children: item.label })] }), item.shortcut && (_jsx("kbd", { className: "text-xs text-text-tertiary font-medium", children: item.shortcut }))] })) }, item.id))) }) })) })] }, menu.id))) }), rightContent && _jsx("div", { className: "flex items-center ml-6", children: rightContent })] }));
});
MenuBar.displayName = 'MenuBar';
//# sourceMappingURL=MenuBar.js.map