"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "../lib/utils";
const RangeSlider = React.forwardRef(({ className, ...props }, ref) => (_jsxs(SliderPrimitive.Root, { ref: ref, className: cn("relative flex w-full touch-none select-none items-center", className), ...props, children: [_jsx(SliderPrimitive.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-surface-secondary", children: _jsx(SliderPrimitive.Range, { className: "absolute h-full bg-accent-blue" }) }), _jsx(SliderPrimitive.Thumb, { className: "block h-6 w-6 rounded-full border border-border-primary/10 bg-white shadow-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 transition-transform duration-200" }), _jsx(SliderPrimitive.Thumb, { className: "block h-6 w-6 rounded-full border border-border-primary/10 bg-white shadow-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 transition-transform duration-200" })] })));
RangeSlider.displayName = SliderPrimitive.Root.displayName;
export { RangeSlider };
//# sourceMappingURL=RangeSlider.js.map