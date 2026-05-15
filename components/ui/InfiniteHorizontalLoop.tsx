'use client';

import * as React from 'react';
import { motion, type MotionValue } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const loopVariants = cva('relative w-full overflow-hidden flex', {
  variants: {
    direction: {
      left: '',
      right: '',
    },
  },
  defaultVariants: {
    direction: 'left',
  },
});

const loopTrackVariants = cva('flex whitespace-nowrap items-center shrink-0 w-max', {
  variants: {
    gap: {
      sm: 'gap-4',
      md: 'gap-8',
      lg: 'gap-12',
    },
  },
  defaultVariants: {
    gap: 'md',
  },
});

interface InfiniteHorizontalLoopContextValue {
  direction: 'left' | 'right';
  speed: number;
  gap: 'sm' | 'md' | 'lg';
}

const InfiniteHorizontalLoopContext = React.createContext<InfiniteHorizontalLoopContextValue | null>(null);

function useInfiniteHorizontalLoopContext(name: string) {
  const context = React.useContext(InfiniteHorizontalLoopContext);
  if (!context) throw new Error(`<${name}> must be used within <InfiniteHorizontalLoop />`);
  return context;
}

export interface InfiniteHorizontalLoopProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loopVariants> {
  items?: React.ReactNode[];
  speed?: number;
  gap?: 'sm' | 'md' | 'lg';
}

const InfiniteHorizontalLoopItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('flex-shrink-0', className)} {...props} />
);
InfiniteHorizontalLoopItem.displayName = 'InfiniteHorizontalLoopItem';

const InfiniteHorizontalLoopTrack = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof motion.div>>(
  ({ className, children, ...props }, ref) => {
    const { direction, speed, gap } = useInfiniteHorizontalLoopContext('InfiniteHorizontalLoopTrack');
    const content = React.Children.toArray(children as React.ReactNode);
    const duplicated = [...content, ...content];

    return (
      <motion.div
        ref={ref}
        className={cn(loopTrackVariants({ gap }), className)}
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
        style={{ willChange: 'transform' }}
        {...props}
      >
        {duplicated.map((item, index) => (
          <InfiniteHorizontalLoopItem key={index}>{item}</InfiniteHorizontalLoopItem>
        ))}
      </motion.div>
    );
  }
);
InfiniteHorizontalLoopTrack.displayName = 'InfiniteHorizontalLoopTrack';

const InfiniteHorizontalLoopRoot = React.forwardRef<HTMLDivElement, InfiniteHorizontalLoopProps>(
  ({ items, speed = 20, direction = 'left', gap = 'md', className, children, ...props }, ref) => {
    const directionValue = direction ?? 'left';
    const gapValue = gap ?? 'md';
    const renderedItems = items?.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>) ?? null;

    return (
      <InfiniteHorizontalLoopContext.Provider value={{ direction: directionValue, speed, gap: gapValue }}>
        <div ref={ref} className={cn(loopVariants({ direction: directionValue }), className)} {...props}>
          {children ?? <InfiniteHorizontalLoopTrack>{renderedItems}</InfiniteHorizontalLoopTrack>}
        </div>
      </InfiniteHorizontalLoopContext.Provider>
    );
  }
);
InfiniteHorizontalLoopRoot.displayName = 'InfiniteHorizontalLoop';

const InfiniteHorizontalLoop = Object.assign(InfiniteHorizontalLoopRoot, {
  Track: InfiniteHorizontalLoopTrack,
  Item: InfiniteHorizontalLoopItem,
});

export {
  InfiniteHorizontalLoop,
  InfiniteHorizontalLoopRoot,
  InfiniteHorizontalLoopTrack,
  InfiniteHorizontalLoopItem,
  loopVariants,
  loopTrackVariants,
};
