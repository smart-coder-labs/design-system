import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { CommandMenuProps } from './CommandMenu.types';

export const CommandMenu = React.forwardRef<HTMLDivElement, CommandMenuProps>(
    (
        {
            isOpen,
            onClose,
            groups,
            placeholder = 'Type a command or search...',
            className = '',
            emptyMessage = 'No results found.',
        },
        ref
    ) => {
        const [search, setSearch] = React.useState('');
        const [selectedIndex, setSelectedIndex] = React.useState(0);
        const inputRef = React.useRef<HTMLInputElement>(null);

        const filteredGroups = React.useMemo(() => {
            if (!search.trim()) return groups;

            return groups
                .map((group) => ({
                    ...group,
                    items: group.items.filter((item) => {
                        const searchLower = search.toLowerCase();
                        const labelMatch = item.label.toLowerCase().includes(searchLower);
                        const descMatch = item.description?.toLowerCase().includes(searchLower);
                        const keywordMatch = item.keywords?.some((kw) =>
                            kw.toLowerCase().includes(searchLower)
                        );
                        return labelMatch || descMatch || keywordMatch;
                    }),
                }))
                .filter((group) => group.items.length > 0);
        }, [groups, search]);

        const allItems = React.useMemo(() => {
            return filteredGroups.flatMap((group) => group.items);
        }, [filteredGroups]);

        React.useEffect(() => {
            setSelectedIndex(0);
        }, [search]);

        React.useEffect(() => {
            if (isOpen) {
                inputRef.current?.focus();
                setSearch('');
                setSelectedIndex(0);
            }
        }, [isOpen]);

        React.useEffect(() => {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (!isOpen) return;

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

        const handleBackdropClick = (e: React.MouseEvent) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        };

        let currentItemIndex = 0;

        return (
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-modal" onClick={handleBackdropClick}>
                        <motion.div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />

                        <div className="relative flex items-start justify-center pt-[20vh] px-4">
                            <motion.div
                                ref={ref}
                                className={cn(
                                    'w-full max-w-2xl bg-surface-primary rounded-xl shadow-xl overflow-hidden',
                                    className
                                )}
                                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-center gap-3 px-4 py-4 border-b border-border-primary">
                                    <span className="text-text-tertiary text-xl">🔍</span>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder={placeholder}
                                        className="flex-1 bg-transparent text-lg text-text-primary placeholder:text-text-tertiary outline-none"
                                    />
                                    <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-text-tertiary bg-surface-secondary rounded border border-border-primary">
                                        ESC
                                    </kbd>
                                </div>

                                <div className="max-h-[60vh] overflow-y-auto">
                                    {allItems.length === 0 ? (
                                        <div className="px-4 py-12 text-center">
                                            <p className="text-text-tertiary">{emptyMessage}</p>
                                        </div>
                                    ) : (
                                        <div className="py-2">
                                            {filteredGroups.map((group, groupIdx) => (
                                                <div key={groupIdx} className="mb-4 last:mb-0">
                                                    {group.title && (
                                                        <div className="px-4 py-2 text-xs font-semibold text-text-tertiary uppercase tracking-wide">
                                                            {group.title}
                                                        </div>
                                                    )}
                                                    <div>
                                                        {group.items.map((item) => {
                                                            const itemIndex = currentItemIndex++;
                                                            const isSelected = itemIndex === selectedIndex;

                                                            return (
                                                                <motion.button
                                                                    key={item.id}
                                                                    onClick={() => {
                                                                        item.onSelect();
                                                                        onClose();
                                                                    }}
                                                                    className={cn(
                                                                        'w-full flex items-center gap-3 px-4 py-3 text-left transition-colors',
                                                                        isSelected
                                                                            ? 'bg-accent-blue/10 text-text-primary'
                                                                            : 'text-text-secondary hover:bg-surface-secondary'
                                                                    )}
                                                                    whileHover={{ x: 4 }}
                                                                    transition={{ duration: 0.15 }}
                                                                >
                                                                    {item.icon && (
                                                                        <span className="flex-shrink-0 text-lg">
                                                                            {item.icon}
                                                                        </span>
                                                                    )}
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="font-medium text-text-primary">
                                                                            {item.label}
                                                                        </div>
                                                                        {item.description && (
                                                                            <div className="text-xs text-text-tertiary truncate">
                                                                                {item.description}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                    {item.shortcut && (
                                                                        <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-text-tertiary bg-surface-secondary rounded border border-border-primary">
                                                                            {item.shortcut}
                                                                        </kbd>
                                                                    )}
                                                                </motion.button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-between px-4 py-3 border-t border-border-primary bg-surface-secondary/30">
                                    <div className="flex items-center gap-6 text-sm text-text-secondary">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                <kbd className="min-w-[24px] h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm">
                                                    ↑
                                                </kbd>
                                                <kbd className="min-w-[24px] h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm">
                                                    ↓
                                                </kbd>
                                            </div>
                                            <span className="text-text-tertiary">to navigate</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <kbd className="h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm">
                                                ↵
                                            </kbd>
                                            <span className="text-text-tertiary">to select</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <kbd className="h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm">
                                                ESC
                                            </kbd>
                                            <span className="text-text-tertiary">to close</span>
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium text-text-tertiary">
                                        {allItems.length} {allItems.length === 1 ? 'result' : 'results'}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        );
    }
);

CommandMenu.displayName = 'CommandMenu';