import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { motion, AnimatePresence } from 'framer-motion';
/* ========================================
   COMPONENT
   ======================================== */
export const Dropdown = ({ trigger, children, align = 'end', sideOffset = 8, }) => {
    const [open, setOpen] = React.useState(false);
    return (_jsxs(DropdownMenu.Root, { open: open, onOpenChange: setOpen, children: [_jsx(DropdownMenu.Trigger, { asChild: true, children: trigger }), _jsx(AnimatePresence, { children: open && (_jsx(DropdownMenu.Portal, { forceMount: true, children: _jsx(DropdownMenu.Content, { asChild: true, align: align, sideOffset: sideOffset, children: _jsx(motion.div, { className: "\n                  min-w-[200px]\n                  bg-surface-primary\n                  border border-border-primary\n                  rounded-xl\n                  shadow-lg\n                  p-1\n                  z-dropdown\n                  focus:outline-none\n                ", initial: { opacity: 0, scale: 0.96, y: -8 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.96, y: -8 }, transition: {
                                type: 'spring',
                                stiffness: 400,
                                damping: 25,
                                mass: 0.6,
                            }, children: children }) }) })) })] }));
};
/* ========================================
   SUB-COMPONENTS
   ======================================== */
export const DropdownItem = ({ children, onSelect, disabled = false, destructive = false, leftIcon, rightIcon, className = '', }) => (_jsxs(DropdownMenu.Item, { onSelect: onSelect, disabled: disabled, className: `
      flex items-center gap-3
      px-3 py-2
      rounded-lg
      text-sm
      cursor-pointer
      outline-none
      transition-apple
      ${destructive
        ? 'text-status-error hover:bg-status-error/10'
        : 'text-text-primary hover:bg-surface-secondary'}
      ${disabled ? 'opacity-40 cursor-not-allowed' : ''}
      ${className}
    `, children: [leftIcon && _jsx("span", { className: "w-4 h-4 flex-shrink-0", children: leftIcon }), _jsx("span", { className: "flex-1", children: children }), rightIcon && _jsx("span", { className: "w-4 h-4 flex-shrink-0", children: rightIcon })] }));
export const DropdownSeparator = () => (_jsx(DropdownMenu.Separator, { className: "h-px bg-border-secondary my-1" }));
export const DropdownLabel = ({ children, className = '' }) => (_jsx(DropdownMenu.Label, { className: `
      px-3 py-2
      text-xs
      font-medium
      text-text-tertiary
      uppercase
      tracking-wide
      ${className}
    `, children: children }));
export const DropdownCheckboxItem = ({ children, checked = false, onCheckedChange, disabled = false, className = '', }) => (_jsxs(DropdownMenu.CheckboxItem, { checked: checked, onCheckedChange: onCheckedChange, disabled: disabled, className: `
      flex items-center gap-3
      px-3 py-2
      rounded-lg
      text-sm
      cursor-pointer
      outline-none
      transition-apple
      text-text-primary
      hover:bg-surface-secondary
      ${disabled ? 'opacity-40 cursor-not-allowed' : ''}
      ${className}
    `, children: [_jsx(DropdownMenu.ItemIndicator, { className: "w-4 h-4 flex items-center justify-center", children: _jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M2 7L5.5 10.5L12 3.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }), _jsx("span", { className: "flex-1", children: children })] }));
export const DropdownRadioGroup = ({ value, onValueChange, children }) => (_jsx(DropdownMenu.RadioGroup, { value: value, onValueChange: onValueChange, children: children }));
export const DropdownRadioItem = ({ value, children, disabled = false, className = '' }) => (_jsxs(DropdownMenu.RadioItem, { value: value, disabled: disabled, className: `
      flex items-center gap-3
      px-3 py-2
      rounded-lg
      text-sm
      cursor-pointer
      outline-none
      transition-apple
      text-text-primary
      hover:bg-surface-secondary
      ${disabled ? 'opacity-40 cursor-not-allowed' : ''}
      ${className}
    `, children: [_jsx(DropdownMenu.ItemIndicator, { className: "w-4 h-4 flex items-center justify-center", children: _jsx("div", { className: "w-2 h-2 rounded-full bg-accent-blue" }) }), _jsx("span", { className: "flex-1", children: children })] }));
//# sourceMappingURL=Dropdown.js.map