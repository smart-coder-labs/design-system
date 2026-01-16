import React, { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../lib/utils';;
import { motion, HTMLMotionProps, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export type FABVariant = 'primary' | 'secondary' | 'tertiary';
export type FABSize = 'sm' | 'md' | 'lg';
export type FABPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'none';

export interface FABProps extends Omit<HTMLMotionProps<"button">, "children"> {
    icon?: React.ElementType;
    label?: string; // If present, renders as Extended FAB
    variant?: FABVariant;
    size?: FABSize;
    position?: FABPosition;
    show?: boolean; // Controls visibility/entrance animation
}

/* ========================================
   FAB COMPONENT
   ======================================== */

export const FAB = forwardRef<HTMLButtonElement, FABProps>(
    (
        {
            icon: Icon = Plus,
            label,
            variant = 'primary',
            size = 'md',
            position = 'bottom-right',
            show = true,
            className,
            disabled,
            ...props
        },
        ref
    ) => {
        const [mounted, setMounted] = useState(false);

        useEffect(() => {
            setMounted(true);
        }, []);

        const variants = {
            primary: "bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive shadow-lg hover:shadow-xl",
            secondary: "bg-surface-elevated text-text-primary hover:bg-surface-secondary active:bg-surface-tertiary border border-border-primary shadow-lg hover:shadow-xl",
            tertiary: "bg-surface-tertiary text-text-primary hover:bg-surface-secondary shadow-md hover:shadow-lg",
        };

        const sizes = {
            sm: "h-10 min-w-[2.5rem] px-0", // px-0 for circle, will adjust if label exists
            md: "h-12 min-w-[3rem] px-0",
            lg: "h-14 min-w-[3.5rem] px-0",
        };

        const iconSizes = {
            sm: "w-5 h-5",
            md: "w-6 h-6",
            lg: "w-7 h-7",
        };

        const positions = {
            'none': '',
            'bottom-right': 'fixed bottom-6 right-6 z-sticky',
            'bottom-left': 'fixed bottom-6 left-6 z-sticky',
            'top-right': 'fixed top-6 right-6 z-sticky',
            'top-left': 'fixed top-6 left-6 z-sticky',
        };

        const isExtended = !!label;
        const isFixed = position !== 'none';

        const buttonContent = (
            <AnimatePresence>
                {show && (
                    <motion.button
                        ref={ref}
                        initial={{ scale: 0, opacity: 0, rotate: -45 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0, opacity: 0, rotate: 45 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        disabled={disabled}
                        className={cn(
                            "flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20",
                            variants[variant],
                            sizes[size],
                            positions[position],
                            isExtended ? "px-5 rounded-full aspect-auto" : "aspect-square",
                            disabled && "opacity-50 cursor-not-allowed shadow-none",
                            className
                        )}
                        {...props}
                    >
                        <Icon className={cn(iconSizes[size], isExtended && "mr-2")} />
                        {isExtended && (
                            <span className="font-medium whitespace-nowrap">{label}</span>
                        )}
                    </motion.button>
                )}
            </AnimatePresence>
        );

        if (isFixed && mounted) {
            return createPortal(buttonContent, document.body);
        }

        return buttonContent;
    }
);

FAB.displayName = 'FAB';
