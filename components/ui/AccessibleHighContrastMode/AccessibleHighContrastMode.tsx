'use client';

import * as React from 'react';
import { cn } from '../../../lib/utils';

import { highContrastVariants } from './AccessibleHighContrastMode.styles';
import type { 
    AccessibleHighContrastModeProps,
    HighContrastControlsProps,
    HighContrastPreviewProps,
    AccessibleHighContrastContextValue
} from './AccessibleHighContrastMode.types';

/* ========================================
   CONTEXT
   ======================================== */

const AccessibleHighContrastContext = React.createContext<AccessibleHighContrastContextValue | null>(null);

function useHighContrastContext(name: string) {
  const ctx = React.useContext(AccessibleHighContrastContext);
  if (!ctx) throw new Error(`<${name}> must be used within <AccessibleHighContrastMode>`);
  return ctx;
}

/* ========================================
   ROOT COMPONENT
   ======================================== */

const AccessibleHighContrastMode = React.forwardRef<
  HTMLDivElement,
  AccessibleHighContrastModeProps
>(
  (
    {
      className,
      highContrastLabel,
      largeTextLabel,
      dyslexicFontLabel,
      accessibilityBadgeLabel,
      children,
      mode,
      ...props
    },
    ref
  ) => {
    const [highContrast, setHighContrast] = React.useState(false);
    const [largeText, setLargeText] = React.useState(false);
    const [dyslexicFont, setDyslexicFont] = React.useState(false);

    const contextValue: AccessibleHighContrastContextValue = {
      highContrast,
      largeText,
      dyslexicFont,
      setHighContrast,
      setLargeText,
      setDyslexicFont,
    };

    return (
      <AccessibleHighContrastContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn('relative transition-all duration-300 rounded-2xl p-6 w-full max-w-2xl mx-auto', highContrastVariants({ mode: highContrast ? 'high' : 'default' }), className)}
          {...props}
        >
          {children}
        </div>
      </AccessibleHighContrastContext.Provider>
    );
  }
);

AccessibleHighContrastMode.displayName = 'AccessibleHighContrastMode';

/* ========================================
   SUBCOMPONENTS
   ======================================== */

const HighContrastControls = React.forwardRef<HTMLDivElement, HighContrastControlsProps>(
  (
    {
      className,
      highContrastLabel,
      largeTextLabel,
      dyslexicFontLabel,
      ...props
    },
    ref
  ) => {
    const { highContrast, largeText, dyslexicFont, setHighContrast, setLargeText, setDyslexicFont } =
      useHighContrastContext('HighContrastControls');

    const buttonBaseClass = 'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors';
    const buttonActiveClass = 'bg-black text-yellow-400 shadow-md ring-2 ring-yellow-400';
    const buttonInactiveClass = 'bg-surface-primary text-text-primary shadow-sm';

    return (
      <div
        ref={ref}
        className={cn('bg-bg-secondary p-2 rounded-xl flex flex-wrap gap-2 items-center justify-center', className)}
        {...props}
      >
        <button
          type="button"
          onClick={() => setHighContrast(!highContrast)}
          className={cn(buttonBaseClass, highContrast ? buttonActiveClass : buttonInactiveClass)}
        >
          <span className="w-4 h-4" aria-hidden="true" />
          {highContrastLabel}
        </button>
        
        <button
          type="button"
          onClick={() => setLargeText(!largeText)}
          className={cn(buttonBaseClass, largeText ? 'bg-blue-600 text-white shadow-md' : buttonInactiveClass)}
        >
          <span className="w-4 h-4" aria-hidden="true" />
          {largeTextLabel}
        </button>

        <button
          type="button"
          onClick={() => setDyslexicFont(!dyslexicFont)}
          className={cn(buttonBaseClass, dyslexicFont ? 'bg-green-600 text-white shadow-md' : buttonInactiveClass)}
        >
          <span className="w-4 h-4" aria-hidden="true" />
          {dyslexicFontLabel}
        </button>
      </div>
    );
  }
);

HighContrastControls.displayName = 'HighContrastControls';

const HighContrastPreview = React.forwardRef<HTMLDivElement, HighContrastPreviewProps>(
  ({ className, children, ...props }, ref) => {
    const { highContrast, largeText, dyslexicFont } = useHighContrastContext('HighContrastPreview');

    const textClass = cn(
      highContrast ? 'text-yellow-400 font-extrabold tracking-wide' : 'text-gray-800 dark:text-gray-200 font-normal tracking-normal',
      largeText ? 'text-xl' : 'text-sm',
      dyslexicFont ? 'font-serif tracking-widest leading-loose' : 'font-sans leading-normal'
    );

    if (children) {
      return (
        <div ref={ref} className={cn(textClass, className)} {...props}>
          {children}
        </div>
      );
    }

    return (
      <div ref={ref} className={cn('space-y-6', className)} {...props}>
        {/* Slot para contenido custom - no hay datos hardcodeados */}
        {children}
      </div>
    );
  }
);

HighContrastPreview.displayName = 'HighContrastPreview';

/* ========================================
   EXPORTS
   ======================================== */

export { AccessibleHighContrastMode, HighContrastControls, HighContrastPreview };