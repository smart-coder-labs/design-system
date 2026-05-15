'use client';

import * as React from 'react';
import { motion, type Variants } from 'framer-motion';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const scrollRevealCardsColumns = cva('grid gap-6', {
  variants: {
    columns: {
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    },
  },
  defaultVariants: {
    columns: 3,
  },
});

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

export interface ScrollRevealCard {
  id: string | number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface ScrollRevealCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: ScrollRevealCard[];
  columns?: 2 | 3 | 4;
}

const ScrollRevealCardsItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof motion.div>>(
  ({ className, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={cardVariants}
      className={cn(
        'p-6 rounded-2xl bg-surface-primary/50 border border-border-primary shadow-lg backdrop-blur-xl transition-colors hover:bg-surface-secondary',
        className
      )}
      {...props}
    />
  )
);
ScrollRevealCardsItem.displayName = 'ScrollRevealCardsItem';

const ScrollRevealCardsIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('mb-4 text-3xl', className)} {...props} />
);
ScrollRevealCardsIcon.displayName = 'ScrollRevealCardsIcon';

const ScrollRevealCardsTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h3 ref={ref} className={cn('text-xl font-semibold mb-2', className)} {...props} />
);
ScrollRevealCardsTitle.displayName = 'ScrollRevealCardsTitle';

const ScrollRevealCardsDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn('text-text-tertiary text-sm leading-relaxed', className)} {...props} />
);
ScrollRevealCardsDescription.displayName = 'ScrollRevealCardsDescription';

const ScrollRevealCardsRoot = React.forwardRef<HTMLDivElement, ScrollRevealCardsProps>(
  ({ items, columns = 3, className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('py-16 px-4 md:px-8 max-w-7xl mx-auto', className)} {...props}>
        <div className={cn(scrollRevealCardsColumns({ columns }))}>
          {children}
          {items?.map((item, index) => (
            <ScrollRevealCardsItem
              key={item.id}
              transition={{ delay: index * 0.1 }}
            >
              {item.icon ? <ScrollRevealCardsIcon>{item.icon}</ScrollRevealCardsIcon> : null}
              {item.title ? <ScrollRevealCardsTitle>{item.title}</ScrollRevealCardsTitle> : null}
              {item.description ? <ScrollRevealCardsDescription>{item.description}</ScrollRevealCardsDescription> : null}
            </ScrollRevealCardsItem>
          ))}
        </div>
      </div>
    );
  }
);
ScrollRevealCardsRoot.displayName = 'ScrollRevealCards';

const ScrollRevealCards = Object.assign(ScrollRevealCardsRoot, {
  Item: ScrollRevealCardsItem,
  Icon: ScrollRevealCardsIcon,
  Title: ScrollRevealCardsTitle,
  Description: ScrollRevealCardsDescription,
});

export {
  ScrollRevealCards,
  ScrollRevealCardsRoot,
  ScrollRevealCardsItem,
  ScrollRevealCardsIcon,
  ScrollRevealCardsTitle,
  ScrollRevealCardsDescription,
  scrollRevealCardsColumns,
};
