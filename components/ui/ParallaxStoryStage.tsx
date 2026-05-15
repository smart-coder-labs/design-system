'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const parallaxStoryStageVariants = cva('relative', {
  variants: {
    size: {
      md: 'h-[320vh]',
      lg: 'h-[500vh]',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

interface ParallaxStoryStageContextValue {
  x: ReturnType<typeof useTransform<string, string>>;
}

const ParallaxStoryStageContext = React.createContext<ParallaxStoryStageContextValue | null>(null);

function useParallaxStoryStageContext(name: string) {
  const context = React.useContext(ParallaxStoryStageContext);
  if (!context) throw new Error(`<${name}> must be used within <ParallaxStoryStage />`);
  return context;
}

export interface ParallaxStoryStageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof parallaxStoryStageVariants> {
  xRange?: [string, string];
}

const ParallaxStoryStageTrack = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof motion.div>>(
  ({ className, ...props }, ref) => {
    const { x } = useParallaxStoryStageContext('ParallaxStoryStageTrack');

    return <motion.div ref={ref} style={{ x }} className={cn('flex gap-12 px-[10vw] items-center w-[200vw]', className)} {...props} />;
  }
);
ParallaxStoryStageTrack.displayName = 'ParallaxStoryStageTrack';

const ParallaxStoryStagePanel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('w-[50vw] shrink-0', className)} {...props} />
);
ParallaxStoryStagePanel.displayName = 'ParallaxStoryStagePanel';

const ParallaxStoryStageRoot = React.forwardRef<HTMLDivElement, ParallaxStoryStageProps>(
  ({ size, className, children, xRange = ['0%', '-60%'], ...props }, ref) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
    const x = useTransform(scrollYProgress, [0, 1], xRange);

    return (
      <ParallaxStoryStageContext.Provider value={{ x }}>
        <div
          ref={(node) => {
            containerRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          className={cn(parallaxStoryStageVariants({ size }), className)}
          {...props}
        >
          <div className="sticky top-0 h-screen overflow-hidden flex items-center border-y border-border-primary">
            <ParallaxStoryStageTrack>{children}</ParallaxStoryStageTrack>
          </div>
        </div>
      </ParallaxStoryStageContext.Provider>
    );
  }
);
ParallaxStoryStageRoot.displayName = 'ParallaxStoryStage';

const ParallaxStoryStage = Object.assign(ParallaxStoryStageRoot, {
  Track: ParallaxStoryStageTrack,
  Panel: ParallaxStoryStagePanel,
});

export {
  ParallaxStoryStage,
  ParallaxStoryStageRoot,
  ParallaxStoryStageTrack,
  ParallaxStoryStagePanel,
  parallaxStoryStageVariants,
};
