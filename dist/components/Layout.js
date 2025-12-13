"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const Stack = React.forwardRef(({ className, as: Component = "div", gap = 4, style, ...props }, ref) => {
    return (_jsx(Component, { ref: ref, className: cn("flex flex-col", className), style: { gap: typeof gap === "number" ? `${gap * 0.25}rem` : gap, ...style }, ...props }));
});
Stack.displayName = "Stack";
const HStack = React.forwardRef(({ className, ...props }, ref) => {
    return (_jsx(Stack, { ref: ref, className: cn("flex-row items-center", className), ...props }));
});
HStack.displayName = "HStack";
const VStack = React.forwardRef(({ className, ...props }, ref) => {
    return _jsx(Stack, { ref: ref, className: cn("flex-col", className), ...props });
});
VStack.displayName = "VStack";
const Grid = React.forwardRef(({ className, as: Component = "div", columns = 1, gap = 4, style, ...props }, ref) => {
    return (_jsx(Component, { ref: ref, className: cn("grid", className), style: {
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gap: typeof gap === "number" ? `${gap * 0.25}rem` : gap,
            ...style,
        }, ...props }));
});
Grid.displayName = "Grid";
export { Stack, HStack, VStack, Grid };
//# sourceMappingURL=Layout.js.map