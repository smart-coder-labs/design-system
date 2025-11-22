import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { motion, AnimatePresence } from 'framer-motion';

/* ========================================
   PROVIDER
   ======================================== */

export const TooltipProvider = TooltipPrimitive.Provider;

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

const TooltipContent = motion(TooltipPrimitive.Content);

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  side = 'top',
  align = 'center',
  delayDuration = 200,
  sideOffset = 8,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <TooltipPrimitive.Root
      open={open}
      onOpenChange={setOpen}
      delayDuration={delayDuration}
    >
      <TooltipPrimitive.Trigger asChild>
        <span className="inline-flex w-fit cursor-default" tabIndex={0}>
          {children}
        </span>
      </TooltipPrimitive.Trigger>

      <AnimatePresence>
        {open && (
          <TooltipPrimitive.Portal forceMount>
            <TooltipContent
              side={side}
              align={align}
              sideOffset={sideOffset}
              className="
                  px-3 py-2
                  bg-surface-primary
                  border border-border-primary
                  text-text-primary
                  text-sm
                  rounded-lg
                  shadow-md
                  max-w-xs
                  z-tooltip
                  origin-[var(--radix-tooltip-content-transform-origin)]
                "
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{
                duration: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {content}
              <TooltipPrimitive.Arrow
                className="fill-border-primary"
                width={12}
                height={6}
              />
            </TooltipContent>
          </TooltipPrimitive.Portal>
        )}
      </AnimatePresence>
    </TooltipPrimitive.Root>
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
