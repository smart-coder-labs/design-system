"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";
function Skeleton({ className, ...props }) {
    return (_jsx("div", { className: cn("relative overflow-hidden rounded-md bg-surface-secondary", className), ...props, children: _jsx(motion.div, { className: "absolute inset-0 bg-gradient-to-r from-transparent via-surface-primary/50 to-transparent", initial: { translateX: "-100%" }, animate: { translateX: "100%" }, transition: {
                repeat: Infinity,
                duration: 1.5,
                ease: "linear",
            } }) }));
}
export { Skeleton };
//# sourceMappingURL=Skeleton.js.map