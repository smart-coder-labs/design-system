import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
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
    highlights?: DescriptionHighlightProps[];
    media?: React.ReactNode;
    actions?: React.ReactNode;
    footer?: React.ReactNode;
    layout?: 'stacked' | 'split';
    variant?: 'default' | 'soft' | 'panel' | 'glass';
    align?: 'start' | 'center';
}

/* ========================================
   DESCRIPTION HIGHLIGHT
   ======================================== */

export const DescriptionHighlight = forwardRef<HTMLDivElement, DescriptionHighlightProps>(
    (
        {
            label,
            value,
            change,
            trend,
            icon,
            badge,
            helper,
            emphasis = 'default',
            compact = false,
            className,
            ...props
        },
        ref
    ) => {
        const trendMap = {
            up: {
                icon: TrendingUp,
                color: 'text-status-success',
                bg: 'bg-status-success/10',
            },
            down: {
                icon: TrendingDown,
                color: 'text-status-error',
                bg: 'bg-status-error/10',
            },
            neutral: {
                icon: Minus,
                color: 'text-text-tertiary',
                bg: 'bg-surface-secondary',
            },
        } as const;

        const TrendIcon = trend ? trendMap[trend].icon : null;

        const MotionDiv = motion.div as any;

        return (
            <MotionDiv
                ref={ref}
                className={cn(
                    'rounded-2xl border border-border-primary/60 backdrop-blur-sm',
                    emphasis === 'soft' && 'bg-surface-secondary/50',
                    emphasis === 'default' && 'bg-surface-primary',
                    compact ? 'p-4' : 'p-5',
                    className
                )}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                {...props}
            >
                <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2 min-w-0">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-tertiary">
                            {icon && <span className="text-text-tertiary">{icon}</span>}
                            <span className="truncate">{label}</span>
                            {badge && <span className="text-[10px] font-semibold text-accent-blue bg-accent-blue/10 px-2 py-0.5 rounded-full">{badge}</span>}
                        </div>
                        <div className={cn(
                            'flex items-baseline gap-3 flex-wrap text-text-primary',
                            compact ? 'text-2xl font-semibold' : 'text-4xl font-bold tracking-tight'
                        )}>
                            <span className="truncate">{value}</span>
                            {change && (
                                <span className="text-sm font-semibold text-text-secondary whitespace-nowrap">
                                    {change}
                                </span>
                            )}
                        </div>
                        {helper && (
                            <div className="text-sm text-text-tertiary leading-relaxed">
                                {helper}
                            </div>
                        )}
                    </div>
                    {trend && TrendIcon && (
                        <div className={cn(
                            'flex items-center gap-1 px-2 py-1 rounded-xl text-xs font-semibold',
                            trendMap[trend].bg,
                            trendMap[trend].color
                        )}>
                            <TrendIcon className="w-3.5 h-3.5" />
                            <span>{trend === 'neutral' ? 'Stable' : trend === 'up' ? 'Up' : 'Down'}</span>
                        </div>
                    )}
                </div>
            </MotionDiv>
        );
    }
);

DescriptionHighlight.displayName = 'DescriptionHighlight';

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
            highlights,
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

                    {layout === 'split' && (highlights?.length || footer) && (
                        <div className="space-y-6">
                            {highlights && highlights.length > 0 && (
                                <div className="space-y-6">
                                    {highlights.map((highlight, index) => (
                                        <DescriptionHighlight key={index} {...highlight} />
                                    ))}
                                </div>
                            )}
                            {footer && (
                                <div className="rounded-2xl border border-dashed border-border-primary/60 p-4 text-sm text-text-secondary">
                                    {footer}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {layout === 'stacked' && highlights && highlights.length > 0 && (
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                        {highlights.map((highlight, index) => (
                            <DescriptionHighlight key={index} {...highlight} />
                        ))}
                    </div>
                )}

                {layout === 'stacked' && footer && (
                    <div className="rounded-2xl border border-dashed border-border-primary/60 p-4 text-sm text-text-secondary">
                        {footer}
                    </div>
                )}
            </MotionSection>
        );
    }
);

DescriptionBlock.displayName = 'DescriptionBlock';
