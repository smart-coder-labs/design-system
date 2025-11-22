"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface ProgressProps
    extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    indicatorClassName?: string;
}

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    ProgressProps
>(({ className, value, indicatorClassName, ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            "relative h-2 w-full overflow-hidden rounded-full bg-surface-secondary",
            className
        )}
        {...props}
    >
        <ProgressPrimitive.Indicator asChild>
            <motion.div
                className={cn("h-full w-full flex-1 bg-accent-blue transition-all", indicatorClassName)}
                initial={{ translateX: "-100%" }}
                animate={{ translateX: `-${100 - (value || 0)}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
        </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
