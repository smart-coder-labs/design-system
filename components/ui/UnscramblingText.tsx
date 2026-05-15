'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { useInView } from 'framer-motion';
import { cn } from '../../lib/utils';

const unscramblingTextVariants = cva('font-mono font-medium tracking-tight', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-xl',
    },
    tone: {
      default: 'text-text-primary',
      accent: 'text-accent-blue',
      muted: 'text-text-secondary',
    },
  },
  defaultVariants: {
    size: 'md',
    tone: 'default',
  },
});

interface UnscramblingTextContextValue {
  output: string;
}

const UnscramblingTextContext = React.createContext<UnscramblingTextContextValue | null>(null);

function useUnscramblingTextContext(name: string) {
  const context = React.useContext(UnscramblingTextContext);
  if (!context) throw new Error(`<${name}> must be used within <UnscramblingText />`);
  return context;
}

export interface UnscramblingTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof unscramblingTextVariants> {
  text: string;
  charset?: string;
  intervalMs?: number;
  revealStep?: number;
}

const UnscramblingTextOutput = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => {
    const { output } = useUnscramblingTextContext('UnscramblingTextOutput');
    return (
      <span ref={ref} className={cn(className)} {...props}>
        {output}
      </span>
    );
  }
);
UnscramblingTextOutput.displayName = 'UnscramblingTextOutput';

const UnscramblingTextRoot = React.forwardRef<HTMLSpanElement, UnscramblingTextProps>(
  ({ text, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*', intervalMs = 30, revealStep = 1 / 3, size, tone, className, children, ...props }, ref) => {
    const localRef = React.useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(localRef, { once: true, margin: '-10%' });
    const [displayText, setDisplayText] = React.useState(text.split('').map(() => '').join(''));

    React.useEffect(() => {
      setDisplayText(text.split('').map(() => '').join(''));
    }, [text]);

    React.useEffect(() => {
      if (!isInView) return;

      let iteration = 0;
      const interval = setInterval(() => {
        const next = text
          .split('')
          .map((character, index) => {
            if (index < iteration) return character;
            return charset[Math.floor(Math.random() * charset.length)] ?? character;
          })
          .join('');

        setDisplayText(next);

        if (iteration >= text.length) clearInterval(interval);
        iteration += revealStep;
      }, intervalMs);

      return () => clearInterval(interval);
    }, [charset, intervalMs, isInView, revealStep, text]);

    return (
      <UnscramblingTextContext.Provider value={{ output: displayText }}>
        <span
          ref={(node) => {
            localRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          className={cn(unscramblingTextVariants({ size, tone }), className)}
          {...props}
        >
          {children ?? <UnscramblingTextOutput />}
        </span>
      </UnscramblingTextContext.Provider>
    );
  }
);
UnscramblingTextRoot.displayName = 'UnscramblingText';

const UnscramblingText = Object.assign(UnscramblingTextRoot, {
  Output: UnscramblingTextOutput,
});

export { UnscramblingText, UnscramblingTextRoot, UnscramblingTextOutput, unscramblingTextVariants };
