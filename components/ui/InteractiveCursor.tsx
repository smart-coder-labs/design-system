'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const cursorLayerVariants = cva('fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-normal', {
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
    },
    tone: {
      default: 'bg-surface-primary',
      inverse: 'bg-background-primary',
      accent: 'bg-accent-blue/40',
    },
  },
  defaultVariants: {
    size: 'md',
    tone: 'default',
  },
});

export interface InteractiveCursorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cursorLayerVariants> {
  targetSelector?: string;
  disabled?: boolean;
}

interface InteractiveCursorContextValue {
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
  isHovering: boolean;
  size: NonNullable<VariantProps<typeof cursorLayerVariants>['size']>;
  tone: NonNullable<VariantProps<typeof cursorLayerVariants>['tone']>;
}

const InteractiveCursorContext = React.createContext<InteractiveCursorContextValue | null>(null);

function useInteractiveCursorContext(name: string) {
  const context = React.useContext(InteractiveCursorContext);
  if (!context) throw new Error(`<${name}> must be used within <InteractiveCursor />`);
  return context;
}

const sizeOffset = { sm: 8, md: 16, lg: 24 } as const;

const InteractiveCursorLayer = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof motion.div>, 'children'>
>(({ className, ...props }, ref) => {
    const { x, y, isHovering, size, tone } = useInteractiveCursorContext('InteractiveCursorLayer');

    return (
      <motion.div
        ref={ref}
        aria-hidden="true"
        className={cn(cursorLayerVariants({ size, tone }), className)}
        style={{ x, y, scale: isHovering ? 2 : 1 }}
        transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
        {...props}
      />
    );
  }
);
InteractiveCursorLayer.displayName = 'InteractiveCursorLayer';

const InteractiveCursorRoot = React.forwardRef<HTMLDivElement, InteractiveCursorProps>(
  ({ className, children, targetSelector = '.interactive', disabled = false, size = 'md', tone = 'default', ...props }, ref) => {
    const sizeValue = size ?? 'md';
    const toneValue = tone ?? 'default';
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const x = useSpring(cursorX, { damping: 25, stiffness: 700 });
    const y = useSpring(cursorY, { damping: 25, stiffness: 700 });
    const [isHovering, setIsHovering] = React.useState(false);

    React.useEffect(() => {
      if (disabled) return;

      const offset = sizeOffset[sizeValue];

      const moveCursor = (event: MouseEvent) => {
        cursorX.set(event.clientX - offset);
        cursorY.set(event.clientY - offset);
      };

      const handleMouseOver = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        setIsHovering(Boolean(target.closest(targetSelector)));
      };

      window.addEventListener('mousemove', moveCursor);
      window.addEventListener('mouseover', handleMouseOver);

      return () => {
        window.removeEventListener('mousemove', moveCursor);
        window.removeEventListener('mouseover', handleMouseOver);
      };
    }, [cursorX, cursorY, disabled, sizeValue, targetSelector]);

    return (
      <InteractiveCursorContext.Provider value={{ x, y, isHovering, size: sizeValue, tone: toneValue }}>
        <div ref={ref} className={cn('relative', className)} {...props}>
          {children}
          {!disabled ? <InteractiveCursorLayer /> : null}
        </div>
      </InteractiveCursorContext.Provider>
    );
  }
);
InteractiveCursorRoot.displayName = 'InteractiveCursor';

const InteractiveCursor = Object.assign(InteractiveCursorRoot, {
  Layer: InteractiveCursorLayer,
});

export { InteractiveCursor, InteractiveCursorRoot, InteractiveCursorLayer, cursorLayerVariants };
