'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const parallaxBannerVariants = cva('relative w-full overflow-hidden flex items-center justify-center', {
  variants: {
    size: {
      sm: 'min-h-[200px]',
      md: 'min-h-[320px]',
      lg: 'min-h-[480px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

interface ParallaxBannerContextValue {
  imageSrc?: string;
  y: ReturnType<typeof useTransform<string, string>>;
  overlayOpacity: number;
}

const ParallaxBannerContext = React.createContext<ParallaxBannerContextValue | null>(null);

function useParallaxBannerContext(name: string) {
  const context = React.useContext(ParallaxBannerContext);
  if (!context) throw new Error(`<${name}> must be used within <ParallaxBanner />`);
  return context;
}

export interface ParallaxBannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof parallaxBannerVariants> {
  imageSrc?: string;
  image?: string;
  imageUrl?: string;
  speed?: number;
  overlay?: boolean;
  overlayOpacity?: number;
  height?: string | number;
}

const ParallaxBannerMedia = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof motion.div>, 'children'>
>(({ className, ...props }, ref) => {
    const { imageSrc, y } = useParallaxBannerContext('ParallaxBannerMedia');

    return (
      <motion.div
        ref={ref}
        className={cn('absolute inset-0 w-full h-[140%] -top-[20%] bg-cover bg-center z-0 will-change-transform', className)}
        style={{ y, backgroundImage: imageSrc ? `url(${imageSrc})` : undefined }}
        {...props}
      />
    );
  }
);
ParallaxBannerMedia.displayName = 'ParallaxBannerMedia';

const ParallaxBannerOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...props }, ref) => {
    const { overlayOpacity } = useParallaxBannerContext('ParallaxBannerOverlay');

    return (
      <div
        ref={ref}
        className={cn('absolute inset-0 z-10 bg-background-primary', className)}
        style={{ ...style, opacity: overlayOpacity }}
        {...props}
      />
    );
  }
);
ParallaxBannerOverlay.displayName = 'ParallaxBannerOverlay';

const ParallaxBannerContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('relative z-20 container mx-auto px-4 text-center', className)} {...props} />
  )
);
ParallaxBannerContent.displayName = 'ParallaxBannerContent';

const ParallaxBannerRoot = React.forwardRef<HTMLDivElement, ParallaxBannerProps>(
  (
    {
      imageSrc,
      image,
      imageUrl,
      speed = 0.5,
      overlay = true,
      overlayOpacity = 0.3,
      height,
      size,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
    const y = useTransform(scrollYProgress, [0, 1], [`-${20 * speed}%`, `${20 * speed}%`]);

    const resolvedImage = imageSrc ?? image ?? imageUrl;
    const styleWithHeight =
      typeof height === 'number' ? { ...style, minHeight: `${height}px` } : typeof height === 'string' ? style : style;
    const sizeOrHeightClass = typeof height === 'string' ? height : parallaxBannerVariants({ size });

    return (
      <ParallaxBannerContext.Provider value={{ imageSrc: resolvedImage, y, overlayOpacity }}>
        <div
          ref={(node) => {
            containerRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          className={cn(parallaxBannerVariants({ size }), sizeOrHeightClass, className)}
          style={styleWithHeight}
          {...props}
        >
          <ParallaxBannerMedia />
          {overlay ? <ParallaxBannerOverlay /> : null}
          <ParallaxBannerContent>{children}</ParallaxBannerContent>
        </div>
      </ParallaxBannerContext.Provider>
    );
  }
);
ParallaxBannerRoot.displayName = 'ParallaxBanner';

const ParallaxBanner = Object.assign(ParallaxBannerRoot, {
  Media: ParallaxBannerMedia,
  Overlay: ParallaxBannerOverlay,
  Content: ParallaxBannerContent,
});

export {
  ParallaxBanner,
  ParallaxBannerRoot,
  ParallaxBannerMedia,
  ParallaxBannerOverlay,
  ParallaxBannerContent,
  parallaxBannerVariants,
};
