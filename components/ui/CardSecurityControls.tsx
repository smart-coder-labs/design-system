"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Snowflake, Gauge, Globe, ShieldCheck } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface CardControl {
    id: string;
    label: string;
    description: string;
    icon: React.ReactNode;
    checked: boolean;
    variant?: 'default' | 'danger';
}

export interface CardSecurityControlsProps {
    controls?: CardControl[];
    onToggle?: (id: string, checked: boolean) => void;
    title?: string;
    className?: string;
}

/* ========================================
   DEFAULT CONTROLS
   ======================================== */

const defaultControls: CardControl[] = [
    {
        id: 'freeze',
        label: 'Freeze Card',
        description: 'Temporarily block all card transactions',
        icon: <Snowflake className="w-5 h-5" />,
        checked: false,
        variant: 'danger',
    },
    {
        id: 'limits',
        label: 'Spending Limits',
        description: 'Set daily spending and ATM withdrawal limits',
        icon: <Gauge className="w-5 h-5" />,
        checked: true,
    },
    {
        id: 'international',
        label: 'International Purchases',
        description: 'Allow transactions from foreign merchants',
        icon: <Globe className="w-5 h-5" />,
        checked: false,
    },
];

/* ========================================
   TOGGLE COMPONENT
   ======================================== */

const ControlToggle: React.FC<{
    control: CardControl;
    onToggle?: (id: string, checked: boolean) => void;
    index: number;
}> = ({ control, onToggle, index }) => {
    const isDanger = control.variant === 'danger';

    return (
        <motion.div
            className={cn(
                'flex items-center gap-4 p-4 rounded-xl transition-apple',
                'hover:bg-surface-secondary/40',
            )}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.06, duration: 0.25 }}
        >
            {/* Icon */}
            <div className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center shrink-0',
                control.checked
                    ? isDanger
                        ? 'bg-status-error/10 text-status-error'
                        : 'bg-accent-blue/10 text-accent-blue'
                    : 'bg-surface-secondary text-text-tertiary',
            )}>
                {control.icon}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-text-primary">{control.label}</p>
                <p className="text-xs text-text-tertiary mt-0.5">{control.description}</p>
            </div>

            {/* Switch */}
            <button
                type="button"
                role="switch"
                aria-checked={control.checked}
                aria-label={control.label}
                onClick={() => onToggle?.(control.id, !control.checked)}
                className={cn(
                    'w-11 h-6 rounded-full relative shrink-0 transition-apple duration-200 flex items-center px-0.5',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2',
                    control.checked
                        ? isDanger
                            ? 'bg-status-error'
                            : 'bg-accent-blue'
                        : 'bg-surface-secondary',
                )}
            >
                <motion.span
                    className="block w-5 h-5 rounded-full bg-white shadow-sm shrink-0"
                    animate={{ x: control.checked ? 18 : 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            </button>
        </motion.div>
    );
};

/* ========================================
   MAIN COMPONENT
   ======================================== */

export const CardSecurityControls: React.FC<CardSecurityControlsProps> = ({
    controls = defaultControls,
    onToggle,
    title = 'Card Security',
    className = '',
}) => {
    return (
        <motion.div
            className={cn(
                'bg-surface-primary rounded-2xl border border-border-primary shadow-sm overflow-hidden',
                className,
            )}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Header */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-border-secondary">
                <ShieldCheck className="w-4 h-4 text-accent-blue" />
                <h3 className="text-sm font-bold text-text-primary">{title}</h3>
            </div>

            {/* Controls */}
            <div className="divide-y divide-border-secondary/50 px-1">
                {controls.map((control, i) => (
                    <ControlToggle
                        key={control.id}
                        control={control}
                        onToggle={onToggle}
                        index={i}
                    />
                ))}
            </div>
        </motion.div>
    );
};

CardSecurityControls.displayName = 'CardSecurityControls';
export default CardSecurityControls;
