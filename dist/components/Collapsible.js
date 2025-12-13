"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { motion } from "framer-motion";
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = React.forwardRef(({ className, children, ...props }, ref) => (_jsx(CollapsiblePrimitive.CollapsibleContent, { ref: ref, className: className, ...props, children: _jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.2, ease: "easeInOut" }, style: { overflow: "hidden" }, children: children }) })));
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName;
export { Collapsible, CollapsibleTrigger, CollapsibleContent };
//# sourceMappingURL=Collapsible.js.map