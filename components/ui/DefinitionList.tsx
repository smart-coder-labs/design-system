import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';;

/* ========================================
   TYPES
   ======================================== */

export type DefinitionItem = {
    term: React.ReactNode;
    description: React.ReactNode;
};

export type DefinitionListVariant = 'default' | 'bordered' | 'striped' | 'compact';
export type DefinitionListOrientation = 'horizontal' | 'vertical';

export interface DefinitionListProps extends React.HTMLAttributes<HTMLDListElement> {
    items: DefinitionItem[];
    variant?: DefinitionListVariant;
    orientation?: DefinitionListOrientation;
    divider?: boolean;
    hoverable?: boolean;
    density?: 'comfortable' | 'compact';
}

/* ========================================
   DEFINITION LIST COMPONENT
   ======================================== */

export const DefinitionList = forwardRef<HTMLDListElement, DefinitionListProps>(
    (
        {
            items,
            variant = 'default',
            orientation = 'horizontal',
            divider = false,
            hoverable = false,
            density = 'comfortable',
            className,
            ...props
        },
        ref
    ) => {
        const isHorizontal = orientation === 'horizontal';
        const isCompact = density === 'compact';

        const containerVariants = {
            default: "bg-surface-primary",
            bordered: "bg-surface-primary border border-border-primary rounded-xl",
            striped: "bg-surface-primary",
            compact: "bg-transparent",
        };

        const itemVariants = {
            default: "",
            bordered: "border-b border-border-primary last:border-b-0",
            striped: "even:bg-surface-secondary/50",
            compact: "",
        };

        const paddingClass = isCompact ? "py-2" : "py-3";
        const gapClass = isCompact ? "gap-2" : "gap-4";

        const MotionDL = motion.dl as React.ForwardRefExoticComponent<
            React.HTMLAttributes<HTMLDListElement> & 
            { ref?: React.Ref<HTMLDListElement> } &
            { initial?: any; animate?: any; transition?: any }
        >;

        return (
            <MotionDL
                ref={ref}
                className={cn(
                    "overflow-hidden",
                    containerVariants[variant],
                    variant === 'bordered' && "shadow-sm",
                    className
                )}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.22,
                    ease: [0.16, 1, 0.3, 1],
                }}
                {...props}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className={cn(
                            "group",
                            itemVariants[variant],
                            isHorizontal 
                                ? `flex ${gapClass} ${paddingClass} px-4 sm:px-6` 
                                : `flex flex-col ${gapClass} ${paddingClass} px-4 sm:px-6`,
                            divider && index !== items.length - 1 && "border-b border-border-primary",
                            hoverable && "transition-colors hover:bg-surface-secondary/30 cursor-default"
                        )}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            delay: index * 0.03,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <dt
                            className={cn(
                                "font-semibold text-text-primary",
                                isHorizontal 
                                    ? "min-w-[140px] sm:min-w-[180px] flex-shrink-0" 
                                    : "mb-1",
                                isCompact ? "text-sm" : "text-base"
                            )}
                        >
                            {item.term}
                        </dt>
                        <dd
                            className={cn(
                                "text-text-secondary",
                                isHorizontal ? "flex-1" : "",
                                isCompact ? "text-sm" : "text-base"
                            )}
                        >
                            {item.description}
                        </dd>
                    </motion.div>
                ))}
            </MotionDL>
        );
    }
);

DefinitionList.displayName = 'DefinitionList';

/* ========================================
   COMPACT VARIANT
   ======================================== */

export interface CompactDefinitionListProps extends Omit<DefinitionListProps, 'density' | 'variant'> {
    variant?: Exclude<DefinitionListVariant, 'compact'>;
}

export const CompactDefinitionList = forwardRef<HTMLDListElement, CompactDefinitionListProps>(
    (props, ref) => {
        return <DefinitionList ref={ref} {...props} density="compact" />;
    }
);

CompactDefinitionList.displayName = 'CompactDefinitionList';
