"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Plus, ChevronRight } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface QuickContact {
    id: string;
    name: string;
    avatarUrl?: string;
    initials?: string;
    lastTransfer?: string;
}

export interface QuickTransferBarProps {
    contacts: QuickContact[];
    onSelect?: (contact: QuickContact) => void;
    onAddNew?: () => void;
    title?: string;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

const avatarColors = [
    'bg-blue-500', 'bg-emerald-500', 'bg-violet-500', 'bg-amber-500',
    'bg-pink-500', 'bg-cyan-500', 'bg-rose-500', 'bg-indigo-500',
];

export const QuickTransferBar: React.FC<QuickTransferBarProps> = ({
    contacts,
    onSelect,
    onAddNew,
    title = 'Quick Transfer',
    className = '',
}) => {
    return (
        <motion.div
            className={cn('w-full', className)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-text-primary">{title}</h3>
                {contacts.length > 5 && (
                    <button className="flex items-center gap-0.5 text-xs font-semibold text-accent-blue hover:underline">
                        See all <ChevronRight className="w-3 h-3" />
                    </button>
                )}
            </div>

            <div className="flex items-center gap-4 overflow-x-auto overflow-y-visible py-2 scrollbar-hide">
                {/* Add new contact */}
                <motion.button
                    onClick={onAddNew}
                    className="flex flex-col items-center gap-1.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="w-14 h-14 rounded-full border-2 border-dashed border-border-primary flex items-center justify-center text-text-tertiary hover:border-accent-blue hover:text-accent-blue transition-apple">
                        <Plus className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-medium text-text-tertiary w-14 text-center truncate">Add New</span>
                </motion.button>

                {/* Contact list */}
                {contacts.map((contact, i) => (
                    <motion.button
                        key={contact.id}
                        onClick={() => onSelect?.(contact)}
                        className="flex flex-col items-center gap-1.5 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-xl"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.2 }}
                    >
                        <div className={cn(
                            'w-14 h-14 rounded-full flex items-center justify-center text-white text-base font-bold overflow-hidden',
                            'ring-2 ring-transparent group-hover:ring-accent-blue/30 transition-all duration-200',
                            !contact.avatarUrl && avatarColors[i % avatarColors.length],
                        )}>
                            {contact.avatarUrl ? (
                                <img src={contact.avatarUrl} alt={contact.name} className="w-full h-full object-cover" />
                            ) : (
                                <span>{contact.initials || contact.name.slice(0, 2).toUpperCase()}</span>
                            )}
                        </div>
                        <span className="text-[10px] font-medium text-text-secondary w-14 text-center truncate group-hover:text-text-primary transition-apple">
                            {contact.name.split(' ')[0]}
                        </span>
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

QuickTransferBar.displayName = 'QuickTransferBar';
export default QuickTransferBar;
