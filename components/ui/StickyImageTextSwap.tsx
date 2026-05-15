'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const stickyImageTextSwapVariants = cva('relative w-full max-w-6xl mx-auto px-4', {
  variants: {
    size: {
      sm: 'py-16',
      md: 'py-24',
      lg: 'py-32',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface StickySectionItem {
  id: string | number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: string;
}

interface StickyImageTextSwapContextValue {
  items: StickySectionItem[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const StickyImageTextSwapContext = React.createContext<StickyImageTextSwapContextValue | null>(null);

function useStickyImageTextSwapContext(name: string) {
  const context = React.useContext(StickyImageTextSwapContext);
  if (!context) throw new Error(`<${name}> must be used within <StickyImageTextSwap />`);
  return context;
}

export interface StickyImageTextSwapProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stickyImageTextSwapVariants> {
  items?: StickySectionItem[];
}

const StickyImageTextSwapMedia = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { items, activeIndex } = useStickyImageTextSwapContext('StickyImageTextSwapMedia');

    return (
      <div
        ref={ref}
        className={cn(
          'w-full md:w-1/2 sticky top-32 h-[60vh] rounded-3xl overflow-hidden bg-surface-secondary border border-border-primary shadow-2xl',
          className
        )}
        {...props}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: items[activeIndex]?.image ? `url(${items[activeIndex]?.image})` : undefined }}
          />
        </AnimatePresence>
      </div>
    );
  }
);
StickyImageTextSwapMedia.displayName = 'StickyImageTextSwapMedia';

const StickyImageTextSwapItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof motion.div>>(
  ({ className, ...props }, ref) => <motion.div ref={ref} className={cn('flex flex-col justify-center min-h-[40vh]', className)} {...props} />
);
StickyImageTextSwapItem.displayName = 'StickyImageTextSwapItem';

const StickyImageTextSwapTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => <h2 ref={ref} className={cn('text-4xl md:text-5xl font-bold mb-4 text-text-primary', className)} {...props} />
);
StickyImageTextSwapTitle.displayName = 'StickyImageTextSwapTitle';

const StickyImageTextSwapDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn('text-xl text-text-secondary leading-relaxed', className)} {...props} />
);
StickyImageTextSwapDescription.displayName = 'StickyImageTextSwapDescription';

const StickyImageTextSwapRoot = React.forwardRef<HTMLDivElement, StickyImageTextSwapProps>(
  ({ items = [], size, className, children, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
      <StickyImageTextSwapContext.Provider value={{ items, activeIndex, setActiveIndex }}>
        <div ref={ref} className={cn(stickyImageTextSwapVariants({ size }), className)} {...props}>
          <div className="flex flex-col md:flex-row items-start gap-16">
            <StickyImageTextSwapMedia />
            <div className="w-full md:w-1/2 py-[40vh] flex flex-col gap-[70vh]">
              {children}
              {items.map((item, index) => (
                <StickyImageTextSwapItem
                  key={item.id}
                  initial={{ opacity: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ amount: 0.6, margin: '-10% 0px -10% 0px' }}
                  onViewportEnter={() => setActiveIndex(index)}
                  transition={{ duration: 0.4 }}
                >
                  {item.title ? <StickyImageTextSwapTitle>{item.title}</StickyImageTextSwapTitle> : null}
                  {item.description ? <StickyImageTextSwapDescription>{item.description}</StickyImageTextSwapDescription> : null}
                </StickyImageTextSwapItem>
              ))}
            </div>
          </div>
        </div>
      </StickyImageTextSwapContext.Provider>
    );
  }
);
StickyImageTextSwapRoot.displayName = 'StickyImageTextSwap';

const StickyImageTextSwap = Object.assign(StickyImageTextSwapRoot, {
  Media: StickyImageTextSwapMedia,
  Item: StickyImageTextSwapItem,
  Title: StickyImageTextSwapTitle,
  Description: StickyImageTextSwapDescription,
});

export {
  StickyImageTextSwap,
  StickyImageTextSwapRoot,
  StickyImageTextSwapMedia,
  StickyImageTextSwapItem,
  StickyImageTextSwapTitle,
  StickyImageTextSwapDescription,
  stickyImageTextSwapVariants,
};
