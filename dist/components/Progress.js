"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
const Progress = React.forwardRef(({ className, value, indicatorClassName, ...props }, ref) => (_jsx(ProgressPrimitive.Root, { ref: ref, className: cn("relative h-2 w-full overflow-hidden rounded-full bg-surface-secondary", className), ...props, children: _jsx(ProgressPrimitive.Indicator, { asChild: true, children: _jsx(motion.div, { className: cn("h-full w-full flex-1 bg-accent-blue transition-all", indicatorClassName), initial: { translateX: "-100%" }, animate: { translateX: `-${100 - (value || 0)}%` }, transition: { type: "spring", stiffness: 100, damping: 20 } }) }) })));
Progress.displayName = ProgressPrimitive.Root.displayName;
export { Progress };
//# sourceMappingURL=Progress.js.map