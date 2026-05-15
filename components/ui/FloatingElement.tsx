'use client';

import * as React from 'react';
import { motion, useScroll, useTransform, type HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const floatingElementVariants = cva('inline-block will-change-transform', {
  variants: {
    intensity: {
      subtle: '',
      medium: '',
      strong: '',
    },
  },
  defaultVariants: {
    intensity: 'medium',
  },
});

const intensityConfig = {
  subtle: { rotate: 180, yStart: 50, yEnd: -50 },
  medium: { rotate: 360, yStart: 100, yEnd: -100 },
  strong: { rotate: 540, yStart: 150, yEnd: -150 },
} as const;

export interface FloatingElementProps
  extends Omit<HTMLMotionProps<'div'>, 'children'>,
    VariantProps<typeof floatingElementVariants> {
  children?: React.ReactNode;
  rotationSpeed?: number;
}

const FloatingElementContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn(className)} {...props} />
);
FloatingElementContent.displayName = 'FloatingElementContent';

const FloatingElementRoot = React.forwardRef<HTMLDivElement, FloatingElementProps>(
  ({ children, rotationSpeed = 1, intensity = 'medium', className, ...props }, ref) => {
    const localRef = React.useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: localRef,
      offset: ['start end', 'end start'],
    });

    const preset = intensityConfig[intensity ?? 'medium'];
    const rotate = useTransform(scrollYProgress, [0, 1], [0, preset.rotate * rotationSpeed]);
    const y = useTransform(scrollYProgress, [0, 1], [preset.yStart, preset.yEnd]);

    return (
      <motion.div
        ref={(node) => {
          localRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        style={{ rotate, y }}
        className={cn(floatingElementVariants({ intensity }), className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
FloatingElementRoot.displayName = 'FloatingElement';

const FloatingElement = Object.assign(FloatingElementRoot, {
  Content: FloatingElementContent,
});

export { FloatingElement, FloatingElementRoot, FloatingElementContent, floatingElementVariants };
