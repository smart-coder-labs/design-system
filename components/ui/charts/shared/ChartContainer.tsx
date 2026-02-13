"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../../lib/utils';
import { variantClasses, chartMotion, type ChartVariant } from './chartTokens';

export interface ChartContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: ChartVariant;
  animated?: boolean;
  title?: string;
  subtitle?: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  children,
  className,
  variant = 'default',
  animated = true,
  title,
  subtitle,
}) => {
  const Wrapper = animated ? motion.div : 'div';
  const animationProps = animated
    ? {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: chartMotion.duration.normal, ease: chartMotion.easing },
      }
    : {};

  return (
    <Wrapper
      className={cn(
        'rounded-[12px] p-4 w-full',
        variantClasses[variant],
        className
      )}
      {...animationProps}
    >
      {(title || subtitle) && (
        <div className="mb-3">
          {title && (
            <h3 className="text-[15px] font-semibold text-[var(--color-text-primary)]">{title}</h3>
          )}
          {subtitle && (
            <p className="text-[13px] text-[var(--color-text-secondary)] mt-0.5">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </Wrapper>
  );
};

export default ChartContainer;
