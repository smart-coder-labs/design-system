import React, { useState, forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/utils';;
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export type FABGroupPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'none';

export interface FABGroupAction {
    icon: React.ElementType;
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

export interface FABGroupProps {
    actions: FABGroupAction[];
    position?: FABGroupPosition;
    className?: string;
}

/* ========================================
   FAB GROUP COMPONENT
   ======================================== */

export const FABGroup = forwardRef<HTMLDivElement, FABGroupProps>(
    (
        {
            actions,
            position = 'bottom-right',
            className,
        },
        ref
    ) => {
        const [isOpen, setIsOpen] = useState(false);
        const [mounted, setMounted] = useState(false);

        useEffect(() => {
            setMounted(true);
        }, []);

        const positions = {
            'none': '',
            'bottom-right': 'fixed bottom-6 right-6 z-sticky',
            'bottom-left': 'fixed bottom-6 left-6 z-sticky',
            'top-right': 'fixed top-6 right-6 z-sticky',
            'top-left': 'fixed top-6 left-6 z-sticky',
        };

        const isFixed = position !== 'none';

        const content = (
            <div ref={ref} className={cn("flex flex-col-reverse items-end gap-3", positions[position], className)}>
                {/* Action FABs */}
                <AnimatePresence>
                    {isOpen && actions.map((action, index) => {
                        const Icon = action.icon;
                        const variantStyles = {
                            primary: "bg-accent-blue text-white hover:bg-accent-blueHover",
                            secondary: "bg-surface-elevated text-text-primary hover:bg-surface-secondary border border-border-primary",
                            tertiary: "bg-surface-tertiary text-text-primary hover:bg-surface-secondary",
                        };

                        return (
                            <motion.div
                                key={index}
                                initial={{ scale: 0, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0, opacity: 0, y: 20 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25,
                                    delay: index * 0.05,
                                }}
                                className="flex items-center gap-3"
                            >
                                {/* Label */}
                                <motion.span
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ delay: index * 0.05 + 0.1 }}
                                    className="px-3 py-1.5 bg-surface-elevated border border-border-primary rounded-lg shadow-md text-sm font-medium text-text-primary whitespace-nowrap"
                                >
                                    {action.label}
                                </motion.span>

                                {/* Action Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        action.onClick();
                                        setIsOpen(false);
                                    }}
                                    className={cn(
                                        "w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20",
                                        variantStyles[action.variant || 'secondary']
                                    )}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.button>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {/* Main Toggle FAB */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "w-14 h-14 rounded-full bg-accent-blue text-white flex items-center justify-center shadow-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20",
                        "hover:bg-accent-blueHover"
                    )}
                >
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </motion.div>
                </motion.button>
            </div>
        );

        if (isFixed && mounted) {
            return createPortal(content, document.body);
        }

        return content;
    }
);

FABGroup.displayName = 'FABGroup';
