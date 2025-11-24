import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils'; // Assuming this exists based on clsx/tailwind-merge usage, or I'll just use clsx/tailwind-merge directly if not.
// Actually, I haven't seen lib/utils. I'll check if it exists.
// If not, I'll just use template literals or simple string concatenation as seen in Button.tsx.
// Button.tsx uses: `...`.trim().replace(/\s+/g, ' ');
// I'll stick to that pattern or just template literals if simple.

import { tokens } from '../tokens';

export interface EmptyStateProps {
  /**
   * The main title of the empty state
   */
  title: string;
  /**
   * A descriptive text explaining the empty state
   */
  description?: string;
  /**
   * An icon or illustration to display
   */
  icon?: React.ReactNode;
  /**
   * Optional action element (e.g., a Button)
   */
  action?: React.ReactNode;
  /**
   * Custom class name for the container
   */
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1], // Apple-style ease
      }}
      className={`
        flex flex-col items-center justify-center text-center p-8
        bg-surface-primary/50 rounded-2xl
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {icon && (
        <div className="mb-6 text-text-tertiary">
          {React.isValidElement(icon) ? (
            React.cloneElement(icon as React.ReactElement, {
              // @ts-ignore
              size: 48,
              strokeWidth: 1.5,
              className: 'w-12 h-12',
            })
          ) : (
            icon
          )}
        </div>
      )}

      <h3 className="text-xl font-semibold text-text-primary mb-2">
        {title}
      </h3>

      {description && (
        <p className="text-text-secondary max-w-sm mb-8 leading-relaxed">
          {description}
        </p>
      )}

      {action && (
        <div className="mt-2">
          {action}
        </div>
      )}
    </motion.div>
  );
};

EmptyState.displayName = 'EmptyState';
