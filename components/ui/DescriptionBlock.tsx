import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';;
import { Badge } from './Badge';

/* ========================================
   TYPES
   ======================================== */

export type DescriptionHighlightTrend = 'up' | 'down' | 'neutral';

export interface DescriptionHighlightProps extends React.HTMLAttributes<HTMLDivElement> {
    label: React.ReactNode;
    value: React.ReactNode;
    change?: React.ReactNode;
    trend?: DescriptionHighlightTrend;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    helper?: React.ReactNode;
    emphasis?: 'default' | 'soft';
    compact?: boolean;
}

export type DescriptionMetadataItem = {
    label: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
    hint?: React.ReactNode;
};

export interface DescriptionBlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    eyebrow?: React.ReactNode;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    description?: React.ReactNode;
    badges?: React.ReactNode[];
    metadata?: DescriptionMetadataItem[];
    metadataColumns?: 1 | 2 | 3;
    media?: React.ReactNode;
    actions?: React.ReactNode;
    footer?: React.ReactNode;
    layout?: 'stacked' | 'split';
    variant?: 'default' | 'soft' | 'panel' | 'glass';
    align?: 'start' | 'center';
}

/* ========================================
   DESCRIPTION BLOCK
   ======================================== */

export const DescriptionBlock = forwardRef<HTMLDivElement, DescriptionBlockProps>(
    (
        {
            eyebrow,
            title,
            subtitle,
            description,
            badges,
            metadata,
            metadataColumns = 2,
            media,
            actions,
            footer,
            layout = 'stacked',
            variant = 'default',
            align = 'start',
            className,
            ...props
        },
        ref
    ) => {
        const MotionSection = motion.section as any;

        const variantClasses = {
            default: 'bg-surface-primary border border-border-primary shadow-sm',
            soft: 'bg-surface-secondary/60 border border-border-primary/50',
            panel: 'bg-surface-primary/90 border border-border-primary shadow-lg',
            glass: 'bg-white/5 dark:bg-white/2 backdrop-blur-2xl border border-white/10 shadow-[0_20px_80px_rgba(15,23,42,0.15)]',
        } as const;

        const metadataGrid = {
            1: 'grid-cols-1',
            2: 'grid-cols-1 sm:grid-cols-2',
            3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        } as const;

        return (
            <MotionSection
                ref={ref}
                className={cn(
                    'rounded-3xl p-6 sm:p-8 space-y-6',
                    variantClasses[variant],
                    className
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                {...props}
            >
                <div className={cn(
                    layout === 'split'
                        ? 'grid gap-8 lg:grid-cols-[1.8fr_1fr]'
                        : 'space-y-10'
                )}
                >
                    <div className={cn('space-y-7', align === 'center' && 'text-center items-center flex flex-col')}>
                        {eyebrow && (
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-text-tertiary">
                                {eyebrow}
                            </p>
                        )}
                        <div className="space-y-3 w-full">
                            <div className="space-y-2">
                                <div className={cn('text-3xl font-semibold tracking-tight text-text-primary', align === 'center' && 'text-center')}>
                                    {title}
                                </div>
                                {subtitle && (
                                    <p className={cn('text-lg text-text-secondary', align === 'center' && 'text-center')}>
                                        {subtitle}
                                    </p>
                                )}
                            </div>
                            {badges && badges.length > 0 && (
                                <div className={cn('flex flex-wrap gap-2', align === 'center' && 'justify-center')}>
                                    {badges.map((badge, index) => (
                                        <Badge
                                            key={index}
                                            size="sm"
                                            className="bg-surface-secondary/60 border border-border-primary/60 text-text-secondary"
                                        >
                                            {badge}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>
                        {description && (
                            <div className={cn('text-base text-text-secondary leading-relaxed max-w-2xl', align === 'center' && 'mx-auto text-center')}>
                                {description}
                            </div>
                        )}
                        {actions && (
                            <div className={cn('flex flex-wrap gap-3', align === 'center' && 'justify-center')}>
                                {actions}
                            </div>
                        )}
                        {media && (
                            <div className="overflow-hidden rounded-2xl border border-border-primary/60 bg-surface-secondary/40">
                                {media}
                            </div>
                        )}
                        {metadata && metadata.length > 0 && (
                            <div className="space-y-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-tertiary">Detalles</p>
                                <div className={cn('grid gap-6', metadataGrid[metadataColumns])}>
                                    {metadata.map((item, index) => (
                                        <div key={index} className="rounded-2xl border border-border-primary/40 bg-surface-secondary/30 p-5 space-y-1.5">
                                            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-tertiary">
                                                {item.icon && <span className="text-text-tertiary">{item.icon}</span>}
                                                <span>{item.label}</span>
                                            </div>
                                            <div className="text-text-primary text-lg font-semibold break-words">
                                                {item.value}
                                            </div>
                                            {item.hint && (
                                                <p className="text-sm text-text-secondary">{item.hint}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {layout === 'stacked' && footer && (
                    <>
                        <br />
                        <div className="rounded-2xl border border-dashed border-border-primary/60 p-4 text-sm text-text-secondary">
                        {footer}
                    </div>
                    </>
                )}
            </MotionSection>
        );
    }
);

DescriptionBlock.displayName = 'DescriptionBlock';
