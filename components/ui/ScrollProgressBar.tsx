'use client';

import * as React from 'react';
import { motion, useScroll, useSpring, type HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const scrollProgressBarVariants = cva('fixed left-0 right-0 z-50 origin-left', {
  variants: {
    position: {
      top: 'top-0',
      bottom: 'bottom-0',
    },
    thickness: {
      sm: 'h-1',
      md: 'h-1.5',
      lg: 'h-2',
    },
    tone: {
      default: 'bg-accent-blue',
      accent: 'bg-status-success',
      muted: 'bg-border-primary',
    },
  },
  defaultVariants: {
    position: 'top',
    thickness: 'md',
    tone: 'default',
  },
});

export interface ScrollProgressBarProps
  extends Omit<HTMLMotionProps<'div'>, 'color'>,
    VariantProps<typeof scrollProgressBarVariants> {
  color?: string;
}

const ScrollProgressBar = React.forwardRef<HTMLDivElement, ScrollProgressBarProps>(
  ({ className, position, thickness, tone, color, style, ...props }, ref) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });

    return (
      <motion.div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(scrollProgressBarVariants({ position, thickness, tone }), className)}
        style={{ ...style, scaleX, backgroundColor: color }}
        {...props}
      />
    );
  }
);
ScrollProgressBar.displayName = 'ScrollProgressBar';

export { ScrollProgressBar, scrollProgressBarVariants };
