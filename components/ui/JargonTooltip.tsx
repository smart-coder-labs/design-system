import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, BookOpen } from 'lucide-react';

export interface JargonTooltipProps {
  /** The complex term to explain */
  term: string;
  /** The simple explanation */
  definition: string;
  /** An example to clarify the definition */
  example?: string;
  /** Element that triggers the tooltip. If omitted, it will render the term with a dashed underline. */
  children?: React.ReactNode;
}

export const JargonTooltip: React.FC<JargonTooltipProps> = ({
  term,
  definition,
  example,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Esc key
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        tooltipRef.current && 
        !tooltipRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsVisible(false);
      }
    };
    
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsVisible(false);
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isVisible]);

  return (
    <span className="relative inline-block">
      <span
        ref={triggerRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        className="cursor-help focus:outline-none"
        tabIndex={0}
        role="button"
        aria-expanded={isVisible}
      >
        {children || (
          <span className="border-b border-dashed border-blue-400 text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-1">
            {term}
            <Info size={12} className="text-blue-500/70" />
          </span>
        )}
      </span>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 w-64 bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none"
            style={{
              filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
            }}
          >
            <div className="bg-surface-primary rounded-xl border border-border-primary p-4 text-left pointer-events-auto shadow-xl">
              <div className="flex items-center gap-2 mb-2 text-text-primary">
                <BookOpen size={16} className="text-blue-500" />
                <h5 className="font-semibold text-sm capitalize">{term}</h5>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-3">
                {definition}
              </p>
              {example && (
                <div className="bg-background-secondary rounded-lg p-3 border border-border-primary">
                  <p className="text-xs text-text-tertiary font-medium mb-1 uppercase tracking-wider">
                    Ejemplo
                  </p>
                  <p className="text-sm text-text-primary">
                    "{example}"
                  </p>
                </div>
              )}
              
              {/* Triangle pointer */}
              <div 
                className="absolute w-3 h-3 bg-surface-primary border-b border-r border-border-primary left-1/2 -translate-x-1/2 -bottom-1.5 rotate-45"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
};
