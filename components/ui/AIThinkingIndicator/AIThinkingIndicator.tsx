'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

import type { AIThinkingIndicatorProps } from './AIThinkingIndicator.types';
import { indicatorVariants } from './AIThinkingIndicator.styles';

/* ========================================
   INTERNAL SUB-COMPONENTS
   ======================================== */

interface DotsVariantProps {
    color: string;
}

const DotsVariant = React.forwardRef<HTMLDivElement, DotsVariantProps>(
    ({ color }, ref) => (
        <div ref={ref} className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="rounded-full dot"
                    style={{ backgroundColor: color }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut' }}
                />
            ))}
        </div>
    )
);
DotsVariant.displayName = 'DotsVariant';

interface PulseVariantProps {
    color: string;
}

const PulseVariant = React.forwardRef<HTMLDivElement, PulseVariantProps>(
    ({ color }, ref) => (
        <motion.div
            ref={ref}
            className="rounded-full dot"
            style={{ backgroundColor: color }}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
    )
);
PulseVariant.displayName = 'PulseVariant';

interface WaveVariantProps {
    color: string;
}

const WaveVariant = React.forwardRef<HTMLDivElement, WaveVariantProps>(
    ({ color }, ref) => (
        <div ref={ref} className="flex items-end gap-1.5" style={{ height: '16px' }}>
            {[0, 1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="rounded-full"
                    style={{ width: '3px', backgroundColor: color }}
                    animate={{ height: ['8px', '16px', '8px'], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                />
            ))}
        </div>
    )
);
WaveVariant.displayName = 'WaveVariant';

/* ========================================
   ROOT COMPONENT
   ======================================== */

export const AIThinkingIndicator = React.forwardRef<HTMLDivElement, AIThinkingIndicatorProps & VariantProps<typeof indicatorVariants>>(
    ({ variant = 'dots', size = 'md', color = 'var(--color-accent-blue)', message = '', className, ...props }, ref) => {
        const renderVariant = () => {
            switch (variant) {
                case 'dots': return <DotsVariant color={color} />;
                case 'pulse': return <PulseVariant color={color} />;
                case 'wave': return <WaveVariant color={color} />;
                default: return <DotsVariant color={color} />;
            }
        };

        return (
            <div
                ref={ref}
                className={cn(indicatorVariants({ size }), className)}
                role={message ? 'status' : undefined}
                aria-live="polite"
                {...props}
            >
                {renderVariant()}
                {message && <span className="text-text-secondary">{message}</span>}
            </div>
        );
    }
);

AIThinkingIndicator.displayName = 'AIThinkingIndicator';

/* ========================================
   EXPORTS
   ======================================== */

export { DotsVariant, PulseVariant, WaveVariant };
export type { AIThinkingIndicatorProps };