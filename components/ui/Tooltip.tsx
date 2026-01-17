import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ========================================
   PROVIDER
   ======================================== */

// We keep this for API compatibility, but it might not handle delays universally.
// For now, it just renders children.
export const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>{children}</>;
};

/* ========================================
   TYPES
   ======================================== */

export interface TooltipProps {
    children: React.ReactNode;
    content: React.ReactNode;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
    delayDuration?: number;
    sideOffset?: number;
}

/* ========================================
   COMPONENT
   ======================================== */

export const Tooltip: React.FC<TooltipProps> = ({
    children,
    content,
    side = 'top',
    align = 'center', // keeping for type compatibility, though absolute implementation handles center mostly
    delayDuration = 200,
    sideOffset = 8,
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
        }, delayDuration);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsVisible(false);
    };

    const handleFocus = () => {
        setIsVisible(true);
    };

    const handleBlur = () => {
        setIsVisible(false);
    };

    // Calculate position classes based on side
    const getPositionStyles = () => {
        switch (side) {
            case 'top':
                return {
                    initial: { opacity: 0, y: 5 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 5 },
                    className: `bottom-full left-1/2 -translate-x-1/2 mb-[${sideOffset}px] mb-2`
                };
            case 'bottom':
                return {
                    initial: { opacity: 0, y: -5 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -5 },
                    className: `top-full left-1/2 -translate-x-1/2 mt-[${sideOffset}px] mt-2`
                };
            case 'left':
                return {
                    initial: { opacity: 0, x: 5 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: 5 },
                    className: `right-full top-1/2 -translate-y-1/2 mr-[${sideOffset}px] mr-2`
                };
            case 'right':
                return {
                    initial: { opacity: 0, x: -5 },
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -5 },
                    className: `left-full top-1/2 -translate-y-1/2 ml-[${sideOffset}px] ml-2`
                };
            default:
                return {
                    initial: { opacity: 0, y: 5 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: 5 },
                    className: `bottom-full left-1/2 -translate-x-1/2 mb-2`
                };
        }
    };

    const pos = getPositionStyles();

    return (
        <div 
            className="relative inline-flex w-fit cursor-default" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
            tabIndex={0} // Ensure it's focusable
        >
            {children}
            
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className={`
                            absolute z-tooltip
                            px-3 py-2
                            bg-surface-primary
                            border border-border-primary
                            text-text-primary
                            text-sm
                            rounded-lg
                            shadow-md
                            whitespace-nowrap
                            pointer-events-none
                            ${pos.className}
                        `}
                        initial={pos.initial}
                        animate={pos.animate}
                        exit={pos.exit}
                        transition={{
                            duration: 0.16,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        {content}
                        {/* 
                           Simplification: Arrow not implemented in simple relative pos version 
                           without complex calculation or absolute positioning hacks.
                           Omitting for now to keep it clean.
                        */}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

/* ========================================
   USAGE EXAMPLES
   ======================================== */

/*
// Wrap your app with TooltipProvider
<TooltipProvider>
  <App />
</TooltipProvider>

// Basic tooltip
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>

// Tooltip with custom side
<Tooltip content="Bottom tooltip" side="bottom">
  <Button>Hover me</Button>
</Tooltip>

// Tooltip with longer delay
<Tooltip content="Delayed tooltip" delayDuration={500}>
  <Button>Hover me</Button>
</Tooltip>

// Tooltip with rich content
<Tooltip
  content={
    <div>
      <p className="font-semibold">Rich Tooltip</p>
      <p className="text-text-secondary">With multiple lines</p>
    </div>
  }
>
  <Button>Hover me</Button>
</Tooltip>
*/
