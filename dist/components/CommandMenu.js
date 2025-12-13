import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
export const CommandMenu = React.forwardRef(({ isOpen, onClose, groups, placeholder = 'Type a command or search...', className = '', emptyMessage = 'No results found.', }, ref) => {
    const [search, setSearch] = React.useState('');
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const inputRef = React.useRef(null);
    // Filter items based on search
    const filteredGroups = React.useMemo(() => {
        if (!search.trim())
            return groups;
        return groups
            .map((group) => ({
            ...group,
            items: group.items.filter((item) => {
                const searchLower = search.toLowerCase();
                const labelMatch = item.label.toLowerCase().includes(searchLower);
                const descMatch = item.description?.toLowerCase().includes(searchLower);
                const keywordMatch = item.keywords?.some((kw) => kw.toLowerCase().includes(searchLower));
                return labelMatch || descMatch || keywordMatch;
            }),
        }))
            .filter((group) => group.items.length > 0);
    }, [groups, search]);
    // Flatten items for keyboard navigation
    const allItems = React.useMemo(() => {
        return filteredGroups.flatMap((group) => group.items);
    }, [filteredGroups]);
    // Reset selection when search changes
    React.useEffect(() => {
        setSelectedIndex(0);
    }, [search]);
    // Focus input when opened
    React.useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            setSearch('');
            setSelectedIndex(0);
        }
    }, [isOpen]);
    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen)
                return;
            switch (e.key) {
                case 'Escape':
                    e.preventDefault();
                    onClose();
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev + 1) % allItems.length);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setSelectedIndex((prev) => (prev - 1 + allItems.length) % allItems.length);
                    break;
                case 'Enter':
                    e.preventDefault();
                    if (allItems[selectedIndex]) {
                        allItems[selectedIndex].onSelect();
                        onClose();
                    }
                    break;
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, selectedIndex, allItems, onClose]);
    // Lock body scroll when open
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
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    let currentItemIndex = 0;
    return (_jsx(AnimatePresence, { children: isOpen && (_jsxs("div", { className: "fixed inset-0 z-modal", onClick: handleBackdropClick, children: [_jsx(motion.div, { className: "absolute inset-0 bg-black/60 backdrop-blur-sm", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 } }), _jsx("div", { className: "relative flex items-start justify-center pt-[20vh] px-4", children: _jsxs(motion.div, { ref: ref, className: cn('w-full max-w-2xl bg-surface-primary rounded-xl shadow-xl overflow-hidden', className), initial: { opacity: 0, scale: 0.95, y: -20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: -20 }, transition: { type: 'spring', stiffness: 300, damping: 30 }, onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "flex items-center gap-3 px-4 py-4 border-b border-border-primary", children: [_jsx("span", { className: "text-text-tertiary text-xl", children: "\uD83D\uDD0D" }), _jsx("input", { ref: inputRef, type: "text", value: search, onChange: (e) => setSearch(e.target.value), placeholder: placeholder, className: "flex-1 bg-transparent text-lg text-text-primary placeholder:text-text-tertiary outline-none" }), _jsx("kbd", { className: "hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-text-tertiary bg-surface-secondary rounded border border-border-primary", children: "ESC" })] }), _jsx("div", { className: "max-h-[60vh] overflow-y-auto", children: allItems.length === 0 ? (_jsx("div", { className: "px-4 py-12 text-center", children: _jsx("p", { className: "text-text-tertiary", children: emptyMessage }) })) : (_jsx("div", { className: "py-2", children: filteredGroups.map((group, groupIdx) => (_jsxs("div", { className: "mb-4 last:mb-0", children: [group.title && (_jsx("div", { className: "px-4 py-2 text-xs font-semibold text-text-tertiary uppercase tracking-wide", children: group.title })), _jsx("div", { children: group.items.map((item) => {
                                                    const itemIndex = currentItemIndex++;
                                                    const isSelected = itemIndex === selectedIndex;
                                                    return (_jsxs(motion.button, { onClick: () => {
                                                            item.onSelect();
                                                            onClose();
                                                        }, className: cn('w-full flex items-center gap-3 px-4 py-3 text-left transition-colors', isSelected
                                                            ? 'bg-accent-blue/10 text-text-primary'
                                                            : 'text-text-secondary hover:bg-surface-secondary'), whileHover: { x: 4 }, transition: { duration: 0.15 }, children: [item.icon && (_jsx("span", { className: "flex-shrink-0 text-lg", children: item.icon })), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("div", { className: "font-medium text-text-primary", children: item.label }), item.description && (_jsx("div", { className: "text-xs text-text-tertiary truncate", children: item.description }))] }), item.shortcut && (_jsx("kbd", { className: "hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-text-tertiary bg-surface-secondary rounded border border-border-primary", children: item.shortcut }))] }, item.id));
                                                }) })] }, groupIdx))) })) }), _jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-t border-border-primary bg-surface-secondary/30", children: [_jsxs("div", { className: "flex items-center gap-6 text-sm text-text-secondary", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx("kbd", { className: "min-w-[24px] h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm", children: "\u2191" }), _jsx("kbd", { className: "min-w-[24px] h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm", children: "\u2193" })] }), _jsx("span", { className: "text-text-tertiary", children: "to navigate" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("kbd", { className: "h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm", children: "\u21B5" }), _jsx("span", { className: "text-text-tertiary", children: "to select" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("kbd", { className: "h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm", children: "ESC" }), _jsx("span", { className: "text-text-tertiary", children: "to close" })] })] }), _jsxs("div", { className: "text-sm font-medium text-text-tertiary", children: [allItems.length, " ", allItems.length === 1 ? 'result' : 'results'] })] })] }) })] })) }));
});
CommandMenu.displayName = 'CommandMenu';
//# sourceMappingURL=CommandMenu.js.map