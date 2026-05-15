'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const comicPanelVariants = cva('relative overflow-hidden rounded-3xl border p-6 shadow-md', {
  variants: {
    direction: {
      left: '',
      right: '',
    },
    tone: {
      default: 'bg-surface-primary border-border-primary',
      accent: 'bg-surface-primary border-accent-blue',
      muted: 'bg-surface-secondary border-border-secondary',
    },
  },
  defaultVariants: {
    direction: 'left',
    tone: 'default',
  },
});

export interface ComicPanelProps
  extends Omit<HTMLMotionProps<'div'>, 'children'>,
    VariantProps<typeof comicPanelVariants> {
  children?: React.ReactNode;
  textureClassName?: string;
  contentClassName?: string;
}

const ComicPanelTexture = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'pointer-events-none absolute inset-0 opacity-15 [background-size:8px_8px] bg-[radial-gradient(circle,var(--color-border-primary)_1px,transparent_1px)]',
        className
      )}
      {...props}
    />
  )
);
ComicPanelTexture.displayName = 'ComicPanelTexture';

const ComicPanelContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('relative z-10', className)} {...props} />
);
ComicPanelContent.displayName = 'ComicPanelContent';

const ComicPanelRoot = React.forwardRef<HTMLDivElement, ComicPanelProps>(
  ({ className, direction, tone, children, textureClassName, contentClassName, ...props }, ref) => {
    const isLeft = direction === 'left';

    return (
      <motion.div
        ref={ref}
        initial={{ x: isLeft ? -150 : 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        viewport={{ once: false, margin: '-10%' }}
        className={cn(comicPanelVariants({ direction, tone }), className)}
        {...props}
      >
        <ComicPanelTexture className={textureClassName} />
        <ComicPanelContent className={contentClassName}>{children}</ComicPanelContent>
      </motion.div>
    );
  }
);
ComicPanelRoot.displayName = 'ComicPanel';

const ComicPanel = Object.assign(ComicPanelRoot, {
  Texture: ComicPanelTexture,
  Content: ComicPanelContent,
});

export { ComicPanel, ComicPanelRoot, ComicPanelTexture, ComicPanelContent, comicPanelVariants };
