"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../../../lib/utils';

export interface ChartTooltipProps {
  visible: boolean;
  x: number;
  y: number;
  label?: string;
  value?: string | number;
  color?: string;
  items?: Array<{ label: string; value: string | number; color?: string }>;
  className?: string;
}

export const ChartTooltip: React.FC<ChartTooltipProps> = ({
  visible,
  x,
  y,
  label,
  value,
  color,
  items,
  className,
}) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={cn(
            'absolute pointer-events-none z-50',
            'bg-[var(--color-bg-elevated)] shadow-[var(--shadow-md)]',
            'rounded-lg px-3 py-2 text-[12px]',
            'border border-[var(--color-border-primary)]',
            className
          )}
          style={{
            left: x,
            top: y,
            transform: 'translate(-50%, -110%)',
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15 }}
        >
          {label && (
            <div className="font-medium text-[var(--color-text-primary)] mb-1">{label}</div>
          )}
          {value !== undefined && !items && (
            <div className="flex items-center gap-2">
              {color && (
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: color }}
                />
              )}
              <span className="text-[var(--color-text-secondary)] font-mono">{value}</span>
            </div>
          )}
          {items &&
            items.map((item, i) => (
              <div key={i} className="flex items-center gap-2 mt-0.5">
                {item.color && (
                  <span
                    className="w-2 h-2 rounded-full inline-block flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                )}
                <span className="text-[var(--color-text-secondary)]">{item.label}:</span>
                <span className="text-[var(--color-text-primary)] font-mono font-medium">
                  {item.value}
                </span>
              </div>
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChartTooltip;
