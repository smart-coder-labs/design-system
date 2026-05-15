'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const immersiveHeroVariants = cva('relative w-full overflow-hidden flex items-center justify-center', {
  variants: {
    size: {
      sm: 'min-h-[60vh]',
      md: 'min-h-[80vh]',
      full: 'h-screen',
    },
  },
  defaultVariants: {
    size: 'full',
  },
});

interface ImmersiveHeroContextValue {
  backgroundImage?: string;
  y: ReturnType<typeof useTransform<number, number>>;
}

const ImmersiveHeroContext = React.createContext<ImmersiveHeroContextValue | null>(null);

function useImmersiveHeroContext(name: string) {
  const context = React.useContext(ImmersiveHeroContext);
  if (!context) throw new Error(`<${name}> must be used within <ImmersiveHero />`);
  return context;
}

export interface ImmersiveHeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof immersiveHeroVariants> {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const ImmersiveHeroBackground = React.forwardRef<
  HTMLDivElement,
  Omit<React.ComponentPropsWithoutRef<typeof motion.div>, 'children'>
>(({ className, ...props }, ref) => {
    const { backgroundImage, y } = useImmersiveHeroContext('ImmersiveHeroBackground');

    return (
      <motion.div
        ref={ref}
        className={cn('absolute inset-0 z-0', className)}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ y }}
        {...props}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
        />
      </motion.div>
    );
  }
);
ImmersiveHeroBackground.displayName = 'ImmersiveHeroBackground';

const ImmersiveHeroOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('absolute inset-0 bg-background-primary/40', className)} {...props} />
  )
);
ImmersiveHeroOverlay.displayName = 'ImmersiveHeroOverlay';

const ImmersiveHeroContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('relative z-10 flex flex-col items-center text-center text-text-primary px-6', className)}
      {...props}
    />
  )
);
ImmersiveHeroContent.displayName = 'ImmersiveHeroContent';

const ImmersiveHeroTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h1 ref={ref} className={cn('text-5xl md:text-7xl font-bold tracking-tight mb-4', className)} {...props}>
      {children}
    </h1>
  )
);
ImmersiveHeroTitle.displayName = 'ImmersiveHeroTitle';

const ImmersiveHeroSubtitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn('text-lg md:text-2xl text-text-secondary max-w-2xl', className)} {...props}>
      {children}
    </p>
  )
);
ImmersiveHeroSubtitle.displayName = 'ImmersiveHeroSubtitle';

const ImmersiveHeroRoot = React.forwardRef<HTMLDivElement, ImmersiveHeroProps>(
  ({ title, subtitle, backgroundImage, size, className, children, ...props }, ref) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 200]);

    const fallbackChildren =
      children ??
      (title || subtitle ? (
        <>
          <ImmersiveHeroBackground />
          <ImmersiveHeroOverlay />
          <ImmersiveHeroContent>
            {title ? <ImmersiveHeroTitle>{title}</ImmersiveHeroTitle> : null}
            {subtitle ? <ImmersiveHeroSubtitle>{subtitle}</ImmersiveHeroSubtitle> : null}
          </ImmersiveHeroContent>
        </>
      ) : null);

    return (
      <ImmersiveHeroContext.Provider value={{ backgroundImage, y }}>
        <div ref={ref} className={cn(immersiveHeroVariants({ size }), className)} {...props}>
          {fallbackChildren}
        </div>
      </ImmersiveHeroContext.Provider>
    );
  }
);
ImmersiveHeroRoot.displayName = 'ImmersiveHero';

const ImmersiveHero = Object.assign(ImmersiveHeroRoot, {
  Background: ImmersiveHeroBackground,
  Overlay: ImmersiveHeroOverlay,
  Content: ImmersiveHeroContent,
  Title: ImmersiveHeroTitle,
  Subtitle: ImmersiveHeroSubtitle,
});

export {
  ImmersiveHero,
  ImmersiveHeroRoot,
  ImmersiveHeroBackground,
  ImmersiveHeroOverlay,
  ImmersiveHeroContent,
  ImmersiveHeroTitle,
  ImmersiveHeroSubtitle,
  immersiveHeroVariants,
};
